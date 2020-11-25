const configureBtn = document.querySelectorAll('div.configure > ul > li');
const componentImg = document.querySelectorAll('div.com-icon > img');
const customColor = document.querySelectorAll('div.color > ul > li');
const customFrame = document.querySelector('div.custom-wrap > img.main-frame');

const svgSaddleFill = document.querySelectorAll('div.configure > ul > li .saddle-2');
const svgSaddleStroke = document.querySelector('div.configure > ul > li .saddle-1');
const svgHanddleFill = document.querySelector('div.configure > ul > li .handdle-1');
const svgWheelFill = document.querySelector('div.configure > ul > li .wheel-4');
const svgWheelStroke = document.querySelectorAll('div.configure > ul > li .wheelStroke');


for(let i = 0; i < customColor.length; i++){
    customColor[i].addEventListener('click', () => {
        customFrame.setAttribute('src', cusColorSrc[i]);
    })
}

for(let i = 0; i < configureBtn.length; i++){
    configureBtn[i].addEventListener('click', ()=>{

        /* component 버튼 이미지, 배경 컬러 변경*/
        for(let j = 0; j < componentImg.length; j++){
            componentImg[j].setAttribute('src', componentBtns[i][j]);
            configureBtn[j].style.backgroundColor = '#f6f3fb';
        }
        /* component 버튼 비활성화 상태 배경 컬러 */
        configureBtn[i].style.backgroundColor = '#ffb700';


        /* configure 버튼 비활성화 상태 svg 컬러*/
        for(let j = 0; j < svgSaddleFill.length; j++){
            svgSaddleFill[j].style.fill = 'rgb(182, 182, 182)';
            svgSaddleStroke.style.stroke = 'rgb(182, 182, 182)';
        }
        svgHanddleFill.style.fill = 'rgb(182, 182, 182)';
        for(let j = 0; j < svgWheelStroke.length; j++){
            svgWheelStroke[j].style.stroke = 'rgb(182, 182, 182)';   
            svgWheelFill.style.fill = 'rgb(182, 182, 182)';   
        }

        /* configure 버튼 활성화 상태 svg 컬러*/
        if(i === 0) {
            for(let j = 0; j < svgSaddleFill.length; j++){
                svgSaddleFill[j].style.fill = '#fff';
                svgSaddleStroke.style.stroke = '#fff';
            }
        }
        else if(i === 1) {
            svgHanddleFill.style.fill = '#fff';
        } 

        else if(i === 2) {
            for(let j = 0; j < svgWheelStroke.length; j++){
                svgWheelStroke[j].style.stroke = '#fff';   
                svgWheelFill.style.fill = '#fff';   
            }
        } 

            
    })
}
