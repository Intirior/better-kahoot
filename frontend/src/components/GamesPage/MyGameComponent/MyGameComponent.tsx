import { FC } from "react";
import { GameComponent } from "../../../types";
import "./MyGameComponent.css";

type MyGameComponentProps = {} & GameComponent;

const MyGameComponent: FC<MyGameComponentProps> = ({
  gameName,
  gameCreator,
}) => {
  return (
    <div className="my-game-component horizontal-layout">
      <div>{gameName}</div>
      <div className="horizontal-layout">
        <div>{gameCreator}</div>
        <button>start</button>
        <button>edited</button>
      </div>
    </div>
  );
};

export default MyGameComponent;
