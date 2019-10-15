import { Geometry } from './Geometry'

export class GeometricImage extends Geometry {
    constructor(name) {
        super(name)
    
        this._surface = 0
      }

      get surface() {
          return this._surface
      }

      set surface(value) {
          this._surface = value
      }
}