export default class TemperatureSensorA {
    constructor(location, threshold) { 
        this.location = location
        this.threshold = threshold
        this.currentTemp = Math.floor(Math.random() * 40) 
       }

    detect() {    }
}