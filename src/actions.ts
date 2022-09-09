export enum ActionType {
  StartGame,
  EndGame,
  PauseGame,
  ResetGame,
  CreateAttempt,
  ResumeGame,
}

export interface ResumeGame {
  type: ActionType.ResumeGame;
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
  | ResumeGame
  | CreateAttempt;

export enum TimeActionType {
  Start,
  End,
  Tick,
  Pause,
  Reset
}

export interface Start {
  type: TimeActionType.Start
}

export interface End {
  type: TimeActionType.End
}
export interface Tick {
  type: TimeActionType.Tick
}

export interface Pause {
  type: TimeActionType.Pause
}

export interface Reset {
  type: TimeActionType.Reset
}

export type TimeActions =
  | Start
  | End
  | Tick
  | Pause
  | Reset
