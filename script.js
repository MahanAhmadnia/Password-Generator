














const slider = document.getElementById('slider');
const output = document.getElementById('output');

  // تغییر زنده متن span با حرکت اسلایدر
  slider.addEventListener('input', () => {
    output.textContent = slider.value;
  });