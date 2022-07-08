import React from 'react';
import {Text, View} from 'react-native';
import {FilterTagButton, FilterTagTitle} from './styles';

interface Props {
  selected: boolean;
  isLast: boolean;
  onPress: (e: string) => void;
}

export default function FilterTag(props: Props) {
  return (
    <FilterTagButton
      {...props}
      selected={props.selected}
      onPress={() => props.onPress('')}>
      <FilterTagTitle selected={props.selected}>FilterTag</FilterTagTitle>
    </FilterTagButton>
  );
}
