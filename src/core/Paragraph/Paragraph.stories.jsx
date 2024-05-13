import { NeutralColor5 } from "../../style-dictionary-dist/variables";
import { Paragraph } from "./Paragraph.styled";

export default {
  component: Paragraph,
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
    children: [
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo delectus necessitatibus earum vel repellendus tempore doloremque doloribus incidunt fugiat dolorem. Nam id debitis rerum aliquam modi quae corrupti accusamus facilis?",
    ],
  },
};
