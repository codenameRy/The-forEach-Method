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

//Challenge 1 - Moving away from for Loops

//Refactor this code below
function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      console.log(posts[i]);
    }
}

console.log(handlePosts())

//Solution 1
function handlePosts2() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    posts.forEach(function(post){
      console.log(post)
    })
}

console.log(handlePosts2())

//Challenge 2 - Processing values
//Calculate area of images

//Solution
var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image) {
  areas.push(image.height * image.width)
})

console.log(areas)