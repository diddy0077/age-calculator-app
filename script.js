const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const btn = document.querySelector('button')
const feedbackDay = document.querySelector('.feedback-day');
const feedbackMonth = document.querySelector('.feedback-month');
const feedbackYear = document.querySelector('.feedback-year');
const today = new Date();
const currentYear = today.getFullYear();   // 2025
const currentMonth = today.getMonth() + 1; // 6 (June)
const currentDay = today.getDate();
const outputYears = document.getElementById('yearss');
const outputMonths = document.getElementById('monthss');
const outputDays = document.getElementById('dayss');



btn.addEventListener('click', () => {
  feedbackDay.textContent = '';
  feedbackMonth.textContent = '';
  feedbackYear.textContent = '';
  let dayInput = day.value.trim();
  let monthInput = month.value.trim();
  let yearInput = year.value.trim();
  const birthDate = new Date(yearInput, monthInput - 1, dayInput);
  if (dayInput === '' || monthInput === '' || yearInput === '') {
    feedbackDay.textContent = 'This field is required'
    feedbackMonth.textContent = 'This field is required'
    feedbackYear.textContent = 'This field is required'
    return
  } else if (dayInput < 1 || dayInput > 31) {
    feedbackDay.textContent = 'Must be a valid day';
  } else if (monthInput < 1 || monthInput > 12) {
    feedbackMonth.textContent = 'Must be a valid month';
  } else if (yearInput > currentYear) {
    feedbackYear.textContent = 'Must be in the past'
  } else if (birthDate.getFullYear() !== Number(yearInput) ||
  birthDate.getMonth() !== Number(monthInput) - 1 ||
  birthDate.getDate() !== Number(dayInput)){
    feedbackDay.textContent = 'Must be a valid date';
  return;
  } else {
    let calculateYears = currentYear - Number(yearInput);
    let calculateMonths = currentMonth - Number(monthInput);
    let calculateDay = currentDay - Number(dayInput)
    if (calculateDay < 0) {
      calculateMonths--
      const previousMonth = currentMonth - 1 === 0 ? 12 : currentMonth - 1;
      const previousYear = previousMonth === 12 ? currentYear - 1 : currentYear;
      const daysInPreviousMonth = new Date(previousYear, previousMonth, 0).getDate();
      calculateDay += daysInPreviousMonth;
    }
    if (calculateMonths < 0) {
    calculateYears--;
    calculateMonths += 12;
    }
    outputYears.textContent = calculateYears
    outputMonths.textContent = calculateMonths
    outputDays.textContent = calculateDay
}
});