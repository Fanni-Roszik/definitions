import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Definition } from '../types';

export interface Definition {
  id: number;
  title: string;
  description: string;
};

export type DefinitionsStackParamList = {
  Definitions: undefined;
  DefinitionDetails: Definition;
};

export type DefinitionListProps = NativeStackScreenProps<DefinitionsStackParamList, 'Definitions'>;

export type DefinitionDetailsProps = NativeStackScreenProps<DefinitionsStackParamList, 'DefinitionDetails'>;

export declare interface ThemeProps {
  children: React.ReactNode;
};