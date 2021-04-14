import {
  BaseFontFamily, Gray100, Gray10, Gray20, Gray95, WhiteColour,
} from '@easydev-pro/ui-elements/styles';

export type themeProps = {
  defaultFontFamily: string,
  defaultTextColour: string,
  additionalTextColour: string,
  backgroundColour: string,
  iconsDefaultColour: string,
};

// export type currentThemeProps = {
//   currentTheme: string,
// };

// https://emotion.sh/docs/theming#themeprovider-reactcomponenttype

export const Theme = (currentTheme: string) => ({
  defaultFontFamily: BaseFontFamily,
  defaultText: currentTheme === 'dark' ? Gray100 : Gray10,
  subText: currentTheme === 'dark' ? Gray100 : Gray10, // change name
  background: currentTheme === 'dark' ? Gray95 : WhiteColour,
  defaultIcons: Gray20,
});
