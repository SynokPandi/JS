// Import stylesheets
import './style.css';

const sumTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  };

 
  console.log('1.1. Вычислите сумму чисел до данного:', sumTo(100));


const sumTo2 = (n) => {
    if (n === 1) return 1;
    return n + sumTo2(n - 1);
  }

console.log('1.2. Вычислите сумму чисел до данного:', sumTo2(100));


const sumTo3 = (n) => {
    return n * (n + 1) / 2;
  }


console.log('1.3. Вычислите сумму чисел до данного:', sumTo3(100));


const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }

console.log('2. Вычислить факториал:', factorial(5));


const fib = (n) => {
    let a = 1; let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

console.log('3. Вычилите числа Фиббоначи', fib(7));



const printList = () => {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  function printList(list) {
  
    alert(list.value); 
  
    if (list.next) {
      printList(list.next); 
    }
  
  }
  
  printList(list);
}

console.log('4. Вывод одного списка через рекурсию:', [1 , 2 , 3 ,4])

const printListReverse = () => {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
  if (list.next) {
      printListReverse(list.next);
    }
  printListReverse(list);
}

console.log('5. ОБратный список через оекурсию:', [4 , 3 , 2 , 1])