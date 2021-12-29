import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefinitionDetails } from '../screens/DefinitionDetails';
import { DefinitionList } from '../screens/DefinitionList';
import { DefinitionDetailsProps, DefinitionsStackParamList } from '../types';

const Stack = createNativeStackNavigator<DefinitionsStackParamList>();

export function DefinitionsStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Definitions"
          component={DefinitionList}
        />
        <Stack.Screen
          name="DefinitionDetails"
          component={DefinitionDetails}
          options={({ route }: DefinitionDetailsProps) => ({ title: route.params.title })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}