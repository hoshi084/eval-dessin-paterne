export default class DiscordNotification {
    constructor(channel) {
        this.channel = channel
    }

    notify(message) {
        console.log(`[DISCORD sur ${this.channel}] ${message}`)
    }
}
