// game refresh wasnt working when I tried to impliment my full reset button, I think it has to do with scope. plan is to inline in html for now..

//some code segments are commented out because they dont work correctly

//sets up and clears our count down timer 
$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};
// I wanted to set up my questions as different variables with their own values
var correct = 0;
var wrong = 0;
var q1 = {
	question : "What was the first console video game that allowed the game to be saved?",
	possibleAnswers : ['A.The Legend of Zelda',
				 'B. Donkey Kong',
				 'C. Ikari Warriors',
				 'D. Metroid'],
	flags : [true, false, false, false],
	answer : 'A. The Legend of Zelda'
};

var q2 = {
	question: 'The first person shooter video game "Doom" , was first released during what year?',
	possibleAnswers: ['A. 1992',
				 'B. 1995',
				 'C. 1990',
				 'D. 1993'],
	flags : [false, false, false, true],
	answer : 'D. 1993'
};

var q3 = {
	question : 'In what year did Nintendo release its first game console in North America?',
	possibleAnswers : ['A. 1990',
				 'B. 1992',
				 'C. 1983',
				 'D. 1985'],
	flags : [false, false, false, true],
	answer : 'D. 1985'
};

var q4 = {
	question : 'In what year was the Nintendo 64 officially released?',
	possibleAnswers : ['A. 1994',
				 'B. 1996',
				 'C. 1990',
				 'D. 1989'],
	flags : [false, true, false, false],
	answer : 'B. 1996'
};

var q5 = {
	question : 'In the game "Metal Gear Solid", who is the twin brother of Solid Snake?',
	possibleAnswers : ['A. Otacon',
				 'B. Gray Fox',
				 'C. Liquid Snake',
				 'D. Big Boss'],
	flags : [false, false, true, false],
	answer : 'C. Liquid Snake'
};

var q6 = {
	question : 'In the game "Mortal Kombat", what phrase is heard when Scorpion uses his spear',
	possibleAnswers : ['A. Come Here! ',
				 'B. Come to me! ',
				 'C. Your soul is mine! ',
				 'D. Get over here!'],
	flags : [false, false, false, true],
	answer : 'D. '
};

var q7 = {
	question : 'What is the name of the fictional english archaeologist in the game "Tomb Raider"?',
	possibleAnswers : ['A. Jill Valentine',
				 'B. Faith Connors',
				 'C. Meryl Silverburgh',
				 'D. Laura Croft'],
	flags : [false, false, false, true],
	answer : 'D. '
};

var q8 = {
	question : 'The Covenant are a fictional alien race from which game series?',
	possibleAnswers :['A. Halo',
				 'B. Fallout ',
				 'C. XCOM',
				 'D. None of the above'],
	flags : [true, false, false, false],
	answer : 'A. Halo'
};

var q9 = {
	question : 'Your name is Jack and you are in an underwater city named Rapture, what game is this?',
	possibleAnswers : ['A. Subnautica',
				 'B. Diluvion',
				 'C. Undertow',
				 'D. None of the above'],
	flags : [false, false, false, true],
	answer : 'D. None of the above'
};

var q10 = {
	question : 'Gabriel Belmon, grandfather of Simon, gets to ride giant spiders during the Middle Ages in a bid to defeat the Lords of Shadow in what popular series?',
	possibleAnswers : ['A. Salt Sanctuary',
				  'B. Castlevania',
				  'C. Hollow Knight',
				  'D. Vampire: Master of Darkness']	,
	flags : [false, true, false, false],
	answer : 'B. Castlevania'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
//  loads our questions, wiith "ABCD" buttons
function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}



function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
//		for (var i=0; i<questionArray.length; i++) {
//			$('.question').append('<p>'+questionArray[i].question+'</p>');
//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//			}
//			$('#possibleAnswers').on('click', function() {


//		console.log("click");
//		countdownTimer.start();
//		for (var i = 0; i < questionArray.length; i++) {
//			console.log(i);

//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//			$('.question').html(questionArray[i].question);
//			while (countdownTimer != 0) {

//			}
		
//	});
//	$('#startButton').click(countdownTimer.start);

//}
//else if statements to determine correcet vs incorrect answers for all possible values of "ABCD"
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }
//show score after we run through all our questions(10)
 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});