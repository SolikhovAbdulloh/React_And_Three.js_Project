import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
function Cube() {
  const textRef = useRef();

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="#dc9dcd">
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#9dc0dc"]} />
          <Text ref={textRef} fontSize={1} color={"#128114"}>
            Solikhov
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}

export default Cube;
