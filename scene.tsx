import { createElement, Component } from 'metaverse-api'

import { Elevator } from './components'
import { Tower } from './tower'

const networkHz = 60
const interval = 1000 / networkHz

interface TimeState {
  time: number
  startTime: number
}

export default class Wanderer extends Component<any, TimeState> {
  state = { time: 0, startTime: performance.now() / 1000 }

  timeout = setInterval(() => {
    this.setState({ time: performance.now() / 1000 })
  }, interval)

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  async render() {
    return (
      <a-scene>
        <a-entity position={{ x: 5, y: 0, z: 5 }}>
          <Elevator oneTime={true} {...this.state} active={true} bottom={true} height={24} speed={0.8} />
          <Tower position={{ x: 0, y: 0, z: 0}} />
        </a-entity>
      </a-scene>
    )
  }
}
