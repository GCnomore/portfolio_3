import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { ActionType, AppContext } from "../../reducer/AppReducer";

import * as Styled from "./Project_Modal_Styled";

export default function ProjectModal(): JSX.Element {
  const { state, dispatch } = useContext(AppContext);

  const [scTop, setScTop] = useState<number>(0);
  const [imgIndex, setImgIndex] = useState<number>(0);

  useEffect(() => {
    console.log(imgIndex);
  }, [imgIndex]);

  useEffect(() => {
    document.addEventListener("keydown", onEscPressed);

    return () => {
      document.removeEventListener("keydown", onEscPressed);
    };
  }, []);

  useEffect(() => {
    const homeContainer: Element | null =
      document.querySelector(".home-container");
    if (homeContainer) {
      setScTop(homeContainer.scrollTop);
    }
  }, [state.showProjectModal]);

  const closeModal = (): void => {
    dispatch({
      type: ActionType.SHOW_PROJECT_MODAL,
      payload: !state.showProjectModal,
    });
  };

  const onEscPressed = (e: KeyboardEvent): void => {
    if (e.code === "Escape") {
      closeModal();
    }
  };

  const handleArrowClick = (direction: string): void => {
    if (state.modalProject?.images) {
      if (direction === "prev") {
        if (imgIndex === 0) {
          console.log("hereeeeeeee");
          setImgIndex(state.modalProject.images.length - 1);
        } else {
          setImgIndex(imgIndex - 1);
        }
      } else {
        if (imgIndex === state.modalProject.images.length - 1) {
          setImgIndex(0);
        } else {
          setImgIndex(imgIndex + 1);
        }
      }
    }
  };

  return (
    <Styled.BackDrop
      onClick={(e: MouseEvent) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
      isShow={state.showProjectModal}
      scTop={scTop}
    >
      <Styled.ModalBody>
        <div>
          <Styled.ArrowContainer>
            <span onClick={() => handleArrowClick("prev")}>{"<"}</span>
            <span onClick={() => handleArrowClick("next")}>{">"}</span>
          </Styled.ArrowContainer>
          <Styled.ImageContainer>
            {state.modalProject?.images ? (
              <img
                alt="project screenshot"
                src={state.modalProject.images[imgIndex]}
              />
            ) : (
              <></>
            )}
          </Styled.ImageContainer>
          <Styled.DescriptionContainer>
            <p>
              {state.modalProject?.description &&
                state.modalProject.description[imgIndex]}
            </p>
          </Styled.DescriptionContainer>
        </div>
      </Styled.ModalBody>
    </Styled.BackDrop>
  );
}
