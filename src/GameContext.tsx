import { createContext, Dispatch } from "react";
import { GameActions } from "./actions";
import { GameState, initialGameState } from "./state";
const GameContext = createContext<{
  state: GameState;
  dispatch: Dispatch<GameActions>;
}>({
  state: initialGameState,
  dispatch: () => undefined,
});

export default GameContext;
