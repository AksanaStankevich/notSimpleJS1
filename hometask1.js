/*
1. Написать функции, которые сортируют массив по возрастанию и по убыванию. В функцию массив передается в качестве аргумента.
*/ 
function compareNumbers(a,b) {
if (a==b) return 0;
if (a<b) return 1;
else return -1;
}

let array = [5,4,7,12,1,3,2,8,6,11,9,10];
array.sort(compareNumbers);
console.log(array); //по убыванию

function compareNumbers(a,b) {
if (a==b) return 0;
if (a>b) return 1;
else return -1;
}

let array = [5,4,7,12,1,3,2,8,6,11,9,10];
array.sort(compareNumbers);
console.log(array); //по возрастанию

/*
2.Написать функции, которые находят минимальный и максимальные элементы массива. В функцию массив передается в качестве аргумента.
*/ 
function compareNumbers(a,b) {
    if (a==b) return 0;
    if (a>b) return 1;
    else return -1;
    }
    
    let array = [5,4,7,12,1,3,2,8,6,11,9,10];
    array.sort(compareNumbers);
    console.log(array.shift(0)); //минимальное число

function compareNumbers(a,b) {
    if (a==b) return 0;
    if (a>b) return 1;
    else return -1;
    }
        
    let array = [5,4,7,12,1,3,2,8,6,11,9,10];
    array.sort(compareNumbers);
    console.log(array.pop(0)); // максимальное число

let array = [5,4,7,12,1,3,2,8,6,11,9,10];

for (let i = 0; i < array.length; i++) {
    if(array[i] > array[0]) {
        array[0] = array[i];
    }
}
console.log(array[0]); // максимальное число

let array = [5,4,7,12,1,3,2,8,6,11,9,10];

for (let i = 0; i < array.length; i++) {
    if(array[i] < array[0]) {
        array[0] = array[i];
    }
}
console.log(array[0]); // минимальное число

/*
3.Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
*/ 

function checkToPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join(''); 
    if (strReverse == str) {
        return 'true';
    } else {
        return 'false';
    }
  }

  test = checkToPalindrome("Аргентинец ценит негра");
  test2 = checkToPalindrome('abccba');

  console.log(test);
  console.log(test2);

 /*
 4. Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями: вывод fizz вместо чисел, кратных 3; вывод buzz вместо чисел, кратных 5;вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/

const convertToFizzBuzz = (number) => {
    if (number % 15 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 5 === 0) {
        return "Buzz";
    } else {
        return number;
    }
}

const generateFizzBuzzArray = (count) => {
    const list = [];
    for (let i = 1; i <= count; i++) {
        list.push(convertToFizzBuzz(i))
    }

    return list;
}

console.log(generateFizzBuzzArray(100));
console.log();
console.log(generateFizzBuzzArray(10));