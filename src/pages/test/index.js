import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Controller, Scene } from 'react-scrollmagic';
import PaperPlane from "@/pages/test/PaperPlane";
import './index.css';

const Test = () => {
  const [progress, setProgress] = useState(0);
  const planeRef = useRef();

  return (
    <div>
      <div className="section">
        <h1>Scroll down to see the animation</h1>
      </div>
      <Controller>
        <Scene duration={1000} triggerHook="onLeave" pin>
          {(event) => {
            setProgress(event.progress);
            return (
              <div style={{ height: '100vh', position: 'relative' }}>
                <Canvas>
                  <ambientLight />
                  <pointLight position={[10, 10, 10]} />
                  <PaperPlane ref={planeRef} progress={event.progress} />
                </Canvas>
              </div>
            );
          }}
        </Scene>
        <div className="section">
          <h1>Keep scrolling...</h1>
        </div>
        <div className="section">
          <h1>Almost there...</h1>
        </div>
        <div className="section">
          <h1>You made it!</h1>
        </div>
      </Controller>
    </div>
  );
};

export default Test;
