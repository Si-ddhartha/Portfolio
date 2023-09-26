import {React, useRef, useState} from "react";
import { useFrame } from "react-three-fiber";

import { useGLTF } from "@react-three/drei";


export function Dog(props) {
  const { nodes, materials } = useGLTF("/models/dog.glb");

  const groupRef = useRef();

  // Define state to control the initial rotation
  // const [rotationComplete, setRotationComplete] = useState(false);

  // Set the rotation axis and speed
  // const rotationSpeed = 0.6;

  // useFrame(() => {
  //   // Rotate the model until the rotation completes
  //   if (!rotationComplete) {
  //     groupRef.current.rotation.y += rotationSpeed;
      
  //     // Define a threshold for the number of rotations
  //     const rotationThreshold = 6 * Math.PI*2;
      
  //     // Check if the rotation threshold has been reached
  //     if (groupRef.current.rotation.y >= rotationThreshold) {
  //       setRotationComplete(true);
  //     }
  //   }
  // });


  return (
    <group ref={groupRef} {...props} dispose={null}>
        <ambientLight color={0xcccccc} intensity={2} />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.main.geometry}
            material={materials.palette}
            position={[2, -1, -2]}
            // scale={[1.5, 1.5, 1.5]}
            rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials["Material.001"]}
            position={[-4.2, -0.9, -4.5]}
            scale={[7.05, 1, 7.05]}
        />
    </group>
  );
}

useGLTF.preload("/models/dog.glb");

export default Dog
