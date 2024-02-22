export function renderCalendar(a, b) {
  console.log(streakData);
  const currentYear = new Date().getUTCFullYear();
  const currentMonth = new Date().getMonth();

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day =
    new Date(`${months[currentMonth]} 1, ${currentYear}`).getDay() - 1;

  console.log(day);

  const daysOfTheMonth = (y, m) => {
    return new Date(y, m, 0).getDate();
  };

  document.querySelector('.js-day-of-the-month').innerHTML =
    months[currentMonth];

  const noOfdays = daysOfTheMonth(currentYear, currentMonth);
  console.log(noOfdays);

  const dayHolder = document.querySelector('.js-month-days');

  const streakStart = a;
  const streakCurrent = b;

  let dayHolderHTML = '';

  let dayCounter = 1;

  for (let i = 0 - day; i < noOfdays; i++) {
    if (i + 1 <= 0) {
      dayHolderHTML += `<div class="non-date">0</div>`;
    } else if (i + 1 <= streakCurrent && !(i + 1 <= 0)) {
      if (
        (i + 1 === noOfdays ||
          dayCounter === 7 ||
          dayCounter === 21 ||
          dayCounter === 28 ||
          dayCounter === 14 ||
          i + 1 === streakCurrent) &&
        i + 1 >= streakStart
      ) {
        dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
          i + 1
        }</div><span class="date-span date-span-last"></span></div>`;
      } else {
        if (i + 1 <= streakCurrent && i + 1 >= streakStart) {
          dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
            i + 1
          }</div><span class="date-span"></span></div>`;
        } else {
          dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
            i + 1
          }</div></div>`;
        }
      }
    } else {
      dayHolderHTML += `<div class="the-date"><div class="js-date-number">${
        i + 1
      }</div></div>`;
    }
    dayCounter++;
  }

  dayHolder.innerHTML = dayHolderHTML;

  document.querySelectorAll('.js-date-number').forEach((date) => {
    let dateNum = Number(date.innerHTML);
    if (dateNum === streakStart || dateNum === streakCurrent) {
      date.classList.add('date-color');
    }
  });
}
