import { GeometricImage } from './GeometricImage'

export class Circle extends GeometricImage {
    constructor(radius) {
        super("Circle")

        this.radius = radius
    }

    get radius() {
        return this._radius
    }

    set radius(value) {
        this._radius = value

        this._calculateSurface()
    }

    _calculateSurface() {
        
        this.surface = Math.PI*Math.pow(this._radius,2)   
    }
}