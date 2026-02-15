"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, Decal } from "@react-three/drei";
import * as THREE from "three";

const ThreeScene = ({ logoUrl, type }: { logoUrl: string, type: 'mug' | 'shirt' }) => {
  const [texture, setTexture] = React.useState<THREE.Texture | null>(null);

  React.useEffect(() => {
    if (logoUrl) {
      new THREE.TextureLoader().load(logoUrl, (tex) => {
        setTexture(tex);
      });
    }
  }, [logoUrl]);

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
           <group>
            {type === 'mug' ? (
              <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[1, 1, 2.5, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0} />
                {texture && (
                    <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
                    <meshBasicMaterial
                        map={texture}
                        transparent
                        polygonOffset
                        polygonOffsetFactor={-1}
                    />
                    </Decal>
                )}
              </mesh>
            ) : (
              <mesh position={[0, 0, 0]} castShadow receiveShadow>
                 <boxGeometry args={[2, 2.5, 0.2]} />
                 <meshStandardMaterial color="#f0f0f0" roughness={0.8} />
                 {texture && (
                    <Decal position={[0, 0.5, 0.11]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
                        <meshBasicMaterial
                        map={texture}
                        transparent
                        polygonOffset
                        polygonOffsetFactor={-1}
                        />
                    </Decal>
                 )}
              </mesh>
            )}
          </group>
        </Stage>
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;
