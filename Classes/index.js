import { NissanLeaf } from './NissanLeaf'
import { ToyotaYaris } from './ToyotaYaris'

const toyota = new ToyotaYaris()
const nissan = new NissanLeaf()

console.log(toyota)
console.log(nissan)

toyota.start()
nissan.start()

setTimeout(() => {
    toyota.stop()
    nissan.stop()
}, 1000);
