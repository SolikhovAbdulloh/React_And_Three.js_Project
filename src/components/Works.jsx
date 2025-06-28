import styled, { keyframes } from "styled-components";
import { Data } from "../utils/Data";
import { useState } from "react";
import ProductDesign from "./ProductDesign";
import Development from "./Development";
import Webdesign from "./Webdesign";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Social from "./Social";
import Illustration from "./Illustration";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
`;
const moveText = keyframes`
  to {
    width: 100%;
  }
`;
const Contiener = styled.div`
  display: flex;
  width: 1400px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const List = styled.ul`
  list-style: none;
  flex-direction: column;
  display: flex;
  gap: 20px;
`;
const ListItem = styled.li`
  position: relative;
  font-size: 80px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;

  &::after {
    content: ${({ text }) => `"${text}"`};
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0;
    overflow: hidden;
    display: block;
    white-space: nowrap;
  }
  &:hover::after {
    animation: ${moveText} 0.5s linear forwards;
  }
`;

export default function Works() {
  const [work, setwork] = useState("Web Design");
  return (
    <Section>
      <Contiener>
        <Left>
          <List>
            {Data.map((item, idx) => (
              <ListItem key={idx} text={item} onClick={() => setwork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Web Design" ? (
            <div style={{ width: "100%", height: "100%" }}>
              <Canvas camera={{ position: [5, 5, 5], fov: 10 }}>
                <ambientLight />
                <directionalLight position={[3, 3, 3]} />
                <Webdesign />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          ) : work === "Development" ? (
            <div style={{ width: "100%", height: "100%" }}>
              <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} />
                <Development />

                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          ) : work === "Product Design" ? (
            <div style={{ width: "100%", height: "100%" }}>
              <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} />
                <ProductDesign />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          ) : work === "Social Media" ? (
            <div style={{ width: "100%", height: "100%" }}>
              <Canvas camera={{ position: [0, 1, 5], fov: 10 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} />
                <Social />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          ) : (
            <div style={{ width: "100%", height: "100%" }}>
              <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                <ambientLight />
                <directionalLight position={[5, 5, 5]} />
                <Illustration />
                <OrbitControls enableZoom={false} autoRotate />
              </Canvas>
            </div>
          )}
        </Right>
      </Contiener>
    </Section>
  );
}
