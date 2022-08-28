import React, { useEffect, useMemo, useRef, useState } from "react";

import * as Styled from "./Sample.styled";

const Sample = () => {
  const [headerName, setHeaderName] = useState();
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [content, setContent] = useState({
    title: "Hello",
    body: "World",
  });
  const footerRef = useRef();

  useEffect(() => {
    getHeaderName();
  }, []);

  const article = useMemo(() => {
    return (
      <>
        <h1>{content.title}</h1>
        <article>{content.body}</article>
      </>
    );
  }, [content]);

  return (
    <Styled.Container>
      <Styled.Header>{headerName}</Styled.Header>
      <main>
        {isContentVisible && <Styled.Content>Content</Styled.Content>}
      </main>
      <Styled.Footer ref={footerRef}>Footer</Styled.Footer>
    </Styled.Container>
  );
};

export default Sample;
