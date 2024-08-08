import React, { forwardRef, useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const PaperPlane = forwardRef((props, ref) => {
  const gltf = useLoader(GLTFLoader, 'https://musictop-bucket.s3.ap-southeast-2.amazonaws.com/frontend/paper_airplane.glb'); // 替换为你的 3D 模型文件路径
  const meshRef = ref || useRef();
  const { scene } = useThree();

  // 初始化位置
  useFrame(() => {
    if (props.progress !== undefined) {
      const radius = 5;
      const angle = props.progress * Math.PI * 2; // 完整旋转一圈
      meshRef.current.position.x = radius * Math.cos(angle);
      meshRef.current.position.z = radius * Math.sin(angle);
      meshRef.current.position.y = radius * Math.sin(angle / 2); // 可选：增加 y 轴的变化，使旋转更具立体感
      meshRef.current.rotation.y = -angle; // 旋转以始终面向前方
    }
  });

  return <primitive object={gltf.scene} ref={meshRef} />;
});

export default PaperPlane;
