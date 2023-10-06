// Import stylesheets
import './style.css';

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; n++) {
    sum += i;
  }
  return sum;
}

console.log('1. Вычислить сумму чисел до данного: ', sumTo(100));

function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log('2. Вычислить сумму чисел до данного: ', sumTo(100));

function sumTo(n) {
  return (n * (n + 1)) / 2;
}

console.log('3. Вычислить сумму чисел до данного: ', sumTo(100));


function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

console.log('4. Вычислить факториал: ', factorial(5));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log('5. Числа фибоначи: ', fib(3));
console.log('6. Числа фибоначи: ', fib(7));
console.log('7. Числа фибоначи: ', fib(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
  let n = list;

  while (n) {
    console.log('8. Вывод односвязного списка: ', n.value);
    n = n.next;
  }
}

printList(list);

let rlist = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printRevList(rlist) {
  let array = [];
  let n = rlist;

  while (n) {
    array.push(n.value);
    n = n.next;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    console.log('9. Вывод односвязного списка в обратном порядке: ', array[i]);
  }
}

printRevList(rlist);

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
