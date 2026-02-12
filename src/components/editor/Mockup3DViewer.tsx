"use client";

import React, { Suspense, useState, useEffect } from "react";
import dynamic from "next/dynamic";

// The actual 3D component that uses R3F
const Inner3DViewer = ({ logoUrl, type }: { logoUrl: string, type: 'mug' | 'shirt' }) => {
  const [modules, setModules] = useState<{ Canvas: any, Drei: any, THREE: any } | null>(null);

  useEffect(() => {
    // We import these only at runtime inside the component that is already dynamically loaded with ssr: false
    Promise.all([
      import("@react-three/fiber"),
      import("@react-three/drei"),
      import("three")
    ]).then(([fiber, drei, three]) => {
      setModules({ Canvas: fiber.Canvas, Drei: drei, THREE: three });
    }).catch(err => {
      console.error("Failed to load 3D modules in inner viewer:", err);
    });
  }, []);

  if (!modules) return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  const { Canvas, THREE } = modules;
  const { OrbitControls, Stage, Decal } = modules.Drei;

  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
           <group>
            {type === 'mug' ? (
              <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[1, 1, 2.5, 32]} />
                <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0} />
                <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
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
                 <Decal position={[0, 0.5, 0.11]} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
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
        </Stage>
        <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.5} />
      </Suspense>
    </Canvas>
  );
};

// Use dynamic with ssr: false to completely avoid server-side execution and build-time resolution issues for these modules
const DynamicInnerViewer = dynamic(() => Promise.resolve(Inner3DViewer), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
      <div className="text-center">
         <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
         <p className="text-sm text-gray-500 font-medium">Initializing 3D Engine...</p>
      </div>
    </div>
  )
});

export const Mockup3DViewer = ({ logoUrl }: { logoUrl: string }) => {
  const [activeMockup, setActiveMockup] = useState<'mug' | 'shirt'>('mug');

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-800 shadow-inner">
        <DynamicInnerViewer logoUrl={logoUrl} type={activeMockup} />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/90 dark:bg-black/80 backdrop-blur-xl p-1.5 rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl z-10">
           <button
             onClick={() => setActiveMockup('mug')}
             className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMockup === 'mug' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
           >
              Ceramic Mug
           </button>
           <button
             onClick={() => setActiveMockup('shirt')}
             className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeMockup === 'shirt' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`}
           >
              Cotton T-Shirt
           </button>
        </div>
      </div>
    </div>
  );
};
