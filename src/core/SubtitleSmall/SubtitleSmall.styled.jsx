import { default as styled } from "styled-components";
import * as theme from "../../style-dictionary-dist/variables";

export const SubtitleSmall = styled.h2`
  font-size: ${theme.FontSizeMd};
  line-height: ${theme.LineHeightMedium};

  font-family: ${theme.FontFamilyHighlight};
  font-weight: ${theme.FontWeightMedium};
  color: ${theme.NeutralColor2};
`;
