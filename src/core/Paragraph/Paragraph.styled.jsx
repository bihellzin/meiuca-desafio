import { default as styled } from "styled-components";
import * as tokens from "../../style-dictionary-dist/variables";

export const Paragraph = styled.p`
  font-size: ${tokens.FontSizeSm};
  line-height: ${tokens.LineHeightDistant};

  font-family: ${tokens.FontFamilyHighlight};
  font-weight: ${tokens.FontWeightRegular};
  color: ${tokens.NeutralColor2};
`;
