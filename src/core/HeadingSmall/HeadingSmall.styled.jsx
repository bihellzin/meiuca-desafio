import { default as styled } from "styled-components";
import * as tokens from "../../style-dictionary-dist/variables";

export const HeadingSmall = styled.h2`
  font-size: ${tokens.FontSizeLg};
  line-height: ${tokens.LineHeightDistant};

  font-family: ${tokens.FontFamilyHighlight};
  font-weight: ${tokens.FontWeightBold};
  color: ${tokens.NeutralColor1};
`;
