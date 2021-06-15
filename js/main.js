const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// search요소 영역만 눌러도 input요소 포커스된 효과가 나게끔 하는 이벤트핸들러
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

// input요소가 포커스 될 때 search요소의 클래스에 focused가 추가되고 
// input에는 HTML요소로 placeholder추가, 내용은 통합검색
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

// input요소 포커스가 풀릴 때 (blur) search요소의 클래스명 focused를 지우고
// placeholder는 빈내용으로 만듦
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션); 3가지 인수를 입력, 초 단위
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none' // 보이는 것 뿐만 아니라 실제로 사라져 클릭도 안 되게 만들어줌
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)
// 함수를 몇 밀리초에 한번 실행할지 결정, 숫자만 적음, 1000 = 1초

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0  // 화면의 위치를 0픽셀 자리로 옮겨줌. ScrollToPlugin을 가져와 사용할 수 있는 옵션
  })
});




const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 첫번째 요소는 0.7초, 두번째 요소는 1.4초, 세번째 요소는 2.1초, 마지막 요소는 2.7초 뒤에 나타나게 됨
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // directin: 'horizontal', Swiper()함수에는 이미 방향이 수평horizontal이 내재되어 있음
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000, //밀리세컨드 5000 = 5초
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector,         //선택자
    random(1.5, 2.5), //애니메이션 동작시간
    {                 //옵션
      y: size, // y축으로 얼마나 움직일지
      repeat: -1, // 무한반복
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 돌려줌
      ease: Power1.easeInOut, // easing함수 이용
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트의 제일 위가 0, 제일 아래가 1이라고 할 때,
      // 스크롤을 내리며 내가 감시하고 있는 요소가 뷰포트의 위에서 10분의8지점에 위치할 때 옵션 실행
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 연도를 도출