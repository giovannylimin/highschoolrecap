const nav = document.querySelector('nav');
const topOfNav = nav.offsetTop;

function fixNav(){
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed');
  }else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed');
  }

}

window.addEventListener('scroll', fixNav);

let osn = [
  'OSN 2016 closing ceremony: new logo launch',
  'Kalimantan Barat contingent performance at the cultural night',
  'Opening ceremony in PSCC (Palembang Sport and Convention Center)'
];

let kihajar =[
  '(2017) National finalists at the closing ceremony',
  '(2017) "My Ideas" presentation for final stage',
  '(2017) My proposal for the presentation',
  '(2017) A Pontianak-based tourism web-application',
  '(2018) National finalists at the closing ceremony',
  "(2018) Kihajar Awards Night at The Sultan Hotel Jakarta",
  '(2018) A photo with Madam Tjhai Chui Mie, Mayor of Singkawang, who also got an award',
  "(2018) Symbolic appreciation from Sutarmidji, Governor of Kalimantan Barat"
];

let kalfor = [
  'A photo with my design at the winners announcement day',
  'Office tour to UNDP Representation Office Indonesia',
  'Conversations with the staffs',
  'A visit to Kementerian Lingkungan Hidup dan Kehutanan (KLHK)',
  'Conversations with the staffs of Direktorat Jenderal PKTL',
  'Handing design to Mr. Sigit Hardwinarto, Direktur Jenderal PKTL KLHK'
];

let iegames = [
  'Factory visit to PT Aice Ice Cream Jatim Industry',
  'Company visit report presentation stage in semifinals',
  'Awarded the 4th Position after the finals',
];
let otherComp = [
  '(2017) 2nd Place in Olimpiade Biologi by Universitas Tanjungpura, province-level',
  '(2018) 3rd Place in Lomba Cerdas Cermat Empat Pilar MPR RI, district-level (team)',
  '(2018) 3rd Place in Olimpiade Sains Kesehatan by Universitas Tanjungpura, province-level',
  '(2018) 3rd Place in Lomba Cerdas Cermat Olimpiade Pahlawan Nasional by Dinas Sosial, province-level (team)',
  '(2019) 1st Place in Princess of Physics by Universitas Tanjungpura, province-level',
  '(2019) 1st Place in Lomba Cerdas Cermat Sains by Universitas Tanjungpura, distrct-level (team)',
  '(2019) 1st place in Lomba Cabang Infografis Heroes Alliance 10 by Universitas Surabaya (UBAYA), natioanal-level',
  "My design for UBAYA's infographic competition"
];

let osis = [
  'Annual art festival (Pentas Seni/Pensi): dance performance',
  'End-year charity project for a nursing home',
  'Giving parcels to the old people',
  "Committee of Pontianak's birthday celebration event",
  'A post-event evaluation',
  "A banner I designed for senior's farewell event",
  'Classmeeting (sports week): In charge of a race'
];

let qna = [
  'Logo of Physics Q&A',
  'One of the physics problems that I posted: a resistance problem',
  'the solution to the problem',
  'the alternative solution of the problem',
  'One of the physics articles that I posted',
  'It is about how spoilers work in aircrafts',
  'It is one of my most liked posts'
];
let google = [
  'Remaking the google homepage',
  'Remaking google search results: top view',
  'Remaking the expandable tabs',
  'Remaking google search results: bottom view'
];
let rps = [
  'Homepage for desktops',
  'Desktop game choice',
  'Desktop game result',
  'Homepage for mobiles',
  'Mobiles game choice',
  'Mobiles game result'
];

let etch = [
  'Starting page',
  'Canvas with primary settings',
  'More settings'
]

function insertImages(article, n){
  const art = document.querySelector(`#${article}`)
  const gallery = document.querySelector(`#${article} .gallery`);
  let caption;
  let array = {osn, kihajar, kalfor, iegames, otherComp, osis, qna, google, rps, etch};
  for (const key of Object.entries(array)){
  if(key.toString().includes(article)){
    caption = key[1];
  }
}


  for(let i=1; i<=n; i++){
    gallery.innerHTML += `
    <div class="${article} strip" id="${article}-${i}">
    <div class="container">
    <img src="img/${article}/${article}-${i}.jpg"/>
    </div>
    <p>${caption[i-1]}</p>    
    </div>
    `;  
  }
  gallery.innerHTML += `
  <div class="frame">
  <button class="scroll left">&lt;</button>
  <button class="scroll right">&gt;</button>
  </div>
    `
  
    const frame = gallery.querySelector('.frame');
    frame.style.width = gallery.offsetWidth + 'px';
    frame.style.height = (6/7)*gallery.offsetHeight + 'px';

    const lastChild = gallery.querySelector(`#${article}-${n}`);


    function viewScroll(e){

      const scrollLimit = this.scrollWidth - gallery.offsetWidth
      if(this.scrollLeft <=0){
        leftButton.classList.add('disappear');
      }else if(this.scrollLeft >= scrollLimit){
        rightButton.classList.add('disappear');
      }else{
        buttons.forEach(button=>button.classList.remove('disappear'));
      }

      
    }
    const mi = document.querySelector(`#${article} .mi`);
    mi.addEventListener('scroll',viewScroll)

    const leftButton = mi.querySelector('.left');
    const rightButton = mi.querySelector('.right');
    const buttons = mi.querySelectorAll('button');

    
    buttons.forEach(button => button.addEventListener('click',handleButtons));

    function handleButtons(e){


        let index = 1;
        let track = 0;

        for(let i=1; i<=n; i++){
          const imageStrip = document.querySelector(`#${article}-${i}`);
          if(mi.scrollLeft > track && index <n){
            index+=1;
            track+=imageStrip.offsetWidth
          }
        }
        console.log(index);
        const previousImage = document.querySelector(`#${article}-${index-1}`)
        const nextImage= document.querySelector(`#${article}-${index+1}`)
        const currentImage = document.querySelector(`#${article}-${index}`)



        if(mi.scrollLeft >=0 && mi.scrollLeft <= mi.scrollWidth){
        this.classList.contains('left') ?
        mi.scrollLeft -= currentImage.offsetWidth : 
        mi.scrollLeft += currentImage.offsetWidth;


      }
    }
      
    }

    
    

insertImages('osn',3);
insertImages('kihajar',8);
insertImages('kalfor',6);
insertImages('iegames', 3);
insertImages('otherComp', 8);
insertImages('osis',7);
insertImages('qna', 7);
insertImages('google', 4);
insertImages('rps',6);
insertImages('etch', 3);

const iegamesGallery = document.querySelector('#iegames .gallery');

/*
function createVid(n){
  iegamesGallery.innerHTML += `
  <div class="iegames strip" id="iegames-${n+3}">
  <div class="container">
  <video>
  <source src="img/iegames/iegames-mac${n}.mp4" type="video/mp4">
  Sorry, your browser doesn't supprt embedded videos.
  </video>
  </div>
  <p>${iegames[n+3]}</p>    
  </div>
  `

}

createVid(1);
createVid(2);

const vids = iegamesGallery.querySelectorAll('video');
vids.forEach(vid=>{
  vid.controls = true;
  vid.volume = 0.7;
});
*/


let strip = document.querySelectorAll('.strip');
function showCaption(e){
this.classList.add('appear');
}
function hideCaption(e){
this.classList.remove('appear');
}
strip.forEach(div=>div.addEventListener('mousemove',showCaption));
strip.forEach(div=>div.addEventListener('mouseleave',hideCaption));


function debounce(func, wait = 15, immediate = true) {
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

const articles = document.querySelectorAll('article');

function checkSlide(e){

  articles.forEach(article => {
    const slideInAt = (window.scrollY + window.innerHeight) - article.style.height/2;

    const imageBottom = article.offsetTop + article.style.height;

    const isHalfShown = slideInAt > article.offsetTop;
    
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast){
      article.classList.add('active');
    } else {
      article.classList.remove('active');
    }

  })

}

window.addEventListener('scroll', debounce(checkSlide));


function autoScrollCheck(){
articles.forEach(article => {
  const mi = article.querySelector('.mi');
  const gallery = article.querySelector('.gallery');
  const buttons = article.querySelectorAll('button');

  let autoScrollInt = setInterval(autoScroll,50);

function autoScroll(){
  if(article.classList.contains('active')){
   mi.scrollLeft++;

   if(mi.scrollLeft >= mi.scrollWidth - gallery.offsetWidth){
     clearInterval(autoScrollInt);
   }
  }
buttons.forEach(button=>button.addEventListener('click',handleClick));
function handleClick(e){
clearInterval(autoScrollInt);
}

}
  
});
}

autoScrollCheck();



function createVid(n){
const vid = document.createElement('video');
vid.innerHTML = `
<source src="img/iegames/iegames-mac${n}.mp4" type="video/mp4">
Sorry, your browser doesn't support embedded videos.
`

vid.controls = true;
vid.volume = 0.7;
iegamesGallery.appendChild(vid);
}

createVid(1);
createVid(2);
