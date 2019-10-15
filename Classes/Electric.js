import { Car } from './Car'

export class Electric extends Car {
	start() {
		this.interval = setInterval(() => {
			console.log(`${this.carName} with electric`)
		}, 100)
	}

	stop() {
		clearInterval(this.interval)
	}
}    
