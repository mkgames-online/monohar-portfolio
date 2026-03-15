import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, RoundedBox, Torus } from "@react-three/drei";
import { useRef } from "react";

function HeadsetModel() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.16;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.03;
  });

  return (
    <group ref={groupRef} scale={0.28} position={[0.15, 3.45, -5.6]}>
      {/* main visor body */}
      <RoundedBox args={[3.2, 1.45, 1.35]} radius={0.28} smoothness={8}>
        <meshStandardMaterial
          color="#050b12"
          metalness={0.7}
          roughness={0.22}
          emissive="#0b2230"
          emissiveIntensity={0.4}
        />
      </RoundedBox>

      {/* front visor glass */}
      <RoundedBox
        args={[2.75, 0.95, 1.38]}
        radius={0.2}
        smoothness={8}
        position={[0, 0.02, 0.05]}
      >
        <meshStandardMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
          emissive="#22d3ee"
          emissiveIntensity={1.0}
          metalness={0.15}
          roughness={0.08}
        />
      </RoundedBox>

      {/* face cushion / inner frame */}
      <RoundedBox
        args={[2.3, 0.7, 1.0]}
        radius={0.16}
        smoothness={6}
        position={[0, -0.02, -0.16]}
      >
        <meshStandardMaterial
          color="#111827"
          metalness={0.08}
          roughness={0.9}
        />
      </RoundedBox>

      {/* left side arm */}
      <RoundedBox
        args={[0.95, 0.26, 0.32]}
        radius={0.1}
        smoothness={4}
        position={[-2.0, 0.05, 0]}
      >
        <meshStandardMaterial color="#0b1220" metalness={0.35} roughness={0.45} />
      </RoundedBox>

      {/* right side arm */}
      <RoundedBox
        args={[0.95, 0.26, 0.32]}
        radius={0.1}
        smoothness={4}
        position={[2.0, 0.05, 0]}
      >
        <meshStandardMaterial color="#0b1220" metalness={0.35} roughness={0.45} />
      </RoundedBox>

      {/* side pods */}
      <RoundedBox
        args={[0.38, 0.5, 0.5]}
        radius={0.12}
        smoothness={4}
        position={[-1.55, 0.02, 0.16]}
      >
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.45}
          roughness={0.35}
          emissive="#0ea5e9"
          emissiveIntensity={0.25}
        />
      </RoundedBox>

      <RoundedBox
        args={[0.38, 0.5, 0.5]}
        radius={0.12}
        smoothness={4}
        position={[1.55, 0.02, 0.16]}
      >
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.45}
          roughness={0.35}
          emissive="#0ea5e9"
          emissiveIntensity={0.25}
        />
      </RoundedBox>

      {/* top strap */}
      <RoundedBox
        args={[0.42, 1.5, 0.2]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.95, -0.05]}
        rotation={[0, 0, 0.15]}
      >
        <meshStandardMaterial color="#111827" metalness={0.25} roughness={0.6} />
      </RoundedBox>

      {/* top connector */}
      <RoundedBox
        args={[0.7, 0.18, 0.28]}
        radius={0.08}
        smoothness={4}
        position={[0, 0.7, 0.02]}
      >
        <meshStandardMaterial color="#0f172a" metalness={0.35} roughness={0.45} />
      </RoundedBox>

      {/* subtle side rings for futuristic XR feel */}
      <Torus args={[0.2, 0.025, 16, 50]} position={[-1.58, 0.02, 0.22]} rotation={[1.57, 0, 0]}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.75} />
      </Torus>

      <Torus args={[0.2, 0.025, 16, 50]} position={[1.58, 0.02, 0.22]} rotation={[1.57, 0, 0]}>
        <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.75} />
      </Torus>
    </group>
  );
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 3, 4]} intensity={2.4} color="#67e8f9" />
        <pointLight position={[2, 1, 3]} intensity={2.2} color="#22d3ee" />
        <pointLight position={[-3, -2, 2]} intensity={1.2} color="#2563eb" />

        <Stars radius={80} depth={40} count={1400} factor={2.2} fade speed={0.8} />

        <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.28}>
          <HeadsetModel />
        </Float>
      </Canvas>
    </div>
  );
}