import IconCheck from "~icons/carbon/checkmark-outline";
import IconCross from "~icons/carbon/close-outline";
type Attempt = {
  correct: boolean;
  square: string;
};

type Props = {
  attemptList: Attempt[];
  score: number;
};

const ScoreBoard = ({ attemptList }: Props) => {
  const score =
    attemptList.filter((attemptList) => attemptList.correct).length || 0;
  const attemptListElements = attemptList.map((attempt) => (
    <li>
      {attempt.correct ? <IconCheck /> : <IconCross />}
      <span>{attempt.square}</span>
    </li>
  ));
  return (
    <div>
      <div>
        <div>
          <h2>Score: {score}</h2>
        </div>
        <div>
          <ul>{attemptListElements}</ul>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
