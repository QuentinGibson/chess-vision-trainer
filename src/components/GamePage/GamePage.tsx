import { useContext } from "react";
import GameContext from "../../GameContext";
import { endGame, startGame } from "../../reducers/gameReducer";
import Chessboard from "../Chessboard/Chessboard";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import useGameTime from "../../hooks/useGameTime";

const GamePage = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 60)
    const { start } = useGameTime(time)
    const { dispatch } = useContext(GameContext);
    const endGameAction = endGame();
    const startGameAction = startGame();
    return (
        <div className="w-full">
            <div className="flex">
                <div className="flex mr-2">
                    <Chessboard />
                </div>
                <div className="w-3/12">
                    <ScoreBoard />
                    <div className="flex">
                        <button
                            className="shadow my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-8 py-3 text-sm"
                            onClick={() => {
                                start()
                                dispatch(startGameAction)
                            }}
                        >
                            Start Game
                        </button>
                        <button
                            className="shadow my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-8 py-3 text-sm"
                            onClick={() => { dispatch(endGameAction) }}
                        >
                            Pause Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
