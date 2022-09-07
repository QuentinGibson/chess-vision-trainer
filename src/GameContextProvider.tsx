import { useReducer } from "@storybook/addons";
import GameContext from "./GameContext";
import { gameReducer } from "./reducers/gameReducer";
import { initialGameState } from "./state";
type Props = {
  children: any;
};
const GameContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
