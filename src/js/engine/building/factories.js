import Factory from './factory'
import Modifier from '../modifier/modifier'
import * as RESOURCES from '../resource/resources'

export const COAL_MINE = new Factory(
    'Coal Drill',
    5,
    [],
    new Modifier(RESOURCES.COAL, 2)
)

export const IRON_DRILL = new Factory(
    'Iron Drill', // Name
    5, // Maximum amount of workers
    new Modifier(RESOURCES.COAL, 1), // Draining x resources per y ticks
    new Modifier(RESOURCES.IRON, 5, 5) // Gain x resources per y ticks
)

export const COPPER_DRILL = new Factory(
    'Copper Drill',
    5,
    new Modifier(RESOURCES.COAL, 1),
    new Modifier(RESOURCES.COPPER, 3, 6)
)

export const WIRE_EXTRUDER = new Factory(
    'Wire Extruder',
    15,
    new Modifier(RESOURCES.COPPER, 1, 5),
    new Modifier(RESOURCES.WIRE, 2)
)

export const COMPUTER_PARTS_ASSEMBLY = new Factory(
    'Computer Parts Assembly',
    3,
    [
        new Modifier(RESOURCES.COPPER, 8, 5),
        new Modifier(RESOURCES.IRON, 5, 5),
        new Modifier(RESOURCES.COAL),
        new Modifier(RESOURCES.WIRE, 50, 5),
    ],
    new Modifier(RESOURCES.COMPUTER_CHIP, 1, 5)
)

export const ROBOT_ASSEMBLY = new Factory(
    'Robot Assembly',
    3,
    [
        new Modifier(RESOURCES.COPPER, 50, 20),
        new Modifier(RESOURCES.IRON, 25, 20),
        new Modifier(RESOURCES.COAL),
        new Modifier(RESOURCES.WIRE, 20, 20),
        new Modifier(RESOURCES.COMPUTER_CHIP, 10, 20),
    ],
    new Modifier(RESOURCES.WORKER, 1, 20)
)
