const array = [1, 2, 3, 4];
let doubledArray = [];

//For loop
for (let i = 0; i < array.length; i++) {
  return doubledArray.push(i * 2);
}

//forEach loop
array.forEach(function (i) {
  doubledArray.push(i * 2);
});

//Map loop
doubledArray = array.map(function (i) {
  return i * 2;
});

//For...of loop
for (let i of array) {
  doubledArray.push(i * 2);
}

//While loop
let i = 0;

while (i < array.length) {
  doubledArray.push(array[i] * 2);
  i++;
}

//Do... while loop
do {
  doubledArray.push(array[i] * 2);
  i++;
} while (i < array.length);

//Calling on the new array
doubledArray;
