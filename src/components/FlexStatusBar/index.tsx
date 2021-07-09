import React from 'react';

import { StatusBar } from 'react-native';

interface FlexStatusBarProps {
  theme: 'light' | 'dark';
}

export const FlexStatusBar = ({ theme }: FlexStatusBarProps) => {
  return (
    <StatusBar
      barStyle={theme === 'dark' ? 'dark-content' : 'light-content'}
      backgroundColor="transparent"
      translucent
    />
  );
};
