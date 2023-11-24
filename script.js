function isVisible() {
  let paragraphs = document.querySelectorAll('.text_animated');
  let readmores = document.querySelectorAll('.read_more');
  for (let elem of paragraphs) {
    if (elem.getBoundingClientRect().top < window.innerHeight - 30 && elem.getBoundingClientRect().top > 50) {
      elem.classList.add('visible')
    } else {
      elem.classList.remove('visible')
    }
  }
  for (let elem of readmores) {
    if (elem.getBoundingClientRect().top < window.innerHeight - 250 && elem.getBoundingClientRect().top > 50) {
      elem.classList.add('visible')
    } else {
      elem.classList.remove('visible')
    }
  }
}

window.addEventListener('scroll', isVisible)