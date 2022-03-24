import React, { createContext, ReactNode, useReducer } from "react";
import { IProjectData } from "../data/data";

//* Compact... all in one
// TODO: Separate when it scales?? maybe????

export enum ActionType {
  SHOW_PROJECT_MODAL = "SHOW_PROJECT_MODAL",
}

interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAppReducerAction>;
}

interface IAppState {
  showProjectModal: boolean;
  modalProject: IProjectData | null;
}

interface IAppReducerAction {
  type: ActionType;
  payload: any;
}

type Props = {
  children?: ReactNode;
};

const appState: IAppState = {
  showProjectModal: false,
  modalProject: null,
};

function init(initialState: IAppState) {
  return initialState;
}

function appReducer(state: IAppState, action: IAppReducerAction): IAppState {
  const { type, payload } = action;
  switch (type) {
    case ActionType.SHOW_PROJECT_MODAL:
      return {
        showProjectModal: payload.isShow,
        modalProject: payload.project,
      };
    default:
      return state;
  }
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export default function AppContextProvider(props: Props) {
  const [state, dispatch] = useReducer(appReducer, appState, init);

  const value = {
    state,
    dispatch,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
