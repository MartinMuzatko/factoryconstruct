import Factory from './factory'
import Modifier from '../modifier/modifier'
import * as RESOURCES from '../resource/resources'

export const IRON_DRILL = new Factory(
    'Iron Drill',
    new Modifier(RESOURCES.COAL, 1),
    new Modifier(RESOURCES.IRON, 5)
)

export const COAL_DRILL = new Factory(
    'Coal Drill',
    new Modifier(),
    new Modifier(RESOURCES.COAL, 1)
)
