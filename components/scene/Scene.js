import { PerspectiveCamera } from '@react-three/drei';
import { angleToRadians } from '../../utils/helpers';
import Particles from '../Particles';
import BotWSkisCopy from './BotWSkisCopy';
import Controls from './Controls';
import Floor from './Floor';
import SpotlightTargeted from './SpotlightTargeted';

const Scene = () => {
  return (
    <>
      <Controls />

      <PerspectiveCamera near={9} makeDefault fov={30} position={[0, 9, 10]} />
      <spotLight
        color="#ffffff"
        distance={10}
        position={[0, 5, 0]}
        castShadow
        angle={angleToRadians(50)}
        intensity={3}
        penumbra={1}
      />

      <SpotlightTargeted position={[0, 5.1, 0]} />
      {/* <ambientLight color={'#ffffff'} intensity={0.2} /> */}
      <BotWSkisCopy position={[0, 2.7, -0.5]} rotation={[210, 0, 0]} />

      <Floor />

      <Particles count={300} />
      {/* <axesHelper /> */}
    </>
  );
};

export default Scene;
