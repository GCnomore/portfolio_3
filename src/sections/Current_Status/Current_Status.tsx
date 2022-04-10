import React from "react";

import * as Styled from "./Current_Status_Styled";
import { Divider } from "../../components/Divider/Divider";
import Brain from "../../images/brain.png";
import { IProgrammingFocus, ProgrammingFocus } from "../../data/data";
import FadeInDown from "../../components/FadeInDown/FadeInDown";

export default function CurrentStatus() {
  const renderProgrammingFocus = (): JSX.Element[] => {
    return ProgrammingFocus.map((item: IProgrammingFocus, index: number) => (
      <Styled.FocusItem key={`${index}focus-${item.name}`} ratio={item.ratio}>
        <span>{item.name}</span>
        <div></div>
      </Styled.FocusItem>
    ));
  };

  return (
    <Styled.Container>
      <FadeInDown>
        <Styled.TitleContainer>
          <h2>Current Status</h2>
        </Styled.TitleContainer>
      </FadeInDown>
      <Divider />
      <FadeInDown>
        <Styled.ContentContainer>
          <Styled.LifeFocus>
            <h3>Life Focus</h3>
            <img alt="brain" src={Brain} />
            <Styled.Focus1>
              <span>Programming</span>
            </Styled.Focus1>
            <Styled.Focus2>
              <span>Work Out</span>
            </Styled.Focus2>
            <Styled.Focus3>
              <span>Financial Freedom</span>
            </Styled.Focus3>
            <Styled.Focus4>
              <span>Wife</span>
            </Styled.Focus4>
            <Styled.Focus5>
              <span>Get Mac???</span>
            </Styled.Focus5>
          </Styled.LifeFocus>
          <Styled.ProgrammingFocus>
            <h3>Programming Focus</h3>
            <ul>{renderProgrammingFocus()}</ul>
          </Styled.ProgrammingFocus>
        </Styled.ContentContainer>
      </FadeInDown>
    </Styled.Container>
  );
}
