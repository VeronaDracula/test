const optionsLink = document.querySelectorAll('.options__list-link')


optionsLink.forEach((element) => {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = element.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
});



document.addEventListener('click', (evt) => {
    let target = evt.target;

    if (target.classList.contains('card__hide-cover')) {
        const card = target.closest('.card');
        const openBlock = target.closest('.card').querySelector('.card__box');
        const icon = target.closest('.card').querySelector('.card__hide-icon');

        card.classList.toggle("active");
        icon.classList.toggle('active');

        if (card.classList.contains("active")) {
            openBlock.style.height = `${openBlock.scrollHeight + 20}px`;
          } else {
            openBlock.style.height = "0";
          }
    }
})







