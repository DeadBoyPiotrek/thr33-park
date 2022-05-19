import { Environment } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';
function Environment2() {
  return (
    <Environment background resolution={100}>
      <mesh>
        <sphereGeometry args={[50, 100, 100]} />

        <meshBasicMaterial side={THREE.BackSide} color="#000000" />
      </mesh>
    </Environment>
  );
}

export default Environment2;
