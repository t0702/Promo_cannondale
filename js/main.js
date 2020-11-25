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
            for(j = 0; j < componentBtn.length; j++){
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
            if( i === 3){
                setTimeout(()=>{
                    componentBtn[i].style.top = '200px';
                },300);
                componentBtn[i].style.left = '58%';
                cycleImg.style.transform = 'translate(-20%, -70%) scale(1.9)';
                cycleImg.style.transition = '1s';
            }
        }
        else if(isActive){
            isActive = false;
            for(let j = 0; j < componentBtn.length; j++){
                componentBtn[0].style.left = '120px';
                componentBtn[3].style.left = '48%';
                componentBtn[3].style.top = '280px';
            }
            cycleImg.style.transform = 'translate(-50%,-50%) scale(1)';
            cycleImg.style.transition = '.5s';
        }
    })
}