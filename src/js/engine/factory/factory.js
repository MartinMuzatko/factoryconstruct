import * as RESOURCES from '../resource/resources'

export default class Factory {
    constructor(name, workerLimit = 5, drain, gain) {
        this.name = name
        this.drain = drain instanceof Array ? drain : [drain]
        this.gain = gain instanceof Array ? gain : [gain]
        this.worker = []
        this.workerLimit = [1,2,3,4,5]
    }

    work(tick) {
        if (this.worker.length) {
            let drain = this.drain.amount * this.worker.length
            let gain = this.gain.amount * this.worker.length

            if (this.drain.resource instanceof Resource) {
                if (tick % this.drain.interval == 0) {
                    this.drain.resource.consume(drain)
                }
                if (this.drain.resource.canConsume(drain)) {
                    if (tick % this.gain.interval == 0) {
                        this.gain.resource.amount += gain
                    }
                }
            } else {
                if (tick % this.gain.interval == 0) {
                    this.gain.resource.amount += gain
                }
            }
        }
    }

    addWorker() {
        if (RESOURCES.WORKER.canConsume(1) && this.worker.length < this.workerLimit.length) {
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
