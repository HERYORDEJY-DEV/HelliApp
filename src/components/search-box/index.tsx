import React from 'react';
import {SearchBoxContainer, SearchBoxInput} from './styles';
import MC from 'react-native-vector-icons/MaterialIcons';
import {Pressable} from 'react-native';

interface Props {
  onChangeText: (e: string) => void;
  onSearch: () => void;
  disableSearch: boolean;
}

export default function SearchBox(props: Props) {
  return (
    <SearchBoxContainer>
      <SearchBoxInput
        placeholder={'Search here'}
        multiline={false}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSearch}
        clearButtonMode="while-editing"
        returnKeyType={'search'}
      />
      <Pressable onPress={props.onSearch} disabled={props.disableSearch}>
        <MC name={'search'} size={20} />
      </Pressable>
    </SearchBoxContainer>
  );
}
