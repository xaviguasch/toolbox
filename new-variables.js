// var width = 100

// console.log(width) // Prints: 100

// width = 150

// console.log(width) // Prints: 150


// var width = 200

// console.log(width) // Prints: 200

// var variables can be both updated and also reassigned

// var variables are function-scoped if inside a function or globally scoped outside


// setWidth = () => {
//     var width = 200
//     console.log(width);   
// }

// setWidth() // Prints the width

// console.log(width); // Gives error because there's no var width in the global scope



/////////////////////////

// var age = 100
// if(age > 12) {
//     var dogYears = age * 7
//     console.log(`You are ${dogYears} dog years old.`) // Prints: You are 700 dog years old.
    
// }

// console.log(dogYears); // Prints: 700
// // You can access the variable from outside of the "if" block. It leaks. That's because var 
// // variables are NOT block-scoped.





//////////////////////////////

// let and const variables are block-scoped. You cannot access them outside of the block



// You can't redeclare a let/const.

// You can't reassign a const variable. But you can with a let one.


const person = {
    name: 'Lara',
    age: 23
}

// person.age = 25

// console.log(person); // It prints: { name: 'Lara', age: 25 }

// But if we do:

// person = {
//     name: 'Lara',
//     age: 30
// }

// We'd get an error. We can mutate a const object but not reassign it.


// Also, if we want to avoid mutations we can use Object.freeze(person)

// const lara = Object.freeze(person)

// lara.age = 20

// console.log(lara); // It prints: { name: 'Lara', age: 23 }     The 'lara.age' hasn't worked, because the
// object is freezed




//////////////

// for(var i = 0; i < 10; i++) {
//     console.log(i);
//     setTimeout(() => {
//         console.log(i);        
//     }, 1000);
// }

// It prints: 0 1 2 3 4 5 6 7 8 9 10 10 10 10 10 10 10 10 10 10


// for(let i = 0; i < 10; i++) {
//     console.log(i);
//     setTimeout(() => {
//         console.log(i);
        
//     }, 1000);
// }

// It prints: 1 2 3 4 5 6 7 8  0 1 2 3 4 5 6 7 8




// TEMPORAL DEAD ZONE
// console.log(pizza); // Prints: undefined
// var pizza = 'Deep dish'

// console.log(pizza); // It gives you error
// let pizza = 'Deep dish'

// You can't access a let/const variable before it's been defined, it's the temporal dead zone.