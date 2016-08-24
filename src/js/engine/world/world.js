import * as FACTORIES from '../factory/factories'
import * as RESOURCES from '../resource/resources'
import Resource from '../resource/resource'
import Modifier from '../modifier/modifier'

export default class World {
    constructor(appContext) {
        this.factories = FACTORIES
        this.resources = RESOURCES
        this.tick = 100
        this.tickUnit = 1000
        this.app = appContext
        this.startTick()
    }

    startTick() {
        setInterval(() => {
            this.handleProduction()
            this.tick += 1
            this.app.update()
        }, this.tickUnit)
    }

    handleProduction() {
        for (let factory in this.factories) {
            factory = this.factories[factory]
            if (factory.worker.length) {
                let drain = factory.drain.amount * factory.worker.length
                let gain = factory.gain.amount * factory.worker.length


                if (factory.drain.resource instanceof Resource) {
                    if (this.tick % factory.drain.interval == 0) {
                        factory.drain.resource.consume(drain)
                    }
                    if (factory.drain.resource.canConsume(drain)) {
                        if (this.tick % factory.gain.interval == 0) {
                            factory.gain.resource.amount += gain
                        }
                    }
                } else {
                    if (this.tick % factory.gain.interval == 0) {
                        factory.gain.resource.amount += gain
                    }
                }
            }
        }
    }

}
