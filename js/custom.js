const configureBtns = document.querySelectorAll('div.configure > ul > li');
let componentBtns = document.querySelectorAll('div.component > ul > li');
componentBtns = Array.prototype.slice.call(componentBtns);

const componentImg = document.querySelectorAll('div.com-icon > img');
const customColor = document.querySelectorAll('div.color > ul > li');
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

let colorIdx = 0;
let saddleIdx = 0;
let handdleIdx = 0;
let wheelIdx = 0;

/* 컬러 버튼 클릭 이벤트 */
for(let i = 0; i < customColor.length; i++){
    customColor[i].addEventListener('click', () => {
        customFrame.setAttribute('src', cusColorSrc[i]);
        colorIdx = i;
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
        if( configureBtns[0].classList.contains('confi-active')){
            for(let k = 0; k < saddleTypeImg.length; k++){
                saddleTypeImg[k].style.visibility = 'hidden';
                saddleTypeImg[k].style.opacity = 0;
                saddleTypeImg[k].style.transition = '.3s ease';
                saddleTypeImg[k].style.transform = 'translate(-7px, -25px)';
                saddleTypeImg[z].classList.remove('view');
            }
            saddleTypeImg[z].style.visibility = 'visible';
            saddleTypeImg[z].style.opacity = 1;
            saddleTypeImg[z].style.transform = 'translate(0)';
            saddleTypeImg[z].style.transitionDelay = '.3s';
            saddleTypeImg[z].classList.add('view');

            saddleIdx = z;
        }
        
        // Handdle Change
        if( configureBtns[1].classList.contains('confi-active')){
            for(let k = 0; k < handdleTypeImg.length; k++){
                handdleTypeImg[k].style.visibility = 'hidden';
                handdleTypeImg[k].style.opacity = 0;
                handdleTypeImg[k].style.transition = '.3s ease';
                handdleTypeImg[k].style.transform = 'translate(-7px, -25px)';
                handdleTypeImg[z].classList.remove('view');
            }
            handdleTypeImg[z].style.visibility = 'visible';
            handdleTypeImg[z].style.opacity = 1;
            handdleTypeImg[z].style.transform = 'translate(0)';
            handdleTypeImg[z].style.transitionDelay = '.3s';
            handdleTypeImg[z].classList.add('view');

            handdleIdx = z;
        }

        // Wheel Change
        if(configureBtns[2].classList.contains('confi-active')){
            for( let k = 0; k < wheelTypeImg.length; k++){
                wheelTypeImg[k].style.visibility = 'hidden';
                wheelTypeImg[k].style.opacity = 0;
                wheelTypeImg[k].style.transition = '.3s ease';
                wheelTypeImg[k].classList.remove('view');

                if(k % 2 === 0) wheelTypeImg[k].style.transform = 'translateX(-60px) rotate(-45deg)';  
                if(k % 2 !== 0) wheelTypeImg[k].style.transform = 'translateX(60px) rotate(45deg)';
            }
            // left wheel
            wheelTypeImg[z * 2].style.visibility = 'visible';
            wheelTypeImg[z * 2].style.opacity = 1;
            wheelTypeImg[z * 2].style.transform = 'translate(0) rotate(0deg)';
            wheelTypeImg[z * 2].style.transitionDelay = '.3s';
            wheelTypeImg[z * 2].classList.add('view');

            // right wheel
            wheelTypeImg[z * 2 + 1].style.visibility = 'visible';
            wheelTypeImg[z * 2 + 1].style.opacity = 1;
            wheelTypeImg[z * 2 + 1].style.transform = 'translate(0) rotate(0deg)';
            wheelTypeImg[z * 2 + 1].style.transitionDelay = '.3s';
            wheelTypeImg[z * 2 + 1].classList.add('view');

            wheelIdx = z;
        }
        
    })
}






const saveListWrap = document.querySelector('div.save-list-wrap > ul');
let saveListCard = document.querySelectorAll('div.save-list-wrap > ul > li');
let id = 0;
let deleteBox = document.querySelectorAll('.delete-box');

savePopSave.addEventListener('click', () => {
    savePopClose();
    id++;
    let saveNameValue = saveInput.value;

    saveListWrap.innerHTML += 
    `<li>
        <div class="save-box"> 
            <p class="save-name">${saveNameValue}</p>
            <div class="check"> <i class="fas fa-check"></i> </div>
            <div class="custom-thumb">
                <img class="save-frame" src="${cusColorSrc[colorIdx]}" alt="">
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

    // input value 값 초기화
    saveInput.value = '';
    deleteBox = document.querySelectorAll('.delete-box');

    // saveListCard = document.querySelectorAll('div.save-list-wrap > ul > li');
    console.log(deleteBox.length);
    let target;
    for(let i = 0; i < deleteBox.length; i++){
        deleteBox[i].addEventListener('click', (e)=>{
            deleteBox = Array.prototype.slice.call(deleteBox);
            // deleteBox = document.querySelectorAll('.delete-box');
            target = e.currentTarget; 
            let targetIdx = deleteBox.indexOf(target);
            console.log('aaa');
            console.log(targetIdx);
            // console.log(deleteBox.length);
            console.log(saveListWrap.childNodes);
            saveListWrap.removeChild(saveListWrap.childNodes[targetIdx]);
            deleteBox = document.querySelectorAll('.delete-box');
            console.log(i);
        })
    }
})





/* save 버튼 클릭 시 팝업 등장 */
saveBtn.addEventListener('click',savePopAppear);
/* cancle 버튼 클릭시 팝업창 닫기 */
savePopCancle.addEventListener('click', savePopClose);

/* save 팝업창 열기 함수 */
function savePopAppear(){
    console.log('save');
    savePopWrap.style.visibility = 'visible';
    savePopWrap.style.opacity = 1;
    savePopBg.style.visibility = 'visible';
    savePopBg.style.opacity = 1;
    savePopup.style.transform = 'translateY(0)';
    saveInput.focus();
}
/* save 팝업창 닫기 함수 */
function savePopClose(){
    savePopWrap.style.visibility = 'hidden';
    savePopWrap.style.opacity = 0;
    savePopBg.style.visibility = 'hidden';
    savePopBg.style.opacity = 0;
    savePopup.style.transform = 'translateY(50vh)';
}