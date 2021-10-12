const quizDB = [
	{
		question: "Q1: What is the full form of HTML?",
		a: "Hyper Text Markup Language",
		b: "Hyper Text Makeup Language",
		c: "Hello To My Land",
		d: "Hey Text Makeup Language",
		ans: "ans1"
	},
	{
		question: "Q2: What is the full form of CSS?",
		a: "Cascading Style Sheep",
		b: "Cartoon Style Sheet",
		c: "Cascading Style Sheet",
		d: "Csscading Super Sheet",
		ans: "ans3"
	},
	{
		question: "Q3: Which of the following access specifier is used as a default in a class definition?",
		a: "Public",
		b: "Private",
		c: "Protected",
		d: "None",
		ans: "ans2"
	},
	{
		question: "Q4: Which of the following is a mechanism of static polymorphism?",
		a: "Templates",
		b: "Function overloading",
		c: "Operator overloading",
		d: "All of the Above",
		ans: "ans4"
	},
	{
		question: "Q5: Can main() function be made private?",
		a: "Yes, always",
		b: "Yes, if program doesn't contain any classes",
		c: "No, because main function is user defined",
		d: "No never",
		ans: "ans4"
	}

];

const question = document.getElementById("question");
const option1 = document.getElementById("opt1");
const option2 = document.getElementById("opt2");
const option3 = document.getElementById("opt3");
const option4 = document.getElementById("opt4");
const submit = document.getElementById('submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.getElementById('showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
	question.innerHTML = quizDB[questionCount].question;
	option1.innerHTML = quizDB[questionCount].a;
	option2.innerHTML = quizDB[questionCount].b;
	option3.innerHTML = quizDB[questionCount].c;
	option4.innerHTML = quizDB[questionCount].d;

}

loadQuestion();

const getCheckAnswer = () => {
	let answer;

	answers.forEach((curAnsElem) => {
		if(curAnsElem.checked){
			answer = curAnsElem.id;
		}
	});
	return answer;
};	

const deselectAll = () => {
	answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
	const checkedAnswer = getCheckAnswer();
	console.log(checkedAnswer);

	if(checkedAnswer === quizDB[questionCount].ans){
		score++;
	}

	deselectAll();

	questionCount++;
	if(questionCount < quizDB.length){
		loadQuestion();
	}else{
		showScore.innerHTML = `<h3> Score : ${score}/${quizDB.length} </h3>
		`;

		showScore.classList.remove('scoreArea');
		const button = document.querySelector('#submit');
		document.getElementById('container').style.display = "none";
		button.innerText = 'Back';

		button.addEventListener('click', () => {
  		window.location.href = "../template/exam.html";
  	
		});
		
	}

});

// function back()
// {
// 	window.location.href="../template/exam.html";
// }