// angle to radians
function angleToRadians(angle) {
  return angle * (Math.PI / 180);
}

// angle to radians for x y z
function angleToRadiansXYZ(x, y, z) {
  return [angleToRadians(x), angleToRadians(y), angleToRadians(z)];
}

export { angleToRadians, angleToRadiansXYZ };
