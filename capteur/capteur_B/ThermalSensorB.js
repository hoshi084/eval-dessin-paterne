export default class ThermalSensorB {
    constructor(position) {  
        this.position = position
      }

    scanHeatSignature() {  
        return {
            sensor: "ThermalSensorB",
            detection: "thermal",
            date: new Date(),
        }
      }
}
