import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { Suspense } from 'react';

import styles from './feature.module.scss';

const dynamicComponents = {
  'flat-rail': dynamic(() =>
    import('../../../public/features/flatRail/FlatRail.js')
  ),
  'z-rail': dynamic(() => import('../../../public/features/zRail/ZRail.js')),
  'flat-down-rail': dynamic(() =>
    import('../../../public/features/flatDownRail/FlatDownRail.js')
  ),
  'obstacle-rail': dynamic(() =>
    import('../../../public/features/obstacleRail/ObstacleRail.js')
  ),
  'kicker-6-m': dynamic(() =>
    import('../../../public/features/kicker6M/Kicker6M.js')
  ),
};

const Scene = ({ component }) => {
  const Feature = dynamicComponents[component];
  return (
    <>
      <PerspectiveCamera makeDefault fov={50} position={[0, 5, -10]} />
      <ambientLight intensity={0.5} />
      <OrbitControls />
      {/* <axesHelper /> */}
      <Feature position={[0, -0.25, 0]} />
    </>
  );
};

function Feature() {
  const router = useRouter();
  const { featureId } = router.query;

  return (
    <div className={styles.container}>
      <Suspense fallback={null}>
        <Canvas shadows>
          <Scene component={featureId} />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Feature;
