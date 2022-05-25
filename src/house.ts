import * as utils from '@dcl/ecs-scene-utils'
import { movePlayerTo } from '@decentraland/RestrictedActions'


 export function House () {
//new
   const house = new Entity();
   house.addComponent(new GLTFShape("models/floor.glb"));
   house.addComponent(new Transform({ position: new Vector3(10,0,20)}));
   engine.addEntity(house);

   
    const firstButton = new Entity();
    firstButton.addComponent(new GLTFShape("models/buttonFirst.glb"));
    firstButton.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(firstButton);
    

    
    const buttonMusic = new Entity();
    buttonMusic.addComponent(new GLTFShape("models/buttonMusic.glb"));
    buttonMusic.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonMusic);

    const buttonTeleportCube1ToCube2 = new Entity();
    buttonTeleportCube1ToCube2.addComponent(new GLTFShape("models/buttonTeleportCube1ToCube2.glb"));
    buttonTeleportCube1ToCube2.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonTeleportCube1ToCube2);
    
    const buttonTeleportCube1ToCube3 = new Entity();
    buttonTeleportCube1ToCube3.addComponent(new GLTFShape("models/buttonTeleportCube1ToCube3.glb"));
    buttonTeleportCube1ToCube3.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonTeleportCube1ToCube3);
    
    const buttonTeleportCube2ToLiving = new Entity();
    buttonTeleportCube2ToLiving.addComponent(new GLTFShape("models/buttonTeleportCube2ToLiving.glb"));
    buttonTeleportCube2ToLiving.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonTeleportCube2ToLiving);
    
    const buttonTeleportCube3ToLiving = new Entity();
    buttonTeleportCube3ToLiving.addComponent(new GLTFShape("models/buttonTeleportCube3ToLiving.glb"));
    buttonTeleportCube3ToLiving.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonTeleportCube3ToLiving);
    
    const buttonDoorTeletransport = new Entity();
    buttonDoorTeletransport.addComponent(new GLTFShape("models/buttonDoorTeletransport.glb"));
    buttonDoorTeletransport.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity(buttonDoorTeletransport);

    const doorTeletransport = new Entity();
    doorTeletransport.addComponent(new GLTFShape("models/doorTeletransport.glb"));
    doorTeletransport.addComponent(new Transform({ position: new Vector3(10,0,20)}));
    engine.addEntity (doorTeletransport);

    let startPositionT = new Vector3(10,0,20);
    let finalPositionT = new Vector3(12,0,20);

    buttonDoorTeletransport.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      
          if (value == utils.ToggleState.On) {
              doorTeletransport.addComponentOrReplace(
                  new utils.MoveTransformComponent(startPositionT, finalPositionT, 1)) 
        } else {
          doorTeletransport.addComponentOrReplace(new utils.MoveTransformComponent(finalPositionT, startPositionT, 1)) 
        }
      },
      
      )
    )
    
    //listen for click on the box and toggle it's state
    buttonDoorTeletransport.addComponent(
      new OnClick(event => {
        buttonDoorTeletransport.getComponent(utils.ToggleComponent).toggle()
      },
      { hoverText: "Open/Close" }
      )
    )

  
     
     
    buttonTeleportCube1ToCube2.addComponent(
      new OnPointerDown(
        (e) => {
          movePlayerTo({ x: 19, y: 10, z: 21 }, { x: 18, y: 20, z: 17 })
        },
        { hoverText: "Lounge" }
      )
    )
    
    buttonTeleportCube1ToCube3.addComponent(
      new OnPointerDown(
        (e) => {
          movePlayerTo({ x:18, y: 5, z: 23 }, { x: 8, y: 1, z: 8 })
        },
        { hoverText: "Room 2" }
      )
    )
    
    buttonTeleportCube2ToLiving.addComponent(
      new OnPointerDown(
        function (e) {
          movePlayerTo({ x: 20, y: 15, z: 24 }, { x: 10, y: 0, z: 10 });
        },
        { hoverText: "Top Floor" }
      )
    )
    
    buttonTeleportCube3ToLiving.addComponent(
      new OnPointerDown(
        function (e) {
          movePlayerTo({ x: 20, y: 55, z: 24 }, { x: 10, y: 0, z: 10 });
        },
        { hoverText: "?" }
      )
    )

    
    buttonMusic.addComponent(
      new utils.ToggleComponent(utils.ToggleState.Off, value => {
      
          if (value == utils.ToggleState.On) {
            const streamSource = new Entity()
            streamSource.addComponent(
            new Transform({ position: new Vector3(56, 10, 55) })
            )
          let music = new AudioStream(
      'https://icecast.ravepartyradio.org/ravepartyradio-192.mp3'
  )
  streamSource.addComponent(music)
  
  engine.addEntity(streamSource)

  music.playing = true
        } else {
          let music = new AudioStream(
            'https://icecast.ravepartyradio.org/ravepartyradio-192.mp3'
          )
          music.playing = false
        }
      },
      
      )
    )
    
    //listen for click on the box and toggle it's state
    buttonMusic.addComponent(
      new OnClick(event => {
        buttonMusic.getComponent(utils.ToggleComponent).toggle()
      },
      { hoverText: "Turn music on/off" }
      )
    )
    
     firstButton.addComponent(
          new OnPointerDown(
            (e) => {
              movePlayerTo({ x:22, y: 18, z: 23 }, { x: 8, y: 1, z: 8 })
            },
            { hoverText: "Enter" }
          )
        )

       firstButton.addComponent(
          new Transform({
          
            rotation: new Quaternion(1, 1, 7, 1)
         
          })
        )

}
