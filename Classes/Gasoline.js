import { Car } from './Car'

export class Gasoline extends Car {
	start() {
		this.interval = setInterval(() => {
			console.log(`${this.carName} with gasoline`)
		}, 100)

		return interval
	}

	stop() {
		clearInterval(this.interval)
	}
}
