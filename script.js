const game = [
  {
      "Human": [
          {
              "BackgroundImg": "oii",
              "Mage": "./assets/human/Mage.png",
              "Mage2": "./assets/human/Mage2.png",
              "Mage3": "./assets/human/Mage3.png",
              "Knight": "./assets/human/Knight.png",
              "Knight2": "./assets/human/Knight2.png",
              "Samurai": "./assets/human/Samurai.png",
              "Samurai2": "./assets/human/Samurai2.png"
          },
      ]
  },
  {
      "Orc": [
          {
              "BackgroundImg": "",
              "Lancer": "./assets/orc/Lancer.png",
              "Lancer2": "./assets/orc/Lancer2.png",
              "Pig": "./assets/orc/Pig.png",
              "Pig2": "./assets/orc/Pig2.png"
          },
      ]
  },
  {
      "Undead": [
          {
              "BackgroundImg": "",
              "Skeleton": "./assets/undead/Skeleton.png",
              "Skeleton2": "./assets/undead/Skeleton2.png",
              "Zombie": "./assets/undead/Zombie.png"
          }
      ]
  }
];

let humanImages = game[0].Human[0];
let orcImages = game[1].Orc[0];
let undeadImages = game[2].Undead[0];

function criarRacas() {
  const btnRace = document.querySelector('.raceBtns');
  game.forEach(Raca => {
      Object.keys(Raca).forEach(classe => {
          const btn = document.createElement('button');
          btn.textContent = classe;
          btn.value = classe;

          btn.addEventListener('click', (e) => {
              if (e.target.value == 'Human') {
                  criarClasses(humanImages);
              } else if (e.target.value == 'Orc') {
                  criarClasses(orcImages);
              } else if (e.target.value == 'Undead') {
                  criarClasses(undeadImages);
              }
          });

          btnRace.append(btn);
      });
  });
}

function criarClasses(images) {
  const classBtns = document.querySelector('.classBtns');
  classBtns.innerHTML = ''; // Limpa os botões de classe anteriores

  Object.keys(images).forEach((classe) => {
      if (classe !== 'BackgroundImg') {
          const btn = document.createElement('button');
          btn.textContent = classe;
          btn.value = classe;

          btn.addEventListener('click', (e) => {
              exibirImagem(images[e.target.value]);
          });

          classBtns.append(btn);
      }
  });
}

function exibirImagem(imgSrc) {
  const characterImage = document.getElementById('characterImage');
  characterImage.src = imgSrc;
}

criarRacas();
