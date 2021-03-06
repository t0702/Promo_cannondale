'use strict';

const componentBtn = document.querySelectorAll('div.cycle-wrap > ul > li');
const componentBtnImg = document.querySelectorAll('div.icon > img');
const componentName = document.querySelectorAll('div.icon > h2');
const componentScript = document.querySelectorAll('div.compo-script');
const cycleImg = document.querySelector('div.cycle-wrap > img');

let isActive = false;

for(let i = 0; i < componentBtn.length; i++){
    componentBtn[i].addEventListener('click', () => {
        for(let j = 0; j < componentBtn.length; j++){
            componentBtn[j].classList.remove('active');
            componentBtn[j].style.height = '60px';
            componentBtn[j].style.padding = '10px';
            componentBtnImg[i].style.width = '40px';
            
            componentBtn[j].style.width = '60px';
            
            setTimeout(() => {
                componentScript[j].style.display = 'none';
                componentBtnImg[j].style.transform = 'scale(1);'
                componentName[j].style.opacity = 0;
                componentName[j].style.visibility = 'hidden';
            },300);

            componentScript[j].style.opacity = 0;
            componentScript[j].style.visibility = 'hidden';
        }
        
        if(!isActive){
            isActive = true;
            componentBtn[i].classList.add('active');
            for(let j = 0; j < componentBtn.length; j++){
                componentBtn[j].style.height = 0;
                componentBtn[j].style.padding = 0;
            }
            
            componentBtn[i].style.width = '60px';
            componentBtn[i].style.height = '60px';
            componentBtn[i].style.padding = '10px';
            setTimeout(() => { 
                componentBtn[i].style.width = '250px'; 
                componentName[i].style.opacity = 1;
                componentName[i].style.display = 'flex';
                componentName[i].style.visibility = 'visible';
                componentBtn[i].style.padding = '10px 20px';
                componentBtnImg[i].style.width = '30px';
            },300);

            setTimeout(() => { 
                componentBtn[i].style.height = '300px'; 

                if(i === 1) componentBtn[i].style.height = '280px';
                if(i === 2) componentBtn[i].style.height = '240px';
                if(i === 3) componentBtn[i].style.height = '300px'; 
                componentScript[i].style.opacity = 1;
                componentScript[i].style.display = 'flex';
                componentScript[i].style.visibility = 'visible';
            },600);

            if(i === 0){
                componentBtn[i].style.left = '80px';
                cycleImg.style.transform = 'translate(-10%, -20%) scale(1.9)';
                cycleImg.style.transition = '1s';
            }
            if(i === 1){
                setTimeout(()=>{
                    componentBtn[i].style.right = '30px';
                },300);
                componentBtn[i].style.top = '100px';
                cycleImg.style.transform = 'translate(-45%, -20%) scale(1.9)';
                cycleImg.style.transition = '1s';
            }
            if(i === 2){
                cycleImg.style.transform = 'translate(10%, -50%) scale(1.9)';
                cycleImg.style.transition = '1s';
            }
            if(i === 3){
                setTimeout(()=>{
                    componentBtn[i].style.top = '200px';
                },300);
                componentBtn[i].style.left = '58%';
                cycleImg.style.transform = 'translate(-10%, -70%) scale(1.9)';
                cycleImg.style.transition = '1s';
            }
        }
        else if(isActive){
            isActive = false;
            for(let j = 0; j < componentBtn.length; j++){
                componentBtn[0].style.left = '120px';
                componentBtn[1].style.right = '150px';
                componentBtn[1].style.top = '-10px';
                componentBtn[2].style.left = '0';
                componentBtn[3].style.left = '48%';
                componentBtn[3].style.top = '280px';
            }
            cycleImg.style.transform = 'translate(-50%,-50%) scale(1)';
            cycleImg.style.transition = '.5s';
        }
    })
}


const videoImgWrap = document.querySelector('div.video-img');
const videoPopWrap = document.querySelector('div.video-pop-wrap');
const videoBg = document.querySelector('div.video-bg');
const videoPop = document.querySelector('div.video-pop');

// youtube API 불러옴
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 유튜브 플레이어 변수 설정
let player;
let setTime;
videoImgWrap.addEventListener('mouseenter', () => {
    setTime = setTimeout(() => {
        videoPopWrap.style.visibility = 'visible';
        videoBg.style.visibility = 'visible';
        videoBg.style.opacity = 1;
        videoPop.style.transform = 'translate(-50%, -50%)';
    }, 2000);

    player = new YT.Player('iframe-api', {
        width: '1000',
        height: '563',
        videoId: 'XuEs0jFCV4c',
        playerVars: {rel: 0},//추천영상 안보여주게 설정
    });//player셋팅
    
})
videoImgWrap.addEventListener('mouseleave', () => {
    clearTimeout(setTime);
    
})
videoBg.addEventListener('click', () => {
    videoClose();
})

function videoClose(){
    videoPopWrap.style.visibility = 'hidden';
    videoBg.style.visibility = 'hidden';
    videoBg.style.opacity = 0;
    videoPop.style.transform = 'translate(-50%, 100%)';
    setTimeout(() => {
        videoPop.innerHTML = '<div id="iframe-api"></div>';
    }, 300);
}
