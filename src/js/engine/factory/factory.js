export default class Factory {
    constructor(name, resource) {
        this.name = name
        this.resource = resource
        this.interval = 1
        this.gain = {resource: resource, amount: 1}
        this.drain = {resource: resource, amount: 1}
    }
}
