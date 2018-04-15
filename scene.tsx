import { createElement, Component } from 'metaverse-api'

const networkHz = 60
const interval = 1000 / networkHz

export default class RollerCoaster extends Component<any, { time: number }> {
  state = { time: 0 }

  timeout = setInterval(() => {
    this.setState({
      time: performance.now() * 0.0001
    })
  }, interval)

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  async render() {
    const { time } = this.state

    const speed = 8
    const height = 12
    const offset = speed

    const y = (Math.cos(time * speed + offset) + 1) * height

    return (
      <a-scene>
        <a-entity position={{ x: 5, y: 0, z: 5 }}>
          <a-box
              position={{ x: 5, y, z: 0 }}
              scale={{ x: 5, y: 0.05, z: 5 }}
          />
          <a-box
              position={{ x: 0, y: 24.1, z: 0 }}
              scale={{ x: 5, y: 0.1, z: 5 }}
          />
          <a-obj-model
              position={{ x: 0, y: 0, z: 2 }}
              scale={{ x: 0.5, y: 0.55, z: 0.5 }}
              src="objects/Arc.obj"
              mtl="objects/Arc.mtl"
              id="Arc">
          </a-obj-model>
        </a-entity>
      </a-scene>
    )
  }
}
