import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import MenuButton from "./MenuButton";

export default {
  title: "Menu Button",
  component: MenuButton,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
    layout: "centered",
  },
} as ComponentMeta<typeof MenuButton>;

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

export const NewGame = Template.bind({});
NewGame.args = {
  to: "/game",
  children: "New Game",
};

export const LeaderBoard = Template.bind({});
LeaderBoard.args = {
  to: "/leaderboard",
  children: "Leaderboard",
};

export const TooLong = Template.bind({});
TooLong.args = {
  to: "/",
  children: "sadfqweruiopfdsahjlqwerjk;lvzcjhfdsalweoiujlh",
};
