import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 200px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 50px 0;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  gap: 90px;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
    justify-content: center;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 2;
  height: 600px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const Tittle = styled.h1`
  font-size: 50px;

  @media (max-width: 768px) {
    font-size: 40px;
    max-width: 300px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Line = styled.p`
  height: 4px;
  background-color: #f0eeee;
  width: 30px;
`;

const Subtitle = styled.h2`
  color: #76345b;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Decs = styled.h3`
  max-width: 300px;
  font-weight: normal;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  height: 50px;
  width: 300px;
  max-width: 100%;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;

export default function Who() {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{ position: [5, 5, 5], fov: 20 }}
          >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Tittle>Think. Make. Solve</Tittle>
          <WhatWeDo>
            <Line />
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Decs>
            A creative group of designers and developers with a passion for the
            arts
          </Decs>
          <Button>See our works</Button>
        </Right>
      </Container>
    </Section>
  );
}
