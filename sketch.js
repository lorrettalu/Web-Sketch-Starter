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
  dialogue = loadImage("assets/Untitled_Artwork 6.png");
  
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
  }

  // Day States
  dayStates();

  // Time
  image(timeImage, 0, 0, 360, 640);
  
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
      sparkleEvent(assets[1]);
    } else if (mondayNight) {
      sparkleEvent(assets[2]);
    } else if (tuesdayMorning) {
      sparkleEvent(assets[1]);
    } else if (tuesdayAfternoon) {
      food = true;
      sparkleEvent(assets[0]);
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
  
  if (event == false) {
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
  
  if (textEvent || intro) {
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
    // Default Dialogue
    change = true;
    if (waterClick) {
      text("I'll go get some water!", 40, 510);
    } else if (cottageClick) {
      text("I can make food or nap at home.", 40, 510);
      text("Which one should I do?", 40, 540);
    } else if (gardenClick) {
      text("I'll go tend to my flowers!", 40, 510);
    }
  }

  // Intro Dialogue
  if (intro) {
    event = true;
    switch (introState) {
      case 0:
        text("I've been on my own for so long. I really", 40, 510);
        text("miss my friends and family.", 40, 540);
        break;
      case 1:
        text("But maybe this week will be different.", 40, 510);
        text("Seven days and just three small steps", 40, 540);
        text("each day.", 40, 570);
        break;
      case 2:
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I'll just close my eyes... only for a minute.", 40, 510);
          break;
        case 20:
          text("That smell... is it pancakes? It's pancakes,", 40, 510);
          text("right?", 40, 540); // squirrel
          break;
        case 10:
          text("As I prepare breakfast, I see a squirrel", 40, 510);
          text("approach me!", 40, 540);
          break;
        case 30:
          text("Pancakes?! For me?! You're the best!", 40, 510);
          break;
        case 40:
          text("The squirrel happily munches on the", 40, 510);
          text("pancakes.", 40, 540);
          break;
        case 50:
          text("This is so delicious! I'm definitely", 40, 510);
          text("coming back!!", 40, 540);
          break;
        case 60:
          text("Well, thanks for talking to me. See you", 40, 510);
          text("soon, fairy friend!", 40, 540);
          break;
        case 21:
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
      text("Every drop of water counts!", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("These sprouts look so proud of", 40, 510);
      text("themselves.", 40, 540);
    }
  }
  if (mondayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch(mon2ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I will take a tiny sleep.", 40, 510);
          break;
        case 10:
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
      text("Ah, I love how the water cools my hands.", 40, 510);
      
    } else if (gardenClick) {
      change = false;
      switch(mon3ChatState) {
        case 0:
          text("Looks like my carrots are ready!", 40, 510);
          break;
        case 1:
          text("Mmm, are those carrots? Can I have", 40, 510);
          text("some?", 40, 540); // bunny
          break;
        case 2:
          text("Yes! You're the best, Miss Fairy!", 40, 510);
          break;
        case 3:
          text("You won't regret this, Miss Fairy. I assure", 40, 510);
          text("you, I have the best seed collection in", 40, 540);
          text("the world! I'll be sure to give you some.", 40, 570);
          break;
        case 11:
          text("Aww. That makes sense, they are your", 40, 510);
          text("carrots after all.", 40, 540);
          break;
        default:
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("The pillow's calling my name again.", 40, 510);
          break;
        case 10:
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
      switch(mon5ChatState) {
        case 0:
          text("Oof, I put a lot of water in this bucket", 40, 510);
          text("by accident.", 40, 540);
          break;
        case 1:
          text("Be careful with that.", 40, 510); // fox
          break;
        case 2:
          text("Maybe.", 40, 510);
          break;
        case 11:
          text("If you say so.", 40, 510);
          break;
        default:
          text("After making sure you get the water", 40, 510);
          text("inside, the fox disappears into the night.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
      }
      
    } else if (gardenClick) {
      change = true;
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I love sleeping to the sound of rain.", 40, 510);
          break;
        case 10:
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
      text("There's extra water in my bucket because", 40, 510);
      text("of the rain. Free water!", 40, 540);
    } else if (gardenClick) {
      change = false;
      switch(tues3ChatState) {
        case 0:
          text("I love the smell of the earth when it rains.", 40, 510);
          break;
        case 1:
          text("Mmm, your flowers smell super nice with", 40, 510);
          text("the rain today.", 40, 540); // bunny;
          break;
        case 2:
          text("Yes, like the flowers just took a bath!", 40, 510); // bunny;
          break;
        case 3:
          text("Mmm, smells like pancakes...", 40, 510); // squirrel
          break;
        case 4:
          text("Where'd you come from?! And you're", 40, 510);
          text("always thinking of food.", 40, 540); // bunny
          break;
        case 5:
          text("...Is that bad?", 40, 510); // squirrel
          break;
        case 11:
          text("We're on the same wavelength!", 40, 510); // bunny
          break;
        default:
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("Time for some sweet dreams.", 40, 510);
          break;
        case 10:
          text("I'll make a sandwich today!", 40, 510);
          break;
        case 20:
          text("Wow, that sandwich is bigger than", 40, 510);
          text("my head.", 40, 540); // bunny
          break;
        case 30:
          text("Don't mind if I do!", 40, 510);
          break;
        case 21:
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
      text("The stream always sings the same song.", 40, 510);
      text("It's comforting.", 40, 540);
    } else if (gardenClick) {
      change = true;
      text("My lovely little flowers are growing!", 40, 510);
    }
  }

  if (tuesdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (tues2ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I'll sleep a little early tonight.", 40, 510);
          break;
        case 2:
          text("Sleeping early?", 40, 510); // fox
          break;
        case 3:
          text("...Can't argue with that.", 40, 510); // fox
          break;
        case 4:
          text("...", 40, 510); // fairy
          break;
        case 12:
          text("Then rest well.", 40, 510);
          break;
        case 10:
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
      text("I wonder if I woke the fishies up.", 40, 510);
    } else if (gardenClick) {
      change = true;
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I'm gonna sleep in, as good as a bear.", 40, 510);
          break;
        case 10:
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
      switch (wed2ChatState) {
        case 0:
          text("I'll head to the stream and fetch some", 40, 510);
          text("water to be prepared for the day.", 40, 540);
          break;
        case 1:
          text("Careful, if you lean in too far, the", 40, 510);
          text("fish can steal your reflection.", 40, 540); // squirrel
          break;
        case 2:
          text("Probably trade it in for some pancakes", 40, 510);
          text("Fish love yummy things, you know.", 40, 540);
          break;
        case 3:
          text("...Do they really?", 40, 510); // fairy
          break;
        case 4:
          text("Well...they might. Better safe than sorry!", 40, 510);
          break;
        case 11:
          text("I'm not! You better not try it though.", 40, 510);
          break;
        default:
          text("The squirrel gave a cheeky grin and ran", 40, 510);
          text("off into the woods.", 40, 540);
          chatEvent = false;
          change = true;
          event = false;
      }
    } else if (gardenClick) {
      change = true;
      text("Now, you guys can grow as tall as me!", 40, 510);
    }
  }
  if (wednesdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (wed3ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 2:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Wednesday afternoon and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Wednesday afternoon and I garden.", 40, 510);
    }
  }
  if (wednesdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (wed4ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 20:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Wednesday night and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Wednesday night and I garden.", 40, 510);
    }
  }
}

function thursdayDialogue() {
  if (thursdayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (thursChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 20:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Thursday morning and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Thursday morning and I garden.", 40, 510);
    }
  }
  if (thursdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (thurs2ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      switch (thurs3ChatState) {
        case 0:
          text("It is Thursday afternoon and I got water.", 40, 510);
          break;
        case 1:
          text("Which option will you choose?", 40, 510);
          break;
        default:
          text("I chose this option", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
      }
    } else if (gardenClick) {
      change = true;
      text("It is Thursday afternoon and I garden.", 40, 510);
    }
  }
  if (thursdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (thurs4ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Thursday night and I got water.", 40, 510);
    } else if (gardenClick) {
      change = false;
      switch (thurs5ChatState) {
        case 0:
          text("It is Thursday night and I garden.", 40, 510);
          break;
        case 1:
          text("Which option will you choose?", 40, 510);
          break;
        default:
          text("I chose this option", 40, 510);
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 2:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Friday morning and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Friday morning and I garden.", 40, 510);
    }
  }
  if (fridayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (fri2ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 20:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Friday afternoon and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Friday afternoon and I garden.", 40, 510);
    }
  }
  if (fridayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (fri3ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 2:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Friday night and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Friday night and I garden.", 40, 510);
    }
  }
}

function saturdayDialogue() {
  if (saturdayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (satChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Saturday morning and I got water.", 40, 510);
    } else if (gardenClick) {
      change = false;
      switch (sat2ChatState) {
        case 0:
          text("It is Saturday morning and I garden.", 40, 510);
          break;
        case 1:
          text("Which option will you choose?", 40, 510);
          break;
        default:
          text("I chose this option", 40, 510);
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
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      switch (sat4ChatState) {
        case 0:
          text("It is Saturday afternoon and I got water.", 40, 510);
          break;
        case 1:
          text("Which option will you choose?", 40, 510);
          break;
        default:
          text("I chose this option", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
      }
    } else if (gardenClick) {
      change = true;
      text("It is Saturday afternoon and I garden.", 40, 510);
    }
  }
  if (saturdayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sat5ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 20:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Saturday night and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Saturday night and I garden.", 40, 510);
    }
  }
}

function sundayDialogue() {
  if (sundayMorning) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sunChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      switch (sun2ChatState) {
        case 0:
          text("It is Sunday morning and I got water.", 40, 510);
          break;
        case 1:
          text("Which option will you choose?", 40, 510);
          break;
        default:
          text("I chose this option", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
      }
    } else if (gardenClick) {
      change = true;
      text("It is Sunday morning and I garden.", 40, 510);
    }
  }
  if (sundayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sun3ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        case 20:
          text("Something special happens.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Sunday afternoon and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Sunday afternoon and I garden.", 40, 510);
    }
  }
  if (sundayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (sun4ChatState) {
        case 0:
          text("I can make food or nap at home.", 40, 510);
          text("Which one should I do?", 40, 540);
          break;
        case 1:
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
      }
    } else if (waterClick) {
      change = false;
      switch (sun5ChatState) {
        case 0:
          text("It is Sunday night and I got water.", 40, 510);
          break;
        case 1:
          text("Which option will you choose?", 40, 510);
          break;
        default:
          text("I chose this option", 40, 510);
          chatEvent = false;
          change = true;
          event = false;
      }
    } else if (gardenClick) {
      change = true;
      text("It is Sunday night and I garden.", 40, 510);
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
      handleOption("Make Food");
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
      if (mondayNight) {
        mon4ChatState += 10;
      }
      // Tuesday Morning
      if (tuesdayMorning) {
        tuesChatState += 10;
      }
      
      // Tuesday Afternoon
      if (tuesdayAfternoon && tues4ChatState != 20) {
        tues4ChatState += 10;
      }
      
      // Tuesday Night
      if (tuesdayNight) {
        tues2ChatState += 10;
      }

      // Wednesday Morning
      if (wednesdayMorning) {
        wedChatState += 10;
      }

      // Wednesday Afternoon
      if (wednesdayAfternoon) {
        wed3ChatState += 10;
      }

      // Wednesday Night
      if (wednesdayNight) {
        wed4ChatState += 10;
      }

      // Thursday Morning
      if (thursdayMorning) {
        thursChatState += 10;
      }

      // Thursday Afternoon
      if (thursdayAfternoon) {
        thurs2ChatState += 10;
      }

      // Thursday Night
      if (thursdayNight) {
        thurs4ChatState += 10;
      }

      // Friday Morning
      if (fridayMorning) {
        friChatState += 10;
      }

      // Friday Afternoon
      if (fridayAfternoon) {
        fri2ChatState += 10;
      }

      // Friday Night
      if (fridayNight) {
        fri3ChatState += 10;
      }

      // Saturday Morning
      if (saturdayMorning) {
        satChatState += 10;
      }

      // Saturday Afternoon
      if (saturdayAfternoon) {
        sat3ChatState += 10;
      }

      // Saturday Night
      if (saturdayNight) {
        sat5ChatState += 10;
      }

      // Sunday Morning
      if (sundayMorning) {
        sunChatState += 10;
      }

      // Sunday Afternoon
      if (sundayAfternoon) {
        sun3ChatState += 10;
      }

      // Sunday Night
      if (sundayNight) {
        sun4ChatState += 10;
      }
  
    } else if (clickedFood == false && ((mouseX > menuOptions[1].w + 50 && mouseX < menuOptions[1].x + 78) && (mouseY > menuOptions[1].y - 7 && mouseY < menuOptions[1].y + 20))) {
      handleOption("Nap");
      monChatState++;
      if (mondayAfternoon) {
        mon2ChatState++;
      }
      if (mondayNight) {
        mon4ChatState++;
      }
      if (tuesdayMorning) {
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
      if (wednesdayAfternoon && wed3ChatState != 10) {
        wed3ChatState++;
      }
      if (wednesdayNight) {
        wed4ChatState++;
      }
      if (thursdayMorning) {
        thursChatState++;
      }
      if (thursdayAfternoon) {
        thurs2ChatState++;
      }
      if (thursdayNight) {
        thurs4ChatState++;
      }
      if (fridayMorning) {
        friChatState++;
      }
      if (fridayAfternoon) {
        fri2ChatState++;
      }
      if (fridayNight) {
        fri3ChatState++;
      }
      if (saturdayMorning) {
        satChatState++;
      }
      if (saturdayAfternoon) {
        sat3ChatState++;
      }
      if (saturdayNight) {
        sat5ChatState++;
      }
      if (sundayMorning) {
        sunChatState++;
      }
      if (sundayAfternoon) {
        sun3ChatState++;
      }
      if (sundayNight) {
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

  if (intro == false) {
    clicks();
  }

  // Intro Dialogue
  if (intro) {
    introState++;
    plop.play();
  }

}

function clicks() {
  if ((mouseX > 39 && mouseX < 170) && (mouseY > 299 && mouseY < 429)) {
    if (change) {
      eventNum += 1;
      cottageClick = !cottageClick;
      event = !event;
      plop.play();
    } else {
      eventNum = eventNum;
      cottageClick = cottageClick;
      event = event;
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
      if (mondayNight && mon5ChatState != 1) {
        mon5ChatState++;
      }
      if (wednesdayMorning && wed2ChatState != 1) {
        wed2ChatState++;
      }
      if (thursdayAfternoon) {
        thurs3ChatState++;
      }
      if (saturdayAfternoon) {
        sat4ChatState++;
      }
      if (sundayMorning) {
        sun2ChatState++;
      }
      if (sundayNight) {
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
      if (mondayAfternoon && mon3ChatState != 1) {
        mon3ChatState++;
      }
      if (tuesdayMorning && tues3ChatState != 1) {
        tues3ChatState++;
      }
      if (thursdayNight) {
        thurs5ChatState++;
      }
      if (saturdayMorning) {
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
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
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
        plop.play();
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
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        wed2ChatState += 10;
        plop.play();
      }
    }
  }

  if (wednesdayAfternoon) {
    if (wed3ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        wed3ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        wed3ChatState++;
        plop.play();
      }
    }
  }

  if (wednesdayNight) {
    if (wed4ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        wed4ChatState++;
        plop.play();
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
        thursChatState++;
        plop.play();
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
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        thurs3ChatState++;
        plop.play();
      }
    }
  }

  if (thursdayNight) {
    if (thurs5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        thurs5ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        thurs5ChatState++;
        plop.play();
      }
    }
  }

  if (fridayMorning) {
    if (friChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        friChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        friChatState++;
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
        fri2ChatState++;
        plop.play();
      }
    }
  }

  if (fridayNight) {
    if (fri3ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fri3ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fri3ChatState++;
        plop.play();
      }
    }
  }

  if (saturdayMorning) {
    if (sat2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sat2ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sat2ChatState++;
        plop.play();
      }
    }
  }

  if (saturdayAfternoon) {
    if (sat4ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sat4ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sat4ChatState++;
        plop.play();
      }
    }
  }

  if (saturdayNight) {
    if (sat5ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sat5ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sat5ChatState++;
        plop.play();
      }
    }
  }

  if (sundayMorning) {
    if (sun2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sun2ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sun2ChatState++;
        plop.play();
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
        sun3ChatState++;
        plop.play();
      }
    }
  }

  if (sundayNight) {
    if (sun5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        sun5ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        sun5ChatState++;
        plop.play();
      }
    }
  }
  

}


function drawMenu() {
  push();

  fill(200, 220, 255);
  noStroke();
  rect(menuOptions[0].x, menuOptions[0].y, menuOptions[0].w, menuOptions[0].h/2, 8);
  rect(menuOptions[1].x, menuOptions[1].y, menuOptions[1].w, menuOptions[1].h/2, 8);
  fill(0);
  textSize(13);
  text(menuOptions[0].label, menuOptions[0].x + 8, menuOptions[0].y + 17);
  text(menuOptions[1].label, menuOptions[1].x + 23, menuOptions[1].y + 17);

  pop();

  // Hover: Make Food
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

  // Hover: Nap
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

function handleOption(label) {
  if (label === "Make Food") {
    makeFood = true;
    napping = false;
  }
  if (label === "Nap") {
    napping = true;
    makeFood = false;
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
      text("You can help me finish it!", 80, 150);
      text("That's the point.", 120, 280);
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
    if (wed3ChatState == 2) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
    }
  }

  // Saturday Afternoon Chat Event
  if (saturdayAfternoon) {
    if (sat4ChatState == 1) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
    }
  }

  // Saturday Night Chat Event
  if (saturdayNight) {
    if (sat5ChatState == 20) {
      fill(200, 220, 255);
      noStroke();
      rect(48, 97, 270, 100, 8);
      rect(48, 220, 270, 100, 8);
      fill(0);
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
        text("You can help me finish it!", 80, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("That's the point.", 120, 280);
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
    if (wed3ChatState == 2) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
      }
    }
  }

  if (saturdayAfternoon) {
    if (sat4ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
      }
    }
  }

  if (saturdayNight) {
    if (sat5ChatState == 20) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 97, 270, 100, 8);
        fill(0);
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
        text("Option 1", 120, 150);
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        fill(80, 100, 255);
        noStroke();
        rect(48, 220, 270, 100, 8);
        fill(0);
        text("Option 2", 120, 260);
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
      cottage.filter(GRAY);
    } else if (afternoon) {
      image(afternoonCottage, 0, 0, 360, 640);
      afternoonCottage.filter(GRAY);
    } else if (night) {
      image(nightCottage, 0, 0, 360, 640);
      nightCottage.filter(GRAY);
    }
  }
  pop();
}

function gardenHover(x, y) {
  push();
  if ((x > 20 && x < 129) && (y > 441 && y < 615)) {
    if (morning) {
      image(garden, 0, 0, 360, 640);
      garden.filter(GRAY);
    } else if (afternoon) {
      image(afternoonGarden, 0, 0, 360, 640);
      afternoonGarden.filter(GRAY);
    } else if (night) {
      image(nightGarden, 0, 0, 360, 640);
      nightGarden.filter(GRAY);
    }
  }
  pop();
}

function waterHover(x, y) {
  push();
  if ((x > 221 && x < 317) && (y > 173 && y < 411)) {
    if (morning || afternoon) {
      image(water, 0, 0, 360, 640);
      water.filter(GRAY);
    } else if (night) {
      image(nightWater, 0, 0, 360, 640);
      nightWater.filter(GRAY);
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
      fill(255, 215, 0, a * 0.35);
    }
    ellipse(this.pos.x, this.pos.y, this.size * 3, this.size * 3);
    if (food) {
      fill(255, 255, 255, a);
    } else if (nap) {
      fil(0, 0, 255, a);
    } else {
      fill(218, 165, 32, 100, a);
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