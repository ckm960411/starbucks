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



// footer에 현재 연도를 입력해주는 JS코드
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 올해 연도를 도출