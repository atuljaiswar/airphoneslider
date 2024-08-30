const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const seeAll = document.querySelector('.back');
const arrows = document.querySelector('.arrows');
const sliderParent = document.querySelector('.sliders');
const seeMoreList = document.querySelectorAll('.see-more');

seeMoreList.forEach((item) => {
  item.addEventListener('click', () => {
    sliderParent.classList.add('showDetails');
  });
});

next.addEventListener('click', () => {
  showSlider('next');
});

prev.addEventListener('click', () => {
  showSlider('prev');
});

const showSlider = (direction) => {
  sliderParent.classList.remove('next1', 'prev1');
  if (direction === 'next') {
    console.log('HITTED', direction);
    sliderParent.appendChild(sliderParent.children[0]);
    sliderParent.classList.add('next1');
  } else {
    sliderParent.prepend(
      sliderParent.children[sliderParent.children?.length - 1]
    );
    sliderParent.classList.add('prev1');
  }
};

seeAll.addEventListener('click', () => {
  sliderParent.classList.remove('showDetails');
  arrows.classList.remove('direction');
});
