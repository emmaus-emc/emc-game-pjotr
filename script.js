/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler

var vijandX = 500;
var vijandY = 0;

const KEY_UP = 38;

var HP= 100;

var PUNT= 0;

var kogelX= 700;
var kogelY= 700;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
 vijandY = vijandY + 5
 if (vijandY >730) {
   vijandY = 0;}
  // kogel
if (keyIsDown(32)) 
  {kogelX = spelerX}
if(keyIsDown(32))
  {kogelY = spelerY}

 kogelY = kogelY - 5;
  // speler
  if (keyIsDown(KEY_UP)) { spelerY -= 5; }
  if (keyIsDown(37)) { spelerX -= 5; }
  if (keyIsDown(39)) { spelerX += 5; }
  if (keyIsDown(40)) { spelerY += 5; }

  if (spelerY < 50) {
    spelerY = 50;}
    if (spelerX < 50) {
      spelerX = 50;}
      if (spelerX > 1280) {
        spelerX = 1280;}
        if (spelerY > 720) {
          spelerY = 720;}

        ;
}
  /**
   * Checkt botsingen
   * Verwijdert neergeschoten vijanden
   * Updatet globale variabelen punten en health
   */
  var verwerkBotsing = function () {
    // botsing speler tegen vijand
    for (var i = 0; i < 8 ; i++) {
    vijandX = i *150
    if (vijandX - spelerX < 50 && vijandX - spelerX> -50 && vijandY - spelerY <50 && vijandY - spelerY> -50){
      console.log("botsing")
      if (HP>0) HP -=  1;
    }
  }

     
    // botsing kogel tegen vijand

    // punten
    PUNT = PUNT +0.02;

  };

  /**
   * Tekent spelscherm
   */
  var tekenAlles = function () {
    // achtergrond
    clear();222
    background(51);

    // vijand
    for (var i = 0; i < 8 ; i++) {
      vijandX = i *150
    fill("gray")
    ellipse(vijandX - 25, vijandY - 25, 50, 50);
    fill("red")
    rect(vijandX - 40, vijandY - 40, 10, 10);
    fill("red")
    rect(vijandX - 20, vijandY - 40, 10, 10);
    fill("white")
    ellipse(vijandX - 25, vijandY - 25, 30, 15);
    }
    // kogel
    fill("black")
    ellipse(kogelX  - 25, kogelY - 25, 20, 20)
    // speler
    fill("green");
    ellipse(spelerX - 25, spelerY - 25, 50, 50);
    fill("purple")
    rect(spelerX - 40, spelerY - 40, 10, 10);
    fill("purple")
    rect(spelerX - 20, spelerY - 40, 10, 10);
    fill("pink")
    ellipse(spelerX - 25, spelerY - 17, 30, 15)
    // HP

    fill("white")
    rect(1100, 30 , 150, 50)

    fill("black")
    textSize(50);
    text( HP, 1150, 70);

    // PUNTEN

    fill("green")
    rect(1100, 80, 150, 50)
    fill("black")
    textSize(50);
    text( floor(PUNT), 1150, 120);


  };


  /* ********************************************* */
  /* setup() en draw() functies / hoofdprogramma   */
  /* ********************************************* */

  /**
   * setup
   * de code in deze functie wordt één keer uitgevoerd door
   * de p5 library, zodra het spel geladen is in de browser
   */
  function setup() {
    // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
    createCanvas(1280, 720);

    // Kleur de achtergrond blauw, zodat je het kunt zien
    background('blue');
  }

  /**
   * draw
   * de code in deze functie wordt 50 keer per seconde
   * uitgevoerd door de p5 library, nadat de setup functie klaar is
   */
  function draw() {
    if (spelStatus === SPELEN) {
      beweegAlles();
      verwerkBotsing();
      tekenAlles();
      if (HP<=0) {
        spelStatus = GAMEOVER;
      }
    }
    if (spelStatus === GAMEOVER) {
      // teken game-over scherm
     textSize (34)
     background("red")
     text("loser",550,300)

    }
  }
