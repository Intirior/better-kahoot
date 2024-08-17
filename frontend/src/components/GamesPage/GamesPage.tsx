import { GamePageTabsOption } from "../../types";
import TabsSelector from "./TabsSelector";
import { useState } from "react";
import "./GamesPage.css";

const GamesPage = () => {
  const tabsOptions: GamePageTabsOption[] = ["Global games", "My games"];

  const [currentTabOption, setCurrentTabOption] = useState<GamePageTabsOption>(
    tabsOptions[0]
  );

  return (
    <div className="games-page">
      <div className="horizontal-layout">
        <TabsSelector
          options={tabsOptions}
          //   currentTabOption={currentTabOption}
          //   setCurrentTabOption={setCurrentTabOption}
        />
      </div>
    </div>
  );
};

export default GamesPage;
