import React from 'react';
import { View } from 'react-native';

import Background from '~/components/Background';

// import { Container } from './styles';

export default function SelectDateTime() {
  return (
    <Background>
      <View />
    </Background>
  );
}

SelectDateTime.navigationOptions = {
  title: 'Selecione o horário',
};
