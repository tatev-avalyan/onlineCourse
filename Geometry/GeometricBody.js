import { Geometry } from './Geometry'

export class GeometricBody extends Geometry {
  constructor(name) {
    super(name)

    this._volume = 0
  }

  get volume() {
    return this._volume
  }
  set volume(value) {
    this._volume = value
  }
}