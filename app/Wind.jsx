import {
  MathUtils,
  BufferGeometry,
  PointsMaterial,
  Float32BufferAttribute,
} from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { angleVector, randomDecimal } from "./utils";

export const Wind = ({ bearing }) => {
  // create the particle variables
  const particleCount = 300;
  const particleSize = 0.03;
  const particleTrailSize = 0;
  const particleTrailGap = 0.01;
  const particleSpeed = 0.02;
  const particleDepth = 4;
  const scale = 50;

  // container width and height
  const { size } = useThree();
  const width = size.width / scale;
  const height = size.height / scale;
  const bounds = {
    top: -(height / 2),
    bottom: height / 2,
    left: -(width / 2),
    right: width / 2,
  };

  const particles = [];
  const particleOptions = [];
  // now create the individual particles
  for (var p = 0; p < particleCount; p++) {
    const x = MathUtils.randFloatSpread(width);
    const y = MathUtils.randFloatSpread(height);
    // const z = 0;
    const z = MathUtils.randFloatSpread(particleDepth);
    particles.push(x, y, z);
    for (let i = 0; i < particleTrailSize; i++) {
      particles.push(x, y, z);
    }
    particleOptions.push({
      speed: particleSpeed + (0.5 - randomDecimal()) / 10000,
    });
  }

  const geometry = new BufferGeometry();
  geometry.dynamic = true;
  geometry.setAttribute("position", new Float32BufferAttribute(particles, 3));
  const material = new PointsMaterial({ color: "white", size: particleSize });

  let log = true;
  let count = 0;
  useFrame(() => {
    const particles = geometry.attributes.position.array;
    particleOptions.forEach((p, i) => {
      const index = i * (3 + particleTrailSize * 3);
      const particle = {
        x: index,
        y: index + 1,
        z: index + 2,
      };
      const vector = angleVector(bearing, p.speed);
      // x
      particles[particle.x] += vector.x;
      if (particles[particle.x] > bounds.right) {
        particles[particle.x] = bounds.left;
      } else if (particles[particle.x] < bounds.left) {
        particles[particle.x] = bounds.right;
      }
      // y
      particles[particle.y] += vector.y;
      if (particles[particle.y] > bounds.bottom) {
        particles[particle.y] = bounds.top;
      } else if (particles[particle.y] < bounds.top) {
        particles[particle.y] = bounds.bottom;
      }
      // trail
      const gap = angleVector(bearing, particleTrailGap);
      for (let n = 0; n < particleTrailSize; n++) {
        const x = particle.x + 3 * (n + 1);
        const y = particle.y + 3 * (n + 1);
        const z = particle.z + 3 * (n + 1);
        particles[x] = particles[particle.x] - gap.x * n;
        particles[y] = particles[particle.y] - gap.y * n;
        particles[z] = particles[particle.z];
      }
      if (log) {
        //console.log(i, particle, p.trail.length, particles.length);
      }
    });
    if (count === 1) {
      log = false;
    }
    count++;
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points args={[geometry, material]} sortParticles={true} />
      {/* <Effects /> */}
    </>
  );
};

export const Wind2 = ({ bearing }) => {
  // create the particle variables
  const particleCount = 300;
  const particleSize = 0.03;
  const particleTrailSize = 2;
  const particleTrailGap = 0.01;
  const particleSpeed = 0.008;
  const particleDepth = 4;
  const scale = 50;

  // container width and height
  const { size } = useThree();
  const width = size.width / scale;
  const height = size.height / scale;
  const bounds = {
    top: -(height / 2),
    bottom: height / 2,
    left: -(width / 2),
    right: width / 2,
  };

  const particles = [];
  const particleOptions = [];
  // now create the individual particles
  for (var p = 0; p < particleCount; p++) {
    const x = MathUtils.randFloatSpread(width);
    const y = MathUtils.randFloatSpread(height);
    // const z = 0;
    const z = MathUtils.randFloatSpread(particleDepth);
    particles.push(x, y, z);
    for (let i = 0; i < particleTrailSize; i++) {
      particles.push(x, y, z);
    }
    particleOptions.push({
      speed: particleSpeed + (0.5 - randomDecimal()) / 10000,
    });
  }

  const geometry = new BufferGeometry();
  geometry.dynamic = true;
  geometry.setAttribute("position", new Float32BufferAttribute(particles, 3));
  const material = new PointsMaterial({
    color: "rgb(136, 18, 255)",
    size: particleSize,
  });

  let log = true;
  let count = 0;
  useFrame(() => {
    const particles = geometry.attributes.position.array;
    particleOptions.forEach((p, i) => {
      const index = i * (3 + particleTrailSize * 3);
      const particle = {
        x: index,
        y: index + 1,
        z: index + 2,
      };
      const vector = angleVector(bearing, p.speed);
      // x
      particles[particle.x] += vector.x;
      if (particles[particle.x] > bounds.right) {
        particles[particle.x] = bounds.left;
      } else if (particles[particle.x] < bounds.left) {
        particles[particle.x] = bounds.right;
      }
      // y
      particles[particle.y] += vector.y;
      if (particles[particle.y] > bounds.bottom) {
        particles[particle.y] = bounds.top;
      } else if (particles[particle.y] < bounds.top) {
        particles[particle.y] = bounds.bottom;
      }
      // trail
      const gap = angleVector(bearing, particleTrailGap);
      for (let n = 0; n < particleTrailSize; n++) {
        const x = particle.x + 3 * (n + 1);
        const y = particle.y + 3 * (n + 1);
        const z = particle.z + 3 * (n + 1);
        particles[x] = particles[particle.x] - gap.x * n;
        particles[y] = particles[particle.y] - gap.y * n;
        particles[z] = particles[particle.z];
      }
      if (log) {
        //console.log(i, particle, p.trail.length, particles.length);
      }
    });
    if (count === 1) {
      log = false;
    }
    count++;
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points args={[geometry, material]} sortParticles={true} />
      {/* <Effects /> */}
    </>
  );
};

export const Wind3 = ({ bearing }) => {
  // create the particle variables
  const particleCount = 100;
  const particleSize = 0.03;
  const particleTrailSize = 1;
  const particleTrailGap = 0.01;
  const particleSpeed = 0.005;
  const particleDepth = 4;
  const scale = 50;

  // container width and height
  const { size } = useThree();
  const width = size.width / scale;
  const height = size.height / scale;
  const bounds = {
    top: -(height / 2),
    bottom: height / 2,
    left: -(width / 2),
    right: width / 2,
  };

  const particles = [];
  const particleOptions = [];
  // now create the individual particles
  for (var p = 0; p < particleCount; p++) {
    const x = MathUtils.randFloatSpread(width);
    const y = MathUtils.randFloatSpread(height);
    // const z = 0;
    const z = MathUtils.randFloatSpread(particleDepth);
    particles.push(x, y, z);
    for (let i = 0; i < particleTrailSize; i++) {
      particles.push(x, y, z);
    }
    particleOptions.push({
      speed: particleSpeed + (0.5 - randomDecimal()) / 10000,
    });
  }

  const geometry = new BufferGeometry();
  geometry.dynamic = true;
  geometry.setAttribute("position", new Float32BufferAttribute(particles, 3));
  const material = new PointsMaterial({ color: "white", size: particleSize });

  let log = true;
  let count = 0;
  useFrame(() => {
    const particles = geometry.attributes.position.array;
    particleOptions.forEach((p, i) => {
      const index = i * (3 + particleTrailSize * 3);
      const particle = {
        x: index,
        y: index + 1,
        z: index + 2,
      };
      const vector = angleVector(bearing, p.speed);
      // x
      particles[particle.x] += vector.x;
      if (particles[particle.x] > bounds.right) {
        particles[particle.x] = bounds.left;
      } else if (particles[particle.x] < bounds.left) {
        particles[particle.x] = bounds.right;
      }
      // y
      particles[particle.y] += vector.y;
      if (particles[particle.y] > bounds.bottom) {
        particles[particle.y] = bounds.top;
      } else if (particles[particle.y] < bounds.top) {
        particles[particle.y] = bounds.bottom;
      }
      // trail
      const gap = angleVector(bearing, particleTrailGap);
      for (let n = 0; n < particleTrailSize; n++) {
        const x = particle.x + 3 * (n + 1);
        const y = particle.y + 3 * (n + 1);
        const z = particle.z + 3 * (n + 1);
        particles[x] = particles[particle.x] - gap.x * n;
        particles[y] = particles[particle.y] - gap.y * n;
        particles[z] = particles[particle.z];
      }
      if (log) {
        //console.log(i, particle, p.trail.length, particles.length);
      }
    });
    if (count === 1) {
      log = false;
    }
    count++;
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <>
      <points args={[geometry, material]} sortParticles={true} />
      {/* <Effects /> */}
    </>
  );
};
