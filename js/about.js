const sectionAbout = document.querySelector('section.about');
const horizonWrap = document.querySelector('div.horizon-wrap');
const scrollBar = document.querySelector('div.scroll-bar');
const videoWrap = document.querySelector('div.video-wrap');
const aboutImgs = document.querySelectorAll('div.horizon-wrap img');
const aboutP = document.querySelectorAll('div.horizon-wrap p');
const aboutH3 = document.querySelector('div.horizon-wrap h3');
const bigTypo = document.querySelector('section.about > h2');

const aboutCursor = document.querySelector('div.about-cursor');
const aboutCurCir = document.querySelector('div.about-circle');
const aboutCurLeft = document.querySelector('div.left-arrow');
const aboutCurRight = document.querySelector('div.right-arrow');

let secGet;
let horGet;
let v;
let translateX;
let isScroll = false;
let isAbout = false;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
/* Horizon Scroll */
window.addEventListener('scroll', () => {
  if(!isAbout) return;
  console.log('마우스 스크롤 중....');
  horGet = horizonWrap.getBoundingClientRect(); // 섹션의 바운딩 정보
  secGet = sectionAbout.getBoundingClientRect(); // 호리즌랩의 바운딩 정보
  v = window.scrollY; // 현재 이동되는 스크롤Y값을 받아오고

  // console.log(pageYOffset);

  //   console.log(secGet); // 섹션의 바운딩 정보 체크
  //   console.log(horGet); // 호리즌랩의 바운딩 정보 체크

  // 개발자 도구로 조작해서 보면 호리즌랩이 가로로 다 이동됐을 때의 translateX는 여러 뷰포트에서 봤을 때 항상 secGet.height - secGet.width의 수치가 나왔어

  //   console.log(secGet.height - secGet.width); // 위 주석에서 했던 것을 체크

  //   console.log(v); // 스크롤을 내렸을 때의 값을 확인하고 이것을 스크롤이 안됐을 때는 0 스크롤이 끝까지 갔을 때 1을 받아와야해

  //   console.log(secGet.height - horGet.height); // 그래서 스크롤이 끝까지 다다랐을때의 값은 secGet.height - horGet.height와 같았어

  // secGet.height - horGet.height은 항상 고정된 값이고
  // v는 유동적인 값이므로

  // console.log(v / (secGet.height - horGet.height)); // 해당 식으로 써주면 0 ~ 1까지 이동하는 것을 볼 수 있어

  // 최종적으로 호리즌랩이 가로로 다 이동됐을 때의 translateX값 == secGet.height - secGet.width
  // secGet.height - secGet.width를 0 ~ secGet.height - secGet.width까지 나오게 하려면 여기에
  // v / (horGet.height - secGet.height)을 곱하면 되니깐
  // 아래의 식으로 쓸 수 있어

  //   console.log('v', v);
  translateX = (secGet.height - secGet.width) * ((v / (secGet.height - horGet.height)) * -1);

  horizonWrap.style.left = `${translateX}px`;
  horizonWrap.style.transition = '.1s';

  scrollBar.style.width = (v / (secGet.height - horGet.height)) * 100 + '%';
  scrollBar.style.transition = '.1s';

  console.log('translateX : ', translateX);

  if(isScroll === false){
      bigTypo.style.left = `calc(63% + ${translateX / 5}px)`;
      bigTypo.style.transition = '.1s';
      movingStart();
      isScroll = true;
  }else if(isScroll === true){
      setTimeout(() => {
        movingEnd();
    }, 150);
    isScroll = false;
  }

});

// initial setting
horizonWrap.style.left = 0;

/* Drag Scroll */
let startX;
let scrollLeft;
let isDown = false;

if(!isAbout) aboutCursor.style.display = 'none';

window.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.clientX;

  horizonLeft = parseInt(horizonWrap.style.left);

  aboutCurCir.style.width = '30px';
  aboutCurCir.style.height = '30px';
  aboutCurLeft.style.opacity = 1;
  aboutCurLeft.style.visibility = 'visible';
  aboutCurRight.style.opacity = 1;
  aboutCurRight.style.visibility = 'visible';
  movingStart();
});
window.addEventListener('mouseup', (e) => {
  isDown = false;
  aboutCurCir.style.width = '40px';
  aboutCurCir.style.height = '40px';
  aboutCurLeft.style.opacity = 0;
  aboutCurLeft.style.visibility = 'hidden';
  aboutCurRight.style.opacity = 0;
  aboutCurRight.style.visibility = 'hidden';
  movingEnd();
});
window.addEventListener('mousemove', (e) => {
  const cursorX = e.clientX;
  const cursorY = e.clientY;

  if(!isAbout) return;
  aboutCursor.style.display = 'block';
  aboutCursor.style.top = cursorY + 'px';
  aboutCursor.style.left = cursorX + 'px';

  if(!isDown) return;
  // console.log('마우스 드래그 중....');
  //   console.log('translateX : ', translateX);
  horGet = horizonWrap.getBoundingClientRect(); // 섹션의 바운딩 정보
  secGet = sectionAbout.getBoundingClientRect(); // 호리즌랩의 바운딩 정보
  const x = e.clientX;
  const walk = x - startX;
  const secMoveArea = secGet.height - secGet.width;

  if (horizonLeft + walk <= 0 && horizonLeft + walk >= secMoveArea * -1) {
    console.log(horizonLeft + walk);
    horizonWrap.style.left = horizonLeft + walk + 'px';

    v = (secGet.height - horGet.height) * (parseInt(horizonWrap.style.left) / (horGet.width - secGet.width)) * -1;

    window.scrollTo(0, v);
  }
});

/* Moving Animation */
function movingStart() {
  videoWrap.style.transform = 'scale(.95)';
  videoWrap.style.transition = '.5s ease';
  aboutH3.style.transform = 'scale(.95)';
  aboutH3.style.transition = '.5s ease';
  bigTypo.style.color = '#000';
  bigTypo.style.transition = 'color .3s';
  for (let i = 0; i < aboutImgs.length; i++) {
    aboutImgs[i].style.transform = 'scale(.95)';
    aboutImgs[i].style.transition = '.5s ease';
    aboutP[i].style.transform = 'scale(.95)';
    aboutP[i].style.transition = '.5s ease';
  }
}

function movingEnd() {
  videoWrap.style.transform = 'scale(1)';
  aboutH3.style.transform = 'scale(1)';
  bigTypo.style.color = 'transparent';
  bigTypo.style.transition = 'color .3s';
  for (let i = 0; i < aboutImgs.length; i++) {
    aboutImgs[i].style.transform = 'scale(1)';
    aboutP[i].style.transform = 'scale(1)';
  }
}



// window.addEventListener('mousemove', (e) => {
//   const x = e.clientX;
//   const y = e.clientY;
//   if(isAbout){
//     aboutCursor.style.display = 'block';
//     aboutCursor.style.top = y + 'px';
//     aboutCursor.style.left = x + 'px';

//     if(isDown){
//       aboutCurCir.style.width = '30px';
//       aboutCurCir.style.height = '30px';
//     } else {
//       aboutCurCir.style.width = '40px';
//       aboutCurCir.style.height = '40px';
//     }
//   }
// })