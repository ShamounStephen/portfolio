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

const Hero: FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section id='home'className="relative flex min-h-screen items-start justify-center overflow-hidden md:items-start md:justify-start">
    <HeroText />
    <ParallaxBackground />
    <figure className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      <Canvas camera={{ position: [0, 1, 3] }}>
        <Suspense fallback={<Loader />}>
          <Float>
            <Astronaut
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

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
