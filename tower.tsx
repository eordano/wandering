import { createElement } from 'metaverse-api'

interface TowerProps {
  position: { x: number, y: number, z: number }
}

export const Tower = (props: TowerProps) => {
  return <a-entity {...props}>
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
}
