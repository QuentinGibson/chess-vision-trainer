import useGameTime from "../../hooks/useGameTime";

const StyledTimer = () => {
  const { seconds, minutes } = useGameTime();

  return (
    <div className="pl-1">
      <span className="text-2xl">
        {minutes >= 10 ? minutes : `0${minutes}`} :
      </span>
      <span className="text-2xl">
        {" "}
        {seconds >= 10 ? seconds : `0${seconds}`}
      </span>
    </div>
  );
};
export default StyledTimer;
