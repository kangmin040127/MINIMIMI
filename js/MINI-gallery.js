let dpWrap = document.getElementById('dpWrap');
const dailyBtn = document.getElementById('daily');
const dateBtn = document.getElementById('date');
const FoodBtn = document.getElementById('Food');
const selfieBtn = document.getElementById('selfie');
const bestBtn = document.getElementById('best');
const specialBtn = document.getElementById('special');
const allBtn = document.getElementById('all');
const loadingPage = document.getElementById('gallery-enter')

const picArr = [{
        title: "😭 밥 먹다 울어버린 그녀 😭",
        type: "daily",
        url: "img/galleryIMG/gallery-daily.png",
        exp: "샤오마에서 저녁 먹다가 울어버린 서미래씨",
    },
    {
        title: "👨‍🎓 샤먼에 복단생이 떴다 👩‍🎓",
        type: "date",
        url: "img/galleryIMG/gallery-date.png",
        exp: "샤먼에서 찍은 항공샷",
    },
    {
        title: "🥗 그녀와 학식은 언제나 옳다 🥗",
        type: "Food",
        url: "img/galleryIMG/gallery-homeFood.jpg",
        exp: "맛있게 학식 같이 먹는 우리",
    },
    {
        title: "🐒 동물원에 미녀가 떴다 🐒",
        type: "redic",
        url: "img/galleryIMG/gallery-redic.png",
        exp: "정말 예쁘고 아름다운 그녀",
    },
    {
        title: "🤬 레전드상황발생 🤬",
        type: "sefie",
        url: "img/galleryIMG/gallery-selfie.jpg",
        exp: "놀이기구 보고 무서워서 찍은 셀카",
    },
    {
        title: "📸 베트남 호텔 거울셀카1 📸",
        type: "best",
        url: "img/galleryIMG/gallery-best.png",
        exp: "잘 나온 우리",
    },
    {
        title: "🍖 두조각 먹고 안 먹은 치킨 🍖",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-kChicken.jpg",
        exp: "",
    },
    {
        title: "🥶 목도리 같이 쓰는 미니미미 🥶",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-neckWarm.jpg",
        exp: "",
    },
    {
        title: "🎄 크리스마스 데이트 거울셀카 🎄",
        type: "date",
        url: "img/galleryIMG/gallery-date-christmasDate.jpg",
        exp: "",
    },
    {
        title: "🚔 경찰서 방문 후 🚔",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-police.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "👓 시험기간 물안경 공부 👓",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-waterGlass.jpg",
        exp: "",
    },
    {
        title: "💑 예원에서 사랑하기 💑",
        type: "date",
        url: "img/galleryIMG/gallery-date-YeOne.jpg",
        exp: "",
    },
    {
        title: "🐕🐈 인기녀 서미래 🐕🐈",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-loveHer.jpg",
        exp: "",
    },
    {
        title: "🏢 청바지빌딩 사이 우리 🏢",
        type: "best",
        url: "img/galleryIMG/gallery-best-jeansBuilding.jpg",
        exp: "",
    },
    {
        title: "🎂 최고의 생일을 선물한 미래 🎂",
        type: "special",
        url: "img/galleryIMG/gallery-special-kangminBirthday.jpg",
        exp: "",
    },
    {
        title: "💑 미니미미는 선남선녀 💑",
        type: "special",
        url: "img/galleryIMG/gallery-special-photoism.jpg",
        exp: "",
    },
    {
        title: "🧣 나의 평생 목도리 🧣",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-gift.jpg",
        exp: "",
    },
    {
        title: "🏞 같이 가서 좋았던 공원 🏞 ",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-nakSang.jpg",
        exp: "",
    },
    {
        title: "🏖️ 사랑하는 사람과 근사한 곳 🏖️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-oceanLying.jpg",
        exp: "",
    },
    {
        title: "🏰 디즈니 거울 셀카 🏰",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-disneyGlass.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🔮 미래라 적고 사랑이라 읽음 🔮",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-textMirae.jpg",
        exp: "",
    },
    {
        title: "💍 샤먼 거울샷2 💍",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-xiaMenMirror.jpg",
        exp: "",
    },
    {
        title: "✈️ 내 최애 비행기컷 ✈️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-plane.jpg",
        exp: "",
    },
    {
        title: "🏊 수영하는 섹시쟁이들 🏊 ",
        type: "selfie",
        type: "daily",
        url: "img/galleryIMG/gallery-selfie-hotelSwim.jpg",
        exp: "",
    },
    {
        title: "🧑 바나힐 거울샷 🧑",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-banaMirror.jpg",
        exp: "",
    },
    {
        title: "🥗 닭볶음탕 도전 🥗",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-homeFood1.jpg",
        exp: "",
    },
    {
        title: "🍜 삼겹 and 비빔면 🍜",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-homeFood2.jpg",
        exp: "",
    },
    {
        title: "🏫 미래와 학식쟁이 🏫",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-Food3.jpg",
        exp: "",
    },
    {
        title: "🐟 연어 and 비빔면 🐟",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-homeFood5.jpg",
        exp: "",
    },
    {
        title: "🍱 그녀가 사주는 튀김덮밥 🍱",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-restaurant8.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🍕 미래가 산 브런취 🍕",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-homeFood4.jpg",
        exp: "",
    },
    {
        title: "🍜 다낭 맛집 투어 🍜",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-restaurant7.jpg",
        exp: "",
    },
    {
        title: "🍝 그녀가 사는 레스토랑 🍝",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-restaurant6.jpg",
        exp: "",
    },
    {
        title: "🙈 턱털 그만 뽑아 🙈",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-jawHair.jpg",
        exp: "",
    },
    {
        title: "👸 잠자는 숲속의 공주 👸",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleeping1.jpg",
        exp: "",
    },
    {
        title: "🌸 나 빼고 꽃들 🌸",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-butFlower.jpg",
        exp: "",
    },
    {
        title: "💰︎ 찜질방에서 벌금 200만원 💰︎",
        type: "date",
        url: "img/galleryIMG/gallery-date-jimjilbang-lying.jpg",
        exp: "",
    },
    {
        title: "✈︎ 베트남 -> 대한민국 ✈︎",
        type: "date",
        url: "img/galleryIMG/gallery-date-inPlane.jpg",
        exp: "",
    },
    {
        title: "🏯 오늘의 바나힐 주인공들 🏯",
        type: "best",
        url: "img/galleryIMG/gallery-best-banaCastle.jpg",
        exp: "",
    },
    {
        title: "🎥 모델일 하는 미래 🎥",
        type: "best",
        url: "img/galleryIMG/gallery-best-zooFilmCamera.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🎥 모델일 하는 미래2 🎥",
        type: "best",
        url: "img/galleryIMG/gallery-best-mireaHat.jpg",
        exp: "",
    },
    {
        title: "👩🏻‍❤‍👨🏿 제발 결혼하게 해주세요 👩🏻‍❤‍👨🏿",
        type: "special",
        url: "img/galleryIMG/gallery-special-boatPrey.jpg",
        exp: "",
    },
    {
        title: "👨‍🌾 동방명주 주인 👨‍🌾",
        type: "special",
        url: "img/galleryIMG/gallery-special-dongFang.jpg",
        exp: "",
    },
    {
        title: "🌉 바나힐 다리까지 점령한 둘 🌉",
        type: "special",
        url: "img/galleryIMG/gallery-special-goldenBridge.jpg",
        exp: "",
    },
    {
        title: "👫🏻 너무 아름다운 사이 👫🏻",
        type: "special",
        url: "img/galleryIMG/gallery-special-twoFilmCame.jpg",
        exp: "",
    },
    {
        title: "💏 하트안에서 키스 💏",
        type: "special",
        url: "img/galleryIMG/gallery-special-xiaMenPhoneKiss.jpg",
        exp: "",
    },
    {
        title: "👩‍🍳 감바스 마스터 서미래 👩‍🍳",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-9.jpg",
        exp: "",
    },
    {
        title: "👯 한인타운 공짜로 먹은 집 👯",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-10.jpg",
        exp: "",
    },
    {
        title: "👩‍🍳 떡볶이 장인 서미래 👩‍🍳",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-11.jpg",
        exp: "",
    },
    {
        title: "🔮 일식 돈까스는 미래다 🔮",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-12.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🍝 감바스 and 파스타 and 무엇 🍝",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-13.jpg",
        exp: "",
    },
    {
        title: "🍕 피자랑 불닭은 근본 🍕",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-14.jpg",
        exp: "",
    },
    {
        title: "🥓 비빔은 항상 삼겹과 함께 🥓",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-15.jpg",
        exp: "",
    },
    {
        title: "🦐 샤먼 새우와 튀김 맛집 🦐",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-16.jpg",
        exp: "",
    },
    {
        title: "🎁 가성비 갑이였던 중식당 🎁",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-17.jpg",
        exp: "",
    },
    {
        title: "😤 멀봐 안보여? 😤",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-18.jpg",
        exp: "",
    },
    {
        title: "🎁 가성비 갑이였던 중식당2 🎁",
        type: "Food",
        url: "img/galleryIMG/gallery-Food-19.jpg",
        exp: "",
    },
    {
        title: "🥺 자는데 찍어 🥺",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleepKiss.jpg",
        exp: "",
    },
    {
        title: "🎊 대학공연 전 사진 한 장 🎊",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-butflowerSelfie.jpg",
        exp: "",
    },
    {
        title: "💯 무거울까봐 들어주는 남친 💯",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-cableCar.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🐵 구랑위 정상에서 셀카 🐵",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-gulangYu.jpg",
        exp: "",
    },
    {
        title: "🤿 바다위에서 한 컷 🤿",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-onSea.jpg",
        exp: "",
    },
    {
        title: "🏕️ 엄청 큰 공원 데이트 🏕️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-parkSelfie.jpg",
        exp: "",
    },
    {
        title: "🏖️ 바다 풍경이 너무 예뻐서 🏖️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-xiaMenSeaFront.jpg",
        exp: "",
    },
    {
        title: "🍻 맥주 258병쨰 🍻",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-xiaoMa.jpg",
        exp: "",
    },
    {
        title: "🚀 한국 -> 상하이 🚀",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-toChina.jpg",
        exp: "",
    },
    {
        title: "🏟️ 호텔 거울 셀카는 옳다 🏟️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-inHotelMirror.jpg",
        exp: "",
    },
    {
        title: "🛤️ 광차오에 누워서 한 컷 🛤️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-Guangcao.jpg",
        exp: "",
    },
    {
        title: "🎡 디즈니 굿즈샵에서 한 컷 🎡",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-disney-smallMirror.jpg",
        exp: "",
    },
    {
        title: "🌆 100일 기념 city walk 🌆",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-100dayCity.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🍹 우리가 빌린 커뮨 🍹",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-dayBeforeXiaMen.jpg",
        exp: "",
    },
    {
        title: "🏖️ 구랑위 뙇! 🏖️",
        type: "date",
        url: "img/galleryIMG/gallery-date-guLangYu.jpg",
        exp: "",
    },
    {
        title: "🏖️ 미케비치 족욕 🏖️",
        type: "date",
        url: "img/galleryIMG/gallery-date-seaFoot.jpg",
        exp: "",
    },
    {
        title: "⌚ 그녀의 손목엔 롤리 ⌚",
        type: "date",
        url: "img/galleryIMG/gallery-date-appleWatch.jpg",
        exp: "",
    },
    {
        title: "💏 구랑위 정상에서 한 컷 💏",
        type: "date",
        url: "img/galleryIMG/gallery-date-xiaMenTop.jpg",
        exp: "",
    },
    {
        title: "😄 모래쟁이로 표정쟁이 만들기 😄",
        type: "date",
        url: "img/galleryIMG/gallery-date-xiaMenSand.jpg",
        exp: "",
    },
    {
        title: "🧑‍🤝‍🧑 귀엽게 편집된 사진 🧑‍🤝‍🧑",
        type: "date",
        url: "img/galleryIMG/gallery-date-parkFaceBig.jpg",
        exp: "",
    },
    {
        title: "📸 핸드폰을 찍는 핸드폰 📸",
        type: "best",
        url: "img/galleryIMG/gallery-best-weInPhone.jpg",
        exp: "",
    },
    {
        title: "🔭 팽균 앞 항공샷 🔭",
        type: "best",
        url: "img/galleryIMG/gallery-best-frontPanguine.jpg",
        exp: "",
    },
    {
        title: "🛵 최애 자토 짤 🛵",
        type: "best",
        url: "img/galleryIMG/gallery-best-dianDong.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "👸 다낭에 인어공주가 떴다 👸",
        type: "best",
        url: "img/galleryIMG/gallery-best-inSeaMirae.jpg",
        exp: "",
    },
    {
        title: "💃 너무 귀여운 앞태 💃",
        type: "best",
        url: "img/galleryIMG/gallery-best-gulangyuFoodFront.jpg",
        exp: "",
    },
    {
        title: "💑 인어왕자와 인어공주 💑",
        type: "best",
        url: "img/galleryIMG/gallery-best-inSeaWe.jpg",
        exp: "",
    },
    {
        title: "♥️ 누가 더 잘찍는지 대결한 컷 ♥️",
        type: "special",
        url: "img/galleryIMG/gallery-special-parkArmHeart.jpg",
        exp: "결국엔 서미래가 이겼지만.... 나도 만만치 않았다 ",
    },
    {
        title: "👩‍❤️‍👨 카페 모래성에서 한 컷 👩‍❤️‍👨",
        type: "special",
        url: "img/galleryIMG/gallery-special-cafeCut.jpg",
        exp: "",
    },
    {
        title: "💋 공주와 돌쇠의 만남 💋",
        type: "special",
        url: "img/galleryIMG/gallery-special-banaKiss.jpg",
        exp: "",
    },
    {
        title: "🦶 마음이 안정되는 사진 🦶",
        type: "special",
        url: "img/galleryIMG/gallery-special-beachFoot.png",
        exp: "",
    },
    {
        title: "💯 나의 최애 사진 💯",
        type: "special",
        url: "img/galleryIMG/gallery-special-xiaMenMirror.jpg",
        exp: "",
    },
    {
        title: "🐭 귀여운 쥐쟁이들 🐭",
        type: "special",
        url: "img/galleryIMG/gallery-special-photoism2.jpg",
        exp: "",
    },

    {
        title: "🔥 200일 기념 촛불 끄기 🔥",
        type: "special",
        url: "img/galleryIMG/gallery-special-200day.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "💋 샤먼 키스쟁이들 💋",
        type: "special",
        url: "img/galleryIMG/gallery-special-kissGulangyu.jpg",
        exp: "",
    },
    {
        title: "🛏️ 잘때 찍기1 🛏️",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleeping1.jpg",
        exp: "",
    },
    {
        title: "🛏️ 잘때 찍기2 🛏️",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleeping2.jpg",
        exp: "",
    },
    {
        title: "👕 커플잠옷 👕",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleeping3.jpg",
        exp: "",
    },
    {
        title: "🛏️ 잘때 찍기3 🛏️",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleeping4.jpg",
        exp: "",
    },
    {
        title: "🛏️ 잘때 찍기4 🛏️",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-sleeping5.jpg",
        exp: "",
    },
    {
        title: "🍌 무거운 땡땡 들어주는 여친 🍌",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-grapGoChu.jpg",
        exp: "",
    },
    {
        title: "🦾 힘힘힘 근육미래 🦾",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-showMuscle.jpg",
        exp: "",
    },
    {
        title: "🧑 요즘 유행하는 머리 🧑",
        type: "daily",
        url: "img/galleryIMG/gallery-daily-hairJoke.jpg",
        exp: "",
    },
    {
        title: "🤨 뭘 봐 2 🤨",
        type: "daily",
        url: "img/galleryIMG/gallery-Food-20.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🤮 환불 받은 음식들 🤮",
        type: "daily",
        url: "img/galleryIMG/gallery-Food-21.jpg",
        exp: "",
    },
    {
        title: "🥧 당분간 마지막 훠궈 🥧" ,
        type: "daily",
        url: "img/galleryIMG/gallery-Food-22.jpg",
        exp: "",
    },
    {
        title: "🍝 양식집 뺨치는 우리들 🦐",
        type: "daily",
        url: "img/galleryIMG/gallery-Food-23.jpg",
        exp: "",
    },
    {
        title: "🍜 안토이 식당 🍜",
        type: "daily",
        url: "img/galleryIMG/gallery-Food-24.jpg",
        exp: "",
    },
    {
        title: "🐟 맛있지만 비싼 카오위 🐟",
        type: "daily",
        url: "img/galleryIMG/gallery-Food-25.jpg",
        exp: "",
    },
    {
        title: "🙍 서미래 얼굴 내놔 🙍",
        type: "date",
        url: "img/galleryIMG/gallery-date-greenhouse.jpg",
        exp: "",
    },
    {
        title: "🙍 서미래 얼굴 내놔2 🙍",
        type: "date",
        url: "img/galleryIMG/gallery-date-greenhousePhone.jpg",
        exp: "",
    },
    {
        title: "✌️ 시티워크하며 브이 ✌️",
        type: "date",
        url: "img/galleryIMG/gallery-date-bridgeShadow.jpg",
        exp: "",
    },
    {
        title: "🏪 다시 찾은 옷 가게 🏪",
        type: "date",
        url: "img/galleryIMG/gallery-date-recomeChiristmas.jpg",
        exp: "",
    },
    {
        title: "🌊 우리 퍼스널컬러는 바다 🌊",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-onTheSea.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🚢 구랑위 가는 배 기다리며 🚢",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-waitShip.jpg",
        exp: "",
    },
    {
        title: "🤗 항상 내 옆에 있어 🤗",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-hugMirror.jpg",
        exp: "",
    },
    {
        title: "🌊 우린 바다를 좋아해 🌊",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-frontBitch.jpg",
        exp: "",
    },
    {
        title: "🦞미래추천 롱샤집 맛은 보장🦞",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-longxia.jpg",
        exp: "",
    },
    {
        title: "✈️ 베트남행 비행기 ✈️",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-toVietnam.jpg",
        exp: "",
    },
    {
        title: "🌊우웁.. 흐느들스엣!🌊",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-semiSea.jpg",
        exp: "",
    },
    {
        title: "🎢 멀미 뱅뱅이 🎢",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-banaPlayToo.jpg",
        exp: "",
    },
    {
        title: "🏐 호텔풀장에서 배구하기 🏐",
        type: "selfie",
        url: "img/galleryIMG/gallery-selfie-hotelPool.jpg",
        exp: "",
    },
    {
        title: "😲꽃이 꽃💮을 만진다?!😲",
        type: "best",
        url: "img/galleryIMG/gallery-best-miraeButFlower.jpg",
        exp: "",
    },

    {
        title: "🖼️ 역대 나의 최대 사진 🖼️",
        type: "special",
        url: "img/galleryIMG/gallery-special-homeScreen.jpg",
        exp: "",
    },
// ================================================================== // 
    {
        title: "🎂 매년 나랑 축하하자 🎂",
        type: "special",
        url: "img/galleryIMG/gallery-special-miraeBirthday.jpg",
        exp: "",
    },
    {
        title: "👐 꼭~ 붙어있어라 👐",
        type: "special",
        url: "img/galleryIMG/gallery-special-greenHug.jpg",
        exp: "",
    },






]
function ALLPics(){begin();clearAll();highLight(allBtn)
    for(let i = 0; i < picArr.length; i++){
        addPic(picArr[i])
    }
}


function dailyPics() {begin();clearAll();
    highLight(dailyBtn)
    for(let pics of picArr){

        if(pics.type == "daily"){
            addPic(pics)
        }
    }
}
function datePics() {begin();clearAll();
    highLight(dateBtn)
    for(let pics of picArr){
        if(pics.type == "date"){
            addPic(pics)
        }
    }
}
function FoodPics() {begin();clearAll();
    highLight(FoodBtn)
    for(let pics of picArr){
        if(pics.type == "Food"){
            addPic(pics)
        }
    }
}
function selfiePics() {begin();clearAll();
    highLight(selfieBtn)
    for(let pics of picArr){
        if(pics.type == "selfie"){
            addPic(pics)
        }
    }
}
function bestPics() {begin();clearAll();
    highLight(bestBtn)
    for(let pics of picArr){
        if(pics.type == "best"){
            addPic(pics)
        }
    }
}
function spcialPics() {begin();clearAll();
    highLight(specialBtn)
    for(let pics of picArr){
        if(pics.type == "special"){
            addPic(pics)
        }
    }
}

function addPic(pics){
    dpWrap.innerHTML += `
    <div class="picBox">
        <div class="picFrame FrameUp">${pics.title}</div>
        <img class="galleryPics" src="${pics.url}" alt="">
        <div class="picTrans">${pics.exp}</div>
    </div>
`
}

function highLight(btn){
    btn.style.backgroundColor = 'green';
    btn.style.color = 'white';
}
function clearAll(){
    allBtn.style.color = 'black';
    dailyBtn.style.color = 'black';
    dateBtn.style.color = 'black';
    selfieBtn.style.color = 'black';
    FoodBtn.style.color = 'black';
    bestBtn.style.color = 'black';
    specialBtn.style.color = 'black';
    allBtn.style.backgroundColor = '#c5eec1';   
    dailyBtn.style.backgroundColor = '#c5eec1';
    dateBtn.style.backgroundColor = '#c5eec1';
    selfieBtn.style.backgroundColor = '#c5eec1';
    FoodBtn.style.backgroundColor = '#c5eec1';
    bestBtn.style.backgroundColor = '#c5eec1';
    specialBtn.style.backgroundColor = '#c5eec1';
}

// 초기화
function begin() {
    dpWrap.innerHTML = ""
}


setTimeout(function() {
    loadingPage.style.display = 'none';
}, 3500);

ALLPics()
