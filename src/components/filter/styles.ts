import styled from 'styled-components';
import {Pressable, Text, TextInput, View} from 'react-native';

export const FilterContainer = styled(View)`
  margin: 10px 0;

  height: 50px;
  padding-right: 0px;
`;

export const FilterTagButton = styled(Pressable)<{
  selected: boolean;
  isLast: boolean;
}>`
  border: 1px solid
    ${p => (p.selected ? p.theme.color.primaryBlue : p.theme.color.infoColor)};
  border-radius: 40px;
  background-color: ${p =>
    p.selected ? p.theme.color.primaryBlue : 'transparent'};
  height: 35px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-left: 20px;
  margin-right: ${p => (p.isLast ? '20px' : 0)};
`;

export const FilterTagTitle = styled(Text).attrs(p => ({
  numberOfLines: 1,
}))<{selected: boolean}>`
  font-family: ${p => p.theme.fontFamily.medium};
  color: ${p => (p.selected ? '#FFFFFF' : p.theme.color.text)}; ;
`;
