import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;
const Contiener = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  max-width: 1440px;
  padding: 0 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const Tittle = styled.h1``;
const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Line = styled.p`
  height: 4px;
  background-color: #f0eeee;
  width: 30px;
`;
const Subtitle = styled.h2`
  color: #76345b;
`;
const Decs = styled.h3`
  max-width: 250px;
  font-size: 30px;
`;
const Button = styled.button`
  background-color: #da4ea2;
  height: 50px;
  width: 300px;
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
`;
const Rigth = styled.div`
  flex: 2;
  position: relative;
  height: 100%;
`;
const Img = styled.img`
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 1s ease infinite alternate;
  @media only screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @keyframes animate {
    100% {
      transform: translateY(30px);
    }
    0% {
      transform: translateY(10px);
    }
  }
`;
export default function Hero() {
  return (
    <Section>
      <Navbar />
      <Contiener>
        <Left>
          <Tittle>Think. Make. Solve</Tittle>
          <WhatWeDo>
            <Line></Line>
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Decs>
            We enjoy creating delignhtful,human-centered digital experience
          </Decs>
          <Button>Learn more</Button>
        </Left>
        <Rigth>
          <Canvas style={{ width: "100%", height: "100%" }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.3}>
              <MeshDistortMaterial
                color="#572280"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="icons/moon.png" />
        </Rigth>
      </Contiener>
    </Section>
  );
}
