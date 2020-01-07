let x = 3 // x is inferred to be of type 'number'
// x can now only be a number
// attempting to set x to a string, for example, would throw a TypeError

let t = [0, 1, null] // type (number | null)[]
t = [99, null, null, -5] // valid
