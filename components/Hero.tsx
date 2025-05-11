"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "./HeroText";
import ParallaxBackground from "./parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "./Loader";
import { FC } from "react";
import { Vector3 } from "three";

const Hero: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                // TypeScript-safe conditional props
                scale={isMobile ? 0.23 : undefined}
                position={isMobile ? [0, -1.5, 0] : undefined}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

function Rig(): null {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position as Vector3,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });

  return null;
}

export default Hero;
