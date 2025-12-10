export default class Room {
    constructor(name) {
        this.name = name
        this.sensors = []
        this.notifications = []
    }

    addSensor(sensor) {
        this.sensors.push(sensor)
    }

    addNotification(notification) {
        this.notifications.push(notification)
    }

    checkSensors() {
        console.log("Vérification des capteurs pour la pièce :", this.name)

        this.sensors.forEach(sensor => {
            const alertMessage = sensor.detect() 

            if (alertMessage) {
                console.log("[DETECTION]", alertMessage)

                for (const notification of this.notifications) {
                    notification.notify(alertMessage)
                }
            }
        })
    }
}
