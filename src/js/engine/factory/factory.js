import * as RESOURCES from '../resource/resources'

export default class Factory {
    constructor(name, workerLimit = 5, drain, gain) {
        this.name = name
        this.drain = drain
        this.gain = gain
        this.worker = []
        this.workerLimit = workerLimit
    }

    addWorker() {
        if (RESOURCES.WORKER.canConsume(1) && this.worker.length < this.workerLimit) {
            RESOURCES.WORKER.consume(1)
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
