import { createElement } from 'metaverse-api'

interface TowerProps {
  position: { x: number, y: number, z: number }
}

export const Tower = (props: TowerProps) => {
  return <entity {...props}>
    <box
        position={{ x: 0, y: 24.1, z: 0 }}
        scale={{ x: 5, y: 0.1, z: 5 }}
    />
    <obj-model
        position={{ x: 0, y: 0, z: 2 }}
        scale={{ x: 0.5, y: 0.55, z: 0.5 }}
        src="objects/Arc.obj"
        mtl="objects/Arc.mtl"
        id="Arc">
    </obj-model>
  </entity>
}
