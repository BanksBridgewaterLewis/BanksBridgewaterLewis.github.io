

window.onscroll = function() {myFunction()};


var navbar = document.getElementById("navbar");


var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('YT_imgs_ani');
    }
  });
});

observer.observe(document.querySelector('.YT_img1'),
observer.observe(document.querySelector('.YT_img2'),
observer.observe(document.querySelector('.YT_img3'))));

const observer2 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('YT_imgs_ani');
    }
  });
});

observer2.observe(document.querySelector('.gallery_img0'),
observer2.observe(document.querySelector('.gallery_img1'),
observer2.observe(document.querySelector('.gallery_img2'))));

const observer3 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('YT_imgs_ani');
    }
  });
});

observer3.observe(document.querySelector('.gallery_img3'),
observer3.observe(document.querySelector('.gallery_img4'),
observer3.observe(document.querySelector('.gallery_img5'))));

const observer4 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('YT_imgs_ani');
    }
  });
});

observer4.observe(document.querySelector('.gallery_img6'),
observer4.observe(document.querySelector('.gallery_img7'),
observer4.observe(document.querySelector('.gallery_img8'))));

const observer5 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('Text_ani1');
    }
  });
});

observer5.observe(document.querySelector('.s1'),
observer5.observe(document.querySelector('.s3'),
observer5.observe(document.querySelector('.s5'),
observer5.observe(document.querySelector('.s7'),
observer5.observe(document.querySelector('.s9'),
observer5.observe(document.querySelector('.s11'),
observer5.observe(document.querySelector('.s13'),
observer5.observe(document.querySelector('.s15'),
observer5.observe(document.querySelector('.s17'),
observer5.observe(document.querySelector('.HT')))))))))));

const observer6 = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('Text_ani2');
    }
  });
});

observer6.observe(document.querySelector('.s2'),
observer6.observe(document.querySelector('.s4'),
observer6.observe(document.querySelector('.s6'),
observer6.observe(document.querySelector('.s8'),
observer6.observe(document.querySelector('.s10'),
observer6.observe(document.querySelector('.s12'),
observer6.observe(document.querySelector('.s14'),
observer6.observe(document.querySelector('.s16'),
observer6.observe(document.querySelector('.history_img'))))))))));