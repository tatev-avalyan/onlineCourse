import { Circle } from './Circle'
import { Square } from './Square'
import { Cone } from './Cone'
import { Bowl } from './Bowl'
import { Cylinder } from './Cylinder'

const circle = new Circle(4)
// const square = new Square(3)
const cone = new Cone(4,3)
// const cylinder = new Cylinder(3,6)
// const bowl = new Bowl(4,5)
// circle.radius = 5

console.warn(circle.radius)
console.warn(circle.surface)
// circle.surface()
// square.surface()
// cone.volume()
// cylinder.volume()
// bowl.volume()