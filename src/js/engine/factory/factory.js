import * as RESOURCES from '../resource/resources'

export default class Factory {
    constructor(name, drain, gain) {
        this.name = name
        this.drain = drain
        this.gain = gain
        this.worker = []
    }

    addWorker() {
        if (RESOURCES.WORKER.consume(1)) {
            this.worker.push(0)
        }
    }

    removeWorker() {
        if (this.worker.length) {
            RESOURCES.WORKER.amount += 1
            this.worker.pop()
        }
    }
}
