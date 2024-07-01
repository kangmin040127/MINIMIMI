let target = document.querySelector('#date-text');



// ----------------- 2사분면 aee 맨트 적기 ------------------- //
function definiteArr(){
    let stringArr = ["2023.12.01 ~ forever  ♥️"];
    let randomArr = stringArr[Math.floor(Math.random()*stringArr.length)];
    let splitArr = randomArr.split("");
    return splitArr;
}

// 없애고 다시 나열
function reText(){
    target.textContent = "";
    pickString(definiteArr());
}

function pickString(randomString){
    if(randomString.length > 0){
        target.textContent += randomString.shift();
        setTimeout(function(){
            pickString(randomString);
        },200)
    }else{
        setTimeout(reText, 2000);
    }
}
pickString(definiteArr());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink,500);


// ------------------1사분면-----------------  //

let i = 0;
let imgs = [];
let slideTime = 3000;

imgs[0] = "./beeSlidePic/slidePic1.jpg";
imgs[1] = "./beeSlidePic/slidePic2.jpg";
imgs[2] = "./beeSlidePic/slidePic3.jpg";
imgs[3] = "./beeSlidePic/slidePic4.jpg";
imgs[4] = "./beeSlidePic/slidePic5.jpg";
imgs[5] = "./beeSlidePic/slidePic6.jpg";
imgs[6] = "./beeSlidePic/slidePic7.jpg";
imgs[7] = "./beeSlidePic/slidePic8.jpg";
imgs[8] = "./beeSlidePic/slidePic9.jpg";
imgs[9] = "./beeSlidePic/slidePic10.jpg";
imgs[10] = "./beeSlidePic/slidePic11.jpg";
imgs[11] = "./beeSlidePic/slidePic12.jpg";
// imgs[12] = "./beeSlidePic/slidePic13.jpg";
// imgs[13] = "./beeSlidePic/slidePic14.jpg";
// imgs[14] = "./beeSlidePic/slidePic15.jpg";
// imgs[15] = "./beeSlidePic/slidePic16.jpg";


function changePic(){
    document.querySelector('.beePic').style.backgroundImage = "url(" + imgs[i] + ")";
    if(i < imgs.length - 1){
        i++;
    } else{ i = 0; }

    setTimeout(changePic, slideTime);
}

//사진 슬라이드 함수
changePic();


document.querySelector('.button-73').addEventListener('click', ()=>{
    console.log('hi');
    document.querySelector('.gallery-container').style.display = "block";
})
document.querySelector('.outBtn').addEventListener('click', ()=>{
    console.log('hi');
    document.querySelector('.gallery-container').style.display = "none";
})
let backBtn = document.querySelector('.left-btn');
let nextBtn = document.querySelector('.right-btn');
let deeImgs = document.querySelectorAll('.dee-slideImg');
let imgContainer = document.querySelector('.images');
let dee = document.querySelector('.dee');
let positionValue = 0;
let pages = 0
const ImgWidth = 350; 

function backSlide(){
    pages -= 1;
    positionValue += ImgWidth;
    if(pages === 0){
        backBtn.style.display = "none";
    }else{
        nextBtn.style.display = "block";
    }
    // dee.style.background= "url(" + deeImgs[pages].src + ") no-repeat center";
    // dee.style.backgroundSize= "cover";
    imgContainer.style.transform = `translateX(${positionValue}px)`;
    console.log(positionValue);
    console.log(deeImgs[pages].src)
}

function nextSlide(){
    pages += 1;
    positionValue -= ImgWidth;
    if(pages === deeImgs.length - 1){
        nextBtn.style.display = "none";
    }
    backBtn.style.display = "block";
    console.log(positionValue)
    console.log(deeImgs[pages].src)
    // dee.style.background= "url(" + deeImgs[pages].src + ") no-repeat center";
    // dee.style.backgroundSize= "cover";
    imgContainer.style.transform = `translateX(${positionValue}px)`;
}

function init(){
    backBtn.style.display = "none";
    // dee.style.background= "url(" + deeImgs[0].src + ") no-repeat center";
    // dee.style.backgroundSize= "cover";
    backBtn.addEventListener('click', backSlide);
    nextBtn.addEventListener('click', nextSlide);
}
init();
