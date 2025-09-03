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
let friChatState = 0;
let satChatState = 0;
let sunChatState = 0;

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
}

function setup() {
  const c = createCanvas(360, 640);
  c.parent('sketch');
  noCursor();
  
  // Ambience
  timeSound();

  // Website: Sound
  if (typeof masterVolume === 'function') masterVolume(masterLevel);

  // MAT111WN
  circleColor = color(255, 165, 0, 200);
  
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
          text("I nap.", 40, 510);
          break;
        case 20:
          text("Squirrel: That smell... is it pancakes?", 40, 510);
          text("It's pancakes, right?", 40, 540);
          break;
        case 10:
          text("As I prepare breakfast, I see a squirrel", 40, 510);
          text("approach me!", 40, 540);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Monday morning and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Monday morning and I garden.", 40, 510);
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
      text("It is Monday afternoon and I got water.", 40, 510);
      
    } else if (gardenClick) {
      change = false;
      switch(mon3ChatState) {
        case 0:
          text("It is Monday afternoon and I garden.", 40, 510);
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
  if (mondayNight) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch(mon4ChatState) {
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
      switch(mon5ChatState) {
        case 0:
          text("It is Monday night and I got water.", 40, 510);
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
      text("It is Monday night and I garden.", 40, 510);
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
          text("I nap.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Tuesday morning and I got water.", 40, 510);
    } else if (gardenClick) {
      change = false;
      switch(tues3ChatState) {
        case 0:
          text("It is Tuesday morning and I garden.", 40, 510);
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
  if (tuesdayAfternoon) {
    if (cottageClick || showMenu) {
      showMenu = true;
      switch (tues4ChatState) {
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
      text("It is Tuesday afternoon and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Tuesday afternoon and I garden.", 40, 510);
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
          text("I nap.", 40, 510);
          break;
        case 2:
          text("Something special happens.", 40, 510);
          break;
        case 10:
          text("I make food.", 40, 510);
          break;
        default:
          text("I finish my task.", 40, 510);
          change = true;
          event = false;
          showMenu = false;
      }
    } else if (waterClick) {
      change = true;
      text("It is Tuesday afternoon and I got water.", 40, 510);
    } else if (gardenClick) {
      change = true;
      text("It is Tuesday afternoon and I garden.", 40, 510);
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
      switch (wed2ChatState) {
        case 0:
          text("It is Wednesday morning and I got water.", 40, 510);
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
      text("It is Wednesday morning and I garden.", 40, 510);
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
      if (mondayNight) {
        mon5ChatState++;
      }
      if (wednesdayMorning) {
        wed2ChatState++;
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
      if (mondayAfternoon) {
        mon3ChatState++;
      }
      if (tuesdayMorning) {
        tues3ChatState++;
      }
    }
  }

  // Dialogue Options
  if (mondayMorning) {
    if (monChatState == 20) {
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 97 && mouseY < 197)) {
        monChatState += 10;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < (270 + 48)) && (mouseY > 220 && mouseY < (220 + 100))) {
        monChatState += 10;
        plop.play();
      }
    }
  }

  if (mondayAfternoon) {
    if (mon3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        mon3ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        mon3ChatState++;
        plop.play();
      }
    }
  }

  if (mondayNight) {
    if (mon5ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        mon5ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        mon5ChatState++;
        plop.play();
      }
    }
  }

  if (tuesdayMorning) {
    if (tues3ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        tues3ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        tues3ChatState++;
        plop.play();
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
        tues4ChatState += 10;
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
        tues2ChatState++;
        plop.play();
      }
    }
  }

  if (wednesdayMorning) {
    if (wed2ChatState == 1) {
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 97 && mouseY < 197)) {
        tues2ChatState++;
        plop.play();
      }
      if ((mouseX > 48 && mouseX < 318) && (mouseY > 220 && mouseY < 320)) {
        tues2ChatState++;
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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
      text("Option 1", 120, 150);
      text("Option 2", 120, 260);
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

  if (mondayNight) {
    if (mon5ChatState == 1) {
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
  

  if (tuesdayMorning) {
    if (tues3ChatState == 1) {
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

  if (tuesdayAfternoon) {
    if (tues4ChatState == 20) {
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

  if (tuesdayNight) {
    if (tues2ChatState == 2) {
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

  if (wednesdayMorning) {
    if (wed2ChatState == 1) {
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