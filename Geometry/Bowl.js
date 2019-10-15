import { GeometricBody } from './GeometricBody'
export class Bowl extends GeometricBody {
    constructor(radius) {
        super("Bowl")
        this._radius = radius
        this._calculateVolume()
    }

    get radius() {
        return this._radius
    }

    set radius(value) {
        this._radius = value

        //this._calculateSurface()

    }

    _calculateVolume() {

        this.volume = 4 * Math.PI * Math.pow(this.radius, 3) / 3
    }

}