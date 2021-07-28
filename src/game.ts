import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'


const house = new Entity();
house.addComponent(new GLTFShape("models/floor.glb"));
house.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(house);

const door = new Entity();
door.addComponent(new GLTFShape("models/door.glb"));
door.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(door);

const button = new Entity();
button.addComponent(new GLTFShape("models/doorbtn.glb"));
button.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(button);

const button1 = new Entity();
button1.addComponent(new GLTFShape("models/cube1qbtn.glb"));
button1.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(button1);

let startPosition = new Vector3(10,0,20);
let finalPosition = new Vector3(10,4,20);

button.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {
        if (value == utils.ToggleState.On) {
            door.addComponentOrReplace(
                new utils.MoveTransformComponent(startPosition, finalPosition, 2)) 
      } else {
        door.addComponentOrReplace(new utils.MoveTransformComponent(finalPosition, startPosition, 2)) 
        
      }
    })
  )
  
  //listen for click on the box and toggle it's state
  button.addComponent(
    new OnClick(event => {
      button.getComponent(utils.ToggleComponent).toggle()
    })
  )
 

button1.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 1, y: 0, z: 1 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: "Move player" }
  )
)


