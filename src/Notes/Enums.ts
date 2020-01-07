/***
 * Enums allow you to define a list of named states. These can be either
 * numeric or string-based. Enums are helpful in defining the possible
 * states of an element. 
 */

// By default, enums are numbered starting at 0. So Up = 0, Down = 1, etc. 
// An initial value can be set, and all following states will count up in index. 
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function respond(recipient: string, message: Direction): void {
    console.log(recipient, message)
}

respond('Prance', Direction.Left) // 'Prance' 2

// string enums go like this
enum Responses {
    Yes = 'YEP',
    No = 'NAW'
}

const mondo: Responses = Responses.Yes
console.log(mondo) // 'YEP'



