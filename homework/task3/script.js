////////////// TASK 1 //////////////


const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8];

// 1. Sum all the numbers in 'arr1'
const sum = arr1.reduce((acc, num) => acc + num, 0);

// 2. Add two numbers (10, 88) to end of arr1 (push methods)
arr1.push(10, 88);

// 3. Remove first two numbers from arr1
arr1.splice(0, 2);

// 4. Add three numbers (0, 9, 11) in front of arr1 (unshift)
arr1.unshift(0, 9, 11);

// 5. Remove four numbers in front of arr1 (shift)
arr1.splice(0, 4);

console.log(sum, arr1);


// ////////////// TASK 2 //////////////


const arr2 = ["Sabir", "Fatime", "Rufet", 'Mehman', 'Fatime', 'Gunel', "Fatime", "Cavid", 'Ramin', "Ali", "Polad"];

// 1. Console values from "Rufet" to "Ali"
console.log(arr2.slice(arr2.indexOf("Rufet"), arr2.indexOf("Ali") + 1));

// 2. Change Mehman to Fidan
arr2[arr2.indexOf('Mehman')] = 'Fidan';

// 3. Console each name with map
arr2.map(name => console.log(name));

// 4. Console only names which are Fatime
const result4 = arr2.filter(name => name === 'Fatime');
console.log(result4);

// 5. Console all names where name is Gunel, then change it to "Nihad"
arr2.forEach((name, index) => {
    if (name === 'Gunel') {
        console.log(name);
        arr2[index] = 'Nihad';
    }
});

// 6. Console last second value of arr2
console.log(arr2[arr2.length - 2]);

// 7. Console length of arr2
console.log(arr2.length);


// ////////////// TASK 3 //////////////


const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false];

// 1. Show only numbers
const result1= arr3.filter(item => typeof item === 'number');
console.log(result1);

// 2. Show only true values
const trueValues = arr3.filter(item => item === true);
console.log(trueValues);

// 3. Show only false values
const falseValues = arr3.filter(item => item === false);
console.log(falseValues);

// 4. Show only strings
const strings = arr3.filter(item => typeof item === 'string');
console.log(strings);


////////////// TASK 4  //////////////


const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25];

// 1. Console (only even numbers)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 2. Console (only odd numbers)
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);



////////////// TASK 5 //////////////


const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false];

// 1.Console all values of arr4 -
// if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)

// Example: [10,'true',false]
// Result: [20, "true is string", "false is falsy value"]
const Result1 = arr4.map(value => {
    if (typeof value === 'number') {
        return value + 10;
    } else if (typeof value === 'string') {
        return value + " is string";
    } else if (!value) {
        return value + " is falsy value";
    }
});
console.log(Result1);

// 2. Sum all numbers of arr4
const sumOfNumbers = arr4.filter(num => typeof num === 'number').reduce((acc, num) => acc + num, 0);
console.log(sumOfNumbers);

// 3. Count only the values that are true
const countOfTrue = arr4.filter(value => value === true).length;
console.log(countOfTrue);

// 4. Count only the values that are string
const countOfString = arr4.filter(value => typeof value === 'string').length;
console.log(countOfString);

// 5. Count only the values that are false
const countOfFalse = arr4.filter(value => value === false).length;
console.log(countOfFalse);



////////////// TASK 6 //////////////


let fullName = 'Fatima Karimova Vidadi';

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
const splitName = fullName.split(' ');

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
const newNameArr = [splitName[1], splitName[0], splitName[2]];

// 3) Alinan yeni arrayi stringe cevirin(join)
const newName = newNameArr.join(' ');


console.log('Split Name:', splitName);
console.log('New Name Array:', newNameArr);
console.log('New Name:', newName);


let arr = [8, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7];

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
const count5 = arr.filter(num => num === 5).length;
console.log(count5);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
const sumOfTotal = arr.reduce((acc, num) => acc + num, 0);
console.log(sumOfTotal);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
const repeatedNumbers= [...new Set(arr)].sort((a, b) => a - b);
console.log(repeatedNumbers);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
const maxNum = Math.max(...arr);
const maxCount = arr.filter(num => num === maxNum).length;
console.log(maxNum, maxCount);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
const nameLength = 'Fatima'.length;
console.log(arr.includes(nameLength));

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
const index = arr.findIndex(num => num % 3 === 2);
const num = arr.find(num => num % 3 === 2);
console.log(num, index);

//10) arraydaki en boyuk reqemin ilk indexini tapin
const firstMaxIndex = arr.indexOf(maxNum);
console.log(firstMaxIndex);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
const indicesOfFour = arr.reduce((acc, num, index) => {
    if (num === 4) acc.push(index);
    return acc;
}, []);
console.log(indicesOfFour);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
const firstIndexOfFive = arr.indexOf(5);
const lastIndexOfFive = arr.lastIndexOf(5);
console.log(firstIndexOfFive, lastIndexOfFive);

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
const newArr = arr.filter(num => num > 2);
const lengthDifference = arr.length - newArr.length;
console.log(newArr, lengthDifference);

//14) 7 reqeminin indexleri cemini tapin.
const sum7 = arr.reduce((acc, num, index) => {
    if (num === 7) acc += index;
    return acc;
}, 0);
console.log(sum7);


////////////// TASK 7 //////////////


let arr2 = [
    { name: 'test', key: 1 },
    { name: 'task', key: 2 },
    { name: 'tanqo', key: 3 },
    { name: 'like', key: 4 },
    { name: 'task', key: 5 },
    { name: 'trust', key: 6 },
    { name: 'test', key: 7 },
    { name: 'last', key: 8 },
    { name: 'tanqo', key: 9 },
    { name: 'elephant', key: 10 },
    { name: 'love', key: 11 },
    { name: 'small', key: 12 },
    { name: 'little', key: 13 },
];

// 16. "name"-i "t" hərfi ilə başlayan obyektləri yeni arraya yığın
function filterByNameStartingWithT() {
    return arr2.filter(item => item.name.startsWith('t'));
}

// 17. "name"-i "t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin sayını tapın
function countNamesStartingAndEndingWithT() {
    return arr2.filter(item => item.name.startsWith('t') && item.name.endsWith('t')).length;
}

// 18. "name"-i "t" hərfi ilə başlayıb "t" hərfi ilə bitən obyektlərin "key"-lərinin cəmini tapın
function sumKeysOfNamesStartingAndEndingWithT() {
    return arr2
        .filter(item => item.name.startsWith('t') && item.name.endsWith('t'))
        .reduce((sum, item) => sum + item.key, 0);
}

// 19. "name"-i "e" hərfi ilə bitən obyektlərin "name" dəyərini "SuperDev" sözü ilə əvəzləyin
function replaceNamesEndingWithE() {
    arr2.forEach(item => {
        if (item.name.endsWith('e')) {
            item.name = 'SuperDev';
        }
    });
}

// 20. "name"-i ən uzun olan obyektin key-i ni tapın
function findKeyOfLongestName() {
    return arr2.reduce((longest, item) => item.name.length > longest.name.length ? item : longest).key;
}

// 21. "name"-i ən uzun olan obyektin indexinin kvadratını hesablayın
function squareIndexOfLongestName() {
    const index = arr2.findIndex(item => item.name.length === Math.max(...arr2.map(i => i.name.length)));
    return index * index;
}

// 22. "name"-inin uzunluğu 4 olan obyektlərdən ibarət yeni array yaradın
function filterByNameLengthFour() {
    return arr2.filter(item => item.name.length === 4);
}

// 23. ən böyük "key" -i olan obyektin "name" -ini tapın
function findNameWithMaxKey() {
    return arr2.reduce((max, item) => item.key > max.key ? item : max).name;
}

// 24. tərkibində 2 'L' hərfi olan obyektlərin index(lərini) tapın
function findIndexesWithTwoL() {
    return arr2
        .map((item, index) => (item.name.match(/l/g) || []).length === 2 ? index : -1)
        .filter(index => index !== -1);
}

// 25. tərkibində 2 't' hərfi olan obyektlərin key(lərini) tapın
function findKeysWithTwoT() {
    return arr2
        .filter(item => (item.name.match(/t/g) || []).length === 2)
        .map(item => item.key);
}

console.log(filterByNameStartingWithT());
console.log(countNamesStartingAndEndingWithT());
console.log(sumKeysOfNamesStartingAndEndingWithT());
replaceNamesEndingWithE();
console.log(arr2);
console.log(findKeyOfLongestName());
console.log(squareIndexOfLongestName());
console.log(filterByNameLengthFour());
console.log(findNameWithMaxKey());
console.log(findIndexesWithTwoL());
console.log(findKeysWithTwoT());
