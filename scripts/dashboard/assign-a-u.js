export function AsignUA() {
  document.querySelector('.js-assign-a-u').addEventListener('click', () => {
    document
      .querySelector('.js-assign-a-u-pop-up')
      .classList.remove('off-pop-up');

    document
      .querySelector('.js-close-student-assign-u-a')
      .addEventListener('click', (e) => {
        e.preventDefault();
        document
          .querySelector('.js-assign-a-u-pop-up')
          .classList.add('off-pop-up');
      });
  });
}
