import React from 'react';
import {FilterTagButton, FilterTagTitle, styles} from './styles';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {View} from 'react-native';

interface Props {
  selected: boolean;
  isLast: boolean;
  onPress: (e: string) => void;
  title: string;
}

export default function FilterTag(props: Props) {
  return (
    <FilterTagButton
      {...props}
      selected={props.selected}
      onPress={() => props.onPress(props.title)}>
      <FilterTagTitle selected={props.selected}>{props.title}</FilterTagTitle>
      {props.selected && (
        <View style={styles.badge}>
          <MCI name={'close'} color={'#FFF'} />
        </View>
      )}
    </FilterTagButton>
  );
}
