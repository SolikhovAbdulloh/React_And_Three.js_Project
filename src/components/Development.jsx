import { useGLTF } from "@react-three/drei";

function Development() {
  const { scene } = useGLTF("/models/apple.glb");
  return <primitive object={scene} scale={0.5} />;
}

export default Development;
