let correctMSG = document.getElementById('correctPage');
let wrongMSG = document.getElementById('wrongPage');

let answer = document.getElementById('quizAnswer');

let correctScore = document.getElementById('correctScore');
let wrongScore = document.getElementById('wrongScore');

let correct = 0;
let wrong = 0;

let external = "hello world"

let nextPage = document.getElementById('nextPage').innerHTML;
let nowPage = document.getElementById('nowPage');
let prePage = document.getElementById('prePage');

// ================= QUIZ 1 ================= //

function quizAnswer(event){
    console.log(event.target.value)
    if(event.target.value == "true"){
        correctMSG.style.display = "block"
        answer.style.backgroundColor = 'green'
        setTimeout(function(){
            correctMSG.style.display = "none"
        }, 2500);
    }else{
        wrongMSG.style.display = "block"
        answer.style.backgroundColor = 'green'
        answer.style.color = 'white'
        setTimeout(function(){
            wrongMSG.style.display = "none"
        }, 2500);
    }

    if(nextPage == "2"){
        setTimeout(function(){
            location.href=`1_quizHTML/1_quiz_${nextPage}.html`
        }, 3000)
    } else{
        setTimeout(function(){
            location.href=`1_quiz_${nextPage}.html`
        }, 3000)
    } 
}  

function illuPage(){
    nowPage.style.backgroundColor = "green";
    prePage.style.backgroundColor = "white";
}

illuPage();



