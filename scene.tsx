import { createElement, ScriptableScene } from 'metaverse-api'

import { Elevator } from './components'
import { Tower } from './tower'

const networkHz = 60
const interval = 1000 / networkHz

interface TimeState {
  time: number
  startTime: number
  active: boolean
  bottom: boolean
}

const now = () => performance.now() / 1000

export default class Wanderer extends ScriptableScene<any, TimeState> {
  state = { active: false, bottom: true, time: 0, startTime: now() }

  timeout = setInterval(() => {
    this.setState({ time: now() })
  }, interval)

  sceneWillUnmount() {
    clearInterval(this.timeout)
  }

  sceneDidMount() {
    this.eventSubscriber.on('start_click', () => {
      this.setState({ active: true, startTime: now(), bottom: !this.state.bottom })
    })
  }

  async render() {
    return (
      <scene>
        <entity position={{ x: 5, y: 0, z: 5 }}>
          <Elevator
            {...this.state}
            identify='start'
            oneTime={true}
            height={24}
            speed={0.8}
          />
          <Tower position={{ x: 0, y: 0, z: 0}} />
        </entity>
      </scene>
    )
  }
}
