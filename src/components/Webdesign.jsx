import { useGLTF } from "@react-three/drei";

export default function Webdesign() {
  const { scene } = useGLTF("/models/shoess.glb");
  return <primitive object={scene} scale={1.5} />;
}
