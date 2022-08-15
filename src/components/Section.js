import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <ItemText>
        <h1>Model S</h1>
        <p>Order Online</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Custom Order</LeftButton>
          <RightButton>Existing Inventory</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url("images/model-s.jpg");
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding: 10vh;
  text-align: center;
`;

const LeftButton = styled.div`
  cursor: pointer;
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 256px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
`;

const RightButton = styled(LeftButton)`
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding: 15vh;
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinte 1.5s;
`;

const Buttons = styled.div``;
