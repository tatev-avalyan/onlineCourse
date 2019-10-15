import { GeometricBody } from './GeometricBody'

export class Cone extends GeometricBody {
    constructor(radius, height) {
        super("Cone")
        this._height = height
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
    get height(){
        return this._height
    }
    set height(value){
        this._height=value
    }

    _calculateVolume() {

        this.volume = Math.PI * Math.pow(this.radius, 2) * this.height / 3
    }

}