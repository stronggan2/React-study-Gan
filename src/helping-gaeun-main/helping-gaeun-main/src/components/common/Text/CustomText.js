import styled from 'styled-components';

import { getScaledFontSizePixel } from '../../../lib/scale';

const CustomText = styled.div`
  display: flex;
  font-size: ${(props) => getScaledFontSizePixel(props.fontSize)};
  font-weight: ${(props) => props.fontWeight || 'regular'};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => props.lineHeight};
  white-space: ${(props) => props.whiteSpace};
  word-break: ${(props) => props.wordBreak};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : '"Noto Sans KR", sans-serif')};
  -webkit-font-smoothing: antialiased;
`;

export default CustomText;
