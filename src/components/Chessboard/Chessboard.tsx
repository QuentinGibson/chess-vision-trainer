import Chess from "chessboardjsx";
import { useContext } from "react";
import GameContext from "../../GameContext";
import { createAttempt } from "../../reducers/gameReducer";

export default function Chessboard() {
  const { dispatch } = useContext(GameContext);
  const handleClick = (pickedSquare: string) => {
    dispatch(createAttempt(pickedSquare));
  };

  return (
    <Chess
      showNotation={false}
      onSquareClick={handleClick}
      calcWidth={({ screenWidth }) => {
        return 460;
      }}
    />
  );
}
