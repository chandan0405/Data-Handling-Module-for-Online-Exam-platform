const quizDB = [
	{
		question: "Q1: What is the full form of HTML?",
		ans: "Hyper Text Markup Language"
	},
	{
		question: "Q2: What is the full form of CSS?",
		ans: "Cascading Style Sheet"
	},
	{
		question: "Q3: Which of the following access specifier is used as a default in a class definition?",
		ans: "Private"
	},
	{
		question: "Q4: What is the full form of JS?",
		ans: "JavaScript"
	},
	{
		question: "Q5: Can main() function be made private?  Yes/No",
		ans: "No"
	}

];

const question1 = document.getElementById("question1");
const answers1 = document.querySelector("input");
const submit1 = document.getElementById('submit1');

const showScore1 = document.getElementById('showScore1');

let questionCount1 = 0;
let score1 = 0;

const loadQuestion = () => {
	question1.innerHTML = quizDB[questionCount1].question;
}

loadQuestion();


submit1.addEventListener('click', () => {
	const checkedAnswer1 = answers1.value;
	// console.log(checkedAnswer);

	if(checkedAnswer1 === quizDB[questionCount1].ans){
		score1++;
		answers1.value = "";
	}else{
		answers1.value = "";
	}

	questionCount1++;
	if(questionCount1 < quizDB.length){
		loadQuestion();
	}else{

		showScore1.innerHTML = `<h3> Score : ${score1}/${quizDB.length} </h3>
		`;
		// document.getElementById("inner").style.display = "none";

		showScore1.classList.remove('scoreArea1');
		const button = document.querySelector('#submit1');
		document.getElementById('container1').style.display = "none";
		button.innerText = 'Back';

		button.addEventListener('click', () => {
  		window.location.href = "../template/exam.html";
  		});
	}

});