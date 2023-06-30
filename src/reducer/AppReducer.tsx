import React, { createContext, ReactNode, useReducer } from "react";
import { IProjectData } from "../data/data";

//* Compact... all in one
// TODO: Separate when it scales?? maybe????
interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAppReducerAction>;
}

interface IAppState {
  showProjectModal: boolean;
  modalProject: IProjectData | null;
  scrollContainer: HTMLDivElement | null;
}

interface IAppReducerAction {
  type: string;
  payload?: any;
}

type Props = {
  children?: ReactNode;
};

const appState: IAppState = {
  showProjectModal: false,
  modalProject: null,
  scrollContainer: null,
};

function init(initialState: IAppState) {
  return initialState;
}

function appReducer(state: IAppState, action: IAppReducerAction): IAppState {
  const { type, payload } = action;
  switch (type) {
    case 'showProjectModal':
      state.modalProject = payload.project;
      state.showProjectModal = payload.isShow;
      return state;
    case 'setScrollContainer':
      state.scrollContainer = payload.container;
      return state;
    case 'hideProjectModal':
      state.showProjectModal = false;
      state.modalProject = null;
      return state;
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
