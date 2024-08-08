const filtersCategory = document.querySelectorAll('.filter__label');

filtersCategory.forEach((category) => {
  category.addEventListener('click', () => {
    const parentNode = category.parentNode;
    const filterContent = parentNode.querySelector('.filter__content');
    const arrowImg = category.querySelector('.filter__label-img');
    filterContent.classList.toggle('filter__content--open');
    arrowImg.classList.toggle('filter__label-img--active');
    if (filterContent.classList.contains('filter__content--open')) {
      filterContent.style.maxHeight = filterContent.scrollHeight + 'px';
    } else {
      filterContent.style.maxHeight = 0;
    }
  });
});

const likeBtns = document.querySelectorAll('.buttons__like-btn');
likeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const heartIcon = btn.querySelector('.heart-icon');
    btn.classList.toggle('buttons__like-btn--active');
    heartIcon.classList.toggle('heart-icon--active');
  });
});
