import React from "react";
import styled from "styled-components";

function Section({ title, description, leftButton, rightButton, bgImage }) {
  return (
    <Wrap backgroundImage={bgImage}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftButton}</LeftButton>
          <RightButton>{rightButton}</RightButton>
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
  // background-image: url("images/model-s.jpg");ki
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scroll-snap-align: start;
  z-index: 1;
  background-image: ${(props) => `url("images/${props.backgroundImage}")`};
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
  font-weight: bold;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: black;
  opacity: 0.65;
  background: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  padding: 15vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: bounce infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
