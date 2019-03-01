$(document).ready(function() {

var time = 10;
var count = 0;
var correct = 0;
var incorrect = 0;
var correctAnswer = trivia[count].answer;

var trivia = [
    { 
        question: "Which record label featured artists such as Dr. Dre, Tupac, and Snoop Dogg?",
        choices: ["Jr. Mafia", "The Dungeon Family", "Death Row Records", "Roc-A-Fella Records"],
        answer: "Death Row Records",
    },
    { 
        question: "How old was the Notorious B.I.G. at the time of his death?",
        choices: [26, 25, 24, 23],
        answer: 24,
    },
    {
        question: "Phife Dawg, Q-Tip, and Ali Shaheed Muhammad were the members of what rap group?",
        choices: ["De La Soul", "A Tribe Called Quest", "Arrested Development", "Digital Underground"],
        answer: "A Tribe Called Quest",
    },
    {
        question: "What was the name of Fresh Prince's DJ",
        choices: ["DJ Duke of Earl", "DJ Jazzy Jeff", "DJ Funk Flexmaster", "DJ King Coopa"],
        answer: "DJ Jazzy Jeff",
    }];



function showQuestions() {
       $("#question").append("<p>" + trivia[count].question + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[0] + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[1] + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[2] + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[3] + "</p>");


}

console.log(trivia.question);



// function win() {
//     $("#game").html("<p> Correct! </p>");
//     correct++;
//     $("#game").append(correctAnswer + trivia[count].image);
//     setTimeout(nextQuestion, 5000);
//     count++;
// }

// function loss() {
//     $("#game").html("<p> Incorrect! </p>");
//     incorrect++;
//     $("#game").append("<p> The answer was </p>" + correctAnswer);
//     setTimeout(nextQuestion, 5000);
//     count++;

// }

// function userTimeout() {
//     if (time === 0) {
//         $("#game").html("<p> Time's up! </p>");
//         incorrect++;
//         $("#game").append("<p> The answer was </p>" + correctAnswer);
//         setTimeout(nextQuestion, 5000);
//     count++;
//     }
// }


// function results() {
//     $("#game").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>");
//     gameReset();
// }


// function timer () {
//     clock = setInterval(decrease, 1000);
//         function decrease() {
//             if (time < 1) {
//                 clearInterval(clock);
//                 userTimeout();}

//             if (time > 0) {
//                 time--;}

//             $("#timer").html(time)
//         }
// }

// function nextQuestion() {
//     If (count < trivia.length); {
//         time = 10;
//         $("#game").html("<p> You have " + time + "seconds</p>")
//         showQuestions();
//         timer();
//         userTimeout();
//     }

    // else {
    //     results();
    // }
// }


// function gameReset() {
//     count = 0;
//     correct = 0;
//     incorrect = 0;
// }



// $("#game").on("click", ".choices", (function(){
//     var userGuess = $(this).text();
//         if (userGuess === trivia[count].answer){
//             clearInterval(clock);
//             win();
//         }

//         else {
//             clearInterval(clock);
//             loss();
//         }
// }))

// $("#start").click(nextQuestion);

// function startGame() {
//     $("#start").hide();
//     showQuestions();
//     timer();
//     userTimeout();

// }
    

// }


});





