import SelectedGameComponentType from "../SelectedGameComponentType/SelectedGameComponentType";
import { GameComponent, GamePageTabsOption } from "../../../types";
import { FC } from "react";
import "./GamePaginationList.css";

type GamePaginationListProps = {
  currentTabOption: GamePageTabsOption;
  gamesList: GameComponent[];
};

const GamePaginationList: FC<GamePaginationListProps> = ({
  gamesList,
  currentTabOption,
}) => {
  return (
    <div className="game-pagination-list">
      {gamesList.map((game) => (
        <SelectedGameComponentType
          currentTabOption={currentTabOption}
          gameName={game.gameName}
          gameCreator={game.gameCreator}
        />
      ))}
    </div>
  );
};

export default GamePaginationList;
