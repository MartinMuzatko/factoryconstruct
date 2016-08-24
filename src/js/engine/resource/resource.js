export default class Resource {
    constructor(name,amount=0) {
        this.name = name
        this.amount = amount
    }

    canConsume(amount) {
        if (this.amount >= amount) {
            return true
        }
        return false
    }

    consume(amount) {
        if (this.canConsume(amount)) {
            this.amount -= amount
            return true
        }
        return false
    }
}
