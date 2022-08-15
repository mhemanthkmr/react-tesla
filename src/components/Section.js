import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online</p>
      </ItemText>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url("images/model-3.jpg");
  background-repeat: no-repeat;
  background-position: center;
`;

const ItemText = styled.div`
  padding: 10vh;
  text-align: center;
`;
