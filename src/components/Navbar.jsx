import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Section = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Container = styled.div`
  width: 1400px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Button = styled.button`
  cursor: pointer;
  width: 100px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: rebeccapurple;
  color: white;
`;

function Navbar() {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/icons/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <FaSearch />
          <Button>Hire now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

export default Navbar;
