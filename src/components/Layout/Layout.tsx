import React, { ReactNode } from "react";

import * as Styled from "./Layout_Styled";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return <Styled.Container>{children}</Styled.Container>;
}
