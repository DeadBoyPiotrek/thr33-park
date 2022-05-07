import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Ball from '../components/Ball';
import Camera from '../components/Camera';
// import Controls from '../components/Controls';
import Environment from '../components/Environment';
// import Floor from '../components/Floor';
import { angleToRadians } from '../utils/helpers';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas} shadows>
        <Camera />
        <OrbitControls />
        {/* <Controls /> */}
        <Ball />
        {/* <Floor /> */}
        <ambientLight args={['white', 0.1]} />

        <spotLight
          args={['white', 3, 10, 1, angleToRadians(45)]}
          position={[0, 5, 0]}
          castShadow
        />
        <Environment />
      </Canvas>
    </div>
  );
}
