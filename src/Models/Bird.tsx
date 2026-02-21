// import { useEffect, useRef } from "react";
// import { Mesh } from "three"; // 1. Added Mesh import
// import { useFrame } from "@react-three/fiber";
// import { useAnimations, useGLTF } from "@react-three/drei";

// import birdScene from "../assets/3d/bird.glb";

// export default function Bird() {
//   // 2. Explicitly typed the ref as a Mesh to fix the 'unknown' error
//   const birdRef = useRef<Mesh>(null!); 

//   const { scene, animations } = useGLTF(birdScene);
//   const { actions } = useAnimations(animations, birdRef);

//   useEffect(() => {
//     if (actions["Take 001"]) {
//         actions["Take 001"].play();
//     }
//   }, [actions]);

//   useFrame(({ clock, camera }) => {
//     // 3. Added a guard clause to ensure birdRef.current exists before use
//     if (!birdRef.current) return;

//     // Update the Y position to simulate bird-like motion
//     birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

//     // Check if the bird reached a certain endpoint relative to the camera
//     if (birdRef.current.position.x > camera.position.x + 10) {
//       birdRef.current.rotation.y = Math.PI;
//     } else if (birdRef.current.position.x < camera.position.x - 10) {
//       birdRef.current.rotation.y = 0;
//     }

//     // Update the X and Z positions based on the direction
//     if (birdRef.current.rotation.y === 0) {
//       birdRef.current.position.x += 0.01;
//       birdRef.current.position.z -= 0.01;
//     } else {
//       birdRef.current.position.x -= 0.01;
//       birdRef.current.position.z += 0.01;
//     }
//   });

//   return (
//     <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
//       <primitive object={scene} />
//     </mesh>
//   );
// }


import { useEffect, useRef } from "react";
import * as THREE from "three"; // Import all of Three
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export default function Bird() {
  // Use THREE.Mesh specifically
  const birdRef = useRef<THREE.Mesh>(null); 

  // Load model
  const { scene, animations } = useGLTF(birdScene);
  
  // Cast the ref to 'any' here specifically for this hook to stop the TS2345 error
  const { actions } = useAnimations(animations, birdRef as any);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    // This Guard Clause is the most important fix for 'unknown' errors
    if (!birdRef.current) return;

    // Simulate bird-like motion
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Movement logic - TypeScript now knows 'position' and 'rotation' exist
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}