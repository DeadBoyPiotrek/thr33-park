import { ContactShadows, Float } from '@react-three/drei';
export default function Ball() {
  return (
    <group>
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[0, 2, 0]} receiveShadow castShadow>
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          <torusKnotGeometry args={[1, 0.25, 256, 24, 1, 3]} />
          <meshStandardMaterial
            color={'#0882bb'}
            metalness={0.5}
            roughness={0.1}
          />
        </mesh>
      </Float>
      <ContactShadows scale={10} blur={3} opacity={0.3} far={10} />
    </group>
  );
}
