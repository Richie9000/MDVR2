import * as utils from '@dcl/ecs-scene-utils'
export function Wall() {
      
   const wallLaocoon = new Entity();
   wallLaocoon.addComponent(new GLTFShape("models/wall.glb"));
   wallLaocoon.addComponent(new Transform({ position: new Vector3(10,0,20)}));
   engine.addEntity(wallLaocoon);
    
}