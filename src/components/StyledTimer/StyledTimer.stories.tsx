import StyledTimer from "./StyledTimer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Styled Timer",
  component: StyledTimer,
  layout: "centered",
} as ComponentMeta<typeof StyledTimer>;

const Template: ComponentStory<typeof StyledTimer> = (args) => <StyledTimer />;
export const StoppedTimer = Template.bind({});
