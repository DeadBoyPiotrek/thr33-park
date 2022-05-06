import { Canvas } from '@react-three/fiber';
import Ball from '../components/Ball';
import Camera from '../components/Camera';
import Controls from '../components/Controls';
import Floor from '../components/Floor';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <Camera />
        <Controls />
        <Ball />
        <Floor />
        <ambientLight args={['blue', 1]} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
      </Canvas>
    </div>
  );
}
