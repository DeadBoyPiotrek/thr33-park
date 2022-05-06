import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import { angleToRadians } from '../utils/helpers';
function Controls() {
  const orbitControlsRef = useRef(null);
  useFrame(state => {
    if (orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(x * -angleToRadians(100));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      //   console.log('set:', (y + 4) * angleToRadians(90 - 30));
      //   console.log('get:', orbitControlsRef.current.getPolarAngle());
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef]);
  return (
    <OrbitControls
      //   minPolarAngle={angleToRadians(0)}
      //   maxPolarAngle={angleToRadians(360)}
      ref={orbitControlsRef}
    />
  );
}

export default Controls;
