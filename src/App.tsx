import MainMenu from "./components/MainMenu/MainMenu";
import GamePage from "./components/GamePage/GamePage";
import { Routes, Route } from 'react-router-dom'
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="/leaderboard" element={<Leaderboard />}/ >
        </Routes>
    );
}

export default App;
