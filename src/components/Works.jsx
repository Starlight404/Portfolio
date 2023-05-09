import React from "react";
import styled from "styled-components";

 const data= [
  "Web Design",
  "Web Development",
  "Social Media Marketing",
  "Product Design",
  "Data Analyzing",
];

// Section
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

// container
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

// Left Section
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

// List 
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

// List Item
const ListItem = styled.li`
  font-size: 70px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  ::after{
    content: "test";
    position: absolute;
    top: 0;
    left: 0;
  }
`;

// Right Section
const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Works;
