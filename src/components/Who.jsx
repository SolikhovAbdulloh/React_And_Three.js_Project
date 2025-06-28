import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const Contiener = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  width: 1400px;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 2;
  height: 600px;
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
const Decs = styled.h3``;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
// const Img = styled.img`
//   height: 800px;
//   height: 600px;
//   object-fit: contain;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   margin: auto;
// `;
export default function Who() {
  return (
    <Section>
      <Contiener>
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
        <Rigth>
          <Tittle>Think. Make. Solve</Tittle>
          <WhatWeDo>
            <Line></Line>
            <Subtitle>What we do</Subtitle>
          </WhatWeDo>
          <Decs>
            a creative group of designres and developeds with a passion for the
            arts
          </Decs>
          <Button>See our works</Button>
        </Rigth>
      </Contiener>
    </Section>
  );
}
