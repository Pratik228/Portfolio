import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const CyberpunkHovercar = ({ isMobile, ...props }) => {
  const { scene, animations } = useGLTF("/cyberpunk_hovercar/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions[Object.keys(actions)[0]].play();
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.7 : 1}
      position={isMobile ? [0, -1, 0] : [0, 0, 0]}
      {...props}
    />
  );
};

const CyberpunkHovercarCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 40 }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={true}
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          maxDistance={6}
          minDistance={3}
        />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 5]} intensity={1} />

        <CyberpunkHovercar isMobile={isMobile} />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
};

export default CyberpunkHovercarCanvas;
