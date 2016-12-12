export default class Modifier {
    constructor(resource = false, amount = 1, interval = 1) {
        this.resource = resource
        this.amount = amount
        this.interval = interval
    }

    getAverage() {
        return Math.round(this.amount / this.interval)
    }
}
