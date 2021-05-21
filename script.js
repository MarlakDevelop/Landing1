new WOW().init();

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

window.addEventListener('scroll', function(evt) {
  var header = document.getElementById('header');
  if(pageYOffset === 0) {
    header.classList.remove('sticky');
  }else{
    header.classList.add('sticky');
  }
});
