import { NeutralColor5 } from "../../style-dictionary-dist/variables";
import { HeadingSmall } from "./HeadingSmall.styled";

export default {
  component: HeadingSmall,
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
    children: ["Heading Small"],
  },
};
