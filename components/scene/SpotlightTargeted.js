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
      color={'#6288ee'}
      castShadow
      ref={light}
      penumbra={10}
      distance={17}
      angle={3}
      attenuation={5}
      anglePower={4}
      intensity={0.1}
      {...props}
    />
  );
}

export default SpotlightTargeted;
