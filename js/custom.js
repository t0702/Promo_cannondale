'use strict';

const configureBtns = document.querySelectorAll('div.configure > ul > li');
let componentBtns = document.querySelectorAll('div.component > ul > li');
componentBtns = Array.prototype.slice.call(componentBtns);

const componentImg = document.querySelectorAll('div.com-icon > img');
const customColor = document.querySelectorAll('div.color > ul > li');
const customColorclick = document.querySelectorAll('div.color > ul > li > div.click');
const customColorclick2 = document.querySelectorAll('div.color > ul > li > div.click2');
const customFrame = document.querySelector('div.custom-wrap > img.main-frame');

const saddleTypeImg = document.querySelectorAll('img.custom-saddle');
const handdleTypeImg = document.querySelectorAll('img.custom-handdle');
const wheelTypeImg = document.querySelectorAll('img.custom-wheel');

const svgSaddleFill = document.querySelectorAll('div.configure > ul > li .saddle-2');
const svgSaddleStroke = document.querySelector('div.configure > ul > li .saddle-1');
const svgHanddleFill = document.querySelector('div.configure > ul > li .handdle-1');
const svgWheelFill = document.querySelector('div.configure > ul > li .wheel-4');
const svgWheelStroke = document.querySelectorAll('div.configure > ul > li .wheelStroke');

const compoName = document.querySelector('div.component > h3');
const compoNames = ['Saddle', 'Handdle', 'Wheels'];

const saveBtn = document.querySelector('div.save-btn');
const savePopWrap = document.querySelector('div.save-pop-wrap');
const savePopBg = document.querySelector('div.save-pop-bg');
const savePopup = document.querySelector('div.save-pop');
const savePopCancle = document.querySelector('div.pop-cancle-btn');
const savePopSave = document.querySelector('div.pop-save-btn');
const saveInput = document.querySelector('input.save-input');
const saveListName = document.querySelector('p.save-name');
const saveCheck = document.querySelector('div.check');

const nullCustom = document.querySelector('div.null-custom');
const warningMessage = document.querySelector('div.save-pop > p:nth-child(3)');
const saveListWrap = document.querySelector('div.save-list-wrap > ul');
const customAppear = document.getElementsByClassName('custom-appear');

const fullError = document.querySelector('div.full-error');

let saveListCard = document.querySelectorAll('div.save-list-wrap > ul > li');
let saveBoxChk;
let saveBox;
let deleteBox;
let saveFrame;
let saveSaddle;
let saveHanddle;
let saveWheel;
let id = 0;

let colorIdx = 0;
let saddleIdx = 0;
let handdleIdx = 0;
let wheelIdx = 0;

/* 컬러 버튼 클릭 이벤트 */
for(let i = 0; i < customColor.length; i++){
    customColor[i].addEventListener('click', () => {
        customFrame.setAttribute('src', cusColorSrc[i]);
        colorIdx = i;
        for(let j = 0; j < customColor.length; j++){
            customColor[j].style.border = 'none';
        }
        customColor[i].style.border = '5px solid #000';
        customColorclick[i].classList.add('select');
        customColorclick2[i].classList.add('select2');
        setTimeout(() => {
            customColorclick[i].classList.remove('select');
            customColorclick2[i].classList.remove('select2');
        }, 500)
    })
}

for(let i = 0; i < configureBtns.length; i++){

    /* configure 버튼 클릭 이벤트 */
    configureBtns[i].addEventListener('click', ()=>{
        for(let j = 0; j < componentImg.length; j++){
            configureBtns[j].classList.remove('confi-active');
            componentImg[j].setAttribute('src', componentBtnArray[i][j]);
            componentBtns[j].classList.remove('compo-active');
        }
        configureBtns[i].classList.add('confi-active');
        compoName.innerHTML = compoNames[i];

        if(i === 0) componentBtns[saddleIdx].classList.add('compo-active');
        if(i === 1) componentBtns[handdleIdx].classList.add('compo-active');
        if(i === 2) componentBtns[wheelIdx].classList.add('compo-active');
        console.log('saddleIdx', saddleIdx);
        console.log('handdleIdx', handdleIdx);
        console.log('wheelIdx', wheelIdx);
    })
}

for(let z = 0; z < componentBtns.length; z++){

    /* component 버튼 클릭 이벤트 */
    componentBtns[z].addEventListener('click', () => {

        for(let j = 0; j < componentBtns.length; j++){
            componentBtns[j].classList.remove('compo-active');
        }
        componentBtns[z].classList.add('compo-active');

        // Saddle Change
        if( configureBtns[0].classList.contains('confi-active')) saddleChange(z);
        
        // Handdle Change
        if( configureBtns[1].classList.contains('confi-active')) handdleChange(z);

        // Wheel Change
        if(configureBtns[2].classList.contains('confi-active')) wheelChange(z);        
    })
}


savePopSave.addEventListener('click', () => saveInput.value === '' ? saveWarning() : save());

function save(){
    if(saveListWrap.childNodes.length < 5){
        savePopClose();
    
        let saveNameValue = saveInput.value;
        let target;
        
        nullCustom.style.display = 'none';
        nullCustom.style.visibility = 'visible';
        nullCustom.style.opacity = 0;
    
        // 커스텀 리스트 추가
        saveListWrap.innerHTML += 
        `<li class="custom-appear">
            <div class="save-box"> 
                <p class="save-name">${saveNameValue}</p>
                <div class="border-box"></div>
                <div class="check-view"> <i class="fas fa-check"></i> </div>
                <div class="custom-thumb">
                    <img class="save-frame" src="${cusColorSrc[colorIdx]}" alt="">
                    <img class="save-saddle" src="${saddleTypeSrc[saddleIdx]}" alt="">
                    <img class="save-handdle type1 ${id}" src="./assets/handdle1.png" alt="">
                    <img class="save-handdle type2 ${id}" src="./assets/handdle2.png" alt="">
                    <img class="save-handdle type3 ${id}" src="./assets/handdle3.png" alt=""> 
                    <img class="save-wheel" src="${wheelTypeSrc[wheelIdx]}" alt="">
                </div>
            </div>
            <div class="delete-box">
                <i class="fas fa-trash"></i>
            </div>
        </li>`;
    
        // 핸들 제어
        const handdleGroup = document.getElementsByClassName(`save-handdle ${id}`);
        for(let i = 0; i < handdleGroup.length; i++){
            handdleGroup[i].style.display = 'none';
        }
        handdleGroup[handdleIdx].style.display = 'block';
    
        // 커스텀 삭제
        deleteBox = document.querySelectorAll('.delete-box');
        console.log(deleteBox.length);
        for(let i = 0; i < deleteBox.length; i++){
            deleteBox[i].addEventListener('click', (e) => {
                deleteBox = Array.prototype.slice.call(deleteBox);
                target = e.currentTarget; 
                let targetIdx = deleteBox.indexOf(target);
                // console.log(targetIdx);

                // deleteBox[targetIdx].style.width = '100%';
                // saveListWrap.childNodes[targetIdx].style.width = 0;
                // saveListWrap.childNodes[targetIdx].style.opacity = 0;
                // saveListWrap.childNodes[targetIdx].style.borderLeft = 0;
                // saveListWrap.childNodes[targetIdx].style.borderRight = 0;

                saveListWrap.removeChild(saveListWrap.childNodes[targetIdx]);
                deleteBox = document.querySelectorAll('.delete-box');
                id--;

                if(saveListWrap.childNodes.length === 0){
                    nullCustom.style.display = 'flex';
                    nullCustom.style.visibility = 'visible';
                    setTimeout(()=>{
                        nullCustom.style.opacity = 1;
                    },300);
                }
            })
        }
    
        // saveBox 체크
        // saveBox = document.querySelectorAll('.save-box');
        saveBox = document.querySelectorAll('.save-box');
        saveBoxChk = document.querySelectorAll('.save-box > div.check-view');
        saveFrame = document.querySelectorAll('img.save-frame');
        saveSaddle = document.querySelectorAll('img.save-saddle');
        saveHanddle = document.querySelectorAll('img.save-handdle');
        saveWheel = document.querySelectorAll('img.save-wheel');
        for(let i = 0; i < saveBox.length; i++){
            saveBox[i].addEventListener('click', () => {
                for(let j = 0; j < saveBox.length; j++){
                    saveBoxChk[j].style.backgroundColor = '#999';
                    saveBoxChk[j].style.color = '#fff';
                }
                saveBoxChk[i].style.backgroundColor = '#ffb700';
                console.log('Box',saveBox[i]);
                console.log('Frame',saveFrame[i]);
                console.log('Saddle',saveSaddle[i]);
                console.log('Wheel',saveWheel[i]);
    
                const saveFrameIdx = cusColorSrc.indexOf(saveFrame[i].getAttribute('src'));
                const saveSaddleIdx = saddleTypeSrc.indexOf(saveSaddle[i].getAttribute('src'));
                const saveWheelIdx = wheelTypeSrc.indexOf(saveWheel[i].getAttribute('src'));
                const saveHanddleIdx = handdleTypeSrc.indexOf(saveHanddle[i].getAttribute('src'));
    
                console.log(saveHanddleIdx);
                // Frame Change
                customFrame.setAttribute('src', cusColorSrc[saveFrameIdx]);
                colorIdx = saveFrameIdx;
                
                // Wheel Change
                wheelChange(saveWheelIdx);
    
                // Handdle CHange
                handdleChange(saveHanddleIdx);
    
                // Saddle Change
                saddleChange(saveSaddleIdx);
    
                // Custom Option Select View
                for(let z = 0; z < configureBtns.length; z++){
                    componentBtns[z].classList.remove('compo-active');
                    if(configureBtns[0].classList.contains('confi-active')) componentBtns[saddleIdx].classList.add('compo-active');
                    if(configureBtns[1].classList.contains('confi-active')) componentBtns[handdleIdx].classList.add('compo-active');
                    if(configureBtns[2].classList.contains('confi-active')) componentBtns[wheelIdx].classList.add('compo-active');
                }
            })
        }
    
        // 커스텀 리스트 생성될 때 애니메이션
        customAppear[id].style.transform = 'translateX(50px)';
        customAppear[id].style.opacity = 0;
        setTimeout(() =>{
            customAppear[id].style.transform = 'translateX(0px)';
            customAppear[id].style.opacity = 1;
            id++;
        }, 100);
    
        // input value 값 초기화
        saveInput.value = '';

    }
}

/* Handdle Change Method */
function handdleChange(targetIdx){
    for(let k = 0; k < handdleTypeImg.length; k++){
        handdleTypeImg[k].style.visibility = 'hidden';
        handdleTypeImg[k].style.opacity = 0;
        handdleTypeImg[k].style.transition = '.3s ease';
        handdleTypeImg[k].style.transform = 'translate(-7px, -25px)';
        handdleTypeImg[targetIdx].classList.remove('view');
    }
    handdleTypeImg[targetIdx].style.visibility = 'visible';
    handdleTypeImg[targetIdx].style.opacity = 1;
    handdleTypeImg[targetIdx].style.transform = 'translate(0)';
    handdleTypeImg[targetIdx].style.transitionDelay = '.3s';
    handdleTypeImg[targetIdx].classList.add('view');

    handdleIdx = targetIdx;
}


/* Saddle Change Method*/
function saddleChange(targetIdx){
    for(let k = 0; k < saddleTypeImg.length; k++){
        saddleTypeImg[k].style.visibility = 'hidden';
        saddleTypeImg[k].style.opacity = 0;
        saddleTypeImg[k].style.transition = '.3s ease';
        saddleTypeImg[k].style.transform = 'translate(-7px, -25px)';
        saddleTypeImg[targetIdx].classList.remove('view');
    }
    saddleTypeImg[targetIdx].style.visibility = 'visible';
    saddleTypeImg[targetIdx].style.opacity = 1;
    saddleTypeImg[targetIdx].style.transform = 'translate(0)';
    saddleTypeImg[targetIdx].style.transitionDelay = '.3s';
    saddleTypeImg[targetIdx].classList.add('view');

    saddleIdx = targetIdx;
}

/* Wheel Change Method */
function wheelChange(targetIdx){
    for( let k = 0; k < wheelTypeImg.length; k++){
        wheelTypeImg[k].style.visibility = 'hidden';
        wheelTypeImg[k].style.opacity = 0;
        wheelTypeImg[k].style.transition = '.3s ease';

        if(k % 2 === 0) wheelTypeImg[k].style.transform = 'translateX(-60px) rotate(-45deg)';  
        if(k % 2 !== 0) wheelTypeImg[k].style.transform = 'translateX(60px) rotate(45deg)';
    }
    // left wheel
    wheelTypeImg[targetIdx * 2].style.visibility = 'visible';
    wheelTypeImg[targetIdx * 2].style.opacity = 1;
    wheelTypeImg[targetIdx * 2].style.transform = 'translate(0) rotate(0deg)';
    wheelTypeImg[targetIdx * 2].style.transitionDelay = '.3s';

    // right wheel
    wheelTypeImg[targetIdx * 2 + 1].style.visibility = 'visible';
    wheelTypeImg[targetIdx * 2 + 1].style.opacity = 1;
    wheelTypeImg[targetIdx * 2 + 1].style.transform = 'translate(0) rotate(0deg)';
    wheelTypeImg[targetIdx * 2 + 1].style.transitionDelay = '.3s';

    wheelIdx = targetIdx;
}

/* save 버튼 클릭 시 팝업 등장 */
saveBtn.addEventListener('click',savePopAppear);
/* cancle 버튼 클릭시 팝업창 닫기 */
savePopCancle.addEventListener('click', savePopClose);

 /* input focus 상태일때*/
function onKeyDown(){
    if(event.keyCode == 13) saveInput.value === '' ? saveWarning() : save();
    if(event.keyCode == 27) savePopClose();
}

/* Pop-up Warning Message Method */
function saveWarning(){
    warningMessage.style.visibility = 'visible';
    warningMessage.style.opacity = 1;
    saveInput.style.transition = '.2s';
    setTimeout(() => {
        warningMessage.style.opacity = 0;
        setTimeout(()=>{
            warningMessage.style.opacity = 1;
        },100)
    }, 100);
}

/* save 팝업창 열기 */
function savePopAppear(){
    if(saveListWrap.childNodes.length < 5){
        console.log('save');
        savePopWrap.style.visibility = 'visible';
        savePopWrap.style.opacity = 1;
        savePopBg.style.visibility = 'visible';
        savePopBg.style.opacity = 1;
        savePopup.style.transform = 'translateY(0)';
        setTimeout(() => {
            saveInput.focus();
        }, 100);
    } else { // 커스텀 리스트가 가득 찼을 때.
        fullError.style.visibility = 'visible';
        fullError.style.opacity = 1;
        fullError.style.transition = '.3s';
        setTimeout(() => {
            fullError.style.visibility = 'hidden';
            fullError.style.opacity = 0;
            fullError.style.transition = '.5s';
        }, 400);
    }
}

/* save 팝업창 닫기 */
function savePopClose(){
    savePopWrap.style.visibility = 'hidden';
    savePopWrap.style.opacity = 0;
    savePopBg.style.visibility = 'hidden';
    savePopBg.style.opacity = 0;
    savePopup.style.transform = 'translateY(50vh)';
    warningMessage.style.visibility = 'hidden';
    warningMessage.style.opacity = 0;
}
