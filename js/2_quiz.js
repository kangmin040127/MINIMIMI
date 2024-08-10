let quizArr = [
    {
        number : "1",
        quizQuestion: "1) 우리가 사귄 날짜는?",
        quizIMG : "img/quiz2_1goBackIMG.png",
        numberOne : "2023년 11월 30일",
        numberTwo : "2023년 12월 01일",
        numberThree : "2023년 12월 02일",
        numberFour : "2023년 12월 03일",
        hint : "이건 힌트조차 필요없다",
        answer : "2"
    },
    {
        number : "2",
        quizQuestion: "2) 김강민이 제일 좋아하는 음식은?",
        quizIMG : "img/quiz2_2Food.png",
        numberOne : "냉면과 돈까스 조합",
        numberTwo : "LA갈비",
        numberThree : "라면과 김치 조합",
        numberFour : "미래표 감바스",
        hint : "비교 할 걸 비교하자",
        answer : "4"
    },
    {
        number : "3",
        quizQuestion: "3) 김강민이 듣기 싫어하는 말은?",
        quizIMG : "img/quiz2_2disLikeIMG.png",
        numberOne : "???: 나도 알아.",
        numberTwo : "???: 갑자기?",
        numberThree : "???: 내가 알아서 할게.",
        numberFour : "???: 그건 좀;;",
        hint : "자세히 알려줬는데 돌아오는 대답이 이거면..",
        answer : "1"
    },
    {
        number : "4",
        quizQuestion: "4) 김강민이 가장 재밌게 본 영화는?",
        quizIMG : "img/quiz2_2movieIMG.png",
        numberOne : "노량",
        numberTwo : "서미래와 본 모든 영화",
        numberThree : "탑건",
        numberFour : "부산행",
        hint : "2023년 12월 1일 전에 본 영화들은 최악이었다.",
        answer : "2"
    },
    {
        number : "5",
        quizQuestion: "5) 김강민이 더 노력해야하는건?",
        quizIMG : "img/quiz2_2effortIMG.png",
        numberOne : "공부 많이 하기",
        numberTwo : "성공하기 위해 노력하기",
        numberThree : "서미래한테 더 잘하기",
        numberFour : "미친듯이 열심히 살기",
        hint : "나는 2023년12월1일 이후로 이것만 노력한다",
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
