import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Header() {
  const [BurgerStatus, setBurgerStatus] = useState(true);
  return (
    <Container>
      <a href="#/">
        <img src="images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#/">Model S</a>
        <a href="#/">Model 3</a>
        <a href="#/">Model X</a>
        <a href="#/">Model Y</a>
        <a href="#/">Solar Roof</a>
        <a href="#/">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="#/">Shop</a>
        <a href="#/">Account</a>
        <CustomMenu onClick={() => setBurgerStatus(false)} />
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrap>
          <CustomClose onClick={() => setBurgerStatus(true)} />
        </CloseWrap>
        <li>
          <a href="#/">Existing Inventory</a>
        </li>
        <li>
          <a href="#/">Used Inventory</a>
        </li>
        <li>
          <a href="#/">Trade In</a>
        </li>
        <li>
          <a href="#/">Roadaster</a>
        </li>
        <li>
          <a href="#/">CyberTruck</a>
        </li>
        <li>
          <a href="#/">CyberTruck</a>
        </li>
        <li>
          <a href="#/">CyberTruck</a>
        </li>
        <li>
          <a href="#/">CyberTruck</a>
        </li>
        <li>
          <a href="#/">CyberTruck</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
