import { Link } from "react-router-dom";
export function Menu() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex bg-blue-900 px-3 py-4">
        <Link className="px-3 py-2 bg-indigo-700" to="/game">
          New Game
        </Link>
        <Link className="px-3 py-2 bg-indigo-700" to="/leaderboard">
          LeaderBoard
        </Link>
      </div>
    </div>
  );
}
