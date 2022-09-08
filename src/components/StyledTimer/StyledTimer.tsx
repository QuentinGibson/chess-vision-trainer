import useGameTime from "../../hooks/useGameTime";

const StyledTimer = () => {
  const { seconds, minutes } = useGameTime();

  return (
    <div>
      <span>{minutes >= 10 ? minutes : `0${minutes}`} :</span>
      <span> {seconds >= 10 ? seconds : `0${seconds}`}</span>
    </div>
  );
};
export default StyledTimer;
