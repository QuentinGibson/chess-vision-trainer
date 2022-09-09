import MainMenu from "./components/MainMenu/MainMenu";
import GamePage from "./components/GamePage/GamePage";
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
            <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route path="/game" element={<GamePage />} />
            </Routes>
    );
}

export default App;
