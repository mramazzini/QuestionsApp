var question = document.getElementById('question');
var sectext = document.getElementById('sectext');
var timer = document.getElementById('timer');
var response1 = document.createElement("button");
var response2 = document.createElement("button");
var response3 = document.createElement("button");
var response4 = document.createElement("button");
var finalBtn = document.createElement("button");
finalBtn.className = "enterbtn";
var isRightAnswer= document.createElement("h2");
response1.className = "ansbtn";  
response2.className = "ansbtn";  
response3.className = "ansbtn";  
response4.className = "ansbtn";  
var insertUser = document.createElement("input");
var box = document.getElementById('container');
var btn = document.getElementById('enterbtn');
var correctAnswer=0;
var time=60;
var nameCount=0;
var names = [];
var scores = [];
nameCount=localStorage.getItem("0");
if(nameCount == null){
    nameCount=0;
}

for(var i=0; i<nameCount; i++){
    names[i]=localStorage.getItem(String(i+1));
}

var questionBank =[
["Arrays in Javascript can be use to store","Booleans", "Strings","Integers","All of the Above"],
["Commonly used DataTypes do not include", "Strings", "Booleans", "Alerts", "Numbers"], 
["The condition in an if/else statement is enclosed by","Quotes", "Curly brackets", "Parenthesis", "Straight brackets"], 
["A very useful to for development and debugging for printing content to the debugger is", "Javascript", "Terminal", "For Loops", "console.log"], 
["String values are enclosed by","Quotes", "Curly brackets", "Parenthesis", "Straight brackets"]];

var answerKey = [0,4,3,3,4,1]

var questionCount =0;
//Creates a new question and returns the correct answer
function createQuestion(){
    question.innerHTML=questionBank[questionCount][0];

    response1.innerHTML = questionBank[questionCount][1];
    response2.innerHTML = questionBank[questionCount][2];
    response3.innerHTML = questionBank[questionCount][3];
    response4.innerHTML = questionBank[questionCount][4];

    questionCount++;
    

    sectext.remove();
    btn.remove();


    container.append(response1);
    container.append(response2);
    container.append(response3);
    container.append(response4);
    
    return answerKey[questionCount];
}
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      time--;
      timer.innerHTML = "Time: " + String(time);
  
      if(time <= 0) {
        time=0;
        clearInterval(timerInterval);
        
      }
  
    }, 1000);
  }

function viewHighScores(){
    isRightAnswer.remove();
    question.innerHTML = "HighScores";
    insertUser.remove();
    finalBtn.remove();
    
    for(var i=0; i<nameCount; i++){

        temp = localStorage.getItem(i+1).split(" ");;
        names[i]=temp[0];
        scores[i]=temp[1];
        var newScore = document.createElement("h3");
        newScore.innerHTML = String(names[i])+ ": " +String(scores[i]);
        container.append(newScore);
        
    }
}
   

function endGame(){
    response1.remove();
    response2.remove();
    response3.remove();
    response4.remove();
    isRightAnswer.innerHTML = "Insert initials below";
    question.innerHTML = "You finished the Quiz! Your score was " + String(time);
    
    container.append(insertUser);
    finalBtn.innerHTML = "Enter";
    localStorage.setItem("0", nameCount+1);
    container.append(finalBtn);
}

btn.addEventListener("click", function() {
    correctAnswer = createQuestion();
    setTime();
  });

finalBtn.addEventListener("click", function() {
    
    nameCount=nameCount+1;
    localStorage.setItem(String(nameCount),finalBtn.parentElement.children[2].value+" "+String(time));
    
    viewHighScores()
  });

  
response1.addEventListener("click", function() {
    if (correctAnswer!=1){
        isRightAnswer.innerHTML="Wrong";
        time=time-10;
        console.log("wrong")
    }
    else{
        isRightAnswer.innerHTML="Right";
    }
    
    if(questionCount<5){
        correctAnswer = createQuestion();
        container.append(isRightAnswer)
      }
      else{
        endGame();
      }

  });
  response2.addEventListener("click", function() {
    if (correctAnswer!=2){
        isRightAnswer.innerHTML="Wrong";
        console.log("wrong")
        time=time-10;
    }
    else{
        isRightAnswer.innerHTML="Right";
    }
    if(questionCount<5){
        correctAnswer = createQuestion();
        container.append(isRightAnswer)
      }
      else{
        endGame();
      }
      
    
  });
  response3.addEventListener("click", function() {
    if (correctAnswer!=3){
        time=time-10;
        console.log("wrong")
        isRightAnswer.innerHTML="Wrong";
    }
    else{
        isRightAnswer.innerHTML="Right";
        
    }

    if(questionCount<5){
        correctAnswer = createQuestion();
        container.append(isRightAnswer)
      }
      else{
        endGame();
      }
      
    
  });
  response4.addEventListener("click", function() {
    if (correctAnswer!=4){
        time=time-10;
        console.log("wrong")
        isRightAnswer.innerHTML="Wrong";
    }
    else{
        isRightAnswer.innerHTML="Right";
    }

    if(questionCount<5){
        correctAnswer = createQuestion();
        container.append(isRightAnswer)
      }
      else{
        endGame();
      }
      
  });

  