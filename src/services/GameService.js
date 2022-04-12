const games = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Castlevania: Symphony of the Night",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Konami",
    director: "Koji Igarashi",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/SOTN.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Super Mario World",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Nintendo",
    director: "Takashi Tezuka",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Super-Mario-World.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Super Castlevania IV",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Konami",
    director: "Masahiro Ueno",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Super%20Castlevania%20IV.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Super Metroid",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Nintendo",
    director: "Yoshio Sakamoto",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Super_Metroid_capa.png" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Donkey Kong Country",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Nintendo",
    director: "Tim Stamper",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Donkey%20Kong%20Country.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Ninja Gaiden",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Sega",
    director: "Kouji Inokuchi",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/ninja-gaiden-nes-front-cover.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Blackthorne",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Blizzard",
    director: "Matthew Findley",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Blackthorne.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Mega Man X",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Capcom",
    director: "Yoshinori Takenaka",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/snes_mega_manX_front.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821qw",
    title: "Demon's Crest",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Capcom",
    director: "Tokuro Fujiwara",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Demons-Crest.jpg" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821mw",
    title: "Ghouls 'n Ghosts",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Platform-adventure" },
    publisher: "Capcom",
    director: "Tokuro Fujiwara",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/Ghouls_and_Ghosts_sales_flyer.png" }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821rw",
    title: "Final Fantasy IV",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "RPG" },
    publisher: "Square",
    director: "Hironobu Sakaguchi",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/FFIV.jpg" } 
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821sx",
    title: "Chrono Trigger",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "RPG" },
    publisher: "Square",
    director: "Takashi Tokita",
    image: { url: "https://raw.githubusercontent.com/the-akira/react-games/master/images/chrono-trigger-snes-manual.jpg" }
  }
];

export function getGames() {
  return games;
}

export function getGame(id) {
  return games.find(g => g._id === id);
}