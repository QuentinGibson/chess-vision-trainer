import { ComponentMeta, ComponentStory } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import MainMenu from "./MainMenu";

export default {
  title: "Main Menu",
  component: MainMenu,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/",
    },
  },
  layout: "centered",
} as ComponentMeta<typeof MainMenu>;

export const Default: ComponentStory<typeof MainMenu> = (args) => <MainMenu />;
