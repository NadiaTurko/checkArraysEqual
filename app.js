// задача номер 1

// реалізувати функцію яка приймає два параметри масиви та вертає
//  значення  boolean якщо вони ідентичні один одному

// const checkArraysEqual =(listOne, listTwo ) => { .... };

// examples

const checkArraysEqual = function (listOne, listTwo) {
  const checkElement = listOne.every(function (element, index) {
    return element === listTwo[index];
  });

  const checkLength = listOne.length === listTwo.length;
  if (checkElement === true && checkLength === true) {
    return true;
  } else {
    return false;
  }
};
console.log(checkArraysEqual([], [])); // should return true
console.log(checkArraysEqual([1], [])); // should return false
console.log(checkArraysEqual([], [1])); // should return false
console.log(checkArraysEqual([1, 4, 5], [1, 4, 5])); // should return true
