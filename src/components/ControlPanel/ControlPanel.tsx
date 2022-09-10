import useGameTime from "../../hooks/useGameTime";
import { useCallback, useContext, useRef, useState } from "react";
import GameContext from "../../GameContext";
import { Status } from '../../state'
import { startGame, endGame, pauseGame, resumeGame, resetGame } from '../../reducers/gameReducer'
import { useNavigate } from "react-router-dom";

const ControlPanel = () => {
    // State variables
    const { state, dispatch } = useContext(GameContext);
    const { gameStatus } = state
    const [addToLeaderboard, setAddToLeaderboard] = useState(false)
    const nameRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    //Actions for reducer
    const startGameAction = startGame();
    const pauseGameAction = pauseGame();
    const resumeGameAction = resumeGame();
    const resetGameAction = resetGame();
    const endGameAction = endGame();

    //Time variables
    const { start, pause, time, reset } = useGameTime();
    const minutes = Math.floor((time / 60))
    const seconds = time - (60 * minutes)

    //Callbacks functions for buttons
    const handleStartClick = useCallback(() => {
        start()
        dispatch(startGameAction)
    }, [gameStatus])
    const handlePauseClick = useCallback(() => {
        pause()
        dispatch(pauseGameAction)
    }, [gameStatus])
    const handleResumeClick = useCallback(() => {
        start()
        dispatch(resumeGameAction)
    }, [gameStatus])

    const handleLeaderboardClick = useCallback(() => {
        //TODO
        setAddToLeaderboard(true)
    }, [gameStatus])
    const handleEndClick = useCallback(() => {
        pause()
        dispatch(endGameAction)
    }, [gameStatus])
    const handleResetClick = useCallback(() => {
        reset()
        dispatch(resetGameAction)
    }, [gameStatus])

    //Buttons
    const startGameButton = <button className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" onClick={handleStartClick}>
        Start Game
    </button>
    const pauseGameButton = <button className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" onClick={handlePauseClick}>Pause Game</button>
    const resumeGameButton = <button className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" onClick={handleResumeClick}>Resume Game</button>
    const leaderboardButton = <button className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" onClick={handleLeaderboardClick}>Add to LeaderBoards</button>
    const endGameButton = <button className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" onClick={handleEndClick}>End Game</button>
    const resetButton = <button className="shadow bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-4 py-3 text-sm" onClick={handleResetClick}>Reset Game</button>

    //Form
    async function handleSubmit(event: any) {
        event.preventDefault()
        const score = state.attemptList.filter(attempt => attempt.correct).length
        const name = nameRef.current?.value || ''
        await fetch('http://localhost:5050/records', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                record: {
                    name,
                    score,
                    mode: 'short'
                }
            })
        })
        navigate('/leaderboard')
    }
    const leaderboardForm = <form onSubmit={handleSubmit}><input ref={nameRef} type="text" /><input type="submit" value="Add" /></form>
    return (
        <div className="">
            <div className="flex justify-center mb-3">
                {gameStatus === Status.NotStarted && startGameButton}
                {gameStatus === Status.InProgress && pauseGameButton}
                {gameStatus === Status.Paused && <>{resumeGameButton}{endGameButton}</>}
                {gameStatus === Status.Finished && !addToLeaderboard && <>{resetButton}{leaderboardButton}</>}
                {gameStatus === Status.Finished && addToLeaderboard && <>{leaderboardForm}</>}
            </div>
            <div className="flex justify-center text-3xl">
                <span >
                    {minutes >= 10 ? minutes : `0${minutes}`}:
                </span>
                <span >
                    {seconds >= 10 ? seconds : `0${seconds}`}
                </span>
            </div>

        </div>
    );
};
export default ControlPanel;
