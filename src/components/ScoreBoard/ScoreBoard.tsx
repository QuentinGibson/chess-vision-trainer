import { useContext } from "react";
import IconCheck from "~icons/carbon/checkmark-outline";
import IconCross from "~icons/carbon/close-outline";
import GameContext from "../../GameContext";
import ControlPanel from "../ControlPanel/ControlPanel";

const ScoreBoard = () => {
    const { state } = useContext(GameContext);
    const { attemptList } = state;
    const score =
        attemptList.filter((attemptList) => attemptList.correct).length || 0;
    const attemptListElements = attemptList.map((attempt, index) => (
        <li
            className={`${attempt.correct ? "bg-green-400" : "bg-red-300"
                } p-2 m-1 rounded flex justify-center basis-2/12 item-center flex-col h-16 items-center`}
            key={index}
        >
            {attempt.correct ? <IconCheck /> : <IconCross />}
            <span className="text-gray-800 leading-3 pt-2.5 tracking-wide text-sm">
                {attempt.square}
            </span>
        </li>
    ));
    return (
        <div className="bg-gray-200 px-4 py-4 shadow-md rounded h-full box-border">
            <div className="flex flex-col h-full p">
                <div className="w-full rounded ">
                    <div className="flex flex-col align-center">
                        <ControlPanel />
                        <div className="flex justify-center text-2xl"><span>Click on: {state.square}</span></div>
                    </div>
                    <h2 className="m-0 py-4 text-black text-3xl font-bold tracking-wide ">
                        Score: {score}
                    </h2>
                </div>
                <ul
                    className="m-0 pl-0 bg-gray-300 flex align-start basis-7/12 flex-wrap overflow-auto shrink"
                    tabIndex={0}
                >
                    {attemptListElements}
                </ul>
            </div>
        </div>
    );
};

export default ScoreBoard;
