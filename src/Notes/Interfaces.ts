/***
 * Interfaces in TypeScript are like a list of requirements. Much like in C#,
 * an interface is used to ensure that a component meets a specific definition
 * so it can be used modularly.
 */

interface LabeledValue {
    label: string
}

function printLabel(labeledObject: LabeledValue): void {
    console.log(labeledObject)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)

/***
 * Although the LabeledValue interface only requires an object with one string
 * argument, we have supplied instead supplied two. The additional size argument
 * was not required in the interface, but including it does not throw an exception.
 * The interface only asks that, at the very least, its requirements are met. Any
 * additional thing you do is fine. Also note that the order of arguments does
 * not need to match the order in the interface.
 */

//

/***
 * Variables can be defined as read-only in an interface. This prevents them from
 * being changed after their initial creation.
 */

interface Point {
    readonly x: number
    readonly y: number
}

let p1: Point = {
    x: 10,
    y: 20
}

console.log(p1.x)

// Now x and y cannot be changed

// Arrays can also be read-only using ReadonlyArray<>

let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
console.log(ro[2]) // 3

// Nothing can change array "a", including array methods like push()

/***
 * Functions can be typed as well. This is done by giving the interface a 
 * "call signature." Here the parameters and output types are defined.
 */

interface SearchFunc {
    // parameters                       // output
    (source: string, subString: string): boolean
}

let mySearch: SearchFunc
mySearch = function(source: string, subString: string): boolean {
    let result = source.search(subString)
    return result > -1
}
mySearch('hello there', 'there') // true

// Interfaces can be enforced
interface IClock {
    currentTime: Date // variable
    setTime(d: Date): void // method
}

class Clock implements IClock {
    currentTime: Date = new Date()
    setTime(d: Date) {
        this.currentTime = d
    }
    // constructor(h: number, m: number) { }
}

const clock = new Clock()
clock.setTime(clock.currentTime)

// Interfaces cannot check for the private side of a class, only public

/***
 * Interfaces only checks the instance side of an object. It will not
 * check on static members. For this reason, constructors are not
 * checked because they are static
 */

// interface ClockConstructor {
//     new (hour: number, minute: number): ClockInterface
// }

// interface ClockInterface {
//     tick(): void
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute)
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) {}

//     tick() {
//         console.log('beep')
//     }
// }

// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) {}

//     tick() {
//         console.log('tick')
//     }
// }

// let digital = createClock(DigitalClock, 12, 17)
// let analog = createClock(AnalogClock, 7, 32)

// interfaces can be extended into other interfaces
interface Shape {
    color: string
}

interface Square extends Shape {
    sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10

// more than one interface can be extended

interface PenStroke {
    penWidth: number
}

interface ISquare extends Shape, PenStroke {
    length: number
}


interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function(start: number) { }) as Counter
    counter.interval = 123
    counter.reset = function() { }
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5

// Interfaces extending classes
class Control {
    private state: any
}

// This interface is extending the Control class, thus inheriting its members
// The inherited members do not include their implementations
interface SelectableControl extends Control {
    // state: any
    select(): void
}

class Button extends Control implements SelectableControl {
    select() { }
}

// This is invalid because classes of type SelectableControl must be descendants
// of Control. The SelectableControl interface requires that the private state
// exists only in the parent Control class, and a new declaration of private
// state will not work
// class Image implements SelectableControl {
//     private state: any
//     select() { }
// }

interface DigiClock {
    currentTime: string
    getTime(): string
    setTime(newTime: string): void
}

class digiClock implements DigiClock {
    currentTime: string = ''
    constructor(inTime: string) {
        this.currentTime = inTime
    }
    getTime() {
        return this.currentTime
    }
    setTime(newTime: string) {
        this.currentTime = newTime
    }
}