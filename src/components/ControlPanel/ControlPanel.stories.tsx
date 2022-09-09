import ControlPanel from "./ControlPanel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Control Panel",
  component: ControlPanel,
  layout: "centered",
} as ComponentMeta<typeof ControlPanel>;

const Template: ComponentStory<typeof ControlPanel> = (args) => <ControlPanel />;
export const StoppedTimer = Template.bind({});
