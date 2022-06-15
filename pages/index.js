import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Navigation from '../components/navigation/Navigation';
import Scene from '../components/scene/Scene';
import styles from './index.module.scss';
export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      {/* <div className={styles.scene}> */}
      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene />
        </Canvas>
      </Suspense>
      {/* </div> */}
    </div>
  );
}
