import React from "react";

import * as Styled from "./Notes_Styled";

export default function Note() {
  return (
    <Styled.Container>
      <div>
        <span>{"//"}</span>
        <span>
          <p>
            This is my <strong>THIRD</strong> portfolio website. <br />
            If you are curious how my previous sites look like, visit my Github!
          </p>
          <ol>
            <h4>What's the difference?</h4>
            <li>
              Previous sites had many <strong>EXPERIMENTAL</strong> features
            </li>
            <li>My skills got better</li>
            <li>
              One last <strong>CLEAN</strong> website and no more!
            </li>
          </ol>
        </span>
        <span>{"//"}</span>
      </div>
    </Styled.Container>
  );
}
