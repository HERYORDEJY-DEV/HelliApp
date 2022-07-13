const space = {
  default: '16px',
  xxs: '2px',
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
  inset: {
    default: '16px 16px 16px 16px',
    xxs: '2px 2px 2px 2px',
    xs: '4px 4px 4px 4px',
    s: '8px 8px 8px 8px',
    m: '16px 16px 16px 16px',
    l: '32px 32px 32px 32px',
    xl: '64px 64px 64px 64px',
  },
};

const palette = {
  infoColor: '#00529B',
  infoBackground: '#BDE5F8',
  successColor: '#4F8A10',
  successBackground: '#DFF2BF',
  warningColor: '#9F6000',
  warningBackground: '#FEEFB3',
  errorColor: '#D8000C',
  errorBackground: '#FFBABA',
  validationColor: '#D63301',
  validationBackground: '#FFCCBA',
  white: '#FFFFFF',
  black: '#222222',
  orange: '#F24E1E',

  background: '#DEE4E7', //#424242
  text: '#222222',
  navTitle: '#DEE4E7',
  border: '#455A64',

  light: '#DEE4E7',
  dark: '#37474F',

  primaryBlue: '#0071BC',
  buttonPrimary: '#0071BC',
  buttonPrimaryTitle: '#DEE4E7',
  itemButton: '#FFFFFF',
  itemButtonTitle: '#0071BC',
  listItem: '#FFFFFF',
};

export const lightTheme = {
  color: {...palette},
  fontFamily: {
    regular: 'Nunito-Regular',
    bold: 'Nunito-Bold',
    semiBold: 'Nunito-SemiBold',
    medium: 'Nunito-Medium',
    light: 'Nunito-Light',
  },
  fontSize: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '20px',
    xl: '40px',
  },
};

export const darkTheme = {
  ...lightTheme,
  color: {
    ...lightTheme.color,
    background: '#111111',
    // background: '#424242',
    primaryBlue: '#607d8b',
    text: '#DEDEDE',
    buttonPrimaryTitle: '#DEE4E7',
    buttonPrimary: '#607d8b',
    itemButton: '#424242',
    itemButtonTitle: '#DEDEDE',
    listItem: '#424242',
  },
};

export type CustomThemeType = typeof lightTheme;
