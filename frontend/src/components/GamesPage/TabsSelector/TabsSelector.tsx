import { GamePageTabsOption } from "../../../types";
import { FC } from "react";
import "./TabsSelector.css";


type TabsSelectorProps = {
  options: string[];
  currentTabOption: GamePageTabsOption;
  setCurrentTabOption: any;
};

const TabsSelector: FC<TabsSelectorProps> = ({
  options,
  currentTabOption,
  setCurrentTabOption,
}) => {
  return (
    <div className="tabs-selector">
      <ul>
        {options.map((title, index) => (
          <li
            key={index}
            style={{
              backgroundColor:
                currentTabOption === title ? "rgba(128, 0, 128, 0.3)" : "rgba(255,255,255,1)",
            }}
            onClick={() => {
              setCurrentTabOption(title);
            }}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsSelector;
