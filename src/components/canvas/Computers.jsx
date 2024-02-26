import React, {useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Bmo = ({isMobile}) =>{
    const bmo = useGLTF('./smol_ame_in_an_upcycled_terrarium_hololiveen/scene.gltf')

    return (
        <mesh>
            <primitive object={bmo.scene} scale={isMobile ? 0.85 : 1.25} position-y={isMobile ? -2.5 : -2.3} rotation-y={0} />
        </mesh>
    );
}



const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize)
    })

    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Bmo isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
};


export default ComputersCanvas;