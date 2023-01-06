const hamburger = document.getElementById('hamburger');
const navigation2 = document.getElementById('nav2');
const closer = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navigation2.classList.toggle('active');
});

closer.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navigation2.classList.remove('active');
});

const featured = [
  {
    name: 'Pat Wach',
    image: 'images/Queen-Arrow.jpg',
    country: 'Kenya',
    expertise: 'Call of Duty',
  },
  {
    name: 'Queen Arrow',
    image: 'images/Queen-Arrow.jpg',
    country: 'Kenya',
    expertise: 'Halo',
  },
  {
    name: 'Terrence',
    image: 'images/Terrence.jpg',
    country: 'South Africa',
    expertise: 'Pub G',
  },
  {
    name: 'Hirsi',
    image: 'images/Hirsi.png',
    country: 'South Africa',
    expertise: 'Apex Legends',
  },
  {
    name: 'Damien Kriya',
    image: 'images/Brian.jpg',
    country: 'India',
    expertise: 'DOOM Eternal',
  },
  {
    name: 'Brian Beast',
    image: 'images/Brian.jpg',
    country: 'Kenya',
    expertise: 'Counter Strike',
  },
];

const gamers = document.getElementById('gamers');
for (let i = 0; i < featured.length; i += 1) {
  gamers.innerHTML += `
    <div class="gamer-entry">
      <img id="chess-bg" src="images/blank-chess-board.gif">
      <img src="${featured[i].image}" alt="gamer">
      <div class="gamer-details">
         <h4>${featured[i].name}</h4>
         <p class="country">${featured[i].country}</p>
         <div id="feat-separator">
         <p>${featured[i].expertise}</p>
      </div>
  </div>
    `;
}
