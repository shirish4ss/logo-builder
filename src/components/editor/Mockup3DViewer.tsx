"use client";

import React, { Suspense, useState, useEffect } from "react";
import * as THREE from "three";

// We'll use dynamic imports to avoid build-time resolution issues for R3F
// which is causing persistent "Module not found" errors in some environments.

const MockupModel = ({ type, logoUrl, Decal }: { type: 'mug' | 'shirt', logoUrl: string, Decal: any }) => {
  return (
    <group>
      {type === 'mug' ? (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 2.5, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0} />
          {Decal && (
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
          )}
        </mesh>
      ) : (
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
           <boxGeometry args={[2, 2.5, 0.2]} />
           <meshStandardMaterial color="#f0f0f0" roughness={0.8} />
           {Decal && (
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
           )}
        </mesh>
      )}
    </group>
  );
};

export const Mockup3DViewer = ({ logoUrl }: { logoUrl: string }) => {
  const [activeMockup, setActiveMockup] = useState<'mug' | 'shirt'>('mug');
  const [modules, setModules] = useState<{ Canvas: any, Drei: any } | null>(null);

  useEffect(() => {
    // Dynamically import to ensure it's only handled at runtime
    Promise.all([
      import("@react-three/fiber"),
      import("@react-three/drei")
    ]).then(([fiber, drei]) => {
      setModules({ Canvas: fiber.Canvas, Drei: drei });
    }).catch(err => {
      console.error("Failed to load 3D modules:", err);
    });
  }, []);

  if (!modules) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
        <div className="text-center">
           <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
           <p className="text-sm text-gray-500">Initializing 3D Engine...</p>
        </div>
      </div>
    );
  }

  const { Canvas } = modules;
  const { OrbitControls, Stage, Decal } = modules.Drei;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden relative">
        <Canvas shadows>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <MockupModel type={activeMockup} logoUrl={logoUrl} Decal={Decal} />
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
