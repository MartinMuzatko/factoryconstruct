import * as FACTORIES from '../factory/factories'
import * as RESOURCES from '../resource/resources'
import Resource from '../resource/resource'
import Modifier from '../modifier/modifier'

export default class World {
    constructor(appContext) {
        this.factories = FACTORIES
        this.resources = RESOURCES
        this.tick = 0
        this.tickUnit = 1000
        this.app = appContext
        this.startTick()
    }

    startTick() {
        setInterval(() => {
            this.handleProduction()
            this.app.update()
        }, this.tickUnit)
    }

    handleProduction() {
        for (let factory in this.factories) {
            factory = this.factories[factory]
            if (factory.gain instanceof Modifier) {
                factory.gain.resource.amount += factory.gain.amount
            }
        }
    }

}
