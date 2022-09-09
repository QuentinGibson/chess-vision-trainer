import IconCheck from "~icons/carbon/checkmark-outline";
import IconCross from "~icons/carbon/close-outline";
import { useContext } from "react";
import GameContext from "../../GameContext";
import StyledTimer from "../StyledTimer/StyledTimer";

const ScoreBoard = () => {
    const { state } = useContext(GameContext);
    const { attemptList } = state;
    const score =
        attemptList.filter((attemptList) => attemptList.correct).length || 0;
    const attemptListElements = attemptList.map((attempt) => (
        <li
            className={`${attempt.correct ? "bg-green-400" : "bg-red-300"
                } p-2 m-1 rounded flex justify-center basis-27 item-center flex-col h-16 items-center`}
        >
            {attempt.correct ? <IconCheck /> : <IconCross />}
            <span className="text-gray-800 leading-3 pt-2.5 tracking-wide text-sm">
                {attempt.square}
            </span>
        </li>
    ));
    return (
        <div className="bg-gray-200 shadow-md rounded h-120">
            <div className="flex flex-col h-full">
                <div className="w-full rounded ">
                    <div className="pl-3 pt-3 flex flex-col align-center">
                        <StyledTimer />
                        <div className="text-2xl">{state.square}</div>
                    </div>
                    <h2 className="m-0 py-4 pl-3 text-black text-3xl font-bold tracking-wide ">
                        Score: {score}
                    </h2>
                </div>
                <ul
                    className="m-0 pl-0 flex flex-1 align-start basis-9/12 flex-wrap overflow-auto shrink"
                    tabIndex={0}
                >
                    {attemptListElements}
                </ul>
            </div>
        </div>
    );
};

export default ScoreBoard;
