export function specificStackFunctionality() {
  document
    .querySelectorAll('.js-long-stack-description')
    .forEach((el, index) => {
      const text = el.innerHTML.split('');
      if (text.length > 500) {
        const shortText = text.slice(0, 400 - 1);
        el.innerHTML =
          shortText.join('') +
          '...' +
          `<button class="js-see-all-stack-description des-btn-${index} cut">see all</button>`;
        function hideDescription() {
          document
            .querySelector(`.des-btn-${index}`)
            .addEventListener('click', () => {
              el.innerHTML =
                text.join('') +
                `<button class="js-see-all-stack-description hide-des-btn-${index}">hide</button>`;
              document
                .querySelector(`.hide-des-btn-${index}`)
                .addEventListener('click', () => {
                  const shortText = text.slice(0, 399);
                  el.innerHTML =
                    shortText.join('') +
                    '...' +
                    `<button class="js-see-all-stack-description des-btn-${index} cut">see all</button>`;
                  hideDescription();
                });
            });
        }

        hideDescription();
      }
    });

  document
    .querySelector('.js-add-a-new-language')
    .addEventListener('click', () => {
      document
        .querySelector('.js-add-lang-pop-up')
        .classList.remove('off-pop-up');
      document
        .querySelector('.js-close-lang-pop-up')
        .addEventListener('click', (e) => {
          e.preventDefault();
          document
            .querySelector('.js-add-lang-pop-up')
            .classList.add('off-pop-up');
        });
    });
}
