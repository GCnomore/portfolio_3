import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../reducer/AppReducer";

import * as Styled from "./Project_Modal_Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { IProjectData } from "../../data/data";
import SmoothScroll from "../../lib/smoothScroll";
import { Modal, ModalBody } from "react-bootstrap";
import { JsxElement } from "typescript";
interface IProjectModalProps {
  showModal: boolean;
  selectedProject: IProjectData | null;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  smoothScroll: SmoothScroll | null;
  containerRef: HTMLDivElement | null;
}

const ProjectModal: React.FC<IProjectModalProps> = (props) => {
  const { state, dispatch } = useContext(AppContext);
  const [modalWidth, setModalWidth] = useState<number>(0);
  const isMobile = props.selectedProject?.platform.includes("Mobile") ?? false;

  useEffect(() => {
    if (props.containerRef) {
      console.log(
        "containerRef.current",
        props.containerRef.getBoundingClientRect()
      );
      setModalWidth(props.containerRef.getBoundingClientRect().width);
    }
  }, [props.containerRef]);

  const hideModal = (e: React.MouseEvent) => {
    props.setShowModal(false);
    state.scrollContainer?.setAttribute("style", "overflow-y: auto");
    props.smoothScroll?.init();
  };

  const renderImages = (): JSX.Element[] | null => {
    if(props.selectedProject) {
      console.log('here')
      return props.selectedProject?.images.map((i)=> {
        return (
          <Styled.ProjectImages isMobile={isMobile}>
            <img src={i} />
          </Styled.ProjectImages>
        )
      });
    } else {
      return null;
    }
  }

  return (
    <Styled.Container
      show={props.showModal}
      centered
      fullscreen
      animation
      scrollable
      onEscapeKeyDown={hideModal}
    >
      <Styled.Body>
        <Styled.Header>
          <Styled.CloseBtn onClick={hideModal}>
            <FontAwesomeIcon icon={faTimes} />
          </Styled.CloseBtn>
        </Styled.Header>

        <div>
          <Styled.MainImgContainer isMobile={isMobile}>
            <img src={props.selectedProject?.images && props.selectedProject?.images[0]}/>
          </Styled.MainImgContainer>

          <Styled.Description>
            <div className="w-full border-b-2 mb-6">
              <h2 className="text-2xl font-bold">{props.selectedProject?.name}</h2>
            </div>

            <div className="flex flex-col">
              <Styled.TableRow className="flex">
                <h4>Project Category</h4>
                <p>{props.selectedProject?.label}</p>
              </Styled.TableRow>

              <Styled.TableRow className="flex">
                <h4>Tech Used</h4>
                <p>{props.selectedProject?.tech.join(", ")}</p>
              </Styled.TableRow>

              <div className="flex">
                <Styled.TableRow>
                  <h4>Key Contribution</h4>
                </Styled.TableRow>

                <div className="mt-[1rem] w-full">
                  <div className="flex">
                    <span className="align-top w-40">Front-end</span>
                    <ul className="flex flex-col w-full mb-4 ml-10">
                      {props.selectedProject?.feContribution.map((i) => (
                        <li className="mb-2" key={i}>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex">
                    <p className="align-top w-40">Back-end</p>
                    <ul className="flex flex-col w-full ml-10">
                      {props.selectedProject?.beContribution.map((i) => (
                        <li className="mb-2" key={i}>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <Styled.TableRow className="flex">
                <h4>Features</h4>
                <ul>
                  {props.selectedProject?.features?.map((f, i)=> <li className="mb-2" key={f + i}>{f}</li>)}
                </ul>
              </Styled.TableRow>

              <Styled.TableRow className="flex">
                <h4>Description</h4>
                <p>{props.selectedProject?.description}</p>
              </Styled.TableRow>
            </div>

            <div className="mt-20">
              <ul className={isMobile ? 'flex flex-wrap justify-center' : 'flex flex-col'}>
                {renderImages()}
              </ul>
            </div>
          </Styled.Description>
        </div>
      </Styled.Body>
    </Styled.Container>
  );
};

export default ProjectModal;
