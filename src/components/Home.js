import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Onlile for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        bgImage="model-s.jpg"
      />
      <Section
        title="Model 3"
        description="Order Onlile for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        bgImage="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Onlile for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        bgImage="model-x.jpg"
      />
      <Section
        title="Model Y"
        description="Order Onlile for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        bgImage="model-y.jpg"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftButton="Order Now"
        rightButton="Learn More"
        bgImage="solar-roof.jpg"
      />
      <Section
        title="Solar Panel"
        description="Order Onlile for Touchless Delivery"
        leftButton="Order Now"
        rightButton="Learn More"
        bgImage="solar-panel.jpg"
      />
      <Section
        title="Accessories"
        leftButton="Shop Now"
        bgImage="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
