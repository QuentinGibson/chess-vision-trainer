import Chess from "chessboardjsx";

export default function Chessboard() {
  const handleClick = (pickedSquare) => {
    if (isRunning) {
      setRecord((prevState) => [
        ...prevState,
        { square: square, correct: pickedSquare === square },
      ]);
    }
    generateSquare();
  };

  return <Chess showNotation={false} onSquareClick={handleClick} />;
}
