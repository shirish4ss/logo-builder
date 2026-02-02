"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  Text,
  Decal,
  useTexture,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";
import * as THREE from "three";

const MockupModel = ({ type, logoUrl }: { type: 'mug' | 'shirt', logoUrl: string }) => {
  // Simple geometry for mockups to avoid heavy external assets in sandbox
  return (
    <group>
      {type === 'mug' ? (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 2.5, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0} />
          {/* Decal for the logo */}
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]}
            scale={[0.8, 0.8, 0.8]}
          >
             <meshBasicMaterial
               map={new THREE.TextureLoader().load(logoUrl)}
               transparent
               polygonOffset
               polygonOffsetFactor={-1}
             />
          </Decal>
        </mesh>
      ) : (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
           <boxGeometry args={[2, 2.5, 0.2]} />
           <meshStandardMaterial color="#f0f0f0" roughness={0.8} />
           <Decal
            position={[0, 0.5, 0.11]}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
          >
             <meshBasicMaterial
               map={new THREE.TextureLoader().load(logoUrl)}
               transparent
               polygonOffset
               polygonOffsetFactor={-1}
             />
          </Decal>
        </mesh>
      )}
    </group>
  );
};

export const Mockup3DViewer = ({ logoUrl }: { logoUrl: string }) => {
  const [activeMockup, setActiveMockup] = React.useState<'mug' | 'shirt'>('mug');

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden relative">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <MockupModel type={activeMockup} logoUrl={logoUrl} />
            </Stage>
            <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
          </Suspense>
        </Canvas>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
           <button
             onClick={() => setActiveMockup('mug')}
             className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeMockup === 'mug' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
           >
              Ceramic Mug
           </button>
           <button
             onClick={() => setActiveMockup('shirt')}
             className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeMockup === 'shirt' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
           >
              Cotton T-Shirt
           </button>
        </div>
      </div>
    </div>
  );
};
