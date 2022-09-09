import {
    ActionType,
    CreateAttempt,
    EndGame,
    GameActions,
    PauseGame,
    ResetGame,
    StartGame,
} from "../actions";
import { GameState, initialGameState, Status } from "../state";

export const gameReducer = (
    state: GameState,
    action: GameActions
): GameState => {
    switch (action.type) {
        case ActionType.StartGame:
            return {
                ...state,
                gameStatus: Status.InProgress,
                square: generateSquare(),
            };
        case ActionType.ResumeGame:
            return state;
        case ActionType.PauseGame:
            return {
                ...state,
                gameStatus: Status.Paused,
            };
        case ActionType.EndGame:
            return {
                ...state,
                gameStatus: Status.Finished,
                square: "",
            };
        case ActionType.ResetGame:
            const time = new Date();
            time.setSeconds(time.getSeconds() + 60);
            return {
                ...initialGameState,
            };
        case ActionType.CreateAttempt:
            if (state.gameStatus === Status.InProgress) {
                return {
                    ...state,
                    attemptList: [
                        ...state.attemptList,
                        {
                            square: state.square,
                            correct: state.square === action.pickedSquare,
                        },
                    ],
                    square: generateSquare(),
                };
            } else {
                return state;
            }
        default:
            return state;
    }
};

let generateSquare: () => string = () => {
    let randomInt = () => Math.floor(Math.random() * 7);
    console.log(randomInt());
    const row = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const column = ["1", "2", "3", "4", "5", "6", "7", "8"];

    const chessRow = row[randomInt()];
    const chessColumn = column[randomInt()];
    return chessRow + chessColumn;
};

export const createAttempt = (pickedSquare: string): CreateAttempt => {
    return {
        type: ActionType.CreateAttempt,
        pickedSquare,
    };
};

export const startGame = (): StartGame => {
    return {
        type: ActionType.StartGame,
    };
};

export const pauseGame = (): PauseGame => {
    return {
        type: ActionType.PauseGame,
    };
};

export const endGame = (): EndGame => {
    return {
        type: ActionType.EndGame,
    };
};

export const resetGame = (): ResetGame => {
    return {
        type: ActionType.ResetGame,
    };
};
