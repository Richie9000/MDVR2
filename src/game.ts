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
button.addComponent(new GLTFShape("models/button1.glb"));
button.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(button);

const button1 = new Entity();
button1.addComponent(new GLTFShape("models/button4.glb"));
button1.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(button1);

const button2 = new Entity();
button2.addComponent(new GLTFShape("models/button3.glb"));
button2.addComponent(new Transform({ position: new Vector3(10,0,20)}));
engine.addEntity(button2);

let startPosition = new Vector3(10,0,20);
let finalPosition = new Vector3(7,0,20);

button.addComponent(
    new utils.ToggleComponent(utils.ToggleState.Off, value => {
    
        if (value == utils.ToggleState.On) {
            door.addComponentOrReplace(
                new utils.MoveTransformComponent(startPosition, finalPosition, 2)) 
      } else {
        door.addComponentOrReplace(new utils.MoveTransformComponent(finalPosition, startPosition, 2)) 
      }
    },
    
    )
  )
  
  //listen for click on the box and toggle it's state
  button.addComponent(
    new OnClick(event => {
      button.getComponent(utils.ToggleComponent).toggle()
    },
    { hoverText: "Open" }
    )
  )
 
 
button1.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x: 8, y: 10, z: 23 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: "Room 1" }
  )
)

button2.addComponent(
  new OnPointerDown(
    (e) => {
      movePlayerTo({ x:8, y: 15, z: 19 }, { x: 8, y: 1, z: 8 })
    },
    { hoverText: "Room 2" }
  )
)
