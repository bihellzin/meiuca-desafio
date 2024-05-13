import { default as styled } from "styled-components";
import * as tokens from "../../style-dictionary-dist/variables";
import { HeadingSmall } from "../../core/HeadingSmall/HeadingSmall.styled";
import { SubtitleSmall } from "../../core/SubtitleSmall/SubtitleSmall.styled";
import { Paragraph } from "../../core/Paragraph/Paragraph.styled";

export const CardContentHeading = styled(HeadingSmall)`
  margin-bottom: ${tokens.SpacingStackSizeXxxs};
`;

export const CardContentSubtitle = styled(SubtitleSmall)`
  margin-bottom: ${tokens.SpacingStackSizeXxs};
`;

export const CardContentParagraph = styled(Paragraph)`
  margin-bottom: ${tokens.SpacingStackSizeSm};
`;
