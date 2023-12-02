'use strict';

const myArray = ['item1', 'item2', 'item3', 'item4', 'item5'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

function main() {
  let userReply;
  while (userReply !== 'Hello') {
    userReply = prompt('What is the password? ');
  }
}
// setTimeout(main, 500);

const matrix = [
  [1, 2, 3, 4],
  [2, 4, 5, 6],
  [3, 4, 5, 6],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`Current index of matrix array: ${i}
    Current index of inner Array: ${j}
    ${matrix[i][j] * 10}`);
  }
}
