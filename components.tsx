import { createElement } from 'metaverse-api'

interface ElevatorOpts {
  active: boolean
  bottom: boolean
  startTime: number
  time: number
  height: number
  speed: number
}

export const Elevator = (opts: ElevatorOpts) => {
  const { bottom, time, height, speed, active, startTime } = opts
  const y = active
    ? (Math.cos(
      (time - startTime) * speed + (bottom ? 0.5 : 1.5) * Math.PI
    ) + 1) / 2 * height
    : (bottom ? 0 : height)

  return (<a-entity>
      <a-box
        position={{ x: 5, y, z: 0 }}
        scale={{ x: 5, y: 0.05, z: 5 }}
      />
    </a-entity>
  )
}

