/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: wallmasterr (https://sketchfab.com/wallmasterr)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/tenhun-falling-spaceman-fanart-9fd80b6a259f41fd99e6f56eee686dc5
Title: Tenhun Falling spaceman (FanArt)
*/
'use client'
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GroupProps } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import * as THREE from "three";

interface AstronautProps extends GroupProps {
  position?: [number, number, number];
  scale?: number;
}

export function Astronaut({ position = [1.3, -1, 0], scale = 0.3, ...props }: AstronautProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/tenhun_falling_spaceman_fanart.glb"
  ) as any;

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const yPosition = useMotionValue(5);
  const ySpring = useSpring(yPosition, { damping: 30 });

  useEffect(() => {
    ySpring.set(-1);
  }, [ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={scale}
      position={position}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              {[
                "Cube001_0", "Cube005_0", "Cube002_0", "Plane_0",
                "Cube008_0", "Cube004_0", "Cube003_0", "Cube_0",
                "Cube009_0", "Cube011_0"
              ].map((name) => (
                <skinnedMesh
                  key={name}
                  name={name}
                  geometry={nodes[name].geometry}
                  material={materials["AstronautFallingTexture.png"]}
                  skeleton={nodes[name].skeleton}
                />
              ))}
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
