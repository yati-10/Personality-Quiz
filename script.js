/*Add your JavaScript here*/
var cookieScore = 0;
var appleScore = 0
  
var questionCount = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click",cookie);
q1a2.addEventListener("click",apple);
                     
q2a1.addEventListener("click",cookie);
q2a2.addEventListener("click",apple);

q3a1.addEventListener("click",cookie);
q3a2.addEventListener("click",apple);

restart.addEventListener("click",new1);

function cookie(){
  cookieScore++;
  questionCount++;

  console.log("questionCount = "+ questionCount+ "cookieScore = "+cookieScore);
  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function apple(){
  appleScore++;
  questionCount++;

  console.log("questionCount = "+questionCount+ "appleScore = "+appleScore);
  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function updateResult() {
  if(cookieScore >= 2){
    result.innerHTML = "Your a Chocolate Chip Cookie 🍪 – warm, comforting, and always a classic";
    console.log("Your a Chocolate Chip Cookie 🍪 – warm, comforting, and always a classic");
  }
  else if (appleScore >= 2){
    result.innerHTML = "Your a Apple Slice with Peanut Butter 🍎 – fresh, energetic, and full of prep";
    console.log("Your a Apple Slice with Peanut Butter 🍎 – fresh, energetic, and full of prep");
  }
}

/*function new1(){
  //if (questionCount==3){
    result.innerHTML = "Your result is..."
    cookieScore = 0;
    appleScore = 0;
    questionCount=0;

  let allButtons = document.querySelectorAll("button");
  allButtons.forEach(btn => {
    if(btn.id != "restat"){
      btn.diable = false;
    }
  });
  
    console. log("The cookieScore = "+cookieScore+" The appleScore =  "+appleScore+" The question count = "+questionCount);
  //}
}*/

function new1(){
  // reset result text
  result.innerHTML = "Your result is...";

  // reset scores + counter
  cookieScore = 0;
  appleScore = 0;
  questionCount = 0;

  // re-enable all buttons
  let allButtons = document.querySelectorAll("button");
  allButtons.forEach(btn => {
    if (btn.id !== "restart") {  // keep restart button enabled always
      btn.disabled = false;
    }
  });

  console.log("The cookieScore = " + cookieScore +
              " The appleScore = " + appleScore +
              " The question count = " + questionCount);
}

function disableQuestionButtons(questionClass) {
  let buttons = document.querySelectorAll("." + questionClass);
  buttons.forEach(btn => btn.disabled = true);
}
function cookie(event){
  cookieScore++;
  questionCount++;
  console.log("questionCount = " + questionCount + " cookieScore = " + cookieScore);

  if (event.target.classList.contains("q1")) disableQuestionButtons("q1");
  if (event.target.classList.contains("q2")) disableQuestionButtons("q2");
  if (event.target.classList.contains("q3")) disableQuestionButtons("q3");

  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}

function apple(event){
  appleScore++;
  questionCount++;
  console.log("questionCount = " + questionCount + " appleScore = " + appleScore);

  if (event.target.classList.contains("q1")) disableQuestionButtons("q1");
  if (event.target.classList.contains("q2")) disableQuestionButtons("q2");
  if (event.target.classList.contains("q3")) disableQuestionButtons("q3");

  if (questionCount == 3){
    console.log("The quiz is done!");
    updateResult();
  }
}
