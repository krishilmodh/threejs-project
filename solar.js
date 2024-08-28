// 1. Create a Simple Solar System Model
// Challenge:

// Use different geometries to create a basic solar system model.
// Create a sun using SphereGeometry and smaller spheres for planets.
// Position the planets at different distances from the sun.
// Add a group for each planet and its moon(s), if applicable.
// Extra Challenge:

// Animate the planets to orbit around the sun.
// Add lights to make the sun glow and affect the appearance of the planets.

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';
// Basic setup: scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Position the camera so we can see the whole solar system
camera.position.set(0, 5, 20);

// Create the Sun
const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow color
const sun = new THREE.Mesh(sunGeometry, sunMaterial);

// Create a group to hold the entire solar system
const solarSystem = new THREE.Group();
solarSystem.add(sun);

// Create planets
const planetGeometry = new THREE.SphereGeometry(1, 32, 32);

// Planet 1
const planet1Material = new THREE.MeshStandardMaterial({ color: 0x00ff00 }); // Green color
const planet1 = new THREE.Mesh(planetGeometry, planet1Material);
planet1.position.x = 6; // Position it at a distance from the sun

// Create a group for planet 1 and its moon
const planet1Group = new THREE.Group();
planet1Group.add(planet1);

// Moon for Planet 1
const moonGeometry = new THREE.SphereGeometry(0.3, 32, 32); // Smaller sphere
const moonMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 }); // Gray color
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.x = 2; // Position the moon at a distance from the planet
planet1Group.add(moon);

// Add the planet1Group to the solar system
solarSystem.add(planet1Group);

// Planet 2
const planet2Material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue color
const planet2 = new THREE.Mesh(planetGeometry, planet2Material);
planet2.position.x = 10; // Position it further from the sun
solarSystem.add(planet2);

// Add the solar system group to the scene
scene.add(solarSystem);

// Add a point light at the position of the sun
const pointLight = new THREE.PointLight(0xffffff, 2, 100); // White light
pointLight.position.set(0, 0, 0); // Position it at the sun's location
scene.add(pointLight);

// Add ambient light for overall scene lighting
const ambientLight = new THREE.AmbientLight(0x333333); // Dim light
scene.add(ambientLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate the solar system to simulate orbit
    planet1Group.rotation.y += 0.01; // Planet 1 and its moon orbit
    planet2.rotation.y += 0.005; // Planet 2 orbits

    renderer.render(scene, camera);
}

animate();
