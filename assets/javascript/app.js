$(document).ready(function() {

var time = 10;
var count = 0;
var correct = 0;
var incorrect = 0;

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
        answers: "A Tribe Called Quest",
    },
    {
        question: "What was the name of Fresh Prince's DJ",
        choices: ["DJ Duke of Earl", "DJ Jazzy Jeff", "DJ Funk Flexmaster", "DJ King Coopa"],
        answers: "DJ Jazzy Jeff",
    }];



function showQuestions() {
       $("#question").html("<p>" + trivia[count].question + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[0] + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[1] + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[2] + "</p>" +
                            "<p class='choices'>" + trivia[count].choices[3] + "</p>");

};

console.log(showQuestions());

});







// function timer() {
//     $("#timer").html(time);
//     $("#timer").css("visibility", "inherit");

//     if (time === 0) {

//         $(#timer).css("background", "#837362");
//         clearInterval(intervalID);
//         time = 10;


//     }
// 