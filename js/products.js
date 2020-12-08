'use strict';

const articleSlide = document.querySelector('article.slide');
const slideWrap = document.querySelector('article.slide > ul.slide-wrap');
const productList = document.querySelectorAll('article.slide > ul.slide-wrap > li');
const productWrap = document.querySelectorAll('article.slide > ul.slide-wrap > li > div');
const wheels = document.querySelectorAll('img.wheels');
const prevBtn = document.querySelector('div.prev');
const nextBtn = document.querySelector('div.next');
const helmetImg = document.querySelector('div.helmet-img > img');
const helmetColorChip = document.querySelectorAll('ul.color-chip > li');
const helmetClick = document.querySelectorAll('div.click');
const helmetClick2 = document.querySelectorAll('div.click2');
const section = document.querySelectorAll('section');
const pageBlind = document.querySelector('div.page-blind');
const goCustomize = document.querySelector('div.custom');

const slideIndex = document.querySelectorAll('ul.slide-index > li');
const detailView = document.querySelector('div.detail-view');
const detailBg = document.querySelector('div.detail-bg');
const detailPop = document.querySelector('div.detail-pop');
const detailThumbWrap = document.querySelectorAll('div.detail-img');
const detailThumbs = document.querySelectorAll('div.detail-img > img');
const detailHoverBorder = document.querySelectorAll('div.hover-border');
const detailImgWrap = document.querySelector('div.details');
const detailImg = document.querySelectorAll('div.details > img');
const detailClose = document.querySelector('div.detail-close');
const detailPrev = document.querySelector('div.prev-arrow');
const detailNext = document.querySelector('div.next-arrow');
const detailBorder = document.querySelector('div.inner-border');
const detailPlus = document.querySelector('div.detail-plus');

const nameH2 = document.querySelector('div.name-wrap > h2');
const nameBlind = document.querySelector('div.h2-blind');
const bigName = document.querySelector('ul.big-name');
const bigNameEls = document.querySelectorAll('ul.big-name > li');

const infoLeftP = document.querySelectorAll('div.info-cycle > p');

const bigNameH = bigNameEls.clientHeight;
let slideWidth;
let slideHeight;

let slideCount = 0;
let isAni = false;
let isMag = false;
let detailWidth;
let detailCount = 0;

slideWrap.style.left = '0';
slideWrap.style.transition = '1s ease-in-out';
slideVisible(slideCount);


prevBtn.addEventListener('click', () => {
    slideWidth = articleSlide.clientWidth;
    slideHeight = articleSlide.clientHeight;
    if(isAni) return;
    slideCount--;
    console.log('prev', slideCount);
    
    for(let i = 0; i < bigNameEls.length; i++){
        bigNameEls[i].style.opacity = 0;
        bigNameEls[i].style.transition = '.3s';
        infoLeftP[i].style.opacity = 0;
        infoLeftP[i].style.display = 'none';
        infoLeftP[i].style.visibility = 'hidden';
    }

    slideWrap.style.left = slideCount * slideWidth * -1 + 'px';
    bigName.style.top = 100 + (slideCount * 200 * - 1) + 'px';
    bigName.style.transition = '.5s ease';
    bigNameEls[slideCount].style.opacity = 1;
    infoLeftP[slideCount].style.opacity = 1;
    infoLeftP[slideCount].style.display = 'block';
    infoLeftP[slideCount].style.visibility = 'visible';

    /*  prev, next 버튼 제어 */
    nextBtn.style.opacity = 1;
    nextBtn.style.visibility = 'visible';
    prevBtn.style.transform = 'scale(1.2)';
    if(slideCount === 0){
        prevBtn.style.opacity = 0;
        prevBtn.style.visibility = 'hidden';
    }

    /* 슬라이드 인덱스 체크 */
    for(let i = 0; i < slideIndex.length; i++){
        slideIndex[i].classList.remove('slideChk');
    }
    slideIndex[slideCount].classList.add('slideChk');


    /* 자전거 휠 애니메이션 */
    for(let i = 0; i < wheels.length; i++){
        wheels[i].classList.add('wheelsAni');
        setTimeout(()=>{
            wheels[i].classList.remove('wheelsAni');
        },1300);
    }

    slideVisible(slideCount);

    /* 디테일 이미지, 썸네일 바꾸기 */
    if( slideCount === 0 ) DetailChange(habitThumbs, habitDetail);
    if( slideCount === 1 ) DetailChange(optimoThumb, optimoDetail);
    if( slideCount === 2 ) DetailChange(supersixThumb, supersixDetail);
    if( slideCount === 3 ) DetailChange(caadThumb, caadDetail);

    /* 제품명 블라인드 애니메이션, 제품명 바꾸기 */
    nameBlind.classList.add('blind');
    setTimeout(()=>{
        nameH2.innerHTML = nameEls[slideCount];
    },400);
    setTimeout(()=>{
        nameBlind.classList.remove('blind');
    },800);
});


/* next 버튼 클릭 시 */
nextBtn.addEventListener('click', () => {
    slideWidth = articleSlide.clientWidth;
    slideHeight = articleSlide.clientHeight;
    // 애니메이션이 실행되고 있다면 return
    if(isAni) return;

    for(let i = 0; i < bigNameEls.length; i++){
        bigNameEls[i].style.opacity = '0';
        bigNameEls[i].style.transition = '.3s';
        infoLeftP[i].style.opacity = 0;
        infoLeftP[i].style.display = 'none';
        infoLeftP[i].style.visibility = 'hidden';
    }

    slideCount++;
    slideWrap.style.left = slideCount * slideWidth * -1 + 'px';
    bigName.style.top = 100 + (slideCount * 200 * - 1) + 'px';
    bigName.style.transition = '.3s ease';
    bigNameEls[slideCount].style.opacity = 1;
    infoLeftP[slideCount].style.display = 'block';
    infoLeftP[slideCount].style.opacity = 1;
    infoLeftP[slideCount].style.visibility = 'visible';

    /*  prev, next 버튼 제어 */
    prevBtn.style.opacity = 1;
    prevBtn.style.visibility = 'visible';

    if(slideCount === 4){
        nextBtn.style.opacity = 0;
        nextBtn.style.visibility = 'hidden';
    }


    /* 슬라이드 인덱스 체크 */
    for(let i = 0; i < slideIndex.length; i++){
        slideIndex[i].classList.remove('slideChk');
    }
    slideIndex[slideCount].classList.add('slideChk');
        
    /* 자전거 휠 애니메이션 */
    for(let i = 0; i < wheels.length; i++){
        wheels[i].classList.add('wheelsAniReverse');
        setTimeout(()=>{
            wheels[i].classList.remove('wheelsAniReverse');
        },1300);
    }

    slideVisible(slideCount);

    /* 디테일 이미지, 썸네일 바꾸기 */
    if( slideCount === 1 ) DetailChange(optimoThumb, optimoDetail);
    if( slideCount === 2 ) DetailChange(supersixThumb, supersixDetail);
    if( slideCount === 3 ) DetailChange(caadThumb, caadDetail);
    if( slideCount === 4 ) DetailChange(superxThumb, superxDetail);


    /* 제품명 블라인드 애니메이션, 제품명 바꾸기 */
    nameBlind.classList.add('blind');
    setTimeout(()=>{
        nameH2.innerHTML = nameEls[slideCount];
    },400);
    setTimeout(()=>{
        nameBlind.classList.remove('blind');
    },800);
});


goCustomize.addEventListener('click', () => {
    setTimeout(()=>{
        for(let j = 0; j < section.length; j++){
            section[j].style.display = 'none';
        }
        section[3].style.display = 'flex';
    },400);
    pageBlind.classList.add('pageBlind');
    setTimeout(()=>{
        pageBlind.classList.remove('pageBlind');
    }, 800);
})

/* Detail Img Change Method */
function DetailChange(thumbSrc, detailSrc){
    for(let i = 0; i < detailThumbs.length; i++){
        detailThumbs[i].setAttribute('src', thumbSrc[i]);
        detailHoverBorder[i].classList.add('thumbBorder');
        detailHoverBorder[1].style.animationDelay = '.1s';
        detailHoverBorder[2].style.animationDelay = '.2s';
        setTimeout(()=>{
            detailHoverBorder[i].classList.remove('thumbBorder');
        },700)
    }
    for(let i = 0; i < detailImg.length; i++){
        detailImg[i].setAttribute('src', detailSrc[i]);
    }
}



/* Slide Trans */
function slideVisible(slideCount){
    isAni = true;
    for(let i = 0; i < productWrap.length; i++){
        productWrap[i].style.opacity = 0;
        productWrap[i].style.visibility = 'hidden';
        productWrap[i].style.transition = '.5s';
        productWrap[i].style.pointerEvent = 'none';
    }
    setTimeout(()=>{
        productWrap[slideCount].style.opacity = 1;
    },500)
    productWrap[slideCount].style.visibility = 'visible';
    productWrap[slideCount].style.transition = '1s';
    productWrap[slideCount].style.pointerEvent = 'none';

    setTimeout(()=>{
        isAni = false;
    }, 1000);

}


/* Color Chip */
for(let i = 0; i < helmetColorChip.length; i++){
    helmetColorChip[i].addEventListener('click', () => {
        console.log('click');
        helmetImg.setAttribute('src', helmetSrc[i]);
        helmetImg.classList.add('change');

        for(let j = 0; j < helmetColorChip.length; j++){
            helmetColorChip[j].style.border = 'none';
        }
        helmetColorChip[i].style.border = '5px solid #000';
        helmetClick[i].classList.add('select');
        helmetClick2[i].classList.add('select2');

        if(i === 1){
            helmetColorChip[i].style.border = '5px solid #ffb700';
            helmetClick[i].style.border = '3px solid #ffb700';
            helmetClick2[i].style.border = '3px solid #ffb700';
        }

        setTimeout(()=>{
            helmetImg.classList.remove('change');
            helmetClick[i].classList.remove('select');
            helmetClick2[i].classList.remove('select2');
        },500);
    })
}


/* Detail Thumbnail Plus Btn Click */
detailPlus.addEventListener('click', () => {
    detailOpen();
    detailImgWrap.style.left = 0;
    detailCount = 0;
    detailPrev.style.opacity = 0;
    detailPrev.style.visibility = 'hidden';
    detailNext.style.opacity = 1;
    detailNext.style.visibility = 'visible';
})

/* Detail Thumbnail Click */
for(let i = 0; i < detailThumbWrap.length; i++){
    detailThumbWrap[i].addEventListener('click', ()=>{
        detailOpen();

        detailWidth = detailPop.getBoundingClientRect().width;
        detailCount = i;
        console.log(detailCount, i);
        detailImgWrap.style.left = detailCount * detailWidth * -1 + 'px';
        detailImgWrap.style.transition = 'none';
        if(detailCount === 0){
            detailPrev.style.opacity = 0;
            detailPrev.style.visibility = 'hidden';
        } else {
            detailPrev.style.opacity = 1;
            detailPrev.style.visibility = 'visible';
        }

        detailNext.style.opacity = 1;
        detailNext.style.visibility = 'visible';
    })
}
/* Detail Thumbnail Open */
function detailOpen(){
    detailView.style.display = 'block';
    setTimeout(()=>{
        detailClose.style.height = '45px';
        detailClose.style.transition = '.3s';
    
        detailPop.style.top = '50%';
        detailPop.style.border = '1px solid #b3b1b8';
        detailPop.style.transition = '.5s';
    
        detailBg.style.opacity = 1;
        detailBg.style.visibility = 'visible';
        detailBg.style.transition = '.5s';
    },100);
}
/* Detail Pop Up Close */
detailClose.addEventListener('click', OnDetailClose);
detailBg.addEventListener('click', OnDetailClose);
function OnDetailClose(){
    detailClose.style.height = 0;
    detailClose.style.transition = '.3s';

    setTimeout(()=>{
        detailPop.style.top = '150%';
        detailPop.style.border = 'none';
        detailPop.style.transition = '.5s';
    
        detailBg.style.opacity = 0;
        detailBg.style.visibility = 'hidden';
        detailBg.style.transition = '.5s';
    },300);
    setTimeout(()=>{
        detailView.style.display = 'none';
        detailCount = 0;
        detailImgWrap.style.left = detailCount * detailWidth * -1 + 'px';
    },800)
}

/* Detail Slide */
detailPrev.addEventListener('click', ()=>{
    detailCount--;
    console.log(detailCount);
    detailImgWrap.style.left = detailCount * detailWidth * -1 + 'px';
    detailImgWrap.style.transition = '.5s';

    detailNext.style.opacity = 1;
    detailNext.style.visibility = 'visible';

    if(detailCount === 0){
        detailPrev.style.opacity = 0;
        detailPrev.style.visibility = 'hidden';
    }

    detailBorder.classList.add('borderAni');
    setTimeout(()=>{
        detailBorder.classList.remove('borderAni');
    },500);
})

detailNext.addEventListener('click', ()=>{
    detailCount++;
    console.log(detailCount);
    detailImgWrap.style.left = detailCount * detailWidth * -1 + 'px';
    detailImgWrap.style.transition = '.5s';

    detailPrev.style.opacity = 1;
    detailPrev.style.visibility = 'visible';
    if(detailCount === 4){
        detailNext.style.opacity = 0;
        detailNext.style.visibility = 'hidden';
    }
    detailBorder.classList.add('borderAni');
    setTimeout(()=>{
        detailBorder.classList.remove('borderAni');
    },500);
})
