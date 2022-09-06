import MenuButton from "../MenuButton/MenuButton";

const MainMenu = () => {
  return (
    <div className="grid gap-4 grid-cols-2 justify-items-center max-w-sm mx-auto">
      <MenuButton to="/game">New Game</MenuButton>
      <MenuButton to="/leaderboard">LeaderBoard</MenuButton>
    </div>
  );
};

export default MainMenu;
