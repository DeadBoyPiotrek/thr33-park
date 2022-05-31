import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Skier from '../../public/models/skier/Scene';
import Trees from '../../public/models/trees/Scene';
import { angleToRadiansXYZ } from '../../utils/helpers';
import styles from './feature.module.scss';

function Feature({ name }) {
  return (
    <div className={styles.feature}>
      <div className={styles.feature__preview}>
        <Suspense fallback={null}>
          <Canvas className={styles.feature__canvas}>
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -10]} />
            <spotLight intensity={1} />
            <ambientLight intensity={2} />
            <OrbitControls />
            <Skier position={[2, 0, -2]} />
            <Skier position={[1, 2, 1]} />
            <Skier position={[-1, 0, 0]} />

            <Trees position={[1, 0, 5]} />
            <Trees position={[1, 0, -5]} />
            <mesh position={[0, 1, 4]}>
              <boxGeometry />
              <meshStandardMaterial color={'blue'} />
            </mesh>
            <mesh position={[2, 1, 0]}>
              <boxGeometry />
              <meshStandardMaterial color={'blue'} />
            </mesh>
            <mesh position={[2, 2, 2]}>
              <boxGeometry />
              <meshStandardMaterial color={'blue'} />
            </mesh>
            <mesh position={[-1, 3, 0]}>
              <boxGeometry />
              <meshStandardMaterial color={'blue'} />
            </mesh>
            <mesh rotation={angleToRadiansXYZ(-90, 0, 0)}>
              <planeGeometry args={[15, 15]} />
              <meshStandardMaterial color={'black'} />
            </mesh>
            <axesHelper />
          </Canvas>
        </Suspense>
      </div>
      <div className={styles.feature__name}>{name}</div>
    </div>
  );
}

export default Feature;
