export default class Factory {
    constructor(name, drain, gain) {
        this.name = name
        this.interval = 1
        this.drain = drain
        this.gain = gain
        this.worker = []
    }
}
