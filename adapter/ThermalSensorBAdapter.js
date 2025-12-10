import ISensor from './ISensor.js'

export default class ThermalSensorBAdapter extends ISensor {
    constructor(thermalSensorB, location) {
        super(location)  
        this.sensor = thermalSensorB
    }

    detect() {
        const data = this.sensor.scanHeatSignature()
        if (!data) {
            return `[ALERTE] ${this.location} : erreur capteur B`
        }
        return `[ALERTE] ${data.sensor} détecte ${data.detection} @ ${this.location} (${data.date})`
    }
}
