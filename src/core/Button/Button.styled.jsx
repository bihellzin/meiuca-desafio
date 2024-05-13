import { default as styled } from "styled-components";
import * as tokens from "../../style-dictionary-dist/variables";

export const Button = styled.button`
  font-size: ${tokens.FontSizeSm};
  line-height: ${tokens.LineHeightTight};
  border-radius: ${tokens.RadiusSizeNone};
  padding: ${tokens.SpacingSquishSizeXsV} ${tokens.SpacingSquishSizeXsH};

  font-family: ${tokens.FontFamilyHighlight};
  font-weight: ${tokens.FontWeightMedium};
  color: ${tokens.NeutralColor5};
  background-color: ${tokens.BrandColorPrimary3};

  transition: all 200ms ease-in-out;
  cursor: pointer;
  border: 0px solid transparent;

  &:hover {
    background-color: ${tokens.BrandColorPrimary2};
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
