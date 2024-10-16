import React from 'react'
import styled from 'styled-components'
import Section from './Section'


function Home() {
  return (
    <Container>
      <Section 
        title="Model S"
        description="Order online for touchless delivery"
        BackgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Model Y"
        description="Order online for touchless delivery"
        BackgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Model 3"
        description="Order online for touchless delivery"
        BackgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Model X"
        description="Order online for touchless delivery"
        BackgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        BackgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section 
        title="Solar for new Roofs"
        description="Solar Roof Costs Less than a New Roof plus Solar Panels"
        BackgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section 
        title="Accessories"
        description=""
        BackgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`