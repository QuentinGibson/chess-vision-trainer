import { ActionType, GameActions } from "../actions";
import { GameState, initialGameState, Status } from "../state";

export const gameReducer = (
  state: GameState,
  action: GameActions
): GameState => {
  switch (action.type) {
    case ActionType.StartTimer:
      return {
        ...state,
        gameStatus: Status.InProgress,
      };
    case ActionType.PauseTimer:
      return {
        ...state,
        gameStatus: Status.Paused,
      };
    case ActionType.EndGame:
      return {
        ...state,
        gameStatus: Status.Finished,
      };
    case ActionType.ResetGame:
      return {
        ...initialGameState,
      };
    case ActionType.CreateAttempt:
      return {
        ...state,
        attemptList: [
          ...state.attemptList,
          {
            square: state.square,
            correct: state.square === action.pickedSquare,
          },
        ],
      };
    default:
      return state;
  }
};

export const createAttempt = (pickedSquare: string): GameActions => {
  return {
    type: ActionType.CreateAttempt,
    pickedSquare,
  };
};
