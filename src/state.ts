export interface attempt {
  correct: boolean;
  square: string;
}

export interface GameState {
  attemptList: attempt[];
  square: string;
  gameStatus: Status;
}

export enum Status {
  NotStarted = "Not Started",
  InProgress = "In Progress",
  Finished = "Finished",
  Paused = "Paused",
}

export const initialGameState: GameState = {
  attemptList: [],
  square: "",
  gameStatus: Status.NotStarted,
};
