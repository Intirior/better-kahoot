import { FC } from "react";
import "./TabsSelector.css";


type TabsSelectorProps = {
  options: string[];
};

const TabsSelector: FC<TabsSelectorProps> = ({ options }) => {
  return (
    <div className="tabs-selector">
      <ul>
        {options.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TabsSelector;
