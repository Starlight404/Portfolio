
import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  width: 1400px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`;
const Logo = styled.img`
  height: 70px;
`;
const List = styled.ul`

  display: flex;
  gap: 20px;
  list-style: none;
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const  Icon = styled.img`

  width: 20px;
  cursor: pointer;
`;
const  Button = styled.button`
  width: 100px;
  padding: 10px;
  background: rgb(190,29,116);
  background: linear-gradient(90deg, rgba(190,29,116,1) 37%, rgba(69,132,189,1) 88%);
  border: none;
  color: gold;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 3px 3px 5px red;

`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/logot.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Who</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png"></Icon>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
