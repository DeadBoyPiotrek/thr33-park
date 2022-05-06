import React from 'react';
import { angleToRadiansXYZ } from '../utils/helpers';
function Floor() {
  return (
    <mesh rotation={angleToRadiansXYZ(-90, 0, 0)}>
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Floor;
