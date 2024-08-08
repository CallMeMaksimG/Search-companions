const slider = document.querySelector('.slider');
const inputMin = document.querySelector('#min');
const inputMax = document.querySelector('#max');
const inputs = [inputMin, inputMax];

if (slider) {
  noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    step: 1,
    range: {
      min: 0,
      max: 100,
    },
  });

  slider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    slider.noUiSlider.set(arr);
  };

  inputs.forEach((input, index) => {
    input.addEventListener('change', (e) => {
      setSlider(index, e.currentTarget.value);
    });
  });
}
