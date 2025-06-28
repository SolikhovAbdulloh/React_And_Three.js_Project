import { useGLTF } from "@react-three/drei";

function Social() {
  const { scene } = useGLTF("/models/iphone_16_pro.glb");
  return <primitive object={scene} scale={0.5} />;
}

export default Social;
