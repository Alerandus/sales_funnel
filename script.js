const swiper = new Swiper('.swiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      slidesPerGroup: 1,
      centeredSlides: true,
      initialSlide: 1,
});

document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
      item.addEventListener('click' , () => {
            const parent = item.parentNode;

            if (parent.classList.contains('accordion-item--active')) {
                  parent.classList.remove('accordion-item--active');
            } else {
                  document
                        .querySelectorAll('.accordion-item')
                        .forEach((child) => child.classList.remove('accordion-item--active'))

                  parent.classList.add('accordion-item--active');
            }
      
      })
)