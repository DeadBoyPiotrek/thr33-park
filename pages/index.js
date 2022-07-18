import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Navigation from '../components/navigation/Navigation';
import Scene from '../components/scene/Scene';
import styles from './index.module.scss';
export default function Home() {
  return (
    <main className={styles.container}>
      <Navigation />

      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene />
        </Canvas>
      </Suspense>
    </main>
  );
}
