import styled from "styled-components";
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
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: auto; // ✅ Mobilda avtomatik balandlik
    padding: 60px 0; // ✅ Bo‘shliq berildi
  }
`;
const Contiener = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px; // ✅ Kattaroq ekranlar uchun cheklov
  margin: auto;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;
const Right = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    height: 400px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
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
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

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
