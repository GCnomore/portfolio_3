import React from "react";
import _ from "lodash";

import "./animation.css";
import * as Styled from "./Background_Styled";

interface BackgroundProps {
  setIsBgGone: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Background(props: BackgroundProps) {
  const sw: number = window.screen.availWidth;
  const sh: number = window.screen.availHeight;
  const tileSize: number = sw < 768 ? sw / 20 - 2 : sw / 30 - 2;
  const total: number =
    sw < 768
      ? Math.round(sh / tileSize) * 20
      : Math.round(sh / tileSize) * 30 + 90;

  const renderTiles = (): JSX.Element[] => {
    const tiles: JSX.Element[] = [];
    for (let i: number = 0; i < total; i++) {
      tiles.push(
        <Styled.Tiles
          key={`tile${i}`}
          className={`tile-${i} tiles`}
          onClick={() => i === 30 && addAnimation()}
          size={tileSize}
        />
      );
    }

    return tiles;
  };

  const addAnimation = (): void => {
    const tiles = document.querySelectorAll(".tiles");
    const bgContainer = document.querySelector(".bgContainer");

    //* Randomly take off tiles
    _.shuffle(tiles).forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("fallOff");
      }, index * 6);
    });

    //* Fadeout when tiles are almost gone
    setTimeout(() => {
      bgContainer?.classList.add("lightToDark");
    }, (total - 1) * 6 - 500);

    //! Too may DOM elements... Remove
    setTimeout(() => {
      bgContainer?.remove();
      props.setIsBgGone(true);
    }, (total - 1) * 6 + 2500);
  };

  return (
    <Styled.Container className="bgContainer">{renderTiles()}</Styled.Container>
  );
}
