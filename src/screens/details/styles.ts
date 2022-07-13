import styled from 'styled-components';
import {ScrollView, StyleSheet, Text} from 'react-native';

export const styles = StyleSheet.create({
  itemSeperator: {
    borderBottomWidth: 1,
  },
  posterWrapper: {
    alignItems: 'center',
  },
  posterImageWrapper: {
    height: 300,
    width: 250,
    elevation: 3,
    overflow: 'hidden',
    borderRadius: 10,
  },
  posterImage: {
    height: 300,
    width: 250,
  },
  backIcon: {
    padding: 20,
    paddingLeft: 5,
  },
  descWrapper: {
    padding: 20,
    alignItems: 'center',
  },
  metaWrapper: {
    padding: 20,
    paddingTop: 0,
  },
  contentContainer: {
    paddingBottom: 20,
  },
});

export const ScreenContent = styled(ScrollView)`
  padding: 0px 0;
  height: 100%;
`;

export const MovieDetailsTitle = styled(Text).attrs(p => ({
  numberOfLines: 2,
}))`
  font-family: ${p => p.theme.fontFamily.bold};
  color: ${p => p.theme.color.infoColor};
  text-align: center;
  font-size: 20px;
`;

export const MovieDetailsPlot = styled(Text)`
  font-family: ${p => p.theme.fontFamily.medium};
  color: ${p => p.theme.color.infoColor + 90};
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
`;

export const MovieDetailsActors = styled(Text)<{bold?: boolean}>`
  font-family: ${p =>
    p.bold ? p.theme.fontFamily.bold : p.theme.fontFamily.medium};
  color: ${p => p.theme.color.text + 90};
  padding: 5px 0;
  border-bottom-width: 1px;
`;

export const MovieDetailsGenre = styled(Text).attrs(p => ({
  numberOfLines: 1,
}))`
  font-family: ${p => p.theme.fontFamily.medium};
  color: ${p => p.theme.color.text};
  text-align: center;
`;
