function myFunction() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var buttonText = document.getElementById("myButton");
	
if (dots.style.display === "none"){
	dots.style.display = "inline";
	buttonText.innerHTML = "Read More";
	moreText.style.ddisplay = "none";
}
else if( 
	dots.style.display = "none";
	buttonText.innerHTML = "Read Less";
	moreText.style.display = "inline";
	}
}
function seeMore(){
	let dot = document.getElementById("dot");
	let moreText = document.getElementById("more");
	let clickThis = document.getElementById("click");
	
	if (dot.style.display === "none"){
		dot.style.display = "inline";
		clickThis.innerHTML = "See More";
		moreText.style.display = "none";
	}
	else{
		dot.style.display = "none";
		clickThis.innerHTML = "See Less";
		moreText.style.display = "inline";
	}
}
function showAnswer(){
	let resultDiv = document.getElementById("result");
	let selectId = documnet.getElementById("ques-one", "ques-two", "ques-three", "ques-four");
	
	if {answerInput == "<a>"{
		resultDiv.innerHTML = "Question 1 Correct";
	} else if { answerInput = "<link>"){
		resultDiv.innerHTML = "Question 1 Incorrect";
	} else if { answerInput = "<img>"){
		resultDiv.innerHTML="Question 1 Incorrect";
	} else {
		resultDiv.innerHTML="Question 1 Incorrect";
	}
	if {answerInput = "background-color");
		resultDiv.innerHTML = "Question 2 Correct";
	} else {
		resultDiv.innerHTML = "Question 2 Incorrect";
	}
	if { answerInput = "function"){
		resultDiv.innerHTML = "Question 3 Correct";
	} else {
		resultDiv.innerHTML = "Question 3 Incorrect";
	}
	if { answerInput = "all");
		resultDiv.innerHTML = "Question 4 Correct";
	} else { 
		resultDiv.innerHTML="Question 4 Incorrect";
	}
}
		
		