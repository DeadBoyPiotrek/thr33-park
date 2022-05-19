import {
  GizmoHelper,
  OrbitControls,
  PerspectiveCamera,
  useHelper,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { Suspense, useRef } from 'react';
import { CameraHelper, SpotLightHelper } from 'three';
import BotWSkisCopy from '../components/BotWSkisCopy';
import Environment from '../components/Environment';
import Light from '../components/Light';
import { angleToRadians } from '../utils/helpers';
import styles from './index.module.scss';
const Scene = () => {
  //! helper ----------------------------
  const spotLight1 = useRef();
  const spotLight2 = useRef();
  const camera = useRef();
  useHelper(spotLight1, SpotLightHelper, 'blue');
  useHelper(spotLight2, SpotLightHelper, 'red');
  useHelper(camera, CameraHelper, 'green');
  //! helper ----------------------------
  //! controls ----------------------------
  const { scale } = useControls({
    scale: 1,
  });
  //! controls ----------------------------
  return (
    <>
      <GizmoHelper></GizmoHelper>
      <OrbitControls target={[0, 1.5, 0]} />
      <PerspectiveCamera
        ref={camera}
        makeDefault
        fov={40}
        position={[1.5, 0, 5]}
      />

      <ambientLight args={['#ffffff', 0.1]} />

      <spotLight
        ref={spotLight1}
        args={['#ffffff', 3, 5, 1]}
        position={[0, 5, 0]}
        castShadow
        angle={angleToRadians(40)}
      />
      <spotLight
        ref={spotLight2}
        args={['#ffffff', 3, 5, 1]}
        position={[0, -1, 0]}
        castShadow
        angle={angleToRadians(40)}
      />

      <BotWSkisCopy position={[0, 3, -0.5]} rotation={[210, 0, 0]} />
      <Light scale={scale} position={[1, 1, 1]} />
      <Environment />

      <axesHelper args={[5]} />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <Canvas className={styles.canvas} shadows>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
