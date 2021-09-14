const ToggleBar = document.querySelector('.toggle-button');
const body = document.querySelector('body');
const sideBar = document.querySelector('.sidebar');
const cancel = document.querySelector('.cancel');
const moreBtn = document.querySelector('.see-more');
const anchorLink = document.querySelectorAll('.anchor-link');
const displaySpeaker = document.querySelector('.speaker-info');
const width = window.innerWidth;
// eslint-disable-next-line prefer-const
let showMore = false;
console.log(width);

const featured = [
  {
    title: 'Rwanda',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop',
      alt: 'president',
    },
  },
  {
    title: 'CommoWealth',
    subtitle: 'chairman',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop',
      alt: 'president',
    },
  },
  {
    title: 'United State',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop',
      alt: 'president',
    },
  },
  {
    title: 'United State',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      alt: 'president',
    },
  },
  {
    title: 'Rwanda',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      alt: 'president',
    },
  },
  {
    title: 'Rwanda',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop',
      alt: 'president',
    },
  },
];

function displayspeakers(featured) {
  // eslint-disable-next-line no-nested-ternary
  const me = width < 767 ? featured.slice(0, 3)
    : !showMore ? featured.slice(0) : featured.slice(0);
  console.log(me, showMore);
  let display = '';
  // eslint-disable-next-line array-callback-return
  me.map((speaker) => {
    const {
      title, subtitle, text, image,
    } = speaker;
    display += `
     <div class="col-12 col-md-6 d-flex align-items-center justify-content-center present-profile p-4">
       <img src='${image.src}' alt='${image.alt}' class='img-speaker'>
       <div class='d-flex flex-column'>
       <h4>${title}</h4>
       <h5>${subtitle}</h5>
       <p>${text}</p>
       </div>
     </div>
     `;
  });
  displaySpeaker.innerHTML = display;
  // eslint-disable-next-line no-use-before-define
  // moreShow();
}

function openSideBar() {
  sideBar.classList.add('show-side-bar');
  body.classList.add('noscroll');
}

function closeSideBar() {
  sideBar.classList.remove('show-side-bar');
  body.classList.remove('noscroll');
}

function moreShow() {
  showMore = !showMore;
  displayspeakers(featured);
}

anchorLink.forEach((anchor) => {
  anchor.addEventListener('click', closeSideBar);
});

ToggleBar.addEventListener('click', openSideBar);
cancel.addEventListener('click', closeSideBar);
document.addEventListener('DOMContentLoaded', displayspeakers(featured));
moreBtn.addEventListener('click', moreShow);
