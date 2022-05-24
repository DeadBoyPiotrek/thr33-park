import { PerspectiveCamera, Sparkles } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import BotWSkisCopy from '../components/BotWSkisCopy';
import Controls from '../components/Controls';
import Floor from '../components/Floor';
import { angleToRadians } from '../utils/helpers';
import styles from './index.module.scss';
import SpotlightTargeted from '/components/SpotlightTargeted';

const Scene = () => {
  return (
    <>
      <Controls />

      <PerspectiveCamera makeDefault fov={30} position={[0, 9, 10]} />
      <spotLight
        color="#ffffff"
        distance={10}
        position={[0, 5, 0]}
        castShadow
        angle={angleToRadians(50)}
        intensity={6}
        penumbra={1}
      />

      <SpotlightTargeted position={[0, 5.2, 0]} />
      <ambientLight color={'#ffffff'} intensity={0.2} />
      <BotWSkisCopy position={[0, 2.7, -0.5]} rotation={[210, 0, 0]} />

      <Floor />
      <Sparkles
        count={150}
        position={[0, 3, 0]}
        speed={0.05}
        size={5}
        scale={[13, 7, 13]}
      />

      <Sparkles
        count={50}
        position={[0, 3, 0]}
        speed={0.15}
        size={15}
        scale={[13, 7, 13]}
      />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [-1, 2, 6], fov: 50, near: 1, far: 20 }}
          className={styles.canvas}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
