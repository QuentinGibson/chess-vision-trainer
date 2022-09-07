import MainMenu from "./components/MainMenu/MainMenu";
import GameContextProvider from "./GameContextProvider";

import "./App.css";

function App() {
  return (
    <GameContextProvider>
      <MainMenu />
    </GameContextProvider>
  );
}

export default App;
