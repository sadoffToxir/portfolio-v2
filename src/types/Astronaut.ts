import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    Object_99: THREE.SkinnedMesh
    Object_100: THREE.SkinnedMesh
    Object_103: THREE.SkinnedMesh
    Object_106: THREE.SkinnedMesh
    GLTF_created_0_rootJoint: THREE.Bone
  }
  materials: {
    material_1: THREE.MeshStandardMaterial
  }
}