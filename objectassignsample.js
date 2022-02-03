// This code is sample of Object.assign(). In detail https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign.
// And this use object-assign which exist on npm.

const objectAssign = require('object-assign')

let object1 = {part1: 'p1', part2: 'p2'}
let object2 = {part3: 'p3', part4: 'p4'}
Object.assign(object1, object2)

// normal copy
console.log(object1) // { part1: 'p1', part2: 'p2', part3: 'p3', part4: 'p4' }

let object3 = {part1: 'p1A', part3: 'p3'}
let object4 = {part1: 'p1', part5: 'p5'}
Object.assign(object3, object4) // copy to object4 from object5

// This object updates the part1 key.
console.log(object3)  // { part1: 'p1', part3: 'p3', part5: 'p5' }

let object5 = {part1: 'p1', part2: {part2_1: 'p2-1', part2_2: 'p2-2'}}
let object6 = {part2: {part2_3: 'p2-3'}}
Object.assign(object5, object6)

// object in object
console.log(object5) // { part1: 'p1', part2: { part2_3: 'p2-3' } }
object5.part2.part2_3 = 'part2-3-1'
console.log("object5 part2 part2_3: " + object5.part2.part2_3)
console.log(object5) // { part1: 'p1', part2: { part2_3: 'part2-3-1' } }

// ------------------------------
// object-assign samples
let object7 = {part1: 'p1', part2: 'p2'}
let object8 = {part3: 'p3', part4: 'p4'}
objectAssign(object7, object8)

console.log(object7)  // { part1: 'p1', part2: 'p2', part3: 'p3', part4: 'p4' }

let object9 = {part1: 'p1', part3: 'p3'}
let object10 = {part1: 'p1A', part5: 'p5'}
let object11 = {part2: 'p2', part4: 'p4'}
Object.assign(object9, object10, object11) // multiple assign

console.log(object9) // { part1: 'p1', part3: 'p3', part5: 'p5', part2: 'p2', part4: 'p4' }

let object12 = {part1: 'p1', part3: 'p3'}
let object13 = {part1: 'p1A', part5: 'p5'}
let object14 = {part2: 'p2', part4: 'p4'}
objectAssign(object12, object13, object14) // copy to object4 from object5

console.log(object12) // { part1: 'p1', part3: 'p3', part5: 'p5', part2: 'p2', part4: 'p4' }

let object15 = {part1: 'p1', part3: 'p3'}
let object16 = {part1: 'p1A', part5: 'p5'}
let object17 = {part1: 'p2B', part4: 'p4'}
Object.assign(object15, object16, object17)

console.log(object15) // { part1: 'p2B', part3: 'p3', part5: 'p5', part4: 'p4' }

let object18 = {part1: 'p1', part3: 'p3'}
let object19 = {part1: 'p1A', part5: 'p5'}
let object20 = {part1: 'p2B', part4: 'p4'}
objectAssign(object18, object19, object20)

console.log(object18) // { part1: 'p2B', part3: 'p3', part5: 'p5', part4: 'p4' }

let object21 = {part1: 'p1', part3: 'p3'}
Object.assign(object21, null, undefined)

console.log(object21) // { part1: 'p1', part3: 'p3' }

let object22 = {part1: 'p1', part3: 'p3'}
objectAssign(object22, null, undefined)

console.log(object22) // { part1: 'p1', part3: 'p3' }