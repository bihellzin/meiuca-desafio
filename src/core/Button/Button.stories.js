import { Button } from "./Button.styled";

export default {
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    children: ["Label"],
  },
};
