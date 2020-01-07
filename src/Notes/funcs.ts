// The input and output types of a function can be defined 
// when the function is defined:
            // input types         output type
let myAdd: (x: number, y: number) => number = 
    function(x: number, y:number) {
        return x + y
    }


// A rest parameter is a set of any number of paramaters.
// When the arguments are made, they are gruped together
// in an array:
function roleCall(teacher: string, ...students: string[]) {
    return `${teacher} ${students.join(' ')}`
}

const scienceClass = roleCall('Mrs. Williams', 'Puel Majes', 'Marthon Milkman', 'Pealio Teft', 'Suzanita Ramush')
console.log(scienceClass)


interface Card {
    suit: string
    card: number
}

interface Deck {
    suits: string[]
    cards: number[]

    // Here, 'this' is a fake parameter. It is used to tell
    // the compiler what the type of 'this' should be
    createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function(this: Deck) {

        // An arrow function must be used here in order to bind 'this'
        // to the 'deck' object.
        // Arrow functions capture the 'this' where the function is created
        // rather than where it is invoked.
        return () => {
            let pickedCard = Math.floor(Math.random() * 52)
            let pickedSuit = Math.floor(pickedCard / 13)

            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            }
        }
    }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`)



/***
 * 'this' in a callback function will not work when the function is
 * passed to a library that will use it later. 'this' parameters can
 * be used to avoid this problem
 */

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}

// 'this: void' tells 'onclick' that 'this' should be undefined when called
// In other words, 'onclick' does not require a 'this' at all

// The calling code should be annotated to make it clear that you must only
// use functions with 'this' in instances of your class
class Handler {
    info: string = ''

    // This method uses 'this'! do not call this method at runtime
    // unless it's from an instance of Handler
    onClick(this: Handler, e: Event) {
        this.info = e.eventPhase as unknown as string
    }

    onSafeClick(this:void, e: Event) {
        console.log(`This method is safe because 'this' is void. ${e.returnValue}`)
    }

    // 'this' is now bound to the instance of Handler and will always the same
    alwaysSafe = (e: Event) => { this.info = e.returnValue as unknown as string }
    /***
     * NOTE that the above method can cost a lot of memory. Whenever a new instance
     * of a class is created, the arrow functions within that class will be created
     * anew as well. So each instance of Handler will have its own instance of
     * 'alwaysSafe()', which will occupy its own space in memory. In contrast, a 
     * non-arrow-function method is bound to the class prototype, and each instance
     * uses that one method instead of creating its own instead.
     */
}

let h = new Handler()


/***
 * In order for a function to return varying results based on the passed arguments,
 * overloads can be used. This allows for dynamic typing
 */
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

// Overloads are ordered by specificity 
function pickCard(x: { suit: string, card: number }[]): number // most specific
function pickCard(x: number): { suit: string, card: number }
function pickCard(x: any): any { // least specific
    // Check to see if argument is object/array
    // if so, give us the deck and we'll pick a card
    if (typeof x === 'object') {
        let pickedCard = Math.floor(Math.random() * x.length)
        return pickedCard
    }

    // Otherwise let the other player pick the card
    else if (typeof x === 'number') {
        let pickedSuit = Math.floor(x / 13)
        return {
            suit: suits[pickedSuit],
            card: x % 13
        }
    }
}