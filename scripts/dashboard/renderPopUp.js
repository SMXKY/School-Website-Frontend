export function renderCreateModulePopup() {
  const addModuleBtn = document.querySelector('.js-add-module');
  const overlay = document.querySelector('.over-lay-stack-page');

  addModuleBtn.addEventListener('click', () => {
    overlay.classList.add('on-overlay-stack-page');

    document
      .querySelector('.js-close-module-overlay')
      .addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('on-overlay-stack-page');
      });
  });

  document.querySelectorAll('.js-stack-page-info').forEach((el, index) => {
    const text = el.innerHTML.split('');
    if (text.length > 500) {
      const shortText = text.slice(0, 500 - 1);
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
                const shortText = text.slice(0, 499);
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
}
