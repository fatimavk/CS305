// Functions




// Math.floor(4.9) //4
// Math.ceil(4.1) //5
// Math.round(4.5) //5
// Math.max(6, 7, 11, 111, 3333) //3333
//4
//0-1
// console.log(Math.random());
// console.log(Math.max(4.2, 4.1, 4.4, 4.45, 4.5, 4.4111, 4.001));
// console.log(Math.round(Math.random() * 10));

// const users = ['Sabir', 'Fuad', 'Mehman', 'Fidan', 'Kenan', 'Gunel', 'Fatime']

// console.log(users[Math.floor(Math.random() * users.length)])


// console.log([{ name: 'Nusret' }].length);

const CS305 = [21, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
const CS306 = [20, 34, 17, 17, 18, 24, 22, 23, 18, 23, 18, 34, 43]
const CS307 = [11, 33, 21, 21, 18, 33, 22, 23, 11, 23, 22, 22, 43]
const CS308 = [11, 33, 21, 21, 18, 27, 22, 12, 18, 23, 18, 33, 43]



function calcAvgOfStudents(group) {
    const result = group.reduce((sum, item) => sum + item, 0) / group.length
    return Math.round(result)
}

console.log(calcAvgOfStudents(CS305));
console.log(calcAvgOfStudents(CS306));
console.log(calcAvgOfStudents(CS307));


// function sum(a = 'empty', b = '!') {
//     return a + ' ' + b
// }

// console.log(sum(10, 10));
// console.log(sum(3, 28));
// console.log(sum(10, 9));
// console.log(sum());

const arr1 = [21, 33, 21, 21, 18, 24, 22, 23, 18, 23, 18, 33, 43]
const arr2 = [20, 34, 17, 17, 18, 24, 22, 23, 18, 23, 18, 34, 43]

// Tasks
// 1. create function which sum a and b
// 2. create function which mult values of 'arr1' and 'arr2' (reduce)
// 3. create function which take two parameters (firstName and lastName) 