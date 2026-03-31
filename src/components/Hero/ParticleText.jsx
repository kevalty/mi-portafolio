import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleText() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;
    if (!width || !height) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 200;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Sample "KEVIN" text pixels using offscreen canvas
    const offscreen = document.createElement('canvas');
    offscreen.width = 600;
    offscreen.height = 150;
    const ctx = offscreen.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 120px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('KEVIN', 300, 75);

    const { data } = ctx.getImageData(0, 0, 600, 150);
    const targets = [];
    const stride = 4;

    for (let y = 0; y < 150; y += stride) {
      for (let x = 0; x < 600; x += stride) {
        if (data[(y * 600 + x) * 4 + 3] > 128) {
          targets.push(
            (x - 300) * 1.4,
            (75 - y) * 1.4,
            0
          );
        }
      }
    }

    const count = targets.length / 3;
    const positions = new Float32Array(count * 3);

    // Start from random scattered positions
    for (let i = 0; i < count * 3; i += 3) {
      positions[i]     = (Math.random() - 0.5) * 500;
      positions[i + 1] = (Math.random() - 0.5) * 300;
      positions[i + 2] = (Math.random() - 0.5) * 200;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 2.5,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse position for repulsion
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      const rect = mount.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -(((e.clientY - rect.top) / rect.height) - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation loop
    let animId;
    const posAttr = geometry.attributes.position;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        // Lerp toward target position (assembles the text)
        posAttr.array[i3]     += (targets[i3]     - posAttr.array[i3])     * 0.04;
        posAttr.array[i3 + 1] += (targets[i3 + 1] - posAttr.array[i3 + 1]) * 0.04;
        posAttr.array[i3 + 2] += (targets[i3 + 2] - posAttr.array[i3 + 2]) * 0.04;

        // Mouse repulsion
        const dx = posAttr.array[i3]     - mouse.x * 200;
        const dy = posAttr.array[i3 + 1] - mouse.y * 150;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 70 && dist > 0) {
          const force = (70 - dist) / 70 * 9;
          posAttr.array[i3]     += (dx / dist) * force;
          posAttr.array[i3 + 1] += (dy / dist) * force;
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      scene.remove(points);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" aria-label="Kevin" role="img" />;
}
