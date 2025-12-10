export default class ISensor {
    constructor(location) {
        this.location = location
    }

    detect() {
        throw new Error("detect() doit être implémenté")
    }
}
