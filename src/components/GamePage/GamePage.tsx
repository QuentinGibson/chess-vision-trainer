import Chessboard from "../Chessboard/Chessboard";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

const GamePage = () => {
    return (
        <div className="w-full">
            <div className="flex h-130">
                <div className="flex mr-2">
                    <Chessboard />
                </div>
                <div className="w-3/12">
                    <ScoreBoard />
                </div>
            </div>
        </div>
    );
};

export default GamePage;
