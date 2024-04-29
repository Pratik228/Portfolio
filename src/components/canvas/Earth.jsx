import React, { useRef, Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const { scene } = useGLTF("./earth/scene.gltf");

  return (
    <primitive
      object={scene}
      scale={isMobile ? 1.5 : 2.5}
      position={isMobile ? [0, -1, 0] : [0, 0, 0]}
    />
  );
};

const EarthRotationController = ({ isTyping }) => {
  const controlsRef = useRef(null);

  useEffect(() => {
    const controls = controlsRef.current;
    let animationFrameId;

    const animate = () => {
      const rotationSpeed = isTyping ? 3.5 : 1;
      controls.autoRotateSpeed = rotationSpeed;
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isTyping]);

  return (
    <OrbitControls
      ref={controlsRef}
      autoRotate
      autoRotateSpeed={1}
      enableZoom={false}
      enablePan={true}
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.5}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 3}
      maxDistance={8}
      minDistance={4}
    />
  );
};

const EarthCanvas = ({ isTyping }) => {
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
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <EarthRotationController isTyping={isTyping} />
        <Earth isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
