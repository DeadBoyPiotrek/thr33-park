import { PerspectiveCamera } from '@react-three/drei';
import React from 'react';

function Camera() {
  return <PerspectiveCamera makeDefault position={[0, 1, 3]} />;
}

export default Camera;
