/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/Ufo.glb
Author: tab1bit0 (https://sketchfab.com/tab1bit0)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ufo-8288a85fdf9d48f6a9a9ec6df27d5aa0
Title: ufo
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useGeneral } from "../../context";
import { useSpring, animated } from "@react-spring/three";

export function Ufo(props) {
  const { nodes, materials } = useGLTF("./models/Ufo.glb");
  const ufoRef = useRef();
  const { location, setLocation } = useGeneral();

  const [position] = useSpring(
    {
      "position-y": location === "up" ? 0 : -1,
      scale: location === "up" ? [-0.125, 0.03, 0.125] : [0, 0, 0],
      config: {
        mass: 5,
        tension: 400,
        friction: 50,
        precision: 0.0001,
      },
    },
    [location]
  );

  useFrame(() => {
    ufoRef.current.rotation.y += 0.02;
    ufoRef.current.position.z =
      (Math.sin(Date.now() * 0.001) * window.innerWidth) / 6000;
  });

  return (
    <animated.group
      {...props}
      {...position}
      dispose={null}
      ref={ufoRef}
      rotation={[0, 0, -Math.PI]}
    >
      <mesh geometry={nodes.Object_4.geometry} material={materials.Body} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.Glass} />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Dome.belt"]}
      />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Bottom} />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials["Glass.mini"]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["Bottom.001"]}
      />
    </animated.group>
  );
}

useGLTF.preload("./models/Ufo.glb");
