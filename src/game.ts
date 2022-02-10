import { displayEvent, createEventsBoard } from './eventBoard'
import { House } from './house'

createEventsBoard({
  position: new Vector3(25,4.5,20),
  rotation: Quaternion.Euler(0, 130, 0),
  scale: new Vector3(.6, .6, .8),
});

House();