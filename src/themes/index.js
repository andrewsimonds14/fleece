import Fonts from './fonts';
import { LightColors, DarkColors } from './colours';

const getTheme = (themeName) => {
  switch (themeName) {
    case 'light':
      return {
        colors: LightColors,
        fonts: Fonts,
      };
    case 'dark':
      return {
        colors: DarkColors,
        fonts: Fonts,
      };
    default:
      return {
        colors: LightColors,
        fonts: Fonts,
      };
  }
};

export { getTheme };
