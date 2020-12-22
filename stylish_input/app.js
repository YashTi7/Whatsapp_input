const input = document.getElementById('input');

const search = document.getElementById('search');
const arrow = document.getElementById('arrow');

input.addEventListener('focus',()=>{
	search.style.transform = 'rotate(180deg)';
  search.style.opacity = '0';
  search.style.pointerEvents = 'none';
  arrow.style.opacity = '1';
  arrow.style.transform = 'rotate(-360deg)';
  arrow.style.pointerEvents = 'all';
})

input.addEventListener('blur',()=>{
	arrow.style.transform = 'rotate(180deg)';
  arrow.style.opacity = '0';
  arrow.style.pointerEvents = 'none';
  search.style.transform = 'rotate(-360deg)';
  search.style.opacity = '1';
  search.style.pointerEvents = 'all';
})
