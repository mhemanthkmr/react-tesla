import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <h1>Hello</h1>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background: orange;
`;
