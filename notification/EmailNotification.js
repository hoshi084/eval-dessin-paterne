export default class EmailNotification {
    constructor(email) {
        this.email = email
    }

    notify(message) {
        console.log(`[EMAIL à ${this.email}] ${message}`)
    }
}
