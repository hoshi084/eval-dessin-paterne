export default class TemperatureSensorA {
    constructor(location, threshold) { 
        this.location = location
        this.threshold = threshold
        this.currentTemp = Math.floor(Math.random() * 40) 
       }

    detect() {   
        if (this.currentTemp > this.threshold) {
            return `[ALERTE] TemperatureSensorA : température ${this.currentTemp}°C dépasse le seuil ${this.threshold}°C dans ${this.location}`
        }
        return null 
     }
}