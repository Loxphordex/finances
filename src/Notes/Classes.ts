class Greeter {
    greeting: string
    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

let greeter = new Greeter('world')
console.log(greeter.greet())

class Animal { // superclass (or super) of Dog
    name: string = ''
    constructor(inName: string) {
        this.name = inName
    }
    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance}`)
    }
}

class Dog extends Animal { // subclass of Animal
    constructor(name: string) {
        super(name)
    }
    move(distance: number = 5) {
        super.move(distance)
    }
    bark(): void {
        console.log('wof')
    }
}



