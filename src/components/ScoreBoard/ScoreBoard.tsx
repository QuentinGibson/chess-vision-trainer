import IconCheck from "~icons/carbon/checkmark-outline";
import IconCross from "~icons/carbon/close-outline";
import { useContext } from "react";
import GameContext from "../../GameContext";

const ScoreBoard = () => {
  const { state } = useContext(GameContext);
  const { attemptList } = state;
  const score =
    attemptList.filter((attemptList) => attemptList.correct).length || 0;
  const attemptListElements = attemptList.map((attempt) => (
    <li
      className={`${
        attempt.correct ? "bg-green-400" : "bg-red-300"
      } p-2 rounded flex justify-center item-center flex-col h-16 items-center`}
    >
      {attempt.correct ? <IconCheck /> : <IconCross />}
      <span className="text-gray-800 leading-3 pt-2.5 tracking-wide text-sm">
        {attempt.square}
      </span>
    </li>
  ));
  return (
    <div className="bg-gray-200 py-5 px-6 shadow-md max-w-md rounded h-120">
      <div className="flex flex-col">
        <div className="w-full mb-4 rounded ">
          <h2 className="text-black text-3xl font-bold tracking-wide ">
            Score: {score}
          </h2>
        </div>
        <div>
          <ul
            className="grid grid-gap-2 grid-flow-row grid-cols-4 h-96 overflow-auto"
            tabIndex={0}
          >
            {attemptListElements}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
