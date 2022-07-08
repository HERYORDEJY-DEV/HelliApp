import styled from 'styled-components';
import {StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 20,
  },
});

export const HistoryItemContainer = styled(View)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  height: 60px;
  padding: 0px;
`;

export const HistoryItemThumbContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  height: 60px;
  width: 60px;
  border: 1px solid ${p => p.theme.color.infoColor};
  border-radius: 10px;
  padding: 0 10px;
`;

export const HistoryItemBodyContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border: 1px solid ${p => p.theme.color.infoColor};
  border-radius: 10px;
  padding: 0 10px;
`;

export const HistorySectionHeader = styled(View)`
  justify-content: center;
  margin-bottom: 10px;
  height: 40px;
  background-color: #ffffff;
`;

export const HistorySectionTitle = styled(Text).attrs(p => ({
  numberOfLines: 1,
}))`
  font-family: ${p => p.theme.fontFamily.medium};
  color: #ffffff;
  background-color: ${p => p.theme.color.primaryBlue};
  flex-grow: 0;
  padding: 10px;
  border-radius: 10px;
`;
