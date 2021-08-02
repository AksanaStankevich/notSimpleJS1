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

/*
5.Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
*/

function checkAnagram(arr) {
  if (!arr || arr.length <= 1) return false;
  
  let first_word = arr[0].split("").sort().join("");
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].split("").sort().join("") != first_word) {
           return false;
    }
  }

  return true;
}

console.log(checkAnagram(["elvis", "lives"])); 
console.log(checkAnagram(["silent", "listen"])); 
console.log(checkAnagram(["brother", "sister"])); 

/*
6. Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке. Гласными являются «a», «e», «i», «o», «u».
*/

function count() {
    let k = 0;
    let stringsearch = ['a', 'e', 'i', 'u', 'o'];
    let f = prompt("Еnter the line to check");
    for (let i = 0; i < f.length; i++)
        for (let j = 0; j < stringsearch.length; j++)
            if (f[i] === stringsearch[j]) {
                ++k;
                break;
            }
    return k ? k : "No matches";
}

console.log(count());

/*
7.Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
*/

function reverseArray(array) {
    let output = [];
    while (array.length) {
      output.push(array.pop());
    }
  
    return output;
  }
  
  console.log(reverseArray([25, 14, 9, 7, 38, 15]));

/*
8.Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)
*/

function findAverageArrayElements() {
    let sum = 0;
    for (let i = 0; i < arguments[i]; i++ ) sum += arguments[i];
    return sum == 0 ? sum : sum / arguments.length;
}

console.log(findAverageArrayElements(2, 6, 8, 10, 12));

/*
9.Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.
*/