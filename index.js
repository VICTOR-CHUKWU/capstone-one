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

const featured = [
  {
    title: 'Rwanda',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_01.png',
      alt: 'president',
    },
  },
  {
    title: 'CommoWealth',
    subtitle: 'chairman',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_02.png',
      alt: 'president',
    },
  },
  {
    title: 'United State',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_03.png',
      alt: 'president',
    },
  },
  {
    title: 'United State',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_04.png',
      alt: 'president',
    },
  },
  {
    title: 'Rwanda',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_05.png',
      alt: 'president',
    },
  },
  {
    title: 'Rwanda',
    subtitle: 'His president',
    text: 'If you’re looking to get out of the big city and back into nature, the annual Kwita Izina gorilla-naming ceremony is a special time to visit Volcanoes National Park.',
    image: {
      src: 'https://summit.cckorea.org/images/base/speaker_06.png',
      alt: 'president',
    },
  },
];

function displayspeakers(featured) {
  // eslint-disable-next-line no-nested-ternary
  // const me = width < 767 ? featured.slice(0, 3)
  //   : showMore ? featured.slice(0) : featured.slice(0);
  // let me = featured.slice(0);
  // if (width < 767) {
  //   me = featured.slice(0, 3);
  // }
  // if (showMore) {
  //   me = featured.slice(0);
  // }
  let endIndex = width < 767 ? 3 : undefined;
  if (showMore) {
    moreBtn.innerHTML = 'Show Less';
    endIndex = undefined;
  } else {
    moreBtn.innerHTML = 'Show More';
  }
  const me = featured.slice(0, endIndex);
  let display = '';
  // eslint-disable-next-line array-callback-return
  me.map((speaker) => {
    const {
      title, subtitle, text, image,
    } = speaker;
    display += `
     <div class="col-12 col-md-6 d-flex present-profile p-4">
      <div class='speaker-img-cont'>
      <img src='${image.src}' alt='${image.alt}' class='img-speaker'>
      </div>
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
