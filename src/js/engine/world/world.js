import * as FACTORIES from '../factory/factories'
import * as RESOURCES from '../resource/resources'

export default class World {
    constructor() {
        this.factories = FACTORIES
        this.resources = RESOURCES
        this.tick = 0
    }

}
