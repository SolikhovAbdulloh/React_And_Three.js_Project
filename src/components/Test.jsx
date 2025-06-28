import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Cube from "./Cube";

const Contiener = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Contiener>
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 2]} />
        <Cube />
      </Canvas>
    </Contiener>
  );
};

export default Test;
