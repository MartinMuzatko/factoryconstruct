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

            let goal = 0
            for (let drain in this.drain) {
                drain = this.drain[drain]
                if (drain.resource.canConsume(drain.amount * this.worker.length)) {
                    goal += 1
                }
            }
            if (goal == this.drain.length) {
                for (let drain in this.drain) {
                    drain = this.drain[drain]
                    if (tick % drain.interval == 0) {
                        drain.resource.consume(drain.amount * this.worker.length)
                    }
                }
                for (let gain in this.gain) {
                    gain = this.gain[gain]
                    if (tick % gain.interval == 0) {
                        gain.resource.add(gain.amount * this.worker.length)
                    }
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
