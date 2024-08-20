import { FC } from "react";
import { GameComponent, GamePageTabsOption } from "../../../types";
import GlobalGameComponent from "../GlobalGameComponent";
import MyGameComponent from "../MyGameComponent";

type SelectedGameComponentTypeProps = {
  currentTabOption: GamePageTabsOption;
} & GameComponent;

const SelectedGameComponentType: FC<SelectedGameComponentTypeProps> = ({
  gameName,
  gameCreator,
  currentTabOption,
}) => {
  switch (currentTabOption) {
    case "Global games":
      return (
        <GlobalGameComponent gameName={gameName} gameCreator={gameCreator} />
      );
    case "My games":
      return <MyGameComponent gameName={gameName} gameCreator={gameCreator} />;
    default:
      return (
        <GlobalGameComponent gameName={gameName} gameCreator={gameCreator} />
      );
  }
};

export default SelectedGameComponentType;
