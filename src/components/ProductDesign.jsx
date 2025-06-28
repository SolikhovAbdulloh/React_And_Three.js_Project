import { useGLTF } from "@react-three/drei";

function ProductDesign() {
   const { scene } = useGLTF("/models/matiz.glb");
   return <primitive object={scene} scale={0.3} />;
}

export default ProductDesign;
