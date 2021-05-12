import * as utils from '@dcl/ecs-scene-utils'


const house = new Entity();
engine.addEntity(house);
house.addComponent(new GLTFShape("models/floor.glb"));
house.addComponent(new Transform({ position: new Vector3(10,0,20)}));
 