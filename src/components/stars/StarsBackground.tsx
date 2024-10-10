import { Suspense,useRef, useState } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';
import { Points as PointsType } from 'three'

import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

import styles from './StarsBackground.module.css';

const Stars = () => {
  const ref = useRef<PointsType | null>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((_, delta) => {
    if(ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled renderOrder={0}>
        <PointMaterial
          transparent
          color='#F1C40F'
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false} 
          depthTest={true}   
        />
      </Points>
    </group>
  );
};

const StarsBackground = () => {
  return (
    <span className="fixed w-full h-full inset-0 z-[-1]">
      <div className={styles.starsBackground}>
        <Canvas camera={{ position: [0, 0, 1] }} className={styles.canvasWrapper}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>
    </span>
  );
};

export default StarsBackground;
