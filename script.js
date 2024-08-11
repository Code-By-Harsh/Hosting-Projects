'use strcit';

// 3 aug 2024
// Modal Window :
const modalBox = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalWindowBtn = document.querySelectorAll('.btn--show-modal');
const modalCloseBtn = document.querySelector('.btn--close-modal');

const closeModal = function () {
  modalBox.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function (e) {
  e.preventDefault();
  modalBox.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

modalWindowBtn.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

overlay.addEventListener('click', closeModal);
modalCloseBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalBox.classList.contains('hidden')) {
    closeModal();
  }
});

// L-187 : Selecting , Creating and Deleting Elements :
/*
// Selecting Elements
const header = document.querySelector('.header');

// Creating Element :
const cookiesMessage = document.createElement('div');

// Adding Classes to it and other things like html :
cookiesMessage.classList.add('cookie-message');
// cookiesMessage.textContent = 'Hai Everyone <b>Enjoy !</b>';
cookiesMessage.innerHTML = `We are use Cookies to improve our functionality and user services.
<button class='btn btn--cookies'>Accept All</button>`;

header.append(cookiesMessage);
cookiesMessage.classList.add('hidden');

// Append to DOM :
setTimeout(() => {
  overlay.classList.remove('hidden');
  cookiesMessage.classList.remove('hidden');
}, 1000);

document.querySelector('.btn--cookies').addEventListener('click', () => {
  // Deleting Element
  cookiesMessage.remove();
  overlay.classList.add('hidden');
});
*/
// L-188 Styles,Attributes and Classes
/*
// Styles :
cookiesMessage.style.backgroundColor = '#37383d'; // inline styles
cookiesMessage.style.color = 'white';

// Extract all css style :
console.log(getComputedStyle(cookiesMessage));
// Extract Specific css style :
console.log(getComputedStyle(cookiesMessage).color);

cookiesMessage.style.height =
  parseFloat(getComputedStyle(cookiesMessage).height) + 30 + 'px';

// Changing the value of css style sheet's root element value :
document.documentElement.style.setProperty('--color-primary', 'lightblue');

// Attributes
const logo = document.querySelector('.nav--logo');
// Accessing the Standard attributes :
console.log(logo.src); // provide absolute version
console.log(logo.getAttribute('src')); // provide relative version
console.log(logo.alt);
console.log(logo.className);

// Accessing the Standard attributes :
console.log(logo.designer); // ⚠️ Wrong !
console.log(logo.getAttribute('designer'));

// Changing the attributes :
logo.alt = 'Bankist--logo';

// Set the attributes :
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

console.log(logo.attributes);

const link = document.querySelector('.nav--link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data Attributes
console.log(logo.dataset.version);

// Classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

// Don't Use : it will overwritte other classes :
// logo.className = 'newClass';
*/

// L-189 Implementing Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // get coordinations of section-1
  const sec1coords = section1.getBoundingClientRect();
  console.log(sec1coords);
  // console.log(e.target.getBoundingClientRect());
  console.log(
    'Current Scroll ( x / y )',
    window.pageXOffset,
    window.pageYOffset
  );
  // console.log(
  //   `height/width viewport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling :
  // window.scrollTo(
  //   // curr position + curr scroll
  //   sec1coords.left + window.pageXOffset,
  //   sec1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: sec1coords.left + window.pageXOffset,
  //   top: sec1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern Way :
  section1.scrollIntoView({ behavior: 'smooth' });
});

// L-190 Types of Events and Event Handlers
/*
// 1. Into HTML : onclick = "alert('This is a logo')"
// 2. Modern Way :
const alertLogo = function () {
  alert('This is a Bankist Logo !!!');
};

const logo = document.querySelector('.nav--logo');
// logo.addEventListener('click', alertLogo);
// logo.addEventListener('mousedown', alertLogo);
// logo.addEventListener('mouseenter', alertLogo);
logo.addEventListener('dblclick', alertLogo);

// 3. Old way :
// logo.onmouseenter = alertLogo;
// logo.onclick = alertLogo;

// Remove the eventListener :
setTimeout(() => logo.removeEventListener('dblclick', alertLogo), 3000);
*/
// L-191 Event Propagation : Bubbling and Capturing

// Event propagation in the DOM occurs in three phases:
// 1.Capturing Phase: The event starts from the top of the DOM tree (document object) and propagates down to the target element.
// 2.Target Phase: The event reaches the target element.
// 3.Bubbling Phase: After reaching the target, the event then bubbles up from the target element back to the document

// L-192 Event Propagating in Practice
/*
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

const child = document.querySelector('.nav--link');
const parent = document.querySelector('.nav--links');
const grandParent = document.querySelector('.nav');
console.log(randomColor());

grandParent.addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('GrandParent!', e.target, e.currentTarget);
    console.log(e.currentTarget === this);
  },
  true
);
// When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE.
// Defined True , Capturing Phase : GrandParent - Parent - Child

// otherwise During Bubbling Phase : Child - Parent - GrandParent

parent.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Parent!', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation : for all parants but not for childs !
  // e.stopPropagation();
});

child.href = '#';
child.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Child!', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop Propagation : for all parants !
  // e.stopPropagation();
});
*/

// L-193 Event Deligation : Implementing Page Navigation

// Method #1 :
// const linksBtn = document.querySelectorAll('.nav--link');
// linksBtn.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = btn.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Method #2

document.querySelector('.nav--links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav--link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// L-194 DOM Traversing
/*
// Simple Accessing any element :
const h1 = document.querySelector('h1');
const h4 = document.querySelector('h4');
console.log(h1);

// Going downwards : child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

console.log('Closest is', h4.closest('.close')); // left--title is closest from h4 instead of header--tittle

// Going upwards : parents
console.log(h4.parentNode); // <div class="left--title">…</div>
console.log(h4.parentElement); // <div class="left--title">…</div>
console.log(h4.parentElement.className); // left--tittle

// Going sideways : siblings
console.log(h4.previousElementSibling);
console.log(h4.nextElementSibling); // button
console.log(h4.previousSibling); // #text
console.log(h4.nextSibling); // #text
console.log(h4.parentElement.children);
*/

// L-195 Building a Tabbed Component
const tabs = document.querySelectorAll('.operations--tab');
const tabsContainer = document.querySelector('.operations--tab-container');
const operationsTabs = document.querySelectorAll('.operations--content');

tabsContainer.addEventListener('click', function (e) {
  const clickOn = e.target.closest('.operations--tab');
  console.log(clickOn);
  // Guard Clause
  if (!clickOn) return;

  // Removing active classes
  tabs.forEach((t) => t.classList.remove('operations--tab--active'));
  operationsTabs.forEach((t) =>
    t.classList.remove('operations--content--active')
  );

  // Active tab
  clickOn.classList.add('operations--tab--active');

  // Active tab content
  const currTabContent = document
    .querySelector(`.operations--content--${clickOn.dataset.tab}`)
    .classList.add('operations--content--active');
});

// L_196 Passing Arguments to Event Handelers

const navLinks = document.querySelector('.nav--links');
const nav = document.querySelector('.nav');

const opactiyHandler = function (e) {
  if (e.target.classList.contains('nav--link')) {
    // select Active Link
    const activeLink = e.target;

    // Select all other links (inactiveLinks):
    const inActiveLinks = nav.querySelectorAll('.nav--link');

    // Apply Opacity
    inActiveLinks.forEach((link) => {
      if (activeLink != link) link.style.opacity = this;
    });
  }
};

// For const opactiyHandler = function (e, opacity) =>
// navLinks.addEventListener('mouseover', function (e) {
//   opactiyHandler(e, 0.5);
// });
// navLinks.addEventListener('mouseout', function (e) {
//   opactiyHandler(e, 1);
// });

// For const opactiyHandler = function (e) =>
navLinks.addEventListener('mouseover', opactiyHandler.bind(0.5));
navLinks.addEventListener('mouseout', opactiyHandler.bind(1));

// L-197 Implementing a Sticky Navigation : The Scroll Event
/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);
window.addEventListener('scroll', function (e) {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/

// L-198 A Better way : The intersection observer API

const header = document.querySelector('.header');
// ways to find out the nav height
const navHeight = nav.getBoundingClientRect().height;
const navHeight2 = nav.clientHeight;

const stickyNavbar = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const headerObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  threshold: 0,
  rootMargin: `-${nav.clientHeight}px`,
});
headerObserver.observe(header);

// Rough :
// Observer Call Back function :
// const obsCallBack = function (entries, observer) {
//   entries.forEach((ent) => {
//     console.log(ent);
//   });
// };
// // Observer Options :
// const obsOpt = {
//   // root is an element that the target is intersecting , or as an aleternative we can write null,and then we will be able to observe our target element intersecting the entire viewport ,
//   root: null,
//   threshold: [0, 0.2], // threshold,and this is basically the percentage of intersecting at which the observer callback will be called .
// };

// // Observer Creation
// const observer = new IntersectionObserver(obsCallBack, obsOpt);
// observer.observe(section1);

// L-199 Revealing Elements on Scroll
// Reveal section
const allSection = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // Guard Clause
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// L-200 Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const lazyLoading = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace--img :
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function (e) {
    entry.target.classList.remove('lazy--img');
  });

  observer.unobserve(entry.target);
};

const lazyObserver = new IntersectionObserver(lazyLoading, {
  root: null,
  threshold: 0.15,
});

imgTargets.forEach((img) => lazyObserver.observe(img));

// Animated Features Content :
const allFeatures = document.querySelectorAll('.features--feature');

const animateFeatures = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('features--hidden');
  observer.unobserve(entry.target);
};

const featruesObserver = new IntersectionObserver(animateFeatures, {
  root: null,
  threshold: 0.01,
});

allFeatures.forEach((feature) => {
  featruesObserver.observe(feature);
  feature.classList.add('features--hidden');
});

// L-201 Building a Slider Component : Part - 1
const slidebarFunctionallity = function () {
  // Selecting Elements
  const allslides = document.querySelectorAll('.slide');
  const sliderBtnLeft = document.querySelector('.slider--btn--left');
  const sliderBtnRight = document.querySelector('.slider--btn--right');
  const slider = document.querySelector('.slider');

  // Variables
  let currSlide = 0;
  const maxSlides = allslides.length - 1;

  // Next slide :
  const goToSlide = function (s) {
    allslides.forEach(
      (slide, i) => (slide.style.transform = `translateX(${100 * (i - s)}%)`)
    );
  };

  const nextSlideChange = function () {
    currSlide < maxSlides ? currSlide++ : (currSlide = 0);
    goToSlide(currSlide);
    activeDot(currSlide);
  };

  const prevSlideChange = function () {
    currSlide === 0 ? (currSlide = maxSlides) : currSlide--;
    goToSlide(currSlide);
    activeDot(currSlide);
  };

  sliderBtnRight.addEventListener('click', nextSlideChange);
  sliderBtnLeft.addEventListener('click', prevSlideChange);

  // L-202 Building a Slider Component: Part 2

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlideChange();
    if (e.key === 'ArrowRight') nextSlideChange();
  });

  const activeDot = function (slide) {
    document
      .querySelectorAll('.dots--dot')
      .forEach((dot) => dot.classList.remove('dots--dot--active'));
    document
      .querySelector(`.dots--dot[data-slide="${slide}"]`)
      .classList.add('dots--dot--active');
  };

  const dots = document.querySelector('.dots');
  const createDots = function () {
    allslides.forEach((_, i) => {
      console.log(i);
      dots.insertAdjacentHTML(
        'beforeend',
        `<button class="dots--dot" data-slide="${i}"></button>`
      );
    });
  };

  dots.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots--dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  });

  const init = function () {
    goToSlide(1);
    createDots();
    activeDot(1);
  };
  init();
};

slidebarFunctionallity();
