import MenuButton from "../MenuButton/MenuButton";
import Logo from "../../assets/vision-trainer-logo.png";

const MainMenu = () => {
  return (
    <>
      <div className="grid gap-4 grid-rows-2 max-w-md mx-auto my-7 justify-items-center">
        <div className="">
          <img
            src={Logo}
            alt="Logo for Chess Vision Trainer"
            className="object-cover"
          />
        </div>
        <div className="grid gap-4 grid-cols-2 justify-items-center self-center">
          <MenuButton to="/game">New Game</MenuButton>
          <MenuButton to="/leaderboard">LeaderBoard</MenuButton>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
