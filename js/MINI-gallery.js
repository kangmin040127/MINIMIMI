let dpWrap = document.getElementById('dpWrap');

 const picArr = [
    {type : "daily",
     url : "../img/gallery-daily.png",
    },
    {type : "date",
     url : "../img/gallery-date.png",
    },
    {type : "homeFood",
     url : "../img/gallery-homeFood.jpg",
    },
    {type : "redic",
     url : "../img/gallery-redic.png",
    },
    {type : "sefie",
     url : "../img/gallery-selfie.jpg",
    },
    {type : "best",
     url : "../img/gallery-best.png",
    }
 ]
picArr.map((pic) => 
    dpWrap.innerHTML += `
        <div class="picBox">
            <div class="picFrame FrameUp"></div>
            <img class="galleryPics" src="${pic.url}" alt="">
            <div class="picTrans">!!사진 설명!!</div>
        </div>
`
);
