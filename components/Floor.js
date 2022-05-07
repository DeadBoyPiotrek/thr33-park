import React from 'react';
import { angleToRadiansXYZ } from '../utils/helpers';
function Floor() {
  return (
    <mesh rotation={angleToRadiansXYZ(-90, 0, 0)} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#ec87f0" />
    </mesh>
  );
}

export default Floor;
