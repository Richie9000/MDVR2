import * as utils from '@dcl/ecs-scene-utils'
export function Wall() {
      
   const wallLaocoon = new Entity();
   wallLaocoon.addComponent(new GLTFShape("models/wall.glb"));
   wallLaocoon.addComponent(new Transform({ position: new Vector3(10,0,20)}));
   engine.addEntity(wallLaocoon);

   class mySystem implements ISystem {
    private timer: number = 0
    private duration: number = 5

    update(dt: number){
        this.timer += dt

        const altitude = Scalar.Lerp(0, 10, this.timer/this.duration)
        wallLaocoon.getComponent(Transform).position.y = altitude

        if(this.timer >= this.duration){
            this.timer = 0
        }
    }

}
const ms = new mySystem()
    engine.addSystem(ms)
}

