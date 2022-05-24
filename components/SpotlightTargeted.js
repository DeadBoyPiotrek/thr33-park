import { SpotLight } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Vector3 } from 'three';

function SpotlightTargeted({ vec = new Vector3(), ...props }) {
  const light = useRef();

  useFrame(() => {
    light.current.target.position.lerp(vec.set(0, -2, 0), 0.1);
  });
  return (
    <SpotLight
      color={'#ffffff'}
      castShadow
      ref={light}
      penumbra={1}
      distance={7}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={20}
      {...props}
    />
  );
}

export default SpotlightTargeted;
