import React from 'react';
import {Text, View} from 'react-native';
import {
  HistoryItemContainer,
  HistoryItemBodyContainer,
  HistoryItemThumbContainer,
} from './styles';

interface Props {
  //
}

export default function HistoryItem(props: Props) {
  return (
    <HistoryItemContainer>
      <HistoryItemThumbContainer>
        <Text>HistoryItem</Text>
      </HistoryItemThumbContainer>
      <HistoryItemBodyContainer>
        <Text>HistoryItem</Text>
      </HistoryItemBodyContainer>
    </HistoryItemContainer>
  );
}
