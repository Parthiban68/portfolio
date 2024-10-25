import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


const Computers = (isMoblie) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor="black" />
      <pointLight intensity={10}/>
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMoblie? 0.7 : 0.75}
        position={isMoblie ? [0, -3.95, -1.7]:[0, -3.10, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMoblie, setIsMoblie] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-widh:500px)');

    setIsMoblie(mediaQuery.matches);

    const handlemediaQueryChange = (event) =>{
      setIsMoblie(event.matches);
    }
    
    mediaQuery.addEventListener('change',handlemediaQueryChange);

    return () =>{
      mediaQuery.removeEventListener('change',handlemediaQueryChange)
    }
    
  },[])
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMoblie={isMoblie}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas