import { MeshReflectorMaterial } from '@react-three/drei';
import React from 'react';
import { angleToRadiansXYZ } from '../../utils/helpers';
function Floor() {
  return (
    <mesh rotation={angleToRadiansXYZ(-90, 0, 0)} receiveShadow>
      <planeGeometry args={[15, 15]} />

      <MeshReflectorMaterial
        opacity={1}
        blur={[400, 100]}
        resolution={1024}
        mixBlur={0.9}
        mixStrength={15}
        color="#4a4e69"
        metalness={0.6}
        roughness={1}
      />
    </mesh>
  );
}

export default Floor;
