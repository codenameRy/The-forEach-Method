//Array Helper Methods - The Easiest Way to Write Better Code

//The forEach Helper
var colors = ['red', 'blue', 'green'];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i])
}

colors.forEach((color) => {
  console.log(color)
})

//forEach Continued
//Sum of numbers in Array

//Create array of numbers
var numbers = [1,2,3,4,5]
//Variable to hold sum
var sum = 0;
//Loop over array, incrementing the sum Variable
numbers.forEach(function(number){
  sum += number;
})
//print the sum variable
console.log(sum);

//Declare the function externally
var numbers2 = [1,2,3,4,5,6]
//Variable to hold sum
var sum2 = 0;
function adder(number){
  sum2 += number;
}

numbers2.forEach(adder);
console.log(sum2);
