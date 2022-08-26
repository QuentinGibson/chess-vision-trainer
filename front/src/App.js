import Game from "./Components/Game/Game";
import Menu from "./Components/Menu/Menu";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <main className="App-header">
        <span className="App-Title text-white text-5xl font-bold mb-8">
          Chess Vision Trainer
        </span>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
