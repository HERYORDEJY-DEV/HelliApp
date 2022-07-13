import styled from 'styled-components';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 20,
  },
  itemSeperator: {
    borderBottomWidth: 1,
  },
  movieImage: {
    flex: 1,
    height: 70,
    width: 70,
  },
  emptyWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  contentContainer: {
    paddingBottom: 40,
  },
});

export const HistoryItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  height: 70px;
  padding: 0px;
`;

export const HistoryItemThumbContainer = styled(View)`
  margin-right: 10px;
  height: 70px;
  width: 70px;
  border: 1px solid ${p => p.theme.color.infoBackground};
  border-radius: 10px;
  overflow: hidden;
`;

export const HistoryItemBodyContainer = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  height: 70px;
  border: 1px solid ${p => p.theme.color.infoBackground};
  border-radius: 10px;
  padding: 3px 10px;
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
  background-color: ${p => p.theme.color.infoColor};
  flex-grow: 0;
  padding: 10px;
  border-radius: 10px;
`;

export const MovieTitle = styled(Text).attrs(p => ({
  numberOfLines: 1,
}))<{color?: string}>`
  font-family: ${p => p.theme.fontFamily.bold};
  color: ${p => p.color ?? p.theme.color.infoColor};
`;

export const MovieActors = styled(Text).attrs(p => ({
  numberOfLines: 1,
}))`
  font-family: ${p => p.theme.fontFamily.medium};
  color: ${p => p.theme.color.text + 90};
`;

export const MovieGenre = styled(Text).attrs(p => ({
  numberOfLines: 1,
}))`
  font-family: ${p => p.theme.fontFamily.medium};
  color: ${p => p.theme.color.text};
`;
