import {useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber"
import { PerspectiveCamera, PresentationControls, Environment, ContactShadows, Html, useFBX } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const coffee = () => {
  const fbx = useFBX('/Assets/cupandsaucer.fbx')
  return <primitive object={fbx} scale={0.2} rotation={[2.2, -0.3, 0]} />;
};

const threedMenu = () => {
  return (
    <div>
      
    </div>
  )
}

export default threedMenu
