import MainMenu from "./components/MainMenu/MainMenu";
import GameContextProvider from "./GameContextProvider";

function App() {
  return (
    <GameContextProvider>
      <MainMenu />
    </GameContextProvider>
  );
}

export default App;
