import { default as styled } from "styled-components";
import * as theme from "../../style-dictionary-dist/variables";

export const Shape = styled.div`
  border-radius: ${theme.RadiusSizeNone};
  padding: ${theme.SpacingInsetSizeLg};
  border-width: ${theme.BorderSizeThin};

  border-color: ${theme.NeutralColor4};
  background-color: ${theme.NeutralColor5};
`;
