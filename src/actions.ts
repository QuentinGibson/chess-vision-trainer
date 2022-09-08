export enum ActionType {
  StartGame,
  EndGame,
  PauseGame,
  ResetGame,
  CreateAttempt,
}

export interface StartGame {
  type: ActionType.StartGame;
}

export interface PauseGame {
  type: ActionType.PauseGame;
}

export interface ResetGame {
  type: ActionType.ResetGame;
}

export interface EndGame {
  type: ActionType.EndGame;
}
export interface CreateAttempt {
  type: ActionType.CreateAttempt;
  pickedSquare: string;
}

export type GameActions =
  | ResetGame
  | EndGame
  | PauseGame
  | StartGame
  | CreateAttempt;
