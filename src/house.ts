import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'

 export function House () {

    const house = new Entity();
    house.addComponent(new GLTFShape("models/floor.glb"));
    house.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(house);
    
    const door = new Entity();
    door.addComponent(new GLTFShape("models/door.glb"));
    door.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(door);
    
    const btnDoor = new Entity();
    btnDoor.addComponent(new GLTFShape("models/btnDoor.glb"));
    btnDoor.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(btnDoor);
    
    
    const btnTcube1 = new Entity();
    btnTcube1.addComponent(new GLTFShape("models/btnTcube1.glb"));
    btnTcube1.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(btnTcube1);
    
    const btnTcube2 = new Entity();
    btnTcube2.addComponent(new GLTFShape("models/btnTcube2.glb"));
    btnTcube2.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(btnTcube2);
    
    const button3 = new Entity();
    button3.addComponent(new GLTFShape("models/btncube2.glb"));
    button3.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(button3);
    
    const btncube3 = new Entity();
    btncube3.addComponent(new GLTFShape("models/btncube3.glb"));
    btncube3.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(btncube3);
    
    const buttonT = new Entity();
    buttonT.addComponent(new GLTFShape("models/buttonT.glb"));
    buttonT.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonT);

    let startPositionT = new Vector3(10,0,20);
    let finalPositionT = new Vector3(8.5,0,20);

    buttonT.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      
          if (value == utils.ToggleState.On) {
              doorT.addComponentOrReplace(
                  new utils.MoveTransformComponent(startPositionT, finalPositionT, 1)) 
        } else {
          doorT.addComponentOrReplace(new utils.MoveTransformComponent(finalPositionT, startPositionT, 1)) 
        }
      },
      
      )
    )
    
    //listen for click on the box and toggle it's state
    buttonT.addComponent(
      new OnClick(event => {
        buttonT.getComponent(utils.ToggleComponent).toggle()
      },
      { hoverText: "O/C" }
      )
    )

    const doorT = new Entity();
    doorT.addComponent(new GLTFShape("models/doorT.glb"));
    doorT.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity (doorT);
    
    let startPosition = new Vector3(10,0,20);
    let finalPosition = new Vector3(7,0,20);
  
    btnDoor.addComponent(
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
      btnDoor.addComponent(
        new OnClick(event => {
          btnDoor.getComponent(utils.ToggleComponent).toggle()
        },
        { hoverText: "O/C" }
        )
      )
     
     
    btnTcube1.addComponent(
      new OnPointerDown(
        (e) => {
          movePlayerTo({ x: 8, y: 10, z: 23 }, { x: 8, y: 1, z: 8 })
        },
        { hoverText: "Room 1" }
      )
    )
    
    btnTcube2.addComponent(
      new OnPointerDown(
        (e) => {
          movePlayerTo({ x:8, y: 19, z: 19 }, { x: 8, y: 1, z: 8 })
        },
        { hoverText: "Room 2" }
      )
    )
    
    button3.addComponent(
      new OnPointerDown(
        (e) => {
          movePlayerTo({ x:5, y: 3, z: 20 }, { x: 10, y: 0, z: 20 })
        },
        { hoverText: "Living Room" }
      )
    )
    
    btncube3.addComponent(
      new OnPointerDown(
        (e) => {
          movePlayerTo({ x:5, y: 3, z: 20}, { x: 10, y: 0, z: 20 })
        },
        { hoverText: "Living Room" }
      )
    )
}

