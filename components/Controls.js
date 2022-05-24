import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { angleToRadians } from '../utils/helpers';
function Controls() {
  const orbitControlsRef = useRef();
  useFrame(state => {
    if (orbitControlsRef.current) {
      const { x } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(x * angleToRadians(30));
      //TODO set the polar angle on the y axis movement
      //TODO make x axis movement more smooth
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      target={[0, 1.5, 0]}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      minPolarAngle={angleToRadians(50)}
      maxPolarAngle={angleToRadians(80)}
      ref={orbitControlsRef}
    />
  );
}

export default Controls;
