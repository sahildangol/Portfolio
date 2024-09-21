import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress(); // Extract progress from useProgress hook

  return (
    <Html center> {/* 'center' prop to center the loader */}
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: 'white', // color should be in quotes
          fontWeight: 800,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}% {/* Display loading progress */}
      </p>
    </Html>
  );
};

export default Loader;
