import { ComponentMeta, ComponentStory } from "@storybook/react";
import GamePage from "./GamePage";
import { withReactContext } from "storybook-react-context";
import { initialGameState } from "../../state";
import { gameReducer } from "../../reducers/gameReducer";

export default {
    title: "Game Page",
    component: GamePage,
    decorators: [
        withReactContext({
            reducer: gameReducer,
            initialState: initialGameState,
        }),
    ],
    layout: "centered",
} as ComponentMeta<typeof GamePage>;

export const Default: ComponentStory<typeof GamePage> = () => <GamePage />;
