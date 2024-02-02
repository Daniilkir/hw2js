
const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');
const box = document.getElementById('box');

function updateImageSize() {
    const imageSize = sliderInput.value * 3;
    sliderImage.style.width = `${imageSize}px`;
    sliderImage.style.height = `${imageSize}px`;
}

const debouncedUpdateImageSize = _.debounce(updateImageSize, 300);

sliderInput.addEventListener('input', debouncedUpdateImageSize);

document.addEventListener('mousemove', _.debounce(function (event) {
    let x = event.clientX;
    let y = event.clientY;
    box.style.left = `${x}px`;
    box.style.top = `${y}px`;
}, 100));