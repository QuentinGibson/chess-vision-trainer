export enum ActionType {
  StartTimer,
  EndGame,
  PauseTimer,
  ResetGame,
  CreateAttempt,
}

export interface StartTimer {
  type: ActionType.StartTimer;
}

export interface PauseTimer {
  type: ActionType.PauseTimer;
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

export type GameActions = ResetGame | EndGame | PauseTimer | StartTimer | CreateAttempt;
