import { displayEvent, createEventsBoard } from './eventBoard'
import { House } from './house'

createEventsBoard({
  position: new Vector3(3.8,5,24),
  rotation: Quaternion.Euler(0, 130, 0),
  scale: new Vector3(.8, .8, .8),
})

House();