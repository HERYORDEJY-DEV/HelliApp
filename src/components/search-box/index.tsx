import React from 'react';
import {Text, View} from 'react-native';
import {SearchBoxContainer, SearchBoxInput} from './styles';
import MC from 'react-native-vector-icons/MaterialIcons';

interface Props {
  onChangeText: (e: string) => void;
  onSearch: () => void;
}

export default function SearchBox(props: Props) {
  return (
    <SearchBoxContainer>
      <SearchBoxInput
        placeholder={'Search here'}
        multiline={false}
        onChangeText={props.onChangeText}
      />
      <MC name={'search'} size={20} onPress={props.onSearch} />
    </SearchBoxContainer>
  );
}
