// apiKey = "K37BYL2Q2SN8";
//Username: kameladjei
//Password: kameldat405 - just in case you would like to access timezonedb.com
//DAT405 Assignment 2

var canvas;
function preload(){
  //url for the api for 4 specific timezones
  let url  = "https://vip.timezonedb.com/v2/get-time-zone?key=K37BYL2Q2SN8&format=json&by=zone&zone=America/Chicago";
  let url2 = "https://vip.timezonedb.com/v2/get-time-zone?key=K37BYL2Q2SN8&format=json&by=zone&zone=Asia/Taipei";
  let url3 = "https://vip.timezonedb.com/v2/get-time-zone?key=K37BYL2Q2SN8&format=json&by=zone&zone=Africa/Accra";
  let url4 = "https://vip.timezonedb.com/v2/get-time-zone?key=K37BYL2Q2SN8&format=json&by=zone&zone=Europe/Moscow"

  //Loading JSON
  thisthing  = loadJSON(url);
  thisthing2 = loadJSON(url2);
  thisthing3 = loadJSON(url3);
  thisthing4 = loadJSON(url4);
}

function setup() {
  //create Canvas based on assignment values. 1,280 pixels by 720 pixels.
  canvas = createCanvas(1280,720);
  canvas.parent("TimeWindow");

  //initializing and scaling the video for chicago and compressing it into Location1
  //the loop  makes the video autoplay everytime it ends
  //the hide removes the extra video file which can be seen,this apllies to the  code  below
  Location1 = createVideo(['video/chicago.mp4','video/chicago.webm']);
  Location1.size(1200,700);
  Location1.loop();
  Location1.hide(); //hides a specific dom element
  //initializing and scaling the video for tawai and compressing it into Location2
  Location2 = createVideo(['video/tawai.mp4','video/tawai.webm']);
  Location2.size(1200,700);
  Location2.loop();
  Location2.hide(); //hides a specific dom element

  //initializing and scaling the video for Ghana and compressing it into Location3
  Location3 = createVideo(['video/accra.mp4','video/accra.webm']);
  Location3.size(1200,700);
  Location3.loop();
  Location3.hide(); //hides a specific dom element

  //initializing and scaling the video for moscow and compressing it into Location4
  Location4 = createVideo(['video/moscow.mp4','video/moscow.webm']);
  Location4.size(1200,700);
  Location4.loop();
  Location4.hide(); //hides a specific dom element


  //initializing the classes
  ThisOne1 = new ThisOne1();
  ThisOne2 = new ThisOne2();
  ThisOne3 = new ThisOne3();
  ThisOne4 = new ThisOne4();

  //this makes the radian turn to angles
  angleMode(DEGREES);
  //allign the text to the center
  textAlign(CENTER);
  //color the text in black with a blackish grey stroke with a weight of 5.5
  fill(255);
  stroke(20);
  strokeWeight(5.5);

  //display/print this in console
  console.log(thisthing);
  console.log("Country:"+thisthing.countryName);
  console.log("Time and DaTe:" +thisthing.formatted);
  console.log("Zone:"+thisthing.zoneName);
  console.log(thisthing2);
  console.log("Country:"+thisthing2.countryName);
  console.log("Time and DaTe:" +thisthing2.formatted);
  console.log("Zone:"+thisthing2.zoneName);
  console.log(thisthing3);
  console.log("Country:"+thisthing3.countryName);
  console.log("Time and DaTe:" +thisthing3.formatted);
  console.log("Zone:"+thisthing3.zoneName);
  console.log(thisthing4);
  console.log("Country:"+thisthing4.countryName);
  console.log("Time and DaTe:" +thisthing4.formatted);
  console.log("Zone:"+thisthing4.zoneName);
}

function draw(){
  //set background color to white
  background(255);
  //display thisone1.appear
  ThisOne1.appear();
  //if key is pressed....
  if (keyIsPressed) {
    //if key "q" is pressed  then display Tawai
    if (key === 'q') {
      ThisOne2.show();
      //if key "w" is pressed  then display Ghana
    }if (key === 'w') {
      ThisOne3.third();
      //if key "e" is pressed  then display Russia
    }if (key === 'e') {
      ThisOne4.fourth();
    }
  }
}

//create Class for America
class ThisOne1{
  constructor(){
    //creating variables for the text sizes
    this.l = 82;
    this.a = 36;
    this.d = 24;
  }
  appear() {
    //initializing the video and establishing its sizes
    image(Location1,0,0,width,height); // draw the video frame to canvas
    //creating text,positioning text and creating size
    textSize(this.l);
    text(thisthing.countryName,width/2, height/1.5);
    textSize(this.a);
    text(thisthing.formatted,width/2, height/1.3);
    textSize(this.d);
    text(thisthing.zoneName,width/2, height/1.17);

    //Creating a clock for the time in Chicago
    //creating a variable for hour,minute and second
    //to get the time of the location then subtract the offset from the unix/local time
    var hr = hour()-6;
    var mn = minute();
    var sc = second();


    //move the clock to the center
    //use push/pop to prevent the other code from being affected
    push();
    //moving code to the center
    translate(640, 240);
    //rotating the clock so it will animate well
    rotate(-90);
    //let the arc inner section be semi-transparent with a white hue
    fill(255,50);


    //let the strokeweight for all code below be 6.5
    strokeWeight(6.5);

    //make stroke white
    stroke(255);
    //creating a map for the movement of the arc based on the seconds passed
    var secAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secAngle);

    //make stroke blackish-grey
    stroke(15);
    //creating a map for the movement of the arc based on the minutes passed
    var minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minAngle);

    //make stroke grey
    stroke(55);
    //creating a map for the movement of the arc based on the hours passed
    var hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    //stroke the same as the arc for second
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(secAngle);
    stroke(255);
    line(0, 0, 100, 0);
    pop();

    //stroke the same as the arc for minute
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(minAngle);
    stroke(15);
    line(0, 0, 75, 0);
    pop();

    //stroke the same as the arc for hour
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(hourAngle);
    stroke(55);
    line(0, 0, 50, 0);
    pop();
    //point in the middle
    stroke(209);
    point(0, 0);
    //ending of pop so it doesnt affect the rest if the code
    pop();
  }
}


//create Class for Tawai
class ThisOne2{
  constructor(){
    //creating variables for the text sizes
    this.s = 82;
    this.a = 36;
    this.d = 24;
  }
  show() {
    //initializing the video and establishing its sizes
    image(Location2,0,0,width,height); // draw the video frame to canvas
    //creating text,positioning text and creating size
    textSize(this.s);
    text(thisthing2.countryName,width/2, height/1.5);
    textSize(this.a);
    text(thisthing2.formatted,width/2, height/1.3);
    textSize(this.d);
    text(thisthing2.zoneName,width/2, height/1.17);

    //Creating a clock for the time in Taipei
    //creating a variable for hour,minute and second
    //to get the time of the location then subtract the offset from the unix/local time
    var hr = hour()+8;
    var mn = minute();
    var sc = second();


    //move the clock to the center but use push/pop
    //use push/pop to prevent the other code from being affected
    push();
    //moving code to the center
    translate(640, 240);
    //rotating the clock so it will animate well
    rotate(-90);
    //let the arc inner section be semi-transparent with a white hue
    fill(255,50);


    //let the strokeweight for all code below be 6.5
    strokeWeight(6.5);

    //make stroke white
    stroke(255);
    //creating a map for the movement of the arc based on the seconds passed
    var secAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secAngle);

    //make stroke blackish-grey
    stroke(15);
    //creating a map for the movement of the arc based on the minutes passed
    var minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minAngle);

    //make stroke grey
    stroke(55);
    //creating a map for the movement of the arc based on the hours passed
    var hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    //stroke the same as the arc for second
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(secAngle);
    stroke(255);
    line(0, 0, 100, 0);
    pop();

    //stroke the same as the arc for minute
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(minAngle);
    stroke(15);
    line(0, 0, 75, 0);
    pop();

    //stroke the same as the arc for hour
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(hourAngle);
    stroke(55);
    line(0, 0, 50, 0);
    pop();
    //point in the middle
    stroke(209);
    point(0, 0);
    //ending of pop so it doesnt affect the rest if the code
    pop();
  }
}


//create Class for Ghana
class ThisOne3{
  constructor(){
    //create variables for text sizes
    this.e = 82;
    this.q = 36;
    this.r = 24;
  }
  third() {
    //initializing the video and establishing its sizes
    image(Location3,0,0,width,height); // draw the video frame to canvas
    //creating text,positioning text and creating size
    textSize(this.e);
    text(thisthing3.countryName,width/2, height/1.5);
    textSize(this.q);
    text(thisthing3.formatted,width/2, height/1.3);
    textSize(this.r);
    text(thisthing3.zoneName,width/2, height/1.17);

    //Creating a clock for the time in Ghana
    //creating a variable for hour,minute and second
    //to get the time of the location then subtract the offset from the unix/local time
    var hr = hour();
    var mn = minute();
    var sc = second();

    //move the clock to the center but use push/pop
    //use push/pop to prevent the other code from being affected
    push();
    //moving code to the center
    translate(640, 240);
    //rotating the clock so it will animate well
    rotate(-90);
    //let the arc inner section be semi-transparent with a white hue
    fill(255,50);


    //let the strokeweight for all code below be 6.5
    strokeWeight(6.5);

    //make stroke white
    stroke(255);
    //creating a map for the movement of the arc based on the seconds passed
    var secAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secAngle);

    //make stroke blackish-grey
    stroke(15);
    //creating a map for the movement of the arc based on the minutes passed
    var minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minAngle);

    //make stroke grey
    stroke(55);
    //creating a map for the movement of the arc based on the hours passed
    var hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    //stroke the same as the arc for second
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(secAngle);
    stroke(255);
    line(0, 0, 100, 0);
    pop();

    //stroke the same as the arc for minute
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(minAngle);
    stroke(15);
    line(0, 0, 75, 0);
    pop();

    //stroke the same as the arc for hour
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(hourAngle);
    stroke(55);
    line(0, 0, 50, 0);
    pop();
    //point in the middle
    stroke(209);
    point(0, 0);
    //ending of pop so it doesnt affect the rest if the code
    pop();
  }
}


//create Class for Russia
class ThisOne4{
  constructor(){
    //create variables for text sizes
    this.e = 82;
    this.q = 36;
    this.r = 24;
  }
  fourth() {
    //initializing the video and establishing its sizes
    image(Location4,0,0,width,height); // draw the video frame to canvas
    //creating text,positioning text and creating size
    textSize(this.e);
    text(thisthing4.countryName,width/2, height/1.5);
    textSize(this.q);
    text(thisthing4.formatted,width/2, height/1.3);
    textSize(this.r);
    text(thisthing4.zoneName,width/2, height/1.17);

    //Creating a clock for the time in Russia
    //creating a variable for hour,minute and second
    //to get the time of the location then subtract the offset from the unix/local time
    var hr = hour()+3;
    var mn = minute();
    var sc = second();


    //move the clock to the center but use push/pop
    //use push/pop to prevent the other code from being affected
    push();
    //moving code to the center
    translate(640, 240);
    //rotating the clock so it will animate well
    rotate(-90);
    //let the arc inner section be semi-transparent with a white hue
    fill(255,50);


    //let the strokeweight for all code below be 6.5
    strokeWeight(6.5);

    //make stroke white
    stroke(255);
    //creating a map for the movement of the arc based on the seconds passed
    var secAngle = map(sc, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, secAngle);

    //make stroke blackish-grey
    stroke(15);
    //creating a map for the movement of the arc based on the minutes passed
    var minAngle = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, minAngle);

    //make stroke grey
    stroke(55);
    //creating a map for the movement of the arc based on the hours passed
    var hourAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0, 0, 260, 260, 0, hourAngle);

    //stroke the same as the arc for second
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(secAngle);
    stroke(255);
    line(0, 0, 100, 0);
    pop();

    //stroke the same as the arc for minute
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(minAngle);
    stroke(15);
    line(0, 0, 75, 0);
    pop();

    //stroke the same as the arc for hour
    //initialize push/pop
    //make the "second hand"   rotate  based on the mapping
    push();
    rotate(hourAngle);
    stroke(55);
    line(0, 0, 50, 0);
    pop();
    //point in the middle
    stroke(209);
    point(0, 0);
    //ending of pop so it doesnt affect the rest if the code
    pop();
  }
}
