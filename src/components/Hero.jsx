import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  /* for setting the hero on the column */
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

// Left Section

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 74px;
  font-family: "Times New Roman", Times, serif;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  font-weight: 500;
  background: rgb(190, 29, 116);
  background: linear-gradient(
    90deg,
    rgba(190, 29, 116, 1) 3%,
    rgba(121, 91, 231, 1) 36%,
    rgba(103, 200, 181, 1) 74%
  );
  border: none;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 5px red;
`;
const SubTitle = styled.h2`
  font-family: "Times New Roman", Times, serif;
  color: rgb(222, 115, 158);
`;

const Desc = styled.p`
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  color: rgb(232, 255, 247);
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(30px);
    }
  }
`;

// Right Section with 3d Model

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>"Let's Build a Better You"</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <SubTitle>The Services We Provide</SubTitle>
          </WhatWeDo>
          <Desc>Web 3.0 is now the hottest Technology</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model*/}
          <Img src="./img/moon.png"></Img>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
