import 'styled-components';
import {CustomThemeType} from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}
