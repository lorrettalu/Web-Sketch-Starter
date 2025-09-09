// Images
let morningBg;
let afternoonBg;
let nightBg;
let water;
let nightWater;
let cottage;
let afternoonCottage;
let nightCottage;
let garden;
let afternoonGarden;
let nightGarden;
let cursor;
let timeImage;
let dialogue;
let squirrel;
let fairy;
let fox;
let bunny;

// Font
let font;

// T/F Variables
let cottageClick = false;
let event = false;
let cottageEvent = false;
let stage1 = false;
let waterEvent = false;
let waterClick = false;
let gardenEvent = false;
let gardenClick = false;
let textEvent = false;
let mondayMorning = true;
let mondayAfternoon = false;
let mondayNight = false;
let tuesdayMorning = false;
let tuesdayAfternoon = false;
let tuesdayNight = false;
let wednesdayMorning = false;
let wednesdayAfternoon = false;
let wednesdayNight = false;
let thursdayMorning = false;
let thursdayAfternoon = false;
let thursdayNight = false;
let fridayMorning = false;
let fridayAfternoon = false;
let fridayNight = false;
let saturdayMorning = false;
let saturdayAfternoon = false;
let saturdayNight = false;
let sundayMorning = false;
let sundayAfternoon = false;
let sundayNight = false;
let morning = true;
let afternoon = false;
let night = false;
let showMenu = false;
let makeFood = false;
let napping = false;
let intro = true;
let change = true;
let clickedFood = false;
let chatEvent = false;
let ending1 = false;
let ending2 = false;
let doubleClick = false;

// Integer Variables
let eventNum = 0;
let clickNum = 0;
let introState = 0;

let monChatState = 0;
let mon2ChatState = 0;
let mon3ChatState = 0;
let mon4ChatState = 0;
let mon5ChatState = 0;

let tuesChatState = 0;
let tues2ChatState = 0;
let tues3ChatState = 0;
let tues4ChatState = 0;
let tues5ChatState = 0;

let wedChatState = 0;
let wed2ChatState = 0;
let wed3ChatState = 0;
let wed4ChatState = 0;
let wed5ChatState = 0;

let thursChatState = 0;
let thurs2ChatState = 0;
let thurs3ChatState = 0;
let thurs4ChatState = 0;
let thurs5ChatState = 0;

let friChatState = 0;
let fri2ChatState = 0;
let fri3ChatState = 0;
let fri4ChatState = 0;
let fri5ChatState = 0;

let satChatState = 0;
let sat2ChatState = 0;
let sat3ChatState = 0;
let sat4ChatState = 0;
let sat5ChatState = 0;

let sunChatState = 0;
let sun2ChatState = 0;
let sun3ChatState = 0;
let sun4ChatState = 0;
let sun5ChatState = 0;

let foxCount = 0;

let ending1ChatState = 0;
let ending2ChatState = 0;

let lastClickTime = 0;
let cooldown = 200;

// Array Variables
let particles = []; // Array to hold all particles
let gameState = ["intro", "monday", "tuesday", "wednesday", "thursday", "friday", 
  "saturday", "sunday", "ending1", "ending2"];

// Sound
let chime;
let plop;
let hasPlayed = false;
let forestSound;
let forestNightSound;
let forestRainSound;
let twitter;
let unbound;

// Troubleshooting
let osc;

// Text
let menuOptions = [
  {label: "Make Food", x: 20, y: 368, w: 70, h: 60 },
  {label: "Nap", x: 128, y: 368, w: 70, h: 60}
];
let label;

// Website/HTML
let c;
let audioReady = false;
let isMuted = false;
let masterLevel = 0.8;
let isPaused = false;
let showHint = false;
let sparkles = [];
const assets = [
  {id: 'cottage', x: 41, w: 170, y: 299, h: 150},
  {id: 'garden', x: 20, w: 129, y: 441, h: 615},
  {id: 'water', x: 221, w: 300, y: 173, h: 200}
];
let food = false;
let nap = false;

function preload() {
  morningBg = loadImage("assets/Untitled_Artwork 5.png");
  afternoonBg = loadImage("assets/Untitled_Artwork 15.png");
  nightBg = loadImage("assets/Untitled_Artwork 12.png");
  water = loadImage("assets/Untitled_Artwork 2.png");
  nightWater = loadImage("assets/Untitled_Artwork 9.png");
  cottage = loadImage("assets/Untitled_Artwork 1.png");
  afternoonCottage = loadImage("assets/Untitled_Artwork 14.png");
  nightCottage = loadImage("assets/Untitled_Artwork 10.png");
  garden = loadImage("assets/Untitled_Artwork 4.png");
  afternoonGarden = loadImage("assets/Untitled_Artwork 13.png");
  nightGarden = loadImage("assets/Untitled_Artwork 11.png");
  cursor = loadImage("assets/butterflyahh.png");
  timeImage = loadImage("assets/Untitled_Artwork 7.png");
  dialogue = loadImage("assets/Untitled_Artwork 17.png");
  squirrel = loadImage("assets/Untitled_Artwork 19.png");
  fairy = loadImage("assets/Untitled_Artwork 20.png");
  fox = loadImage("assets/Untitled_Artwork 21.png");
  bunny = loadImage("assets/Untitled_Artwork 23.png");
  
  font = loadFont("assets/IndieFlower-Regular.ttf");
  
  chime = loadSound("assets/chime2.mp3");
  plop = loadSound("assets/plop.mp3");
  forestSound = loadSound("assets/forest.mp3");
  forestNightSound = loadSound("assets/forest-night.mp3");
  forestRainSound = loadSound("assets/forest-rain.mp3");
  twitter = loadSound("assets/twitter.mp3");
  unbound = createAudio("assets/unbound.mp3");
}

function setup() {
  const c = createCanvas(360, 640);
  c.parent('sketch');
  noCursor();
  
  // Ambience
  timeSound();
  
  // Buttons
  
  //document.getElementById('muteBtn').addEventListener('click', toggleMute);
  document.getElementById('playBtn').addEventListener('click', togglePause);
  //document.getElementById('suppBtn').addEventListener('click', openSupport);
  document.getElementById('hintBtn').addEventListener('click', showHints);

}

function draw() {
  background(220);
  
  // Background
  if (mondayMorning || tuesdayMorning || wednesdayMorning || thursdayMorning || fridayMorning || saturdayMorning || sundayMorning) {
    image(morningBg, 0, 0, 360, 640);
  } else if (mondayAfternoon || tuesdayAfternoon || wednesdayAfternoon || thursdayAfternoon || fridayAfternoon || saturdayAfternoon || sundayAfternoon) {
    image(afternoonBg, 0, 0, 360, 640);
  } else if (mondayNight || tuesdayNight || wednesdayNight || thursdayNight || fridayNight || saturdayNight || sundayNight) {
    image(nightBg, 0, 0, 360, 640);
  } else if (ending1 || ending2) {
    image(morningBg, 0, 0, 360, 640); // changeEnding
  }

  // Day States
  dayStates();

  // Time
  if (ending1 == false && ending2 == false) {
    image(timeImage, 0, 0, 360, 640);
  }
  
  // Font
  textFont(font);
  textSize(17);
  
  // Weather
  if (tuesdayMorning) {
    rain();
  }

  // Hints
  for (let i = sparkles.length - 1; i >= 0; i--) {
    const s = sparkles[i];
    s.update();
    s.display();
    if (s.isDead()) sparkles.splice(i, 1);
  }
  
  if (showHint) {
    if (mondayMorning) {
      food = true;
      sparkleEvent(assets[0]);
    } else if (mondayAfternoon) {
      food = false;
      nap = true;
      sparkleEvent(assets[1]);
    } else if (mondayNight) {
      sparkleEvent(assets[2]);
    } else if (tuesdayMorning) {
      sparkleEvent(assets[1]);
    } else if (tuesdayAfternoon) {
      food = true;
      nap = false;
      sparkleEvent(assets[0]);
    } else if (tuesdayNight) {
      food = false;
      nap = true;
      sparkleEvent(assets[0]);
    } else if (wednesdayMorning) {
      sparkleEvent(assets[2]);
    } else if (wednesdayAfternoon) {
      food = false;
      nap = true;
      sparkleEvent(assets[0]);
    } else if (wednesdayNight) {
      food = true;
      nap = false;
      sparkleEvent(assets[0]);
    } else if (thursdayMorning) {
      food = true;
      nap = false;
      sparkleEvent(assets[0]);
    } else if (thursdayAfternoon) {
      sparkleEvent(assets[2]);
    } else if (thursdayNight) {
      sparkleEvent(assets[1]);
    } else if (fridayMorning) {
      food = false;
      nap = true;
      sparkleEvent(assets[0]);
    } else if (fridayAfternoon) {
      food = true;
      nap = false;
      sparkleEvent(assets[0]);
    } else if (fridayNight) {
      food = false;
      nap = true;
      sparkleEvent(assets[0]);
    } else if (saturdayMorning) {
      sparkleEvent(assets[1]);
    } else if (saturdayAfternoon) {
      sparkleEvent(assets[2]);
    } else if (saturdayNight) {
      food = true;
      nap = false;
      sparkleEvent(assets[0]);
    } else if (sundayMorning) {
      sparkleEvent(assets[2]);
    } else if (sundayAfternoon) {
      food = true;
      nap = false;
      sparkleEvent(assets[0]);
    } else if (sundayNight) {
      sparkleEvent(assets[2]);
    }
  } else {
    showHint = false;
  }
  
  // Time Text
  // text("Monday Morning", 17, 40);
  timeText();
  
  // Troubleshooting
  //print("MouseX: " + mouseX, ", MouseY: " + mouseY);
  //print(eventNum);
  //console.log(eventNum);
  //osc.freq(map(mouseX, 0, width, 200, 800));
  //runEventNum();
  //print(showHint);
  
  if (event == false && (ending1 == false && ending2 == false)) {
    cottageHover(mouseX, mouseY);
    gardenHover(mouseX, mouseY);
    waterHover(mouseX, mouseY);
  }
  
  if (cottageClick) {
    event = true;
    textEvent = true;
    change = false;
    drawMenu();
  }
  
  if (waterClick) {
    event = true;
    textEvent = true;
  }
  
  if (gardenClick) {
    event = true;
    textEvent = true;
  }
  
  masterFunction();
  
  if (textEvent || intro || ending1 || ending2) {
    dialogueText();
  } else {
    event = false;
  }

  dialogueChoices();
  dialogueHover();
  
  // Cursor
  push();
  imageMode(CENTER);
  image(cursor, mouseX, mouseY, 30, 30);
  pop();

  // Floating Text by Cursor
  if (cottageClick) {
    floatingCursorCottage();
  }
  if (waterClick) {
    floatingCursorWater();
  }
  if (gardenClick) {
    floatingCursorGarden();
  }
}

function masterFunction() {
  if (eventNum == -1) {
    mondayMorning = true;
    textEvent = true;
    event = true;
  }
  else if (eventNum == 0) {
    mondayMorning = true;
    mondayAfternoon = false;
    mondayNight = false;
    tuesdayMorning = false;
    textEvent = false;
  } else if (eventNum == 2) {
    mondayMorning = false;
    mondayAfternoon = true;
    mondayNight = false;
    tuesdayMorning = false;
    textEvent = false;
  } else if (eventNum == 4) {
    mondayMorning = false;
    mondayAfternoon = false;
    mondayNight = true;
    tuesdayMorning = false;
    textEvent = false;
  } else if (eventNum == 6) {
    mondayMorning = false;
    mondayAfternoon = false;
    mondayNight = false;
    tuesdayMorning = true;
    textEvent = false;
  } else if (eventNum == 8) {
    mondayNight = false;
    tuesdayAfternoon = true;
    tuesdayMorning = false;
    textEvent = false;
  } else if (eventNum == 10) {
    tuesdayAfternoon = false;
    tuesdayNight = true;
    textEvent = false;
  } else if (eventNum == 12) {
    tuesdayNight = false;
    wednesdayMorning = true;
    textEvent = false;
  } else if (eventNum == 14) {
    wednesdayMorning = false;
    wednesdayAfternoon = true;
    textEvent = false;
  } else if (eventNum == 16) {
    wednesdayAfternoon = false;
    wednesdayNight = true;
    textEvent = false;
  } else if (eventNum == 18) {
    wednesdayNight = false;
    thursdayMorning = true;
    textEvent = false;
  } else if (eventNum == 20) {
    thursdayMorning = false;
    thursdayAfternoon = true;
    textEvent = false;
  } else if (eventNum == 22) {
    thursdayAfternoon = false;
    thursdayNight = true;
    textEvent = false;
  } else if (eventNum == 24) {
    thursdayNight = false;
    fridayMorning = true;
    textEvent = false;
  } else if (eventNum == 26) {
    fridayMorning = false;
    fridayAfternoon = true;
    textEvent = false;
  } else if (eventNum == 28) {
    fridayAfternoon = false;
    fridayNight = true;
    textEvent = false;
  } else if (eventNum == 30) {
    fridayNight = false;
    saturdayMorning = true;
    textEvent = false;
  } else if (eventNum == 32) {
    saturdayMorning = false;
    saturdayAfternoon = true;
    textEvent = false;
  } else if (eventNum == 34) {
    saturdayAfternoon = false;
    saturdayNight = true;
    textEvent = false;
  } else if (eventNum == 36) {
    saturdayNight = false;
    sundayMorning = true;
    textEvent = false;
  } else if (eventNum == 38) {
    sundayMorning = false;
    sundayAfternoon = true;
    textEvent = false;
  } else if (eventNum == 40) {
    sundayAfternoon = false;
    sundayNight = true;
    textEvent = false;
  } else if (eventNum == 42) {
    sundayNight = false; // changeEnding
    textEvent = false;
    if (foxCount >= 4) {
      ending2 = true;
    } else {
      ending1 = true;
    }
  }
}

// Text
function dialogueText() {
  image(dialogue, 0, 0, 360, 640);

  if (mondayMorning) {
    mondayDialogue();
  } else if (mondayAfternoon) {
    mondayDialogue();
  } else if (mondayNight) {
    mondayDialogue();
  } else if (tuesdayMorning) {
    tuesdayDialogue();
  } else if (tuesdayAfternoon) {
    tuesdayDialogue();
  } else if (tuesdayNight) {
    tuesdayDialogue();
  } else if (wednesdayMorning) {
    wednesdayDialogue();
  } else if (wednesdayAfternoon) {
    wednesdayDialogue();
  } else if (wednesdayNight) {
    wednesdayDialogue();
  } else if (thursdayMorning) {
    thursdayDialogue();
  } else if (thursdayAfternoon) {
    thursdayDialogue();
  } else if (thursdayNight) {
    thursdayDialogue();
  } else if (fridayMorning) {
    fridayDialogue();
  } else if (fridayAfternoon) {
    fridayDialogue();
  } else if (fridayNight) {
    fridayDialogue();
  } else if (saturdayMorning) {
    saturdayDialogue();
  } else if (saturdayAfternoon) {
    saturdayDialogue();
  } else if (saturdayNight) {
    saturdayDialogue();
  } else if (sundayMorning) {
    sundayDialogue();
  } else if (sundayAfternoon) {
    sundayDialogue();
  } else if (sundayNight) {
    sundayDialogue();
  } else {
    /*// Default Dialogue
    change = true;
    if (waterClick) {
      text("I'll go get some water!", 40, 510);
    } else if (cottageClick) {
      text("I can make food or nap at home.", 40, 510);
      text("Which one should I do?", 40, 540);
    } else if (gardenClick) {
      text("I'll go tend to my flowers!", 40, 510);
    } */


  if (ending1) {
    event = true;
    switch (ending1ChatState) {
      case 0:
        text("Test 1", 40, 510);
        break;
      case 1:
        text("Test 2", 40, 510);
        break;
      default:
        text("The End! Please restart the game.", 40, 510);
    }
  }

  if (ending2) {
    event = true;
    switch (ending2ChatState) {
      case 0:
        text("Test Ending 1", 40, 510);
        break;
      case 1:
        text("Test Ending 2", 40, 510);
        break;
      default:
        text("The End! Please restart the game.", 40, 510);
    }
  }
  }

  // Intro Dialogue
  if (intro) {
    event = true;
    switch (introState) {
      case 0:
        text("Welcome to My Fairy Wings! This game is", 40, 510);
        text("a visual novel and point and click game.", 40, 540);
        break;
      case 1:
        text("You will select a task to do and get a", 40, 510);
        text("chance to encounter a friend. This is your", 40, 540);
        text("goal. Also, the game ends on Sunday.", 40, 570);
        break;
      case 2:
        text("If you would like this experience to be", 40, 510);
        text("smoother, please turn on hints down below.", 40, 540);
        break;
      case 3:
        text("Enjoy!", 40, 510);
        break;
      case 4:
        image(fairy, 0, 0, 360, 640);
        text("I've been on my own for so long. I really", 40, 510);
        text("miss my friends and family.", 40, 540); // fairy
        break;
      case 5:
        image(fairy, 0, 0, 360, 640);
        text("But maybe this week will be different.", 40, 510);
        text("Seven days and just three small steps", 40, 540);
        text("each day.", 40, 570);
        break;
      case 6:
        image(fairy, 0, 0, 360, 640);
        text("If I can just take care of myself, maybe", 40, 510);
        text("I'll meet some new friends. I think my", 40, 540);
        text("heart could really use that.", 40, 570);
        break;
      default:
        intro = false;
        event = false;
    }
  }
}

function mondayDialogue() {
  if (mondayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (monChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'll just close my eyes... only for a minute.", 40, 510);
          break;
        case 20:
          image(squirrel, 0, 0, 360, 640);
          text("That smell... is it pancakes? It's pancakes,", 40, 510);
          text("right?", 40, 540); // squirrel
          break;
        case 10:
          text("As the fairy prepares breakfast, they see a", 40, 510);
          text("squirrel approach them!", 40, 540);
          break;
        case 30:
          image(squirrel, 0, 0, 360, 640);
          text("Pancakes?! For me?! You're the best!", 40, 510);
          break;
        case 40:
          text("The squirrel happily munches on the", 40, 510);
          text("pancakes.", 40, 540);
          break;
        case 50:
          image(squirrel, 0, 0, 360, 640);
          text("This is so delicious! I'm definitely", 40, 510);
          text("coming back!!", 40, 540);
          break;
        case 60:
          image(squirrel, 0, 0, 360, 640);
          text("Well, thanks for talking to me. See you", 40, 510);
          text("soon, fairy friend!", 40, 540);
          break;
        case 21:
          image(squirrel, 0, 0, 360, 640);
          text("Flowers smell like pancakes now? What a", 40, 510);
          text("crazy kind of magic!", 40, 540);
          break;
        default:
          text("The fairy finished her task and the day", 40, 510);
          text("went on.", 40, 540);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Every drop of water counts!", 40, 510);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("These sprouts look so proud of", 40, 510);
      text("themselves.", 40, 540);
    }
  }
  if (mondayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch(mon2ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I will take a tiny sleep.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("I'll hum a little tune while I cook.", 40, 510);
          break;
        default:
          text("The fairy finished her task, and the day", 40, 510);
          text("went on.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Ah, I love how the water cools my hands.", 40, 510);
      
    } else if (gardenClick) {
      change = false;
      switch(mon3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("Looks like my carrots are ready!", 40, 510);
          break;
        case 1:
          image(bunny, 0, 0, 360, 640);
          text("Mmm, are those carrots? Can I have", 40, 510);
          text("some?", 40, 540); // bunny
          break;
        case 2:
          image(bunny, 0, 0, 360, 640);
          text("Yes! You're the best, Miss Fairy!", 40, 510);
          break;
        case 3:
          image(bunny, 0, 0, 360, 640);
          text("You won't regret this, Miss Fairy. I assure", 40, 510);
          text("you, I have the best seed collection in", 40, 540);
          text("the world! I'll be sure to give you some.", 40, 570);
          break;
        case 11:
          image(bunny, 0, 0, 360, 640);
          text("Aww. That makes sense, they are your", 40, 510);
          text("carrots after all.", 40, 540);
          break;
        default:
          image(bunny, 0, 0, 360, 640);
          text("Well, good luck with your garden, Miss", 40, 510);
          text("Fairy!", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
      }
    }
  }
  if (mondayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch(mon4ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("The pillow's calling my name again.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Maybe I'll make a warm soup to", 40, 510);
          text("end the day off with.", 40, 540);
          break;
        default:
          text("The fairy finished her task, and the day", 40, 510);
          text("went on.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      doubleClick = true;
      switch(mon5ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("Oof, I put a lot of water in this bucket", 40, 510);
          text("by accident.", 40, 540);
          break;
        case 1:
          image(fox, 0, 0, 360, 640);
          text("Be careful with that!", 40, 510); // fox
          doubleClick = false;
          break;
        case 2:
          image(fox, 0, 0, 360, 640);
          text("Maybe.", 40, 510);
          break;
        case 11:
          image(fox, 0, 0, 360, 640);
          text("If you say so.", 40, 510);
          break;
        default:
          text("After making sure the fairy gets the water", 40, 510);
          text("inside, the fox disappears into the night.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
          doubleClick = false;
      }
      
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Weeds are very evil.", 40, 510);
    }
  }
}

function tuesdayDialogue() {
  if (tuesdayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (tuesChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I love sleeping to the sound of rain.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Soup and rain sounds so pleasant!", 40, 510);
          break;
        default:
          text("The fairy finished her task, and the day", 40, 510);
          text("went on.", 40, 540);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("There's extra water in my bucket because", 40, 510);
      text("of the rain. Free water!", 40, 540);
    } else if (gardenClick) {
      change = false;
      switch(tues3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I love the smell of the earth when it rains.", 40, 510);
          break;
        case 1:
          image(bunny, 0, 0, 360, 640);
          text("Mmm, your flowers smell super nice with", 40, 510);
          text("the rain today.", 40, 540); // bunny;
          break;
        case 2:
          image(bunny, 0, 0, 360, 640);
          text("Yes, like the flowers just took a bath!", 40, 510); // bunny;
          break;
        case 3:
          image(squirrel, 0, 0, 360, 640);
          text("Mmm, smells like pancakes...", 40, 510); // squirrel
          break;
        case 4:
          image(bunny, 0, 0, 360, 640);
          text("Where'd you come from?! And you're", 40, 510);
          text("always thinking of food.", 40, 540); // bunny
          break;
        case 5:
          image(squirrel, 0, 0, 360, 640);
          text("...Is that bad?", 40, 510); // squirrel
          break;
        case 11:
          image(bunny, 0, 0, 360, 640);
          text("We're on the same wavelength!", 40, 510); // bunny
          break;
        default:
          image(fairy, 0, 0, 360, 640);
          text("Haha, let's water the flowers together!", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
      }
    }
  }
  if (tuesdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (tues4ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("Time for some sweet dreams.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("I'll make a sandwich today!", 40, 510);
          break;
        case 20:
          image(bunny, 0, 0, 360, 640);
          text("Wow, that sandwich is bigger than", 40, 510);
          text("my head.", 40, 540); // bunny
          break;
        case 30:
          image(bunny, 0, 0, 360, 640);
          text("Don't mind if I do!", 40, 510);
          break;
        case 21:
          image(bunny, 0, 0, 360, 640);
          text("Fair enough.", 40, 510);
          break;
        default:
          text("The day went on.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("The stream always sings the same song.", 40, 510);
      text("It's comforting.", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("My lovely little flowers are growing!", 40, 510);
    }
  }

  if (tuesdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (tues2ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'll sleep a little early tonight.", 40, 510);
          break;
        case 2:
          image(fox, 0, 0, 360, 640);
          text("Sleeping early?", 40, 510); // fox
          break;
        case 3:
          image(fox, 0, 0, 360, 640);
          text("...Can't argue with that.", 40, 510); // fox
          break;
        case 4:
          image(fairy, 0, 0, 360, 640);
          text("...", 40, 510); // fairy
          break;
        case 12:
          image(fox, 0, 0, 360, 640);
          text("Then rest well.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("I'll have some hot curry under", 40, 510);
          text("the moon.", 40, 540);
          break;
        default:
          text("The night changed into day.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I wonder if I woke the fishies up.", 40, 510);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("The flowers change so much during the", 40, 510);
      text("day.", 40, 540);
    }
  }
}

function wednesdayDialogue() {
  if (wednesdayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (wedChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'm gonna sleep in, as good as a bear.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Gonna start my day right with breakfast!", 40, 510);
          break;
        default:
          text("The fairy finished her task and the", 40, 510);
          text("day went on.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      doubleClick = true;
      switch (wed2ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I'll head to the stream and fetch some", 40, 510);
          text("water to be prepared for the day.", 40, 540);
          break;
        case 1:
          doubleClick = false;
          image(squirrel, 0, 0, 360, 640);
          text("Careful, if you lean in too far, the", 40, 510);
          text("fish can steal your reflection.", 40, 540); // squirrel
          break;
        case 2:
          image(squirrel, 0, 0, 360, 640);
          text("Probably trade it in for some pancakes", 40, 510);
          text("Fish love yummy things, you know.", 40, 540);
          break;
        case 3:
          image(fairy, 0, 0, 360, 640);
          text("...Do they really?", 40, 510); // fairy
          break;
        case 4:
          image(squirrel, 0, 0, 360, 640);
          text("Well...they might. Better safe than sorry!", 40, 510);
          break;
        case 11:
          image(squirrel, 0, 0, 360, 640);
          text("I'm not! You better not try it though.", 40, 510);
          break;
        default:
          text("The squirrel gave a cheeky grin and ran", 40, 510);
          text("off into the woods.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
          doubleClick = false;
      }
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Now, you guys can grow as tall as me!", 40, 510);
    }
  }
  if (wednesdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (wed3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'm pretty sleepy...I'll just take", 40, 510);
          text("a quick nap!", 40, 540);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("I'll make a delicious lunch!", 40, 510);
          break;
        case 2:
          image(squirrel, 0, 0, 360, 640);
          text("You're already sleeping?", 40, 510); // squirrel
          break;
        case 3:
          image(bunny, 0, 0, 360, 640);
          text("Shh..don't ruin their nap!", 40, 510); // bunny
          break;
        case 13:
          image(bunny, 0, 0, 360, 640);
          text("Well, I hope you feel better!", 40, 510); // bunny
          break;
        case 4:
          text("The squirrel and the bunny look at each", 40, 510);
          text("other before curling up beside the fairy.", 40, 540);
          break;
        case 5:
          text("The fairy slept very well.", 40, 510);
          break;
        default:
          text("The fairy had a good afternoon.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I've always loved how sparkly water", 40, 510);
      text("is under the sun.", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("When I hum, the flowers dance along!", 40, 510);
    }
  }
  if (wednesdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (wed4ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'm sure the forest will protect", 40, 510);
          text("me while I sleep.", 40, 540);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Mmm, smells like home. Even if it's", 40, 510);
          text("just me here.", 40, 540);
          break;
        case 20:
          image(fox, 0, 0, 360, 640);
          text("Home doesn't have to be crowded to", 40, 510);
          text("mean something.", 40, 540); // fox
          break;
        case 21:
          image(fox, 0, 0, 360, 640);
          text("Fair enough.", 40, 510); // fox
          break;
        case 30:
          image(fox, 0, 0, 360, 640);
          text("If you'd like.", 40, 510);
          break;
        default:
          text("By the end of the night, the smell", 40, 510);
          text("of the food has wafted across the", 40, 540);
          text("whole forest.", 40, 570);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I love the sound of water at night especially.", 40, 510);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("This garden is my pride and joy.", 40, 510);
    }
  }
}

function thursdayDialogue() {
  if (thursdayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (thursChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("Maybe I'll dream of pancakes.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("I'll make some pancakes this morning.", 40, 510); // fairy
          break;
        case 20:
          image(squirrel, 0, 0, 360, 640);
          text("Did I hear pancakes?!", 40, 510); // squirrel
          break;
        case 30:
          image(squirrel, 0, 0, 360, 640);
          text("Oh boy! I'll go find us some maple syrup", 40, 510);
          text("for us.", 40, 540); // squirrel
          break;
        case 40:
          image(fairy, 0, 0, 360, 640);
          text("Aww, thanks! I'm excited! I know it'll be", 40, 510);
          text("super delicious.", 40, 540); // fairy
          break;
        case 50:
          text("The fairy and the squirrel shared a meal", 40, 510);
          text("together.", 40, 540);
          break;
        case 60:
          image(squirrel, 0, 0, 360, 640);
          text("It was the yummiest pancakes ever", 40, 510);
          text("made!", 40, 540);
          break;
        case 21:
          image(squirrel, 0, 0, 360, 640);
          text("Aww. I could've sworn you said pancakes.", 40, 510);
          text("Oh well.", 40, 540); // squirrel
          break;
        default:
          text("Time passed by.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("My flowers will be so happy when they", 40, 510);
      text("get a taste of this fresh water!", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I wonder what kind of flowers the animals", 40, 510);
      text("like.", 40, 540);
    }
  }
  if (thursdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (thurs2ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("The sandman has arrived.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("This pot feels like a little cauldron", 40, 510);
          text("of happiness.", 40, 540);
          break;
        default:
          text("The fairy finished her task, and the", 40, 510);
          text("day went on.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      doubleClick = true;
      switch (thurs3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("Oops, I'll go refill my watering can.", 40, 510); // fairy
          break;
        case 1:
          doubleClick = false;
          image(bunny, 0, 0, 360, 640);
          text("Hi Miss Fairy! Do you think there are", 40, 510);
          text("secret caves behind the waterfall?", 40, 540); // bunny
          break;
        case 11:
          image(bunny, 0, 0, 360, 640);
          text("What are video games?", 40, 510); // bunny
          break;
        case 2:
          image(bunny, 0, 0, 360, 640);
          text("I'll go if you go!", 40, 510); // bunny
          break;
        case 3:
          image(fairy, 0, 0, 360, 640);
          text("Okay! Let's go on an adventure!", 40, 510); // fairy
          break;
        default:
          text("Time passed by.", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
          doubleClick = false;
      }
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I love everything about my garden.", 40, 510);
    }
  }
  if (thursdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (thurs4ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("My pillows and blankets look so", 40, 510);
          text("cozy!", 40, 540);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Bread, butter, soup, and all things", 40, 510);
          text("delicious!", 40, 540);
          break;
        default:
          text("The time passed quickly, and morning", 40, 510);
          text("came.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("The fish are especially frisky tonight.", 40, 510);
    } else if (gardenClick) {
      change = false;
      switch (thurs5ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("The fox is already at the garden, for some", 40, 510);
          text("reason!", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("My flowers are drooping a little today.", 40, 510);
          text("I wonder why.", 40, 540); // fairy
          break;
        case 2:
          image(fox, 0, 0, 360, 640);
          text("It does. If you stop, the garden will die.", 40, 510); // fox
          break;
        case 3:
          image(fairy, 0, 0, 360, 640);
          text("That's true.", 40, 510); // fairy
          break;
        case 4:
          image(fox, 0, 0, 360, 640);
          text("You care for it. That matters.", 40, 510); // fox
          break;
        case 11:
          image(fox, 0, 0, 360, 640);
          text("...Really?", 40, 510); // fox
          break;
        default:
          text("The flowers perk up a little. Then,", 40, 510);
          text("morning came.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
      }
    }
  }
}

function fridayDialogue() {
  if (fridayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (friChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'll sleep in today. I'm more sleepy than", 40, 510);
          text("usual.", 40, 540); // fairy
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("The pan always makes such cheerful", 40, 510);
          text("little sizzles", 40, 540);
          break;
        case 2:
          image(squirrel, 0, 0, 360, 640);
          text("Hey, hey! You're still in bed. The sun's", 40, 510);
          text("been up forever. We have to go play", 40, 540);
          text("together!", 40, 570); // squirrel
          break;
        case 12:
          image(squirrel, 0, 0, 360, 640);
          text("But I don't want to wait! ...Fine, I'll", 40, 510);
          text("wait. But we'll play after!", 40, 540); // squirrel
          break;
        case 3:
          image(squirrel, 0, 0, 360, 640);
          text("Okay, just five more minutes and by", 40, 510);
          text("then, we should both be out the door!", 40, 540); // squirrel
          break;
        case 4:
          image(fairy, 0, 0, 360, 640);
          text("Well, that's not much time now, is it?", 40, 510); // fairy
          break;
        case 5:
          image(squirrel, 0, 0, 360, 640);
          text("It's enough time for me!", 40, 510); // squirrel
          break;
        case 6:
          image(fairy, 0, 0, 360, 640);
          text("Oh, alright!", 40, 510); // fairy
          break;
        default:
          text("Time went by quickly!", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Gotta be careful...I have to make sure I", 40, 510);
      text("don't get wet!", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Gardening feels like taking care of the", 40, 510);
      text("forest too.", 40, 540);
    }
  }
  if (fridayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (fri2ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I want to feel as cozy as a bunny!", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("I'll probably make some salad.", 40, 510); // fairy
          break;
        case 20:
          image(bunny, 0, 0, 360, 640);
          text("Ooh, a salad would be very yummy!", 40, 510);
          text("I found some super yummy lettuce the", 40, 540);
          text("other day. Do you want some?", 40, 570); // bunny
          break;
        case 21:
          image(bunny, 0, 0, 360, 640);
          text("If you say so. You're missing out!", 40, 510); // bunny
          break;
        case 30:
          image(bunny, 0, 0, 360, 640);
          text("Great! I'll go get them. Stay right here!", 40, 510);
          text("I'll be right back.", 40, 540); // bunny
          break;
        case 40:
          text("The bunny came back with lots of lettuces", 40, 510);
          text("and the salad was a huge success!", 40, 540);
          break;
        default:
          text("After awhile, the sun began to set.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Sitting and listening to water is really", 40, 510);
      text("relaxing.", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("The soil feels ever so soft!", 40, 510);
    }
  }
  if (fridayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (fri3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'll sleep early. Maybe I'll catch a nice", 40, 510);
          text("dream!", 40, 540); // fairy
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Ooh, I hope this isn't overcooked!", 40, 510); // fairy
          break;
        case 2:
          image(fox, 0, 0, 360, 640);
          text("...I'm a dreamcatcher. I can help.", 40, 510); // fox
          break;
        case 12:
          image(fox, 0, 0, 360, 640);
          text("You're a talented fairy, it seems!", 40, 510); // fox
          break;
        case 3:
          image(fox, 0, 0, 360, 640);
          text("Then, of course. I hope you enjoy your", 40, 510);
          text("dream. Good night.", 40, 540); // fox
          break;
        default:
          text("The fairy dreamt a dream filled with", 40, 510);
          text("comfort and magic.", 40, 540);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I'd love to learn a spell to control water", 40, 510);
      text("one day, so I don't have to collect water with", 40, 540);
      text("a bucket every time.", 40, 570);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I love the color my garden brings.", 40, 510);
    }
  }
}

function saturdayDialogue() {
  if (saturdayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (satChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'm going to tuck back into", 40, 510);
          text("my pillows...", 40, 540);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Ooh, I think I made too much. I'll", 40, 510);
          text("share it with the critters.", 40, 540);
          break;
        default:
          text("The fairy finished her task and", 40, 510);
          text("time passed by quickly.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Water is so beautiful!", 40, 510);
    } else if (gardenClick) {
      change = false;
      switch (sat2ChatState) {
        case 0:
          image(bunny, 0, 0, 360, 640);
          text("These flowers are beautiful!", 40, 510); // bunny
          break;
        case 1:
          image(squirrel, 0, 0, 360, 640);
          text("And edible!", 40, 510); // squirrel
          break;
        case 11:
          image(bunny, 0, 0, 360, 640);
          text("Yeah, squirrel. Don't eat their flowers!", 40, 510); // bunny
          break;
        case 2:
          image(squirrel, 0, 0, 360, 640);
          text("Oh, can I? Can I?", 40, 510); // squirrel
          break;
        case 3:
          image(bunny, 0, 0, 360, 640);
          text("You're always eating, that's why you're", 40, 510); // bunny
          text("so big.", 40, 540); // bunny
          break;
        case 4:
          image(squirrel, 0, 0, 360, 640);
          text("You're so mean, Bunbun!!", 40, 510); // squirrel
          break;
        case 5:
          image(fairy, 0, 0, 360, 640);
          text("Now, now. You can have some too, Mr.", 40, 510); // fairy
          text("Bunny.", 40, 540); // fairy
          break;
        case 6:
          text("The bunny didn't say anything but he", 40, 510);
          text("hid a small smile.", 40, 540);
          break;
        default:
          text("Some flowers were eaten that day.", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
      }
    }
  }
  if (saturdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sat3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("My bed just looks so comfortable.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Food makes me so happy!", 40, 510);
          break;
        default:
          text("The fairy finished her task, and the", 40, 510);
          text("day went on.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      doubleClick = true;
      switch (sat4ChatState) {
        case 0:
          image(bunny, 0, 0, 360, 640);
          text("...It feels peaceful here.", 40, 510); // bunny
          break;
        case 1:
          doubleClick = false;
          image(squirrel, 0, 0, 360, 640);
          text("Peaceful? It feels so alive! Look at all", 40, 510);
          text("the water ripples!", 40, 540); // squirrel
          break;
        case 2:
          image(bunny, 0, 0, 360, 640);
          text("You don't mind us bickering all the time?", 40, 510); // bunny
          break;
        case 3:
          image(fairy, 0, 0, 360, 640);
          text("Not at all! I love your friendship.", 40, 510); // fairy
          text("It makes me happy to see you two.", 40, 540); // fairy
          break;
        case 4:
          image(squirrel, 0, 0, 360, 640);
          text("...", 40, 510); // squirrel
          break;
        case 5:
          image(bunny, 0, 0, 360, 640);
          text("Are you crying?", 40, 510); // bunny
          break;
        case 6:
          image(squirrel, 0, 0, 360, 640);
          text("No!", 40, 510); // squirrel
          break;
        default:
          text("The fairy, squirrel, and bunny sit together", 40, 510);
          text("contentedly.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
          doubleClick = false;
      }
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Each petal is just so soft!", 40, 510);
    }
  }
  if (saturdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sat5ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I hope I get some sweet dreams", 40, 510);
          text("tonight.", 40, 540);
          break;
        case 10:
          image(fox, 0, 0, 360, 640);
          text("Your food smells good.", 40, 510); // fox
          break;
        case 11:
          image(fox, 0, 0, 360, 640);
          text("I've noticed it before, but yes.", 40, 510); // fox
          break;
        case 20:
          image(fox, 0, 0, 360, 640);
          text("It is special.", 40, 510); // fox
          break;
        case 30:
          image(fairy, 0, 0, 360, 640);
          text("You can try it, if you'd like!", 40, 510); // fairy
          break;
        case 40:
          image(fox, 0, 0, 360, 640);
          text("I'd like to.", 40, 510); // fox
          break;
        case 50:
          image(fox, 0, 0, 360, 640);
          text("This is delicious.", 40, 510); // fo
          break;
        case 60:
          text("The fairy and the fox eat together", 40, 510);
          text("very happily.", 40, 540);
          break;
        default:
          text("Time passed by.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I love the feeling of the water", 40, 510);
      text("when I dip my hands in.", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("Sometimes, I think my flowers perk", 40, 510);
      text("up a little whenever they see me.", 40, 540);
    }
  }
}

function sundayDialogue() {
  if (sundayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sunChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("The forest will keep me safe", 40, 510);
          text("while I sleep in.", 40, 540);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Hmm, what should I make for", 40, 510);
          text("breakfast today, I wonder?", 40, 540);
          break;
        default:
          text("The fairy finished her task and the", 40, 510);
          text("day went on.", 40, 540);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      doubleClick = true;
      switch (sun2ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("Oh, the squirrel and the fox are here!", 40, 510); // fairy
          break;
        case 1:
          doubleClick = false;
          image(squirrel, 0, 0, 360, 640);
          text("Do you think fish tastes like pancakes?", 40, 510); // squirrel
          break;
        case 11:
          image(fox, 0, 0, 360, 640);
          text("Yeah, fish don't taste like pancakes.", 40, 510); // fox
          text("Trust me.", 40, 540); // fox
          break;
        case 2:
          image(fox, 0, 0, 360, 640);
          text("...Probably shouldn't.", 40, 510); // fox
          break;
        case 3:
          image(squirrel, 0, 0, 360, 640);
          text("I think I'll try it! Pancake fishies, here", 40, 510);
          text("I come!", 40, 540); // squirrel
          break;
        case 4:
          image(fox, 0, 0, 360, 640);
          text("...Let me help you.", 40, 510); // fox
          break;
        case 5:
          image(squirrel, 0, 0, 360, 640);
          text("Aww, thanks fox!", 40, 510); // squirrel
          break;
        case 6:
          text("The fox brings the squirrel a fish for", 40, 510);
          text("them to try.", 40, 540);
          break;
        default:
          text("The fairy, fox, and squirrel sit by the", 40, 510);
          text("water together.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
          doubleClick = false;
      }
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("A sip of water for you, a sip of water", 40, 510);
      text("for you. All done!", 40, 540);
    }
  }
  if (sundayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sun3ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("Today's definitely a lazy Sunday.", 40, 510);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Lunch is ready! I have enough for", 40, 510); // fairy
          text("the three of us.", 40, 540); // fairy
          break;
        case 20:
          image(bunny, 0, 0, 360, 640);
          text("It smells really good! Are you sure", 40, 510);
          text("there's enough for me?", 40, 540);
          break;
        case 21:
          image(bunny, 0, 0, 360, 640);
          text("Oh no! You better make sure you have", 40, 510);
          text("enough for yourself first.", 40, 540); // bunny
          break;
        case 30:
          image(fox, 0, 0, 360, 640);
          text("They wouldn't have said so if there", 40, 510); // fox
          text("wasn't.", 40, 540); // fox
          break;
        case 40:
          image(fairy, 0, 0, 360, 640);
          text("Yes! There's enough for all of us, don't", 40, 510); // fairy
          text("worry!", 40, 540); // fairy
          break;
        case 50:
          image(bunny, 0, 0, 360, 640);
          text("Thank you!! I'll enjoy this.", 40, 510); // bunny
          break;
        case 60:
          image(fox, 0, 0, 360, 640);
          text("As will I.", 40, 510); // fox
          break;
        default:
          text("Eventually, the sun began to set.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("The stream always sings the same song, it's", 40, 510);
      text("comforting.", 40, 540);
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I'll plant something new today.", 40, 510);
    }
  }
  if (sundayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sun4ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          image(fairy, 0, 0, 360, 640);
          text("I'll sleep early. I'm feeling", 40, 510);
          text("pretty sleepy.", 40, 540);
          break;
        case 10:
          image(fairy, 0, 0, 360, 640);
          text("Hmm, what should I make for", 40, 510);
          text("dinner?", 40, 540);
          break;
        default:
          text("The fairy finished her task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      doubleClick = true;
      switch (sun5ChatState) {
        case 0:
          image(fairy, 0, 0, 360, 640);
          text("The stars look like they're swimming", 40, 510);
          text("in the water.", 40, 540); // fairy
          break;
        case 1:
          doubleClick = false;
          image(fox, 0, 0, 360, 640);
          text("...Or the water's stealing the sky.", 40, 510); // fox
          break;
        case 11:
          image(fox, 0, 0, 360, 640);
          text("...Doesn't matter. It looks the same", 40, 510); // fox
          text("either way.", 40, 540); // fox
          break;
        case 2:
          image(fox, 0, 0, 360, 640);
          text("True.", 40, 510); // fox
          break;
        default:
          text("The fairy and the fox admired the", 40, 510);
          text("water and the stars together.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
          doubleClick = false;
      }
    } else if (gardenClick) {
      change = true;
      image(fairy, 0, 0, 360, 640);
      text("I love my garden and my garden loves", 40, 510);
      text("me.", 40, 540);
    }
  }
}

// Floating Cursor Text
function floatingCursorCottage() {
  push();
  fill(200, 220, 255);
  noStroke();
  rect(mouseX + 5, mouseY + 10, 70, 25, 6);
  fill(0);
  textSize(8);
  text("Click on an option", mouseX + 12, mouseY + 20);
  text("to continue.", mouseX + 20, mouseY + 28);
  pop();
}

function floatingCursorWater() {
  push();
  fill(200, 220, 255);
  noStroke();
  rect(mouseX + 5, mouseY + 10, 75, 25, 6);
  fill(0);
  textSize(8);
  text("Click on the waterfall", mouseX + 9, mouseY + 20);
  text("to continue.", mouseX + 20, mouseY + 28);

  if (chatEvent) {
    fill(200, 220, 255);
    noStroke();
    rect(mouseX + 5, mouseY + 10, 70, 25, 6);
    fill(0);
    textSize(8);
    text("Click on an option", mouseX + 12, mouseY + 20);
    text("to continue.", mouseX + 20, mouseY + 28);
  }
  pop();
}

function floatingCursorGarden() {
  push();
  fill(200, 220, 255);
  noStroke();
  rect(mouseX + 5, mouseY + 10, 70, 25, 6);
  fill(0);
  textSize(8);
  text("Click on the left", mouseX + 15, mouseY + 20);
  text("bush to continue.", mouseX + 14, mouseY + 28);

  if (chatEvent) {
    fill(200, 220, 255);
    noStroke();
    rect(mouseX + 5, mouseY + 10, 70, 25, 6);
    fill(0);
    textSize(8);
    text("Click on an option", mouseX + 12, mouseY + 20);
    text("to continue.", mouseX + 20, mouseY + 28);
  }
  pop();
}

function timeText() {
  if (mondayMorning) {
    text("Monday Morning", 17, 40);
  }
  if (mondayAfternoon) {
    push();
    textSize(15);
    text("Monday Afternoon", 17, 40);
    pop();
  }
  if (mondayNight) {
    text("Monday Night", 17, 40);
  }
  if (tuesdayMorning) {
    push();
    textSize(15);
    text("Tuesday Morning", 17, 40);
    pop();
  }
  if (tuesdayAfternoon) {
    push();
    textSize(13);
    text("Tuesday Afternoon", 17, 40);
    pop();
  }
  if (tuesdayNight) {
    text("Tuesday Night", 17, 40);

  }
  if (wednesdayMorning) {
    push();
    textSize(13);
    text("Wednesday Morning", 17, 40);
    pop();
  }
  if (wednesdayAfternoon) {
    push();
    textSize(15);
    text("Wednesday", 35, 30);
    text("Afternoon", 35, 50)
    pop();
  }
  if (wednesdayNight) {
    push();
    textSize(15);
    text("Wednesday Night", 17, 40);
    pop();
  }
  if (thursdayMorning) {
    push();
    textSize(15);
    text("Thursday Morning", 17, 40);
    pop();
  }
  if (thursdayAfternoon) {
    push();
    textSize(13);
    text("Thursday Afternoon", 17, 40);
    pop();
  }
  if (thursdayNight) {
    push();
    text("Thursday Night", 17, 40);
    pop();
  }
  if (fridayMorning) {
    push();
    text("Friday Morning", 17, 40);
    pop();
  }
  if (fridayAfternoon) {
    push();
    textSize(15);
    text("Friday Afternoon", 17, 40);
    pop();
  }
  if (fridayNight) {
    push();
    text("Friday Night", 23, 40);
    pop();
  }
  if (saturdayMorning) {
    push();
    textSize(15);
    text("Saturday Morning", 17, 40);
    pop();
  }
  if (saturdayAfternoon) {
    push();
    textSize(13);
    text("Saturday Afternoon", 17, 40);
    pop();
  }
  if (saturdayNight) {
    push();
    textSize(15);
    text("Saturday Night", 17, 40);
    pop();
  }
  if (sundayMorning) {
    push();
    text("Sunday Morning", 17, 40);
    pop();
  }
  if (sundayAfternoon) {
    push();
    textSize(15);
    text("Sunday Afternoon", 17, 40);
    pop();
  }
  if (sundayNight) {
    push();
    text("Sunday Night", 17, 40);
    pop();
  }
}

function mousePressed() {
  
  timeSound();

  // Cottage Menu
  if (showMenu) {
    if ((mouseX < menuOptions[0].w + 17 && mouseX > menuOptions[0].x) && (mouseY > menuOptions[0].y - 7 && mouseY < menuOptions[0].y + 20)) {
      makeFood = true;
      napping = false;
      clickedFood = true;

      if (clickedFood && ((mouseX > menuOptions[1].w + 50 && mouseX < menuOptions[1].x + 78) && (mouseY > menuOptions[1].y - 7 && mouseY < menuOptions[1].y + 20))) {
        monChatState += 0;
        mon2ChatState += 0;
        mon4ChatState += 0;
        tuesChatState += 0;
        tues4ChatState += 0;
        tues2ChatState += 0;
        wedChatState += 0;
        wed2ChatState += 0;
        wed3ChatState += 0;
        wed4ChatState += 0;
        thursChatState += 0;
        thurs2ChatState += 0;
        thurs4ChatState += 0;
        friChatState += 0;
        fri2ChatState += 0;
        fri3ChatState += 0;
        satChatState += 0;
        sat3ChatState += 0;
        sat5ChatState += 0;
        sunChatState += 0;
        sun3ChatState += 0;
        sun4ChatState += 0;
      }
      clickedFood = false;
      
      // Monday Morning
      if (monChatState != 20) {
        monChatState += 10;
      }
      // Monday Afternoon
      if (mondayAfternoon) {
        mon2ChatState += 10;
      }
      // Monday Night
      if (mondayNight && change == false) {
        mon4ChatState += 10;
      }
      // Tuesday Morning
      if (tuesdayMorning && change == false) {
        tuesChatState += 10;
      }
      
      // Tuesday Afternoon
      if (tuesdayAfternoon && tues4ChatState != 20) {
        tues4ChatState += 10;
      }
      
      // Tuesday Night
      if (tuesdayNight && change == false) {
        tues2ChatState += 10;
      }

      // Wednesday Morning
      if (wednesdayMorning && change == false) {
        wedChatState += 10;
      }

      // Wednesday Afternoon
      if (wednesdayAfternoon && wed3ChatState != 3 && change == false) {
        wed3ChatState += 10;
      }

      // Wednesday Night
      if (wednesdayNight && wed4ChatState != 20 && change == false) {
        wed4ChatState += 10;
      }

      // Thursday Morning
      if (thursdayMorning && thursChatState != 20 && change == false) {
        thursChatState += 10;
      }

      // Thursday Afternoon
      if (thursdayAfternoon && change == false) {
        thurs2ChatState += 10;
      }

      // Thursday Night
      if (thursdayNight && change == false) {
        thurs4ChatState += 10;
      }

      // Friday Morning
      if (fridayMorning && friChatState != 2 && change == false) {
        friChatState += 10;
      }

      // Friday Afternoon
      if (fridayAfternoon && fri2ChatState != 20 && change == false) {
        fri2ChatState += 10;
      }

      // Friday Night
      if (fridayNight && fri3ChatState != 2 && change == false) {
        fri3ChatState += 10;
      }

      // Saturday Morning
      if (saturdayMorning && change == false) {
        satChatState += 10;
      }

      // Saturday Afternoon
      if (saturdayAfternoon && change == false) {
        sat3ChatState += 10;
      }

      // Saturday Night
      if (saturdayNight && sat5ChatState != 10 && change == false) {
        sat5ChatState += 10;
      }

      // Sunday Morning
      if (sundayMorning && change == false) {
        sunChatState += 10;
      }

      // Sunday Afternoon
      if (sundayAfternoon && sun3ChatState != 20 && change == false) {
        sun3ChatState += 10;
      }

      // Sunday Night
      if (sundayNight && change == false) {
        sun4ChatState += 10;
      }
  
    } else if (clickedFood == false && ((mouseX > menuOptions[1].w + 50 && mouseX < menuOptions[1].x + 78) && (mouseY > menuOptions[1].y - 7 && mouseY < menuOptions[1].y + 20))) {
      makeFood = false;
      napping = true;
      monChatState++;
      if (mondayAfternoon) {
        mon2ChatState++;
      }
      if (mondayNight && change == false) {
        mon4ChatState++;
      }
      if (tuesdayMorning && change == false) {
        tuesChatState++;
      }
      if (tuesdayAfternoon) {
        tues4ChatState++;
      }
      if (tuesdayNight && tues2ChatState != 2) {
        tues2ChatState++;
      }
      if (wednesdayMorning) {
        wedChatState++;
      }
      if (wednesdayAfternoon && wed3ChatState != 3 && change == false) {
        wed3ChatState++;
      }
      if (wednesdayNight && wed4ChatState != 20) {
        wed4ChatState++;
      }
      if (thursdayMorning && thursChatState != 20) {
        thursChatState++;
      }
      if (thursdayAfternoon) {
        thurs2ChatState++;
      }
      if (thursdayNight && change == false) {
        thurs4ChatState++;
      }
      if (fridayMorning && friChatState != 2 && change == false) {
        friChatState++;
      }
      if (fridayAfternoon && fri2ChatState != 20 && change == false) {
        fri2ChatState++;
      }
      if (fridayNight && fri3ChatState != 2 && change == false) {
        fri3ChatState++;
      }
      if (saturdayMorning && change == false) {
        satChatState++;
      }
      if (saturdayAfternoon && change == false) {
        sat3ChatState++;
      }
      if (saturdayNight && sat5ChatState != 10 && change == false) {
        sat5ChatState++;
      }
      if (sundayMorning && change == false) {
        sunChatState++;
      }
      if (sundayAfternoon && sun3ChatState != 20 && change == false) {
        sun3ChatState++;
      }
      if (sundayNight && change == false) {
        sun4ChatState++;
      }
    }
  } else {
    if ((mouseX < menuOptions[0].w + 17 && mouseX > menuOptions[0].x) && (mouseY > menuOptions[0].y - 7 && mouseY < menuOptions[0].y + 20)) {
      monChatState += 0;
      mon2ChatState += 0;
      mon4ChatState += 0;
      tuesChatState += 0;
      tues4ChatState += 0;
      tues2ChatState += 0;
    }
  }

  if (intro == false && ending1 == false && ending2 == false) {
    clicks();
  }

  // Intro Dialogue
  if (intro) {
    introState++;
    plop.play();
  }

  // Ending Dialogue
  if (ending1) {
    ending1ChatState++;
    if (ending1ChatState <= 1) {
      plop.play();
    }
  }
  if (ending2) {
    ending2ChatState++;
    if (ending2ChatState <= 1) {
      plop.play();
    }
  }

}

function clicks() {
  if ((mouseX > 39 && mouseX < 170) && (mouseY > 299 && mouseY < 429)) {
    if (change) {
      eventNum += 1;
      cottageClick = !cottageClick;
      event = !event;
      napping = false;
      makeFood = false;
      plop.play();
    } else {
      eventNum = eventNum;
      cottageClick = cottageClick;
      event = event;
      plop.play();
    }
  }
  
  if ((mouseX > 220 && mouseX < 323) && (mouseY > 162 && mouseY < 413)) {
    if (change) {
      eventNum += 1;
      waterClick = !waterClick;
      event = !event;
      plop.play();
    } else {
      eventNum = eventNum;
      waterClick = waterClick;
      event = event;
      plop.play();
      if (mondayNight && mon5ChatState != 1) {
        mon5ChatState++;
      }
      if (wednesdayMorning && wed2ChatState != 1) {
        wed2ChatState++;
      }
      if (thursdayAfternoon && thurs3ChatState != 1) {
        thurs3ChatState++;
      }
      if (saturdayAfternoon && sat4ChatState != 1) {
        sat4ChatState++;
      }
      if (sundayMorning && sun2ChatState != 1) {
        sun2ChatState++;
      }
      if (sundayNight && sun5ChatState != 1) {
        sun5ChatState++;
      }
    }
  }
  
  if ((mouseX > 20 && mouseX < 129) && (mouseY > 441 && mouseY < 615)) {
    if (change) {
      eventNum += 1;
      gardenClick = !gardenClick;
      event = !event;
      plop.play();
    } else {
      eventNum = eventNum;
      gardenClick = gardenClick;
      event = event;
      plop.play();
      if (mondayAfternoon && mon3ChatState != 1) {
        mon3ChatState++;
      }
      if (tuesdayMorning && tues3ChatState != 1) {
        tues3ChatState++;
      }
      if (thursdayNight && thurs5ChatState != 1) {
        thurs5ChatState++;
      }
      if (saturdayMorning && sat2ChatState != 1) {
        sat2ChatState++;
      }
    }
  }

  // Dialogue Options
  if (mondayMorning) {
    if (monChatState == 20) {
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 97 && mouseY < 197)) {
        monChatState += 10;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 220 && mouseY < (220 + 100))) {
        monChatState++;
        plop.play();
      }
    }
  }

  if (mondayAfternoon) {
    if (mon3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        mon3ChatState++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        mon3ChatState += 10;
        plop.play();
      }
    }
  }

  if (mondayNight) {
    if (mon5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        mon5ChatState++;
        foxCount++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320) && doubleClick == false) {
        mon5ChatState += 10;
        plop.play();
      }
    }
  }

  if (tuesdayMorning) {
    if (tues3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        tues3ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        tues3ChatState++;
        chime.play();
      }
    }
  }

  if (tuesdayAfternoon) {
    if (tues4ChatState == 20) {
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 97 && mouseY < 197)) {
        tues4ChatState += 10;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 220 && mouseY < (220 + 100))) {
        tues4ChatState += 1;
        plop.play();
      }
    }
  }

  if (tuesdayNight) {
    if (tues2ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        tues2ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        tues2ChatState += 10;
        foxCount++;
        chime.play();
      }
    }
  }

  if (wednesdayMorning) {
    if (wed2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        wed2ChatState++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320) && doubleClick == false) {
        wed2ChatState += 10;
        plop.play();
      }
    }
  }

  if (wednesdayAfternoon) {
    if (wed3ChatState == 3) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        wed3ChatState++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        wed3ChatState += 10;
        plop.play();
      }
    }
  }

  if (wednesdayNight) {
    if (wed4ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        wed4ChatState += 10;
        foxCount++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        wed4ChatState++;
        plop.play();
      }
    }
  }

  if (thursdayMorning) {
    if (thursChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        thursChatState += 10;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        thursChatState++;
        plop.play();
      }
    }
  }

  if (thursdayAfternoon) {
    if (thurs3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        thurs3ChatState++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320) && doubleClick == false) {
        thurs3ChatState += 10;
        plop.play();
      }
    }
  }

  if (thursdayNight) {
    if (thurs5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        thurs5ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        thurs5ChatState++;
        foxCount++;
        chime.play();
      }
    }
  }

  if (fridayMorning) {
    if (friChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        friChatState++;
        chime.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        friChatState += 10;
        plop.play();
      }
    }
  }

  if (fridayAfternoon) {
    if (fri2ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fri2ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fri2ChatState += 10;
        chime.play();
      }
    }
  }

  if (fridayNight) {
    if (fri3ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fri3ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fri3ChatState++;
        foxCount++;
        chime.play();
      }
    }
  }

  if (saturdayMorning) {
    if (sat2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sat2ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sat2ChatState++;
        chime.play();
      }
    }
  }

  if (saturdayAfternoon) {
    if (sat4ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197) && doubleClick == false) {
        sat4ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320) && doubleClick == false) {
        sat4ChatState++;
        chime.play();
      }
    }
  }

  if (saturdayNight) {
    if (sat5ChatState == 10) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sat5ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sat5ChatState += 10;
        foxCount++;
        chime.play();
      }
    }
  }

  if (sundayMorning) {
    if (sun2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197) && doubleClick == false) {
        sun2ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320) && doubleClick == false) {
        sun2ChatState++;
        foxCount++;
        chime.play();
      }
    }
  }

  if (sundayAfternoon) {
    if (sun3ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sun3ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sun3ChatState += 10;
        foxCount++;
        chime.play();
      }
    }
  }

  if (sundayNight) {
    if (sun5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197) && doubleClick == false) {
        sun5ChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320) && doubleClick == false) {
        sun5ChatState++;
        foxCount++;
        chime.play();
      }
    }
  }
  

}


function drawMenu() {
  push();

  fill(200, 220, 255);
  noStroke();
  if (napping == false) {
    rect(menuOptions[0].x, menuOptions[0].y, menuOptions[0].w, menuOptions[0].h/2, 8);
  }
  if (makeFood == false) {
    rect(menuOptions[1].x, menuOptions[1].y, menuOptions[1].w, menuOptions[1].h/2, 8);
  }
  fill(0);
  textSize(13);
  if (napping == false) {
    text(menuOptions[0].label, menuOptions[0].x + 8, menuOptions[0].y + 17);
  }
  if (makeFood == false) {
    text(menuOptions[1].label, menuOptions[1].x + 23, menuOptions[1].y + 17);
  }

  pop();

  // Hover: Make Food
  if (napping == false) {
    push();

    if ((mouseX < menuOptions[0].w + 17 && mouseX > menuOptions[0].x) && (mouseY > menuOptions[0].y - 7 && mouseY < menuOptions[0].y + 20)) {
      fill(80, 100, 255);
      noStroke();
      rect(menuOptions[0].x, menuOptions[0].y, menuOptions[0].w, menuOptions[0].h/2, 8);
      fill(0);
      textSize(13);
      text(menuOptions[0].label, menuOptions[0].x + 8, menuOptions[0].y + 17);
    }

    pop();
  }

  // Hover: Nap
  if (makeFood == false) {
    push();

    if ((mouseX > menuOptions[1].w + 50 && mouseX < menuOptions[1].x + 78) && (mouseY > menuOptions[1].y - 7 && mouseY < menuOptions[1].y + 20)) {
      fill(80, 80, 180);
      noStroke();
      rect(menuOptions[1].x, menuOptions[1].y, menuOptions[1].w, menuOptions[1].h/2, 8);
      fill(0);
      textSize(13);
      text(menuOptions[1].label, menuOptions[1].x + 23, menuOptions[1].y + 17);
    }

    pop();
  }
}

function dialogueChoices() {
  push();

  // Monday Morning Chat Event
  if (mondayMorning) {
    if (monChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Yes, want some?", 120, 150);
      text("Nope, no pancakes. Maybe it's just", 60, 260);
      text("the flowers clinging to me today.", 63, 290);
    }
  }

  // Monday Afternoon Chat Event
  if (mondayAfternoon) {
    if (mon3ChatState == 1) {
      chatEvent = true;
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Of course, you can have some!", 73, 150);
      text("Nope, they're for me.", 110, 270);
    }
  }

  // Monday Night Chat Event
  if (mondayNight) {
    if (mon5ChatState == 1) {
      chatEvent = true;
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Then I'll trust that you'll help me.", 70, 150);
      text("I'm pretty strong, you know. I'll", 75, 260);
      text("manage just fine on my own!", 76, 290);
    }
  }
  

  // Tuesday Morning Chat Event
  if (tuesdayMorning) {
    if (tues3ChatState == 1) {
      chatEvent = true;
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("I was just thinking the same thing!", 63, 150);
      text("Thank you, Mr. Bunny!", 100, 270);
    }
  }

  // Tuesday Afternoon Chat Event
  if (tuesdayAfternoon) {
    if (tues4ChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("You can help me finish it!", 90, 150);
      text("That's the point.", 120, 270);
    }
  }

  // Tuesday Night Chat Event
  if (tuesdayNight) {
    if (tues2ChatState == 2) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("I need my beauty sleep.", 95, 150);
      text("I'm not feeling well.", 110, 270);
    }
  }

  // Wednesday Morning Chat Event
  if (wednesdayMorning) {
    if (wed2ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("My reflection? What would they", 80, 140);
      text("do with it?", 140, 170);
      text("You're kidding.", 130, 270);
    }
  }

  // Wednesday Afternoon Chat Event
  if (wednesdayAfternoon) {
    if (wed3ChatState == 3) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Join me.", 150, 150);
      text("I'm feeling pretty tired.", 100, 270);
    }
  }

  // Wednesday Night Chat Event
  if (wednesdayNight) {
    if (wed4ChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("True! Now that you're here, we", 80, 140);
      text("can share the food.", 110, 170);
      text("You're right. Quiet company is", 80, 260);
      text("enough.", 150, 290);
    }
  }

  // Thursday Morning Chat Event
  if (thursdayMorning) {
    if (thursChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Yes, you did!", 130, 150);
      text("Nope, you didn't.", 120, 270);
    }
  }

  // Thursday Afternoon Chat Event
  if (thursdayAfternoon) {
    if (thurs3ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("I think so. Do you want to go", 80, 140);
      text("look together?", 130, 170);
      text("Yup, at least in the video games", 70, 260);
      text("I play.", 150, 290);
    }
  }

  // Thursday Night Chat Event
  if (thursdayNight) {
    if (thurs5ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Was it because of you?", 100, 150);
      text("Sometimes, I wonder if all this", 80, 260);
      text("effort really matters.", 110, 290);
    }
  }

  // Friday Morning Chat Event
  if (fridayMorning) {
    if (friChatState == 2) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Mmm...5 more minutes.", 110, 150);
      text("Just wait please, Mr. Squirrel!", 80, 270);
    }
  }

  // Friday Afternoon Chat Event
  if (fridayAfternoon) {
    if (fri2ChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("No thanks, I like using my own", 80, 140);
      text("recipe.", 150, 170);
      text("Ooh, yes please! I'd love to try", 80, 260);
      text("some.", 150, 290);
    }
  }

  // Friday Night Chat Event
  if (fridayNight) {
    if (fri3ChatState == 2) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("No thanks, I have a dreamcatching", 63, 140);
      text("spell!", 160, 170);
      text("Really? That'd be very nice!", 90, 270);
    }
  }

  // Saturday Morning Chat Event
  if (saturdayMorning) {
    if (sat2ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Don't you dare!", 120, 150);
      text("You can have my old flowers.", 88, 270);
    }
  }

  // Saturday Afternoon Chat Event
  if (saturdayAfternoon) {
    if (sat4ChatState == 1) {
      push();
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("This place is really beautiful.", 80, 150);
      textSize(14);
      text("I like it when you're both here. You", 80, 245);
      text("two see the world so differently. It's", 80, 275);
      text("refreshing.", 140, 305);
      pop();
    }
  }

  // Saturday Night Chat Event
  if (saturdayNight) {
    if (sat5ChatState == 10) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("You've finally noticed my cooking", 70, 140);
      text("skills.", 160, 170);
      text("It's nothing special.", 110, 270);
    }
  }

  // Sunday Morning Chat Event
  if (sundayMorning) {
    if (sun2ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Probably not.", 130, 150);
      text("Try it!", 150, 270);
    }
  }

  // Sunday Afternoon Chat Event
  if (sundayAfternoon) {
    if (sun3ChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Hmm...actually, I'm not sure.", 90, 150);
      text("Yes, of course! There's enough for", 65, 260);
      text("all of us!", 140, 290);
    }
  }

  // Sunday Night Chat Event
  if (sundayNight) {
    if (sun5ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("That doesn't even make any sense.", 60, 150);
      text("Hmm. Depends on how you see it, I", 60, 260);
      text("guess.", 160, 290);
    }
  }
  

  pop();
}

function dialogueHover() {
  push();

  if (mondayMorning) {
    if (monChatState == 20) {
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 97 && mouseY < (97 + 100))) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Yes, want some?", 120, 150);
      }
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 220 && mouseY < (220 + 100))) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Nope, no pancakes. Maybe it's just", 60, 260);
        text("the flowers clinging to me today.", 63, 290);
      }
    }
  }

  if (mondayAfternoon) {
    if (mon3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Of course, you can have some!", 73, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Nope, they're for me.", 110, 270);
      }
    }
  }

  if (mondayNight) {
    if (mon5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Then I'll trust that you'll help me.", 70, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("I'm pretty strong, you know. I'll", 75, 260);
        text("manage just fine on my own!", 76, 290);
      }
    }
  }
  

  if (tuesdayMorning) {
    if (tues3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("I was just thinking the same thing!", 63, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Thank you, Mr. Bunny!", 100, 270);
      }
    }
  }

  if (tuesdayAfternoon) {
    if (tues4ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("You can help me finish it!", 90, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("That's the point.", 120, 270);
      }
    }
  }

  if (tuesdayNight) {
    if (tues2ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("I need my beauty sleep.", 95, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("I'm not feeling well.", 110, 270);
      }
    }
  }

  if (wednesdayMorning) {
    if (wed2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("My reflection? What would they", 80, 140);
        text("do with it?", 140, 170);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("You're kidding.", 130, 270);
      }
    }
  }

  if (wednesdayAfternoon) {
    if (wed3ChatState == 3) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Join me.", 150, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("I'm feeling pretty tired.", 100, 270);
      }
    }
  }

  if (wednesdayNight) {
    if (wed4ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("True! Now that you're here, we", 80, 140);
        text("can share the food.", 110, 170);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("You're right. Quiet company is", 80, 260);
        text("enough.", 150, 290);
      }
    }
  }

  if (thursdayMorning) {
    if (thursChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Yes, you did!", 130, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Nope, you didn't.", 120, 270);
      }
    }
  }

  if (thursdayAfternoon) {
    if (thurs3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("I think so. Do you want to go", 80, 140);
        text("look together?", 130, 170);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Yup, at least in the video games", 70, 260);
        text("I play.", 150, 290);
      }
    }
  }

  if (thursdayNight) {
    if (thurs5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Was it because of you?", 100, 150);

      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Sometimes, I wonder if all this", 80, 260);
        text("effort really matters.", 110, 290);
      }
    }
  }

  if (fridayMorning) {
    if (friChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Mmm...5 more minutes.", 110, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Just wait please, Mr. Squirrel!", 80, 270);
      }
    }
  }

  if (fridayAfternoon) {
    if (fri2ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("No thanks, I like using my own", 80, 140);
        text("recipe.", 150, 170);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Ooh, yes please! I'd love to try", 80, 260);
        text("some.", 150, 290);
      }
    }
  }

  if (fridayNight) {
    if (fri3ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("No thanks, I have a dreamcatching", 63, 140);
        text("spell!", 160, 170);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Really? That'd be very nice!", 90, 270);
      }
    }
  }

  if (saturdayMorning) {
    if (sat2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Don't you dare!", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("You can have my old flowers.", 88, 270);
      }
    }
  }

  if (saturdayAfternoon) {
    if (sat4ChatState == 1) {
      push();
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("This place is really beautiful.", 80, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        textSize(14);
        text("I like it when you're both here. You", 80, 245);
        text("two see the world so differently. It's", 80, 275);
        text("refreshing.", 140, 305);
      }
    pop();
    }
  }

  if (saturdayNight) {
    if (sat5ChatState == 10) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("You've finally noticed my cooking", 70, 140);
        text("skills.", 160, 170);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("It's nothing special.", 110, 270);
      }
    }
  }

  if (sundayMorning) {
    if (sun2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Probably not.", 130, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Try it!", 150, 270);
      }
    }
  }

  if (sundayAfternoon) {
    if (sun3ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Hmm...actually, I'm not sure.", 90, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Yes, of course! There's enough for", 65, 260);
        text("all of us!", 140, 290);
      }
    }
  }

  if (sundayNight) {
    if (sun5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("That doesn't even make any sense.", 60, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Hmm. Depends on how you see it, I", 60, 260);
        text("guess.", 160, 290);
      }
    }
  }

  pop();
}

function dayStates() {
  if (mondayMorning || tuesdayMorning || wednesdayMorning || thursdayMorning || fridayMorning || saturdayMorning || sundayMorning) {
    morning = true;
    afternoon = false;
    night = false;
  } else if (mondayAfternoon || tuesdayAfternoon || wednesdayAfternoon || thursdayAfternoon || fridayAfternoon || saturdayAfternoon || sundayAfternoon) {
    morning = false;
    afternoon = true;
    night = false;
  } else if (mondayNight || tuesdayNight || wednesdayNight || thursdayNight || fridayNight || saturdayNight || sundayNight) {
    morning = false;
    afternoon = false;
    night = true;
  }
}

function timeSound() {
  /*
  if (eventNum == 4 || eventNum == 9 || eventNum == 15 || eventNum == 20 || eventNum == 27 || eventNum == 33 || eventNum == 39) {
    if (forestSound.isPlaying()) {
      forestSound.stop();
    }
    forestNightSound.play();
  } else {
    if (forestNightSound.isPlaying()) {
      forestNightSound.stop();
    }
    forestSound.play();
  }
    */
  // forestNightSound.play();
  // twitter.play();
  // twitter.loop();
  unbound.play();
  unbound.loop();
  unbound.volume(0.5);
}

// Asset Hovers
function cottageHover(x, y) {
  push();
  if ((x > 41 && x < 170) && (y > 299 && y < 429)) {
    if (morning) {
      image(cottage, 0, 0, 360, 640);
      cottage.filter(POSTERIZE, 15);
    } else if (afternoon) {
      image(afternoonCottage, 0, 0, 360, 640);
      afternoonCottage.filter(POSTERIZE, 10);
    } else if (night) {
      image(nightCottage, 0, 0, 360, 640);
      nightCottage.filter(POSTERIZE, 10);
    }
  }
  pop();
}

function gardenHover(x, y) {
  push();
  if ((x > 20 && x < 129) && (y > 441 && y < 615)) {
    if (morning) {
      image(garden, 0, 0, 360, 640);
      garden.filter(POSTERIZE, 11);
    } else if (afternoon) {
      image(afternoonGarden, 0, 0, 360, 640);
      afternoonGarden.filter(POSTERIZE, 10);
    } else if (night) {
      image(nightGarden, 0, 0, 360, 640);
      nightGarden.filter(POSTERIZE, 10);
    }
  }
  pop();
}

function waterHover(x, y) {
  push();
  if ((x > 221 && x < 317) && (y > 173 && y < 411)) {
    if (morning || afternoon) {
      image(water, 0, 0, 360, 640);
      water.filter(POSTERIZE, 10);
    } else if (night) {
      image(nightWater, 0, 0, 360, 640);
      nightWater.filter(POSTERIZE, 10);
    }
  }
  pop();
}

// Particle Classes & Functions
class Particle {
  constructor() {
    this.x = random(0, 400);
    this.y = -5;
    this.vy = random(-2, -10); // random upward velocity
    this.alpha = 255; // full opacity
  }

  update() {
    this.y -= this.vy; // move the particle upward
    this.alpha -= 2; // fade out 
  }

  show() {
    noStroke();
    fill(0, 150, 255, this.alpha);
    ellipse(this.x, this.y, 3, 5);
  }

  isFinished() {
    return this.alpha <= 0; // Particle is finished when it's fully transparent
  }
}

function rain() {
  push();
  // add a new particle to the system every frame
  particles.push(new Particle());
  
  for (let n = 0; n < 2; n++) {
    particles.push(new Particle());
  }

  // loop through each particle in reverse order
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // update the particle's position
    particles[i].show(); // display the particle

    // remove the particle from the array if it's finished
    if (particles[i].isFinished()) {
      particles.splice(i, 1);
    }
  }
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
  }
  pop();
}

class Sparkle {
  constructor(x, y, vx, vy) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.size = random(3, 6);
    this.hue = random(40, 60);
    this.life = this.maxLife = random(35, 65);
    this.twirl = random(-0.06, 0.06);
  }
  update() {
    this.vel.x *= 0.98;
    this.vel.y = this.vel.y * 0.98 - 0.004;
    this.pos.add(this.vel);
    this.size *= 0.994;
    this.hue += this.twirl * 180 / PI;
    this.life--;
  }
  display() {
    push();
    const a = map(this.life, 0, this.maxLife, 0, 255);
    noStroke();
    if (food) {
      fill(255, 255, 255, a * 0.35);
    } else if (nap) {
      fill(0, 0, 255, a * 0.35);
    } else {
      fill(255, 200, 203, a * 0.35);
    }
    ellipse(this.pos.x, this.pos.y, this.size * 3, this.size * 3);
    if (food) {
      fill(255, 255, 255, a);
    } else if (nap) {
      fil(0, 0, 255, a);
    } else {
      fill(255, 192, 203, 100, a);
    }
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    pop();
  }
  isDead() {
    return this.life <= 0 || this.size < 0.5;
  }
}

function showHints() {
  showHint = !showHint;

  const btn = document.getElementById('hintBtn');

  if (showHint) {
    btn.textContent = 'Turn Off Hints';
  } else {
    btn.textContent = 'Turn On Hints';
  }
}

function sparkleEvent(a) {
  for (let i = 0; i < 1; i++) {
    const px = a.x + random(-8, a.w + 8);
    const py = a.y + random(-8, a.h + 8);
    const ang = random(TWO_PI);
    const speed = random(0.4, 1.6);
    const vx = cos(ang) * speed * 0.8;
    const vy = sin(ang) * speed * 0.3 - random(0.2, 0.6);
    sparkles.push(new Sparkle(px, py, vx, vy));
  }
}

// Other HTML Buttons

function togglePause() {
  isPaused = !isPaused;
  const btn = document.getElementById('playBtn');
  if (isPaused) {
    noLoop();
    btn.textContent = 'Play';
  } else {
    loop();
    btn.textContent = 'Pause';
  }
}

function openSupport() {
  window.open('https://wwww.lorrettalu.github.io', '_blank');
}