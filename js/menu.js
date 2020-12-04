const hamburger = document.querySelector('ul.hamburger');
const hamburgerLi = document.querySelectorAll('ul.hamburger > li');
const menu = document.querySelector('div.menu');
const menuWrap = document.querySelector('div.menu-wrap');
const menuLi = document.querySelectorAll('div.menu > ul > li');
const menuBg = document.querySelector('div.menu-bg');
const cursorCir = document.querySelector('div.cursor-cir');
const body = document.querySelector('body');
const nav = document.querySelector('header > nav');

let isOpen = false;
let isMain = true;
let isProducts = false;
let isCustom = false;


for(let i = 0; i < menuLi.length; i++){
    menuLi[i].addEventListener('click', ()=>{
        window.scrollTo(0, 0);
        whatSection(i);
        isAbout ? body.style.overflow = 'auto' : body.style.overflow = 'hidden';
        
        // 메뉴 클릭 시 section display 변경
        setTimeout(()=>{
            for(let j = 0; j < menuLi.length; j++){
                section[j].style.display = 'none';
                // section[j].style.opacity = 0;
                // section[j].style.transition = '.2s';
                // section[j].style.pointerEvents = 'none';
            }
            section[i].style.display = 'flex';
        },400);
        pageBlind.classList.add('pageBlind');
        setTimeout(()=>{
            pageBlind.classList.remove('pageBlind');
        }, 800);
        // section[i].style.opacity = 1;
        // section[i].style.pointerEvents = 'auto';


        // 메뉴 목록 클릭 시 메뉴 닫힘.
        menu.style.right = '-30vw';
        menuBg.style.opacity = 0;
        menuWrap.style.pointerEvents = "none";
        for(let i = 0; i < hamburgerLi.length; i++){
            hamburgerLi[i].style.backgroundColor = '#000';
            hamburgerLi[0].style.top = 0;
            hamburgerLi[0].style.transform = 'translate(-50%, -50%) rotate(0)';
            hamburgerLi[1].style.transform = 'translate(-50%, -50%)';
            hamburgerLi[1].style.opacity = 1;
            hamburgerLi[2].style.top = '100%';
            hamburgerLi[2].style.transform = 'translate(-50%, -50%) rotate(0)';
        }
        isOpen = false;

    })
}


// 메뉴 배경 클릭 시 메뉴 닫힘
menuBg.addEventListener('click', () => {
    if(isOpen){
        menu.style.right = '-30vw';
        menuBg.style.opacity = 0;
        menuWrap.style.pointerEvents = "none";
        for(let i = 0; i < hamburgerLi.length; i++){
            hamburgerLi[i].style.backgroundColor = '#000';
            hamburgerLi[0].style.top = 0;
            hamburgerLi[0].style.transform = 'translate(-50%, -50%) rotate(0)';
            hamburgerLi[1].style.transform = 'translate(-50%, -50%)';
            hamburgerLi[1].style.opacity = 1;
            hamburgerLi[2].style.top = '100%';
            hamburgerLi[2].style.transform = 'translate(-50%, -50%) rotate(0)';
        }
        isOpen = false;
    }
})


console.log((window.innerWidth - nav.clientWidth)/2);


window.addEventListener('resize', () => {
    if(!isOpen){
        menu.style.width = (window.innerWidth - nav.clientWidth) / 2 + 400 + 'px';
        menu.style.right = ((window.innerWidth - nav.clientWidth) / 2 + 400) * -1 + 'px';
    } else if(isOpen){
        menu.style.width = (window.innerWidth - nav.clientWidth) / 2 + 400 + 'px';
        menu.style.right = '0px';
    }
})

hamburger.addEventListener('click', () => {
    if(!isOpen){
        menu.style.right = '0px';
        menuBg.style.opacity = 1;
        menuWrap.style.pointerEvents = "auto";
        for(let i = 0; i < hamburgerLi.length; i++){
            hamburgerLi[i].style.backgroundColor = '#fff';
            hamburgerLi[0].style.top = '50%';
            hamburgerLi[0].style.transform = 'translate(-50%, -50%) rotate(45deg)';
            hamburgerLi[1].style.transform = 'translate(100%, -50%)';
            hamburgerLi[1].style.opacity = 0;
            hamburgerLi[2].style.top = '50%';
            hamburgerLi[2].style.transform = 'translate(-50%, -50%) rotate(-45deg)';
        }
        isOpen = true;
    }else if(isOpen){
        menu.style.right =  ((window.innerWidth - nav.clientWidth) / 2 + 400) * -1 + 'px';
        menuBg.style.opacity = 0;
        menuWrap.style.pointerEvents = "none";
        for(let i = 0; i < hamburgerLi.length; i++){
            hamburgerLi[i].style.backgroundColor = '#000';
            hamburgerLi[0].style.top = 0;
            hamburgerLi[0].style.transform = 'translate(-50%, -50%) rotate(0)';
            hamburgerLi[1].style.transform = 'translate(-50%, -50%)';
            hamburgerLi[1].style.opacity = 1;
            hamburgerLi[2].style.top = '100%';
            hamburgerLi[2].style.transform = 'translate(-50%, -50%) rotate(0)';
        }
        isOpen = false;
    }
});



window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursorCir.style.left = x + 'px';
    cursorCir.style.top = y + 'px';
    menu.addEventListener('mouseenter', () => cursorCir.style.display = 'block');
    menu.addEventListener('mouseleave', () => cursorCir.style.display = 'none');
    
    for(let i = 0; i < menuLi.length; i++){
        menuLi[i].addEventListener('mouseenter', () => {
            cursorCir.style.width = '80px';
            cursorCir.style.height = '80px';
        })
        menuLi[i].addEventListener('mouseleave', () => {
            cursorCir.style.width = '50px';
            cursorCir.style.height = '50px';
        })
    }
});



function whatSection(i){
    if(i === 0){
        isMain = true;
        isAbout = false;
        isProducts = false;
        isCustom = false;
    } else if (i === 1){
        isMain = false;
        isAbout = true;
        isProducts = false;
        isCustom = false;
    } else if (i === 2){
        isMain = false;
        isAbout = false;
        isProducts = true;
        isCustom = false;
    } else {
        isMain = false;
        isAbout = false;
        isProducts = false;
        isCustom = true;
    }
}