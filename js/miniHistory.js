const remainTime = document.querySelector("#remain-time");

// =============== 객체의 활용 ================= // 
let pic1 = {
    picTF : true,
    picWrap : document.querySelector(".picWrap1")
}
let pic2 = {
    picTF : true,
    picWrap : document.querySelector(".picWrap2")
}
let pic3 = {
    picTF : true,
    picWrap : document.querySelector(".picWrap3")
}
let pic4 = {
    picTF : true,
    picWrap : document.querySelector(".picWrap4")
}
let pic5 = {
    picTF : true,
    picWrap : document.querySelector(".picWrap5")
}

// =========================== 디에이 설정 ================================ //
function diffDay() {
    const startDay = new Date("2023-12-01");
    const nowDay = new Date();
    const diff = nowDay - startDay;
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = Math.floor((diff / (1000*60*60)) % 24);
    const diffMin = Math.floor((diff / (1000*60)) % 60);
    const diffSec = Math.floor(diff / 1000 % 60);
    remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}
diffDay()
setInterval(diffDay, 1000);


// =========================== 카드 뒤집기 이벤트 ========================== //
pic1.picWrap.addEventListener('click', function() {flipCard(pic1)})
pic2.picWrap.addEventListener('click', function() {flipCard(pic2)})
pic3.picWrap.addEventListener('click', function() {flipCard(pic3)})
pic4.picWrap.addEventListener('click', function() {flipCard(pic4)})
pic5.picWrap.addEventListener('click', function() {flipCard(pic5)})

function flipCard(pic){
    if(pic.picTF){
        pic.picWrap.style.transform = "rotateY(180deg)"
        pic.picTF = false;
    }else{
        pic.picWrap.style.transform = "rotateY(0)"
        pic.picTF = true;
    }
}
