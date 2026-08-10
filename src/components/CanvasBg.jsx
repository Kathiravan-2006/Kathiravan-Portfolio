import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState, Suspense } from 'react';

function StarParticles() {
  const ref = useRef();
  // Generate random points in a sphere for purple layer
  const [sphere] = useState(() => {
    const points = new Float32Array(1500); // 500 stars
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.2 * Math.cbrt(Math.random() * 0.9 + 0.1);
      
      points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 25;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function StarParticlesCyan() {
  const ref = useRef();
  // Generate random points for cyan layer
  const [sphere] = useState(() => {
    const points = new Float32Array(1500); // 500 stars
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 1.8 * Math.cbrt(Math.random() * 0.9 + 0.1);
      
      points[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = r * Math.cos(phi);
    }
    return points;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[Math.PI / 3, 0, 0]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

// Floating geometric mesh
function FloatingMesh() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.05;
      ref.current.rotation.y = t * 0.08;
      ref.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <mesh ref={ref} position={[1.2, 0.4, -1.8]}>
      <dodecahedronGeometry args={[0.3, 0]} />
      <meshBasicMaterial color="#3b82f6" wireframe opacity={0.12} transparent />
    </mesh>
  );
}

export default function CanvasBg() {
  return (
    <div id="canvas-container">
      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[15%] right-[-5%] w-[450px] h-[450px] bg-accent-cyan/8 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[25%] w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: true }}>
        <Suspense fallback={null}>
          <StarParticles />
          <StarParticlesCyan />
          <FloatingMesh />
        </Suspense>
      </Canvas>
    </div>
  );
}
