export default function Ball() {
  return (
    <mesh position={[0, 1, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial />
    </mesh>
  );
}
