"use client";

import { Bounds, Center, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Reindeer() {
    const groupRef = useRef(null);
    const { scene } = useGLTF("/models/reindeer.glb");

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.material.side = THREE.DoubleSide;
                if (child.material.map)
                    child.material.map.colorSpace = THREE.SRGBColorSpace;
                if (child.material.emissiveMap)
                    child.material.emissiveMap.colorSpace =
                        THREE.SRGBColorSpace;
                if (child.material.aoMap)
                    child.material.aoMap.colorSpace = THREE.SRGBColorSpace;
                if (child.material.normalMap)
                    child.material.normalMap.colorSpace = THREE.NoColorSpace;
                if (child.material.roughnessMap)
                    child.material.roughnessMap.colorSpace = THREE.NoColorSpace;
                if (child.material.metalnessMap)
                    child.material.metalnessMap.colorSpace = THREE.NoColorSpace;
                child.material.needsUpdate = true;
            }
        });
    }, [scene]);

    useFrame((state) => {
        if (!groupRef.current) {
            return;
        }

        const horizontalOrbit =
            state.pointer.x < 0
                ? state.pointer.x * 0.18
                : state.pointer.x * 0.1;
        const targetRotateY = Math.PI * 0.35 + horizontalOrbit;

        groupRef.current.rotation.y +=
            (targetRotateY - groupRef.current.rotation.y) * 0.1;
        groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.1;
        groupRef.current.position.x += (0 - groupRef.current.position.x) * 0.1;
        groupRef.current.position.y += (0 - groupRef.current.position.y) * 0.1;
    });

    return (
        <group ref={groupRef}>
            <Center>
                <primitive object={scene} scale={1} />
            </Center>
        </group>
    );
}

useGLTF.preload("/models/reindeer.glb");

const ReindeerModel = () => {
    return (
        <Canvas
            dpr={[1, 1.8]}
            gl={{
                alpha: true,
                outputColorSpace: THREE.SRGBColorSpace,
                toneMapping: THREE.ACESFilmicToneMapping,
            }}
            camera={{ position: [0, 0, 6.5], fov: 30 }}
            style={{ background: "transparent", width: "100%", height: "100%" }}
        >
            <ambientLight intensity={1.45} />
            <ambientLight intensity={1.45} />
            <ambientLight intensity={1.45} />
            <hemisphereLight args={["#eaf7ff", "#a8d2ff", 1.45]} />
            <directionalLight
                color="#e6f6ff"
                position={[3, 5, 3]}
                intensity={1.8}
            />
            <directionalLight
                color="#b3dcff"
                position={[-3, 3, -1.5]}
                intensity={1.1}
            />
            <pointLight
                color="#bfe5ff"
                position={[0, 2.2, 2]}
                intensity={1.8}
                distance={10}
            />
            <Suspense fallback={null}>
                <Bounds fit clip margin={1.16}>
                    <Reindeer />
                </Bounds>
            </Suspense>
        </Canvas>
    );
};

export default ReindeerModel;
