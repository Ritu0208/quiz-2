const readlineSync = require('readline-sync');

console.log('Welcome to the Quiz');
var username = readlineSync.question("What's your Name:");
console.log('Hello', username, ", Let's Play the Quiz!!");

console.log('\n');
console.log('Rules & Instructions: ');
console.log('1.', username + ', There are 10 Questions and all are compulsory');
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be deducted if the Answer is Wrong.');
console.log('4. In MCQ based questions you have to type the Serial Number / Index Value.');
console.log('\n');


let score = 0;


var movies = [


  {
    array: ['Baywatch', 'Terminator', 'Force'],
    question: '"Famous Bollywood Actress "Priyanka Chopra" first movie in Hollywood was" ',
    answer: 'Baywatch',
  },
  {
    array: ['In Garden', 'In Hill Station', 'From Top of Water Tank'],
    question: '"Where does Veeru proposed to basanti in Sholay movie?"',
    answer: 'From Top of Water Tank'
  },
  {
    array: ['Juhi Chawla', 'Sridevi', 'Sonali Bendre'],
    question: '“Jhanvi Kapoor is the daughter of which veteran Actress?” ',
    answer: 'Sridevi'
  },
  {
    array: ['58', '72', '67'],
    question: '"At the age, legend actor Kishore Kumar died"',
    answer: '58'
  },
  {
    array: ['Mother India', 'Ankhen', 'Slumdog Millionare'],
    question: '“Which was First Indian Movie released commercially in Italy?”',
    answer: 'Ankhen'
  },
  {
    array: ['Rajesh Khanna', 'A R Rahman', 'Bhanu Athaiya'],
    question: '“Who was the first Indian to win an Oscar?” ',
    answer: 'Bhanu Athaiya'
  },
];

function moviedialogue(listOfMovies, dialogue, movieName) {
  let userAnswer = readlineSync.keyInSelect(listOfMovies, dialogue);
  console.log('\n');
  if (listOfMovies[userAnswer] === movieName) {
    console.log('You are Right.');
    score = score + 2;
  } else {
    console.log('You are Wrong.');
    console.log('The Correct Answer is: ', movieName);
    score = score - 1;
  }

  if (score < 0) {
    score = 0;
  }
  console.log('Score is: ', score);
}

for (var i = 0; i < movies.length; i++) {
  console.log('\n');
  moviedialogue(movies[i].array, movies[i].question, movies[i].answer);
  console.log('*******************************');
}

console.log('\n');
console.log('Congratulations,', username, 'your Total Score is: ', score);