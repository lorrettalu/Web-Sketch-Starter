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

// Integer Variables
let eventNum = 0;

// Array Variables
let particles = []; // Array to hold all particles

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

  let canvas = document.createElement("canvas");
  let ctx = canvas.getContext("2d", { willReadFrequently: true});

  // MAT111WN
  /*
  document.getElementById('circleBtn').addEventListener('click', ()=> {
    circleColor = color(random(255), random(255), random(255), 200);
  });
  const textSizeSlider = document.getElementById('text-size');
  const textSizeDisplay = document.getElementById('textSizeVal');
  textSizeSlider.addEventListener('input', ()=> {
    textSizeVal = parseInt(textSizeSlider.value);
    textSizeDisplay.textContent = textSizeVal;
  });
  const textColorPicker = document.getElementById('text-color');
  textColorPicker.addEventListener('input', ()=> {
    textColor = textColorPicker.value;
  });
  const shapeSelect = document.getElementById('shape-select');
  shapeSelect.addEventListener('change', ()=> {
    selectedShape = shapeSelect.value;
  });
  window.addEventListener('scroll', ()=> {
    scrollPos = window.scrollY;
  });
  */
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
  
  if (eventNum == 0) {
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
  
  if (textEvent) {
    dialogueText();
  }
  
  // Cursor
  push();
  imageMode(CENTER);
  image(cursor, mouseX, mouseY, 30, 30);
  pop();
}

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

function timeSound() {
  if (eventNum == 4 || eventNum == 10 || eventNum == 16 || eventNum == 22 || eventNum == 28 || eventNum == 34 || eventNum == 40) {
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
}

function runEventNum() {
  if (cottageClick || waterClick || gardenClick) {
    eventNum += 1;
  }
}

function mousePressed() {
  
  if ((mouseX > 41 && mouseX < 170) && (mouseY > 299 && mouseY < 429)) {
    cottageClick = !cottageClick;
    event = !event;
    plop.play();
    eventNum += 1;
  }
  
  if ((mouseX > 221 && mouseX < 317) && (mouseY > 173 && mouseY < 411)) {
    waterClick = !waterClick;
    event = !event;
    plop.play();
    eventNum += 1;
  }
  
  if ((mouseX > 20 && mouseX < 129) && (mouseY > 441 && mouseY < 615)) {
    gardenClick = !gardenClick;
    event = !event;
    plop.play();
    eventNum += 1;
  }
  
  timeSound();

  // Cottage Menu
  if (showMenu) {
    if ((mouseX < menuOptions[0].w + 17 && mouseX > menuOptions[0].x) && (mouseY > menuOptions[0].y - 7 && mouseY < menuOptions[0].y + 20)) {
      handleOption("Make Food");
    } else if ((mouseX > menuOptions[1].w + 50 && mouseX < menuOptions[1].x + 78) && (mouseY > menuOptions[1].y - 7 && mouseY < menuOptions[1].y + 20)) {
      handleOption("Nap");
    }
  }

}

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

function enableSound() {
  //bgmusic.muted = false;
  //bgmusic.volume = 0.8;
}

function toggleMute() {
  //enableSound();
  const btn = document.getElementById('muteBtn');
  isMuted = !isMuted;
  if (isMuted) {
    c.muted = true;
    c.volume = 0;
    btn.textContent = 'Unmute';
  } else {
    c.muted = false;
    c.volume = 0.8;
    btn.textContent = 'Mute';
  }
  btn.textContent = isMuted ? 'Unmute' : 'Mute';
}

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
    showMenu = false;
    napping = false;
  }
  if (label === "Nap") {
    napping = true;
    showMenu = false;
    napping = false;
  }
}

function dialogueText() {
  image(dialogue, 0, 0, 360, 640);
    if (waterClick) {
      text("I can't do this right now.", 40, 510);
    }
}