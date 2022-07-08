import styled from 'styled-components';
import {TextInput, View} from 'react-native';

export const SearchBoxContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  height: 50px;
  border: 1px solid ${p => p.theme.color.infoColor};
  border-radius: 10px;
  padding: 0 10px;
`;

export const SearchBoxInput = styled(TextInput).attrs(p => ({
  //
}))`
  flex: 1;
  height: 100%;
  font-family: ${p => p.theme.fontFamily.regular};
  color: ${p => p.theme.color.text}; ;
`;
