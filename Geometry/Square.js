import { GeometricImage } from './GeometricImage'
export class Square extends GeometricImage {
    constructor(side) {
        super("Square")
        this._side = side
        this._calculateSurface()
    }
    
    get radius() {
        return this._side
    }

    set radius(value) {
        this._side = value

        //this._calculateSurface()
        
    }

    _calculateSurface() {
        
        this.surface = Math.pow(this._side, 2) 
    }
}