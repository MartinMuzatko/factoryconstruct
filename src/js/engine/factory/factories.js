import Factory from './factory'
import Modifier from '../modifier/modifier'
import * as RESOURCES from '../resource/resources'

export const IRON_DRILL = new Factory(
    'Iron Drill', // Name
    5, // Maximum amount of workers
    new Modifier(RESOURCES.COAL, 1), // Draining x resources per y ticks
    new Modifier(RESOURCES.IRON, 5, 5) // Gain x resources per y ticks
)

export const COAL_DRILL = new Factory(
    'Coal Drill',
    5,
    new Modifier(),
    new Modifier(RESOURCES.COAL, 2)
)
