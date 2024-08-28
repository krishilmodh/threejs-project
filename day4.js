import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

// Scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create geometries
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const planeGeometry = new THREE.PlaneGeometry(5, 5);
const customGeometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  0, 1, 0,
  -1, -1, 0,
  1, -1, 0
]);
customGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Create materials
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const customMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });

// Create meshes
const box = new THREE.Mesh(boxGeometry, material);
const sphere = new THREE.Mesh(sphereGeometry, material);
const plane = new THREE.Mesh(planeGeometry, material);
const customMesh = new THREE.Mesh(customGeometry, customMaterial);

// Position objects
box.position.set(-2, 0, 0);
sphere.position.set(2, 0, 0);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;

// Add objects to the scene
scene.add(box);
scene.add(sphere);
scene.add(plane);
scene.add(customMesh);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Camera positioning
camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
