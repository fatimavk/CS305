////////////// TASK 1 //////////////


// 1.Multiply 12 with 8, and console the result:
let result = 12 * 8;
console.log(result);

// 2.Divide 10 by 2 add result to variables x, and console x
let x = 0;
x += 10 / 2;
console.log(x);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.

let num1 = 20;
let num2 = 17;
console.log(num1 + num2);

/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */

let name = 'Fatima';
let surname = 'Karimova';
let year = '2006';

let info = name + ' ' + surname + ' ' + year;
console.log(info);

// 5.Console the remainder(%) when 17 is divided by 12.

let remainder = 17 % 12;
console.log(remainder);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence, console result.

let cityName = 'Baku';
console.log(cityName);

cityName = 'Gence';
console.log(cityName);


////////////// TASK 2 //////////////

//  {
//     let a='Fatima'
//     let b='Karimova'
//  }
//     console.log(ab)= ${a+b})

// this will not work because console.log is outside of the scope

//  {

//  let x ='Fatima'
//  let y='Karimova'
//  console.log(xy)= ${x+y})

//  } 

// this will work because console.log is inside the scope

//  {
//  var ab ='Fatima'
//  var ba ='Karimova'
//  }
//  console.log(example) = ${ab+ba})

// this will work because var doesnt need scope

////////////// TASK 3 //////////////


//Find the type of all the following cases:

// let name = "Ulfat" //string
// let surname = Zakirli
// let year = 2000
// year = "2000"
// let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// let arr = ['a', 'b', 'c']


let name1 = "Ulfat" //string

//let surname2 = Zakirli //this will throw an error, it should be defined as a string like "Zakirli"

let year3 = 2000 //number

year = "2000" //string

let city; //undefined

let qualification = null //object

let obj = { name: 'ulfat' } //object

let arr = ['a', 'b', 'c'] //object



////////////// TASK 4 //////////////


const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// 1.Sum all the numbers in 'arr1'
sum1=0;
 for(let i=0;i<arr1.length;i++)
 { 
sum1+=arr1[i]
 }
 console.log('sum=',sum1);

// 2.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10,88)
console.log('newarr1',arr1)

// 3.Remove first two numbers from arr1
arr1.splice(0,2)
console.log('arr1',arr1);

// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0,9,11)
console.log("unshift",arr1)

// 5.Remove four numbers in front of arr1(shift)
for (let i = 0; i < 4; i++) {
  arr1.shift();
}

////////////// TASK 5 //////////////


// 1.Create a object add your name, surname, age and city.
const newobject={
  firstName: 'Fatima',
  lastName: 'Karimova',
  age:18,
  city:"Baku"
}

// 2.Then change name to "Jhon"
newobject.firstName="Jhon"
console.log('firstName=',newobject.firstName)


const user = {
    email: "ulfat@gmail.com",
    info: {
        gender: "Female",
        loc: {
            city: "Baku",
            street: "Nizami 22",
            education: {
                "uni name": "UNEC",
            },
        },
    },
};

// 3.console each value of user object
console.log(user.email);
console.log(user.info.gender);
console.log(user.info.loc.city);
console.log(user.info.loc.street);
console.log(user.info.loc.education['uni name']);

// 4.Console only keys of user
console.log('keys',Object.keys(user));
console.log('keys1',Object.keys(user.info));
console.log('keys2',Object.keys(user.info.loc));
console.log('keys3',Object.keys(user.info.loc.education));

// 5.Console only values of user
console.log('values',Object.values(user));
console.log('values1',Object.values(user.info));
console.log('values2',Object.values(user.info.loc));
console.log('values3',Object.values(user.info.loc.education));

const mixedObject = {
  name: "ulfat",
  age: 25,
  isStudent: false,
  hobbies: null,
  year: 2024,
  address: undefined,
  surname: "Zakirli",
  contactInfo: {
      email: "ulfat@example.com",
      phone: null,
  },
  scores: [98, 87, 92],
}


// 6.Log only the 'keys' whose values are of type string
for ( key in mixedObject) {
  if (typeof mixedObject[key] === 'string') {
      console.log(key);
  }
}

for ( key in mixedObject.contactInfo) {
  if (typeof mixedObject.contactInfo[key] === 'string') {
      console.log(key);
  }
}

// 7.Log only the 'keys' whose values are of type number
for ( key in mixedObject) {
  if (typeof mixedObject[key] === 'number') {
      console.log(key);
  }
}

// 8.Log only the 'keys' whose values are of type boolean
for ( key in mixedObject) {
  if (typeof mixedObject[key] === 'boolean') {
      console.log(key);
  }
}

// 9.Log only the 'keys' whose values are of type undefined
for(key in mixedObject)
  {
      if(typeof mixedObject[key]==='undefined')
      {
          console.log(key);
          
      }
  }
  for(key in mixedObject.contactInfo)
      {
          if(typeof mixedObject.contactInfo[key]==='undefined')
          {
              console.log(key);
              
          }
      }

      // 10.Log only the 'keys' whose values are of type object
for(key in mixedObject)
  {
      if(typeof mixedObject[key]==='object')
      {
          console.log(key);
          
      }
  }
  for(key in mixedObject.contactInfo)
      {
          if(typeof mixedObject.contactInfo[key]==='object')
          {
              console.log(key);
              
          }
      }