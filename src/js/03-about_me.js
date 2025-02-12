document.addEventListener('DOMContentLoaded', function () {
  const aboutItems = document.querySelectorAll('.accordion-item');

  aboutItems.forEach((item, index) => {
    const aboutmeHeader = item.querySelector('.accordion-header');
    const aboutmeIcon = item.querySelector('.abme');
    const aboutmeContent = item.querySelector('.accordion-content');

    if (index === 0) {
      aboutmeContent.style.maxHeight = aboutmeContent.scrollHeight + "px";
      aboutmeContent.style.opacity = "1";
      aboutmeIcon.style.transform = 'rotate(180deg)';
      aboutmeHeader.classList.add('active');
    } else {
      aboutmeContent.style.maxHeight = "0px";
      aboutmeContent.style.opacity = "0";
      aboutmeIcon.style.transform = 'rotate(0deg)';
    }

    aboutmeHeader.addEventListener('click', function () {
      if (aboutmeContent.style.maxHeight === "0px" || !aboutmeContent.style.maxHeight) {
        aboutmeContent.style.maxHeight = aboutmeContent.scrollHeight + "px";
        aboutmeContent.style.opacity = "1";
        aboutmeIcon.style.transform = 'rotate(180deg)';
      } else {
        aboutmeContent.style.maxHeight = "0px";
        aboutmeContent.style.opacity = "0";
        aboutmeIcon.style.transform = 'rotate(0deg)';
      }

      aboutmeHeader.classList.toggle('active');
    });
  });
});


//
//swiper
document.addEventListener('DOMContentLoaded', () => {
  const skillsSwiper = new Swiper('.swiper-skills', {
    grabCursor: true,

    slidesPerView: 2,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    speed: 400,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    simulateTouch: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 6,
        slidesPerGroup: 1,
      },
    },
  });
  const skillsSliderButton = document.querySelector('.slider-button-abtme');
  if (skillsSliderButton) {
    skillsSliderButton.addEventListener('click', () => {
      skillsSwiper.slideNext(); // Завжди переміщує слайдер вперед
    });
  }
});
