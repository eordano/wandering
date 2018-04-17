import { createElement, Component } from 'metaverse-api'

import { Elevator } from './components'

const networkHz = 60
const interval = 1000 / networkHz

interface TimeState {
  time: number
  startTime: number
}

export default class RollerCoaster extends Component<any, TimeState> {
  state = { time: 0, startTime: performance.now() / 10000 }

  timeout = setInterval(() => {
    this.setState({
      time: performance.now() * 0.0001
    })
  }, interval)

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  async render() {
    return (
      <a-scene>
        <a-entity position={{ x: 5, y: 0, z: 5 }}>
          <Elevator {...this.state} active={false} bottom={false} height={24} speed={8} />
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
