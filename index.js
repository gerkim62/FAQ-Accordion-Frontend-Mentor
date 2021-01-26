const faq = document.querySelectorAll('.onefaq');
let faqLength = faq.length;
for (let i = 0; i < faqLength; i++) {
  faq[i].addEventListener('click', () => {
    let currentP = document.querySelector('.' + faq[i].classList[1] + ' p');
    let currentImg = document.querySelector('.in' + i);
    let currentH2 = document.querySelector('.' + faq[i].classList[1] + ' h2');
    
    if(currentP.style.display == 'block') {
      currentP.style.display = 'none';
      currentImg.style.transform = 'rotate(0deg)'
      currentH2.style.fontWeight = '400';
    }else{
      currentP.style.display = 'block'
      currentImg.style.transform = 'rotate(180deg)';
      currentH2.style.fontWeight = '700';
    }
  })
}
