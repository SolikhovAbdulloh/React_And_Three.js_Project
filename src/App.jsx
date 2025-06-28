import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Contact from "./components/Contact";
import styled from "styled-components";
import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  background: linear-gradient(
    to right,
    #6a03a6bb,
    rgba(179, 133, 169, 0.9),
    #8105c9bb
  );
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}
