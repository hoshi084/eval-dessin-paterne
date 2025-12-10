export default class CameraA {
    constructor(location) {  
        this.location = location
      }

    detect() {
        return `[ALERTE] CameraA détecte un mouvement dans ${this.location}`
        }
}