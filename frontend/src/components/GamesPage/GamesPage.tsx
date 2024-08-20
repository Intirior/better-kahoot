import GamePaginationList from "./GamePaginationList";
import { GamePageTabsOption, GameComponent } from "../../types";
import TabsSelector from "./TabsSelector";
import { useState } from "react";
import "./GamesPage.css";

const GamesPage = () => {
  const tabsOptions: GamePageTabsOption[] = ["Global games", "My games"];

  const [currentTabOption, setCurrentTabOption] =
    useState<GamePageTabsOption>("My games");

  const [numberOfElementsPerPage, setNumberOfElementsPerPage] = useState(5);

  const [gamesList, setGamesList] = useState<GameComponent[]>([
    {
      gameName: "game",
      gameCreator: "bar gelfer",
    },
    {
      gameName: "game",
      gameCreator: "bar gelfer",
    },
    {
      gameName: "game",
      gameCreator: "bar gelfer",
    },
  ]);

  return (
    <div className="games-page">
      <div className="horizontal-layout">
        <TabsSelector
          options={tabsOptions}
          currentTabOption={currentTabOption}
          setCurrentTabOption={setCurrentTabOption}
        />
      </div>
      <div style={{ width: "80%" }}>
        <GamePaginationList
          gamesList={gamesList}
          currentTabOption={currentTabOption}
        />
      </div>
    </div>
  );
};

export default GamesPage;
