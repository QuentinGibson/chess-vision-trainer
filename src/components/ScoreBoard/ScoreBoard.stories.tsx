import ScoreBoard from "./ScoreBoard";
import { ComponentStory, ComponentMeta } from "@storybook/react";
export default {
  title: "Score Board",
  component: ScoreBoard,
  layout: "centered",
} as ComponentMeta<typeof ScoreBoard>;

const Template: ComponentStory<typeof ScoreBoard> = (args) => (
  <ScoreBoard {...args} />
);
export const AllCorrect = Template.bind({});
AllCorrect.args = {
  attemptList: [
    {
      correct: true,
      square: "a1",
    },
    {
      correct: true,
      square: "b8",
    },
    {
      correct: true,
      square: "d3",
    },
    {
      correct: true,
      square: "c8",
    },
    {
      correct: true,
      square: "f1",
    },
    {
      correct: true,
      square: "a1",
    },
    {
      correct: true,
      square: "b8",
    },
    {
      correct: true,
      square: "d3",
    },
    {
      correct: true,
      square: "c8",
    },
    {
      correct: true,
      square: "f1",
    },
    {
      correct: true,
      square: "a1",
    },
    {
      correct: true,
      square: "b8",
    },
    {
      correct: true,
      square: "d3",
    },
    {
      correct: true,
      square: "c8",
    },
    {
      correct: true,
      square: "f1",
    },
    {
      correct: true,
      square: "a1",
    },
    {
      correct: true,
      square: "b8",
    },
    {
      correct: true,
      square: "d3",
    },
    {
      correct: true,
      square: "c8",
    },
    {
      correct: true,
      square: "f1",
    },
  ],
};
export const AllWrong = Template.bind({});
AllWrong.args = {
  attemptList: [
    {
      correct: false,
      square: "e1",
    },
    {
      correct: false,
      square: "b4",
    },
    {
      correct: false,
      square: "g6",
    },
    {
      correct: false,
      square: "e5",
    },
  ],
};
export const Empty = Template.bind({});
Empty.args = { attemptList: [] };
