import {AmbientLight,
        DirectionalLight,
        HemisphereLight
    } from 'three';

function createLights() {
  //create ambient light
  const ambientLight = new HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    5, // intensity
  );
  // Create a directional light
  const light = new DirectionalLight('white', 8);

  // move the light right, up, and towards us
  light.position.set(0, 10, 0);

  return {light, ambientLight};
}

export { createLights };
