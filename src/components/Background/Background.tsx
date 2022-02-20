import React from "react";
import _ from "lodash";

import "./animation.css";
import * as Styled from "./Background_Styled";

export default function Background() {
  const sw: number = window.screen.availWidth;
  const sh: number = window.screen.availHeight;
  const rows: number = sw / 30 - 2;
  const total: number = Math.round(sh / rows) * 30 + 60;

  const renderTiles = (): JSX.Element[] => {
    const tiles: JSX.Element[] = [];
    for (let i: number = 0; i < total; i++) {
      tiles.push(
        <Styled.Tiles
          key={`tile${i}`}
          className={`tile-${i} tiles`}
          onClick={() => i === 30 && addAnimation()}
          size={rows}
        />
      );
    }

    return tiles;
  };

  const addAnimation = (): void => {
    const tiles = document.querySelectorAll(".tiles");

    //* Randomly take off tiles
    _.shuffle(tiles).forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("fallOff");
      }, index * 6);
    });

    //* Fadeout when tiles are almost gone
    setTimeout(() => {
      document.querySelector(".bgContainer")?.classList.add("fadeOut");
    }, (total - 1) * 6 - 100);

    //! Too may DOM elements... Remove
    setTimeout(() => {
      document.querySelector(".bgContainer")?.remove();
    }, (total - 1) * 6 + 1600);
  };

  return (
    <Styled.Container className="bgContainer" bgColor={"#121212"}>
      {renderTiles()}
    </Styled.Container>
  );
}
