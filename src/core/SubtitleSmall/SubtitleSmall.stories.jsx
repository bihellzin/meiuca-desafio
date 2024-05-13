import { NeutralColor5 } from "../../style-dictionary-dist/variables";
import { SubtitleSmall } from "./SubtitleSmall.styled";

export default {
  component: SubtitleSmall,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "black",
      values: [{ name: "black", value: NeutralColor5 }],
    },
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    children: ["Subtitle"],
  },
};
