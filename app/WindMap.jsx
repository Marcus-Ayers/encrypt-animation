import { OrbitControls, Stats } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Wind, Wind2, Wind3 } from "./Wind";
import { PerspectiveCamera } from "@react-three/drei";
import React from "react";
import { useMemo } from "react";

export const WindMap = React.memo(({ bearing }) => {
  const onCreated = ({ gl }) => {
    console.log(gl);
    gl.autoClear = false;
    gl.autoClearColor = false;
    console.log(gl.preserveDrawingBuffer);
  };
  WindMap.displayName = "WindMap";

  return (
    <Canvas dpr={1} onCreated={onCreated}>
      <PerspectiveCamera
        position={[0, 0, 4]}
        fov={50}
        makeDefault // This sets the camera as the default camera
      />
      <Wind bearing={bearing} />
      <Wind2 bearing={bearing} />
      <Wind3 bearing={90} />
    </Canvas>
  );
});
