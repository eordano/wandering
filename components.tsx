import { createElement } from 'metaverse-api'

interface ElevatorOpts {
  identify: string
  active: boolean
  bottom: boolean
  oneTime: boolean
  startTime: number
  time: number
  height: number
  speed: number
}

export const Elevator = (opts: ElevatorOpts) => {
  const { bottom, time, height, identify, oneTime, speed, active, startTime } = opts
  const pos = (time - startTime) * speed
  const y = active
    ? (Math.sin(                                         // cosine movement
        Math.min((oneTime ? Math.PI : pos), pos) // position 0...pos (or 3/4 movement
        + (bottom ? 0.5 : 1.5) * Math.PI                 // offset  1/4 movement
      ) + 1) / 2 * height
    : (bottom ? 0 : height)

  return <box id={identify} position={{ x: 5, y, z: 0 }} scale={{ x: 5, y: 0.05, z: 5 }} />
}

