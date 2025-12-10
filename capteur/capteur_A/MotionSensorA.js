export default class MotionSensorA {
    constructor(location) {   
        this.location = location
     }

    detect() { 
        return `[ALERTE] MotionSensorA détecte un mouvement dans ${this.location}`
    }
}