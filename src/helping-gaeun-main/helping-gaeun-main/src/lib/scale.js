const [width, height] = [window.innerWidth, window.innerHeight];
// 가로모드가 기본이므로 width가 longDimension
const [longDimension, shortDimension] = width > height ? [width, height] : [height, width];

const guidelineBaseWidth = 1920;
const guidelineBaseHeight = 1080;

export const scale = (size) => (longDimension / guidelineBaseWidth) * size;
export const verticalScale = (size) => (shortDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;

export const getScaledWidthPixel = (size) => `${s(size)}px`;
export const getScaledHeightPixel = (size) => `${vs(size)}px`;
export const getScaledFontSizePixel = (size) => `${s(size)}px`;
export const getScaledIconPixel = (size) => `${s(size)}px`;

export const getWidthPercent = (size, boxSize) => `${(size / (boxSize || guidelineBaseWidth)) * 100}%`;
export const getHeightPercent = (size, boxSize) => `${(size / (boxSize || guidelineBaseHeight)) * 100}%`;

// 참고 라이브러리: https://github.com/nirsky/react-native-size-matters
