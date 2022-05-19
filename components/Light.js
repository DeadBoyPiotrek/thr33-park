function Light({ scale }) {
  return (
    <mesh scale={scale} receiveShadow>
      <cylinderGeometry args={[0.1, 0.1, 2, 10, 1]} />
      <meshStandardMaterial emissive={[1, 1, 1]} color="#ffffff" />
    </mesh>
  );
}

export default Light;
