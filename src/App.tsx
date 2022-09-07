import GameContext from "./GameContext";
import MainMenu from "./components/MainMenu/MainMenu";

import "./App.css";

type Attempt = {
  correct: boolean;
  square: string;
};
type GameData = {
  attemptList: Attempt[];
};

const defaultValues: GameData = { attemptList: [] };

function App() {
  return (
    <GameContext.Provider value={defaultValues}>
      <MainMenu />
    </GameContext.Provider>
  );
}

export default App;
