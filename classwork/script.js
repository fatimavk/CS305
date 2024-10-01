// const nums = [4, 5, 7, 8, 10, 33, 0]

// //1.Mult nums
// //2.Select numbers between 5 and 10
// //3.Select only true numbers
// //4.Sum only odd numbers
// //5.Mult only even numbers



// //1

// let mult = 1
// for (let i = 0; i < nums.length; i++) {
//     mult *= nums[i]
// }
// console.log('mult', mult)



// //2 

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i]>5 && nums[i]<10 ) {

//     }
//     }
//    console.log("nuns", nuns);
   


//     //3 
    

//     //4 
//     let sum1= 1
// for (let i = 1; i < n

//     //5




    const users = [
        {
            id: 1,
            name: 'Nihad',
            gender: 'Male',
            age: 25,
        },
        {
            id: 2,
            name: 'Fidan',
            gender: 'Female',
            age: 20,
        },
        {
            id: 3,
            name: 'Sabir',
            gender: 'Male',
            age: 30,
        
        },
        {
            id: 4,
            name: 'Fatime',
            gender: 'Female',
            age: 18,
        },
        {
            id: 5,
            name: 'Aliriza',
            gender: 'Male',
            age: 19,

            id: 6,
            name: 'Rufat',
            gender: 'Male',
            age: 23,

        },
    ]

//1. Sum all age (map)
//2. Find only Females (filter)
//3. Find users whose age is greater than 25 (filter)
//4. Mult each users age with 10 (map)

//1
let sum = 0
const SumAllAge = users.filter(item => item.age + sum)
console.log("SumAllAge", SumAllAge)

//2
const females = users.filter(user => user.gender === 'Female');
console.log('Females:', females);

//3
const olderThan25 = users.filter(user => user.age > 25);
console.log('Users older than 25:', olderThan25);

//4
const agesMultiplied = users.map(user => user.age * 10);
console.log('Ages multiplied by 10:', agesMultiplied);

