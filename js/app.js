'use strict';

let count = 0;
const value = document.querySelector('.container___count-value');
const btns = document.querySelectorAll('.container__btn');

btns.forEach((item) => {
  item.addEventListener('click', (event) => {
    const styles = event.currentTarget.classList;

    if (styles.contains('decrease')) {
    }
  });
});
