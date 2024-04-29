import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Decal, Float, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ballRef = useRef();
  const rotationSpeed = 0.5;
  const bounceHeightMultiplier = 2;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    ballRef.current.rotation.y += rotationSpeed * clock.getDelta();
    ballRef.current.position.y =
      Math.sin(elapsedTime * bounceHeightMultiplier) * 0.1;
  });
  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={2}
      floatingRange={[0.1, 0.2]}
      floatingPeriod={2}
    >
      {" "}
      <ambientLight intensity={0.25} />{" "}
      <directionalLight position={[0, 0, 0.05]} />{" "}
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        {" "}
        <icosahedronGeometry args={[1, 1]} />{" "}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />{" "}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />{" "}
      </mesh>{" "}
    </Float>
  );
};
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {" "}
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        <Ball imgUrl={icon} />{" "}
      </Suspense>{" "}
      <Preload all />{" "}
    </Canvas>
  );
};
export default BallCanvas;
