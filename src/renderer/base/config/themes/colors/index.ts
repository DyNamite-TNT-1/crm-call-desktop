import { PalettesProps } from '@renderer/base/types/theme';
import { rgbToHsv, rgbToHex, inputToRGB } from '@ctrl/tinycolor';

export const kColorSecondary = '#a6a5a4';

interface Opts {
  theme?: 'dark' | 'default';
  backgroundColor?: string;
}

const hueStep = 2;

const saturationStep = 0.16;

const saturationStep2 = 0.05;

const brightnessStep1 = 0.05;

const brightnessStep2 = 0.15;

const lightColorCount = 5;

const darkColorCount = 4;

const darkColorMap = [
  {
    index: 7,
    opacity: 0.15,
  },
  {
    index: 6,
    opacity: 0.25,
  },
  {
    index: 5,
    opacity: 0.3,
  },
  {
    index: 5,
    opacity: 0.45,
  },
  {
    index: 5,
    opacity: 0.65,
  },
  {
    index: 5,
    opacity: 0.85,
  },
  {
    index: 4,
    opacity: 0.9,
  },
  {
    index: 3,
    opacity: 0.95,
  },
  {
    index: 2,
    opacity: 0.97,
  },
  {
    index: 1,
    opacity: 0.98,
  },
]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref: any) {
  let r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  let hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v,
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`

function toHex(_ref2: any) {
  let r = _ref2.r,
    g = _ref2.g,
    b = _ref2.b;
  return '#'.concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.

function mix(rgb1: any, rgb2: any, amount: number) {
  let p = amount / 100;
  let rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b,
  };
  return rgb;
}

function getHue(hsv: any, i: number, light?: boolean) {
  let hue;

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light
      ? Math.round(hsv.h) - hueStep * i
      : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light
      ? Math.round(hsv.h) + hueStep * i
      : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv: any, i: number, light?: boolean) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  let saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }

  if (saturation > 1) {
    saturation = 1;
  }

  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv: any, i: number, light?: boolean) {
  let value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

export function generate(color: string, opts?: Opts): string[] {
  let patterns: string[] = [];
  let pColor = inputToRGB(color);

  for (let i = lightColorCount; i > 0; i -= 1) {
    let hsv = toHsv(pColor);
    let colorString = toHex(
      inputToRGB({
        h: getHue(hsv, i, true),
        s: getSaturation(hsv, i, true),
        v: getValue(hsv, i, true),
      }),
    );
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (let _i = 1; _i <= darkColorCount; _i += 1) {
    let _hsv = toHsv(pColor);

    let _colorString = toHex(
      inputToRGB({
        h: getHue(_hsv, _i),
        s: getSaturation(_hsv, _i),
        v: getValue(_hsv, _i),
      }),
    );

    patterns.push(_colorString);
  } // dark theme patterns

  if (opts?.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      let index = _ref3.index,
        opacity = _ref3.opacity;
      let darkColorString = toHex(
        mix(
          inputToRGB(opts.backgroundColor || '#141414'),
          inputToRGB(patterns[index]),
          opacity * 100,
        ),
      );
      return darkColorString;
    });
  }

  return patterns;
}

const presetPrimaryColors: { [key: string]: string } = {
  red: '#EB2727', // = rgba(235, 39, 39, 1)
  gold: '#FFB137', // = rgba(255, 177, 55, 1)
  green: '#0CAF60', // = rgba(12, 175, 96, 1)
  cyan: '#41C9E2', // = rgba(65, 201, 226, 1)
  blue: '#6895D2', // = rgba(104, 149, 210, 1)
  grey: '#666666',
};

let presetPalettes: PalettesProps = {};
let presetDarkPalettes: PalettesProps = {};

Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414',
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

export { presetPalettes, presetDarkPalettes };
