/***
 * Generics are components that can be used with a variety of types instead of just one. 
 * This allows other programmers to use their own types with your components. 
 * 
 * Much like parameters, types can be defined when creating a new component. These are
 * known as type variables. 
 */

// Here, type 'T' is both the input and output type. 'T' is defined by the consumer
function identity<T>(arg: T): T {
    return arg
}

/***
 * When using the 'identity' function, the argument type can be inferred
 */
let outPut = identity('myMessage') // no typing necessary
console.log(outPut)

// our generic type 'T' can also be used as an array
function identities<T>(args: T[]): T[] {
    return args
}

// Interfaces can also define a generic method
interface GenID {
    <T>(arg: T): T
}

function genId<T>(arg: T): T {
    return arg
}

let myId: GenID = genId

// The generic type used in the interface can be defined at the time of
// function call
interface GenIDNew<T> {
    (arg: T): T
}

function myNewId<T>(arg: T): T {
    return arg
}

// let myNewNewId: GetIDNew<number> = myNewId


// Generic constraints allow us to make our generics less generic
interface SpecId<T> {
    length: number | T[]
}

function specIdLog<T extends SpecId<T>>(arg: T) {
    console.log(arg.length)
    return arg
}

specIdLog({ length: 10, value: 3 })

// When passing a generic object, the key of the object can be grabbed
// using 'extends keyof'
function getProperty<O, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}

let xObj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

getProperty(xObj, 'b') // 2


function create<T>(construct: { new(): T }): T {
    return new construct()
}

class BeeKeeper {
    hasMask: boolean = false
}

class ZooKeeper {
    nametag: string = ''
    constructor(name: string) {
        this.nametag = name
    }
}

class AnimaL {
    numLegs: number = 4
}

class Bee extends AnimaL {
    keeper: BeeKeeper | null = null
}

class Lion extends AnimaL {
    keeper: ZooKeeper | null = null
}

function createInstance<A extends AnimaL>(construct: new () => A): A {
    return new construct()
}

let Leon = createInstance(Lion)
Leon.keeper = new ZooKeeper('Marv')
console.log('Leon: ', Leon.keeper)
