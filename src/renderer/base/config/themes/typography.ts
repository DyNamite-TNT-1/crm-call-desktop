import { Theme, TypographyVariantsOptions } from '@mui/material/styles';
import { FontFamily, ThemeMode } from '@renderer/base/types/app';

const createTypographyVariant = (
  fontWeight: string,
  fontSize: string,
  lineHeight: string,
) => ({ fontWeight, fontSize, lineHeight });

const Typography = (
  mode: ThemeMode,
  fontFamily: FontFamily,
  theme: Theme,
): TypographyVariantsOptions => {
  return {
    fontFamily,
    // h1
    // FIXME: Temporarily setting fontSize and lineHeight for h1 as they are undefined in Figma.
    h1Thin: createTypographyVariant('100', '32px', '40px'),
    h1ExtraLight: createTypographyVariant('200', '32px', '40px'),
    h1Light: createTypographyVariant('300', '32px', '40px'),
    h1Normal: createTypographyVariant('400', '32px', '40px'),
    h1Medium: createTypographyVariant('500', '32px', '40px'),
    h1SemiBold: createTypographyVariant('600', '32px', '40px'),
    h1Bold: createTypographyVariant('700', '32px', '40px'),
    // h2
    h2Thin: createTypographyVariant('100', '24px', '31.2px'),
    h2ExtraLight: createTypographyVariant('200', '24px', '31.2px'),
    h2Light: createTypographyVariant('300', '24px', '31.2px'),
    h2Normal: createTypographyVariant('400', '24px', '31.2px'),
    h2Medium: createTypographyVariant('500', '24px', '31.2px'),
    h2SemiBold: createTypographyVariant('600', '24px', '31.2px'),
    h2Bold: createTypographyVariant('700', '24px', '31.2px'),
    // h3
    h3Thin: createTypographyVariant('100', '16px', '20.8px'),
    h3ExtraLight: createTypographyVariant('200', '16px', '20.8px'),
    h3Light: createTypographyVariant('300', '16px', '20.8px'),
    h3Normal: createTypographyVariant('400', '16px', '20.8px'),
    h3Medium: createTypographyVariant('500', '16px', '20.8px'),
    h3SemiBold: createTypographyVariant('600', '16px', '20.8px'),
    h3Bold: createTypographyVariant('700', '16px', '20.8px'),
    // h4
    h4Thin: createTypographyVariant('100', '14px', '18.2px'),
    h4ExtraLight: createTypographyVariant('200', '14px', '18.2px'),
    h4Light: createTypographyVariant('300', '14px', '18.2px'),
    h4Normal: createTypographyVariant('400', '14px', '18.2px'),
    h4Medium: createTypographyVariant('500', '14px', '18.2px'),
    h4SemiBold: createTypographyVariant('600', '14px', '18.2px'),
    h4Bold: createTypographyVariant('700', '14px', '18.2px'),
    // h5
    h5Thin: createTypographyVariant('100', '13px', '16.9px'),
    h5ExtraLight: createTypographyVariant('200', '13px', '16.9px'),
    h5Light: createTypographyVariant('300', '13px', '16.9px'),
    h5Normal: createTypographyVariant('400', '13px', '16.9px'),
    h5Medium: createTypographyVariant('500', '13px', '16.9px'),
    h5SemiBold: createTypographyVariant('600', '13px', '16.9px'),
    h5Bold: createTypographyVariant('700', '13px', '16.9px'),
    // h6
    h6Thin: createTypographyVariant('100', '10px', '13px'),
    h6ExtraLight: createTypographyVariant('200', '10px', '13px'),
    h6Light: createTypographyVariant('300', '10px', '13px'),
    h6Normal: createTypographyVariant('400', '10px', '13px'),
    h6Medium: createTypographyVariant('500', '10px', '13px'),
    h6SemiBold: createTypographyVariant('600', '10px', '13px'),
    h6Bold: createTypographyVariant('700', '10px', '13px'),
    // body
    body2: createTypographyVariant('400', '12px', '15.6px'),
  };
};

export default Typography;
