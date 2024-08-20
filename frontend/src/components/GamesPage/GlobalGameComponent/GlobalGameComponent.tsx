import { GameComponent } from "../../../types";
import { FC } from "react";
import "./GlobalGameComponent.css";
import "../GamesPage.css";

type GlobalGameComponentProps = {} & GameComponent;

const GlobalGameComponent: FC<GlobalGameComponentProps> = ({
  gameName,
  gameCreator,
}) => {
  return (
    <div className="global-game-component horizontal-layout">
      <div>{gameName}</div>
      <div className="horizontal-layout">
        <div>{gameCreator}</div>
        <button>start</button>
      </div>
    </div>
  );
};

export default GlobalGameComponent;
