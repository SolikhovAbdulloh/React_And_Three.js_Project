import { useGLTF } from "@react-three/drei";

function Illustration() {
  const { scene } = useGLTF("/models/ira.glb");
  return <primitive object={scene} scale={0.5} />;
}

export default Illustration;
