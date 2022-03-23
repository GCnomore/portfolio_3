import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ActionType, AppContext } from "../../reducer/AppReducer";

import * as Styled from "./Project_Modal_Styled";

export default function ProjectModal(): JSX.Element {
  const { state, dispatch } = useContext(AppContext);
  const [scTop, setScTop] = useState<number>(0);

  useEffect(() => {
    const homeContainer: Element | null =
      document.querySelector(".home-container");
    if (homeContainer) {
      setScTop(homeContainer.scrollTop);
    }
  }, [state.showProjectModal]);

  return (
    <Styled.BackDrop
      onClick={() =>
        dispatch({
          type: ActionType.SHOW_PROJECT_MODAL,
          payload: !state.showProjectModal,
        })
      }
      isShow={state.showProjectModal}
      scTop={scTop}
    >
      Project_Modal
    </Styled.BackDrop>
  );
}
