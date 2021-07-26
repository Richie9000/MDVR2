import * as utils from '@dcl/ecs-scene-utils'


const house = new Entity();
engine.addEntity(house);
house.addComponent(new GLTFShape("models/floor.glb"));
house.addComponent(new Transform({ position: new Vector3(10,0,20)}));

const door = new Entity();
engine.addEntity(door);
door.addComponent(new GLTFShape("models/door.glb"));
door.addComponent(new Transform({ position: new Vector3(10,0,20)}));


//Define two different materials
let startPosition = new Vector3(10,0,20);
let finalPosition = new Vector3(10,4,20);

door.addComponent(
    new OnClick(event => {
        door.addComponent(new utils.MoveTransformComponent(startPosition, finalPosition, 2))
    })
  );