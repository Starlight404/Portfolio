import React from "react";
import styled from "styled-components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  /* for setting the hero on the column */
  
  align-items: center;
  justify-content: center;

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
  flex: 1;
  
`;

// const Img = styled.img`
//   width: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
//   animation: animate 2s infinite ease alternate;

//   @keyframes animate {
//     to {
//       transform: translateY(20px);
//     }
//   }
// `;

// Right Section with 3d Model

const Right = styled.div`
  flex: 1;
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


const SubTitle = styled.h2`
  font-family: "Times New Roman", Times, serif;
  color: rgb(222, 115, 158);
`;

const Desc = styled.p`
  font-size: 24px;
  font-family: "Times New Roman", Times, serif;
  color: rgb(232, 255, 247);
`;
const Button = styled.button`
  width: 100px;
  font-size: 15px;
  padding: 10px;
  font-weight: 500;
  background: rgb(241,109,180);
  background: linear-gradient(90deg, rgba(241,109,180,1) 0%, rgba(121,91,231,1) 49%, rgba(176,59,191,1) 99%);
  border: none;
  color: black;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 5px red;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          {/* 3d model*/}
          
        </Left>
        <Right>
          <Title>"Make Your Portfolio Stand Out"</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <SubTitle>The Services We Provide</SubTitle>
          </WhatWeDo>
          <Desc>Web 3.0 is now the hottest Technology</Desc>
          <Button>See Our Work</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
