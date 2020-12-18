const smallCups = document.querySelectorAll('.cup-small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('#percentage');
const remained = document.querySelector('#remained');

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;
  if(fullCups === 0){
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }
  if(fullCups === totalCups){
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}

updateBigCup()

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', ()=>highlightCups(idx));
})

const highlightCups = idx => {
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
    idx--;
  } 
  smallCups.forEach((cup,i)=>{
    if(i <= idx){
      smallCups[i].classList.add('full');
    } else {
      smallCups[i].classList.remove('full');
    };
  });
  updateBigCup();
};

