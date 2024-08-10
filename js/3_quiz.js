let quizArr = [
    {
        number : "1",
        quizQuestion: "1) 우리가 나중에 살 집은?",
        quizIMG : "img/quiz3_weLive.png",
        numberOne : "파르크 한남",
        numberTwo : "아크로리버파크",
        numberThree : "압구정 현대 1차",
        numberFour : "고양이 강아지 있는 집",
        hint : "우리 꿈의 집",
        answer : "4"
    },
    {
        number : "2",
        quizQuestion: "2) 서미래가 해야할 것은?",
        quizIMG : "img/quiz3_miraeEffort.png",
        numberOne : "탄탄이한테 간식 주기",
        numberTwo : "남친 믿어주기, 이상한 생각 안하기",
        numberThree : "런닝맨 몰아보기",
        numberFour : "스티커 모으기",
        hint : "너무 어렵다 ㅠㅠㅠㅠㅠ",
        answer : "2"
    },
    {
        number : "3",
        quizQuestion: "3) 미래가 강민이 없을때 하지 말아야 하는것은?",
        quizIMG : "img/quiz3_promise.png",
        numberOne : "자기개발하기",
        numberTwo : "운동 열심히 하기",
        numberThree : "남사친 집에 부르기",
        numberFour : "자토 조심히 타기",
        hint : "우리 미래라면 당연히 맞힐 문제~~",
        answer : "3"
    },
    {
        number : "4",
        quizQuestion: "4) 2026년 3월부터 해야할 것은?",
        quizIMG : "img/quiz3_after2026.png",
        numberOne : "만화카페 가기",
        numberTwo : "화장실 청소하기",
        numberThree : "같이 여행 다니기",
        numberFour : "런닝맨 보기",
        hint : "이것만 생각하면서 버틴다~",
        answer : "3"
    },
    {
        number : "5",
        quizQuestion: "5) 결혼을 위해 하지말아야 할 것은?",
        quizIMG : "img/quiz3_marry.png",
        numberOne : "서로 믿고 의지하기",
        numberTwo : "돈 열심히 모으기",
        numberThree : "계획없이 살기",
        numberFour : "미래를 그리며 살기",
        hint : "우리는 너무 잘 알고있어서 꼭 결혼하겠다",
        answer : "3"
    },
]
let questionUI = document.getElementById('questionUI');
let titlePhoto = document.getElementById('photoWrap');
let hint = document.getElementById('quizHint');
let trueScore = document.getElementById('trueScore');
let falseScore = document.getElementById('falseScore');
let correctPage = document.getElementById('correctPage');
let wrongPage = document.getElementById('wrongPage');
let outBtn = document.getElementById('outBtn');
// let quizTitle = document.getElementById('quizTitle');
// let quizIMG = document.getElementById('quizIMG');
let correct = 0;
let wrong = 0;
let clickArr = [1];
function quizNumber(number){
    clickArr.push(number)
    console.log('clickArr : ' + clickArr)
    clearNum(clickArr);
    highlightNumber(number);
    showQuiz(number);
}
// 앞에 문제 번호 흰색으로 바꾸기
function clearNum(clickArr){
    let originQuiz = document.querySelector(`.quizNumber:nth-child(${clickArr[clickArr.length -2]})`);
    console.log("앞 번호는 : " + originQuiz)
    originQuiz.style.backgroundColor = "white"

}
// 해당번호 색 입히기
function highlightNumber(num){
    let numChild = document.querySelector(`.quizNumber:nth-child(${num})`);
    numChild.style.backgroundColor = "green";
}
// 퀴즈 보여주기
function showQuiz(num){
    questionUI.innerHTML = "";
    titlePhoto.innerHTML = "";
    hint.innerHTML = "";
    for(let i = 0; i < quizArr.length; i++){
        if(quizArr[i]["number"] == num){                                                                                                                                                  
            hint.innerHTML = `
                <div class="hint-wrap">
                    💡 힌트 💡 : ${quizArr[i]["hint"]}
                </div>
            `;
            titlePhoto.innerHTML = `
                <h3 id="quizTitle" class="question">${quizArr[i]["quizQuestion"]}</h3>
                <img id="quizIMG" class="quiz-img" src="${quizArr[i]["quizIMG"]}" alt="">`
            questionUI.innerHTML = 
            `<div class="questionListWrap">
                <div class="container">
                    <form>
                        <label class="line-wrap">
                            <input type="radio" name="quizRadio" value="1" onclick = "checkAnswer(event, ${i})">
                            <span>${quizArr[i]["numberOne"]}</span>
                        </label>
                        <label class="line-wrap">
                            <input type="radio" name="quizRadio" value="2" onclick = "checkAnswer(event, ${i})">
                            <span>${quizArr[i]["numberTwo"]}</span>
                        </label>
                        <label class="line-wrap">
                            <input type="radio" name="quizRadio" value="3" onclick = "checkAnswer(event, ${i})">
                            <span>${quizArr[i]["numberThree"]}</span>
                        </label>
                        <label class="line-wrap">
                            <input type="radio" name="quizRadio" value="4" onclick = "checkAnswer(event, ${i})">
                            <span>${quizArr[i]["numberFour"]}</span>
                        </label>
                    </form>
                </div>
            </div>`;
        }
        if(num == 6){
            showScoreInfo();
        }
    }
}
// 시작할때 1번 퀴즈
function startQuiz(){
    let firstQuiz = document.querySelector('.quizNumber:nth-child(1)');
    firstQuiz.style.backgroundColor = "green";
    hint.innerHTML = `
    <div class="hint-wrap">
        💡 힌트 💡 : ${quizArr[0]["hint"]};
    </div>
    `;
    titlePhoto.innerHTML = `
    <h3 id="quizTitle" class="question">${quizArr[0]["quizQuestion"]}</h3>
    <img id="quizIMG" class="quiz-img" src="${quizArr[0]["quizIMG"]}" alt="">`
    questionUI.innerHTML = 
    `<div class="questionListWrap">
        <div class="container">
            <form>
                <label class="line-wrap">
                    <input type="radio" name="quizRadio" value="1" onclick = "checkAnswer(event, 0)">
                    <span>${quizArr[0]["numberOne"]}</span>
                </label>
                <label class="line-wrap">
                    <input type="radio" name="quizRadio" value="2" onclick = "checkAnswer(event, 0)">
                    <span>${quizArr[0]["numberTwo"]}</span>
                </label>
                <label class="line-wrap">
                    <input type="radio" name="quizRadio" value="3" onclick = "checkAnswer(event, 0)">
                    <span>${quizArr[0]["numberThree"]}</span>
                </label>
                <label class="line-wrap">
                    <input type="radio" name="quizRadio" value="4" onclick = "checkAnswer(event, 0)">
                    <span>${quizArr[0]["numberFour"]}</span>
                </label>
            </form>
        </div>
    </div>`;
}
// ture / false Score 나타내기
function showTorF(){
    trueScore.innerHTML = correct;
    falseScore.innerHTML = wrong;
}
//답과 맞추는 함수
function checkAnswer(event, i){
    if(event.target.value == quizArr[i]["answer"]){
        correctPage.style.display = "block";
        correct += 1;
        setTimeout(function(){
            correctPage.style.display = "none"
            // 문제 맞출시, 다음문제로 이동, 하이라이트 변동
            showQuiz(i+2)
            clickArr.push(i+2)
            clearNum(clickArr);
            highlightNumber(i+2);
        }, 2500);

    }else{
        wrongPage.style.display = "block";
        wrong += 1;
        setTimeout(function(){
            wrongPage.style.display = "none"
        }, 2500);
    }
    showTorF();
}

function showScoreInfo(){
    let best = "역시 나를 잘 아는 서미래";
    let notBad = "흠냐링 그래도 괜찮네 Not Bad";
    let bad = "나를 이것밖에 모르다니.. 서미래.."
    document.getElementById('scoreInfo').style.display = "block";
    let scoreInfo = document.getElementById('scoreInfo');
    let scoreInfo2 = document.getElementById('scoreInfo2');
    let scoreInfo3 = document.getElementById('scoreInfo3');
    let correctNum =  document.getElementById('correctNum');
    let wrongNum = document.getElementById('wrongNum');
    let correctNum2 =  document.getElementById('correctNum2');
    let wrongNum2 = document.getElementById('wrongNum2');
    let correctNum3 =  document.getElementById('correctNum3');
    let wrongNum3 = document.getElementById('wrongNum3');

    if(wrong == 0){
        correctNum.innerHTML = correct;
        wrongNum.innerHTML = wrong;
        scoreInfo.style.display = "block";
    }else if(wrong == 1 || wrong < 3){
        correctNum2.innerHTML = correct;
        wrongNum2.innerHTML = wrong;
        scoreInfo2.style.display = "block";
        
    }else{
        correctNum3.innerHTML = correct;
        wrongNum3.innerHTML = wrong;
        scoreInfo3.style.display = "block";
    }
}


showTorF();
startQuiz();
