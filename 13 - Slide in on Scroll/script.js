function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach((image, index) => {

    const imageHalf = window.scrollY + window.innerHeight - image.height / 2

    const imageBottom = image.offsetTop + image.height;

    const isHalf = imageHalf > image.offsetTop;
    const isNotScrolled = window.scrollY < imageBottom;

    if (isHalf && isNotScrolled) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));