import { SubtitleSmall } from "../SubtitleSmall/SubtitleSmall.styled";
import { Shape } from "./Shape.styled";

export default {
  component: Shape,
};

export const Primary = {
  args: {
    children: [<SubtitleSmall key="1">Subtitle</SubtitleSmall>],
  },
};
