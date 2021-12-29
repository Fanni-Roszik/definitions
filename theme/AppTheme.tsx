import React from 'react';
import { DefaultTheme, Provider } from 'react-native-paper';
import { ThemeProps } from '../types';

const theme = DefaultTheme;

export function AppTheme({ children }: ThemeProps) {
  return <Provider theme={theme}>{children}</Provider>;
}