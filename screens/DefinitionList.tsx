import React, { useState } from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { Searchbar, List, Divider } from 'react-native-paper';
import { definitions } from '../assets/definitions.json';
import { Definition, DefinitionListProps } from '../types';

const byTitle = ({ title: titleA }: Definition, { title: titleB }: Definition) => {
  if (titleA === titleB) return 0;
  return titleA < titleB ? -1 : 1;
};

const keyExtractor = ({ id }: Definition) => id.toString();

const renderDefinition = (
  { item, item: { title } }: ListRenderItemInfo<Definition>,
  onSelect: (definition: Definition) => void,
) => (
  <View>
    <List.Item
      title={title}
      onPress={() => onSelect(item)}
      right={() => <List.Icon icon="chevron-right" />}
    />
    <Divider />
  </View>
);

export function DefinitionList({ navigation }: DefinitionListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchByTerm = ({ title }: Definition) => {
    if (searchTerm === '') return true;
    const expression = new RegExp(`${searchTerm}*`, 'gi');
    return expression.test(title);
  };

  const navigateToDetails = (definition: Definition) => {
    navigation.navigate('DefinitionDetails', definition);
  }

  const handleSearchTermChange = (text: string) => {
    setSearchTerm(text);
  }

  return (
    <View>
      <Searchbar
        placeholder="Search for definition..."
        onChangeText={handleSearchTermChange}
        value={searchTerm}
      />
      <FlatList
        keyExtractor={keyExtractor}
        data={definitions.filter(searchByTerm).sort(byTitle)}
        renderItem={info => renderDefinition(info, navigateToDetails)}
      />
    </View>
  );
}