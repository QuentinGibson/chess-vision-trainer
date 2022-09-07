import { createContext } from "react";
type Attempt = {
  correct: boolean;
  square: string;
};
type GameData = {
  attemptList: Attempt[];
};
const GameContext = createContext({ attemptList: [] } as GameData);

export default GameContext;
