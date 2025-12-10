export default class Building {
    constructor() {
        this.rooms = []
    }

    addRoom(room) {
        this.rooms.push(room)
    }

    monitorAll() {
        console.log("Surveillance de toutes les chambres...")
        this.rooms.forEach(room => room.checkSensors())
    }
}
