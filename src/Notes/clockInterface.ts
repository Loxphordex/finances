interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
    tick(): void
}

function createClock
(construct: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new construct(hour, minute)
}

class DigitalClock implements ClockInterface {
    protected hour: number | null = null
    protected minute: number | null = null
    constructor(h: number, m: number) {
        this.hour = h
        this.minute = m
    }
    tick() {
        if (this.minute) this.minute++
        console.log(`Tick. ${this.hour} ${this.minute}`)
    }
}

class AnalogClock extends DigitalClock {
    tick() {
        if (this.minute) this.minute++
    }
}

let analog = createClock(AnalogClock, 4, 51)
analog.tick()