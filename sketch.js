let blobX;
let blobY;
let blobSize;
let shootX1 = 0;
let shootY1 = 100;
let shootX2 = 500;
let shootY2 = 0;
let shootX3 = 100;
let shootY3 = 270;
let shootX4 = 500;
let shootY4 = 300;
let shootSize = 4;
let count = 0;
let val = 0;
let buttonA;
let buttonT;
let buttonC;
let buttonG;
let buttonStart;
let dnaCode = ['a','t','g','c'];
let answerValue=0;
let index = 0;
let currentQuestion=' ';
let answerStatus = ' ';
let next =0;
let questionNumber = 0;
let newQuestionNumber;
let ySpacer=0;
let answerSeries = [];
let newSpacer = [20,40,60,80,220,240,260,280,420,440,460,480,620,640,660,680];
let answer;


function setup() {
  createCanvas(400, 700);
  
  buttonA = createButton('A');
  buttonA.position(20,200);
  buttonA.size(70,40);
  buttonA.mousePressed(answerA);
  
  buttonT = createButton('T');
  buttonT.position(20,250);
  buttonT.size(70,40);
  buttonT.mousePressed(answerT);
  
  buttonC = createButton('C');
  buttonC.position(20,300);
  buttonC.size(70,40);
  buttonC.mousePressed(answerC);
  
  buttonG = createButton('G');
  buttonG.position(20,350);
  buttonG.size(70,40);
  buttonG.mousePressed(answerG);
  
  buttonStart = createButton('Start');
  buttonStart.position(300,30);
  buttonStart.size(70,40);
  buttonStart.mousePressed(gameStart);
}

function draw() {
  background("#0D47A1");
  
 
  
  push();
  textSize(40);
  fill("#FFFFFF");
  timer();
  pop();
  
  if((val == 100 && frameCount == 1)|| (val ==100 && next == 1))
    {
 
      question();
      questionNumber++;
      next = 0;
      
    }
  
     push();
  stroke(random(0,256),0,0);
  strokeWeight(10);
  translate((width/2-50), 0);
  drawLine(questionNumber);
  pop();
  
 
  
  push();
  textSize(20);
  fill("#FFFFFF");
  translate(0,5);
  text(currentQuestion,270,ySpacer);  
  text('?',120,ySpacer);
  pop();
  
  push();
  stroke("#FFEE58");
  strokeWeight(5);
  translate(width/2-50,0);
  buildDNA();
  pop();
  
  push();
  fill("#E91E63");
  noStroke();
  rect(20,40,80,20);
  pop();
  
  push();
  fill("#FFFFFF");
  textSize(30);
  text("Timer",20,50);
  pop();
 
  push();
  stroke("#E1F5FE");
  strokeWeight(2);
  shootingBlobs(2);
  pop();
  
  push();
  stroke("#BBDEFB");
  strokeWeight(15);
  translate((width/2-50), 0);
  drawDna();
  pop();
  
  if(count == 30 || questionNumber == 17)
      { 
       
        push();
       fill("#FFFFFF");
       strokeWeight(10);
       stroke("#212121");
       rect(100,120,200,50);
       pop();
        
       push();
        fill("#E91E63");
        stroke("#E91E63");
        strokeWeight(2);
        textSize(30);
        text('Game over', 120,155);
       pop();
       
       
       if(endMessage())
         {
        push();
        fill("#64DD17");
        stroke("#212121");
        strokeWeight(10);
        rect(100,200,250,100);
        pop();
           
       push();
       fill("#FFFFFF");
       stroke(4);
       stroke("#FFFFFF");
       textSize(18);
       text('Base pairing success\nHuman Created', 120,240);
       pop();
         }
       else
         {
           push();
        fill("#E91E63");
        stroke("#212121");
        strokeWeight(10);
        rect(100,200,250,100);
        pop();
           
       push();
       fill("#FFFFFF");
       stroke(4);
       stroke("#FFFFFF");
       textSize(18);
       text('Base pairing failed\nMutant Created!!!', 120,240);
       pop();
         }

        noLoop();
      }
  
 
  
  
}

function question()
{
  index = floor(random(0,4));    
  currentQuestion = dnaCode[index];
  
}

function drawLine(questionNumber){
  if(questionNumber<=4)
    {
      line(0,20*questionNumber,100,20*questionNumber);
      ySpacer = 20*questionNumber;
    }
  else if(questionNumber>4 && questionNumber<=8)
    {
      newQuestionNumber = questionNumber - 4;
      line(0,200+(20*newQuestionNumber),100,200+(20*newQuestionNumber));
      ySpacer = 200+(20*newQuestionNumber);
    }
  else if(questionNumber>8 && questionNumber<=12)
    {
      newQuestionNumber = questionNumber - 8;
      line(0,400+(20*newQuestionNumber),100,400+(20*newQuestionNumber));
      ySpacer = 400+(20*newQuestionNumber);
    }
  else if(questionNumber>12 && questionNumber<=16)
    {
      newQuestionNumber = questionNumber - 12;
      line(0,600+(20*newQuestionNumber),100,600+(20*newQuestionNumber));
      ySpacer = 600+(20*newQuestionNumber);
    }
}

function drawDna()
{
  
  
  for(let i=0; i<=height; i+=100)
    {
      if(i%200 == 0)
        {
          line(0,i,0,i+100);
          line(100,i,100,i+100);
          line(0,i+100,100,i+200);
          line(100,i+100,0,i+200);
        }
    }
}

function drawBases()
{
  for(let j=0; j<=height; j+=100)
    {
      if(j%200 == 0)
        {
          line(0,(j+20),100,j+20);
          line(0,(j+40),100,j+40);
          line(0,(j+60),100,j+60);
          line(0,(j+80),100,j+80);
        }
    }
}

function timer()
{
  
  text(count,20,100);
  
  if(val==100 && frameCount%60==0)
    {
      count = count+1;
    }
  
    return count;
    
}


function buildDNA()
{
  
  for(let k=0; k<=answerSeries.length; k++)
    {
      
      if(answerSeries[k]=='Correct')
      {
        line(0,newSpacer[k],100,newSpacer[k]);
        
      }
        
      else if(answerSeries[k]=='Wrong')
        {
          line(0,newSpacer[k],50,newSpacer[k]);
        }
        
    }
     
}

function shootingBlobs(blobSpeed)
{
  circle(shootX1, shootY1, shootSize);
  shootX1 = shootX1 + blobSpeed;
  shootY1 = shootY1 + blobSpeed;
  
  if(shootX1> width || shootY1> height)
    {
      shootX1 = 0;
      shootY1 = 0;
    }
  
  circle(shootX2, shootY2, shootSize);
  shootX2 = shootX2 - blobSpeed;
  shootY2 = shootY2 + blobSpeed;
  
  if(shootX2> width || shootY2> height)
    {
      shootX2 = width;
      shootY2 = 0;
    }
    
  
  circle(shootX3, shootY3, shootSize);
  shootX3 = shootX3 + blobSpeed;
  shootY3 = shootY3 + blobSpeed;
  
  if(shootX3> width || shootY3> height)
    {
      shootX3 = 0;
      shootY3 = height/2;
    }
  
  circle(shootX4, shootY4, shootSize);
  shootX4 = shootX4 - blobSpeed;
  shootY4 = shootY4 - blobSpeed;
  
  if(shootX4< 0 || shootY4<0)
    {
      shootX4 = 500;
      shootY4 = 300;
    }
  
}

function answerA()
{
  answer = 'a';
  checkAnswer();
  next = 1;
}

function answerT()
{
  answer = 't';
  checkAnswer();
  next = 1;
}

function answerG()
{
  answer = 'g';
  checkAnswer();
  next = 1;
}

function answerC()
{
  answer = 'c';
  checkAnswer();
  next = 1;
}

function gameStart()
{
  val = 100;
  next = 1;
}

function checkAnswer()
{
  if (currentQuestion == 't')
  {
    if(answer == 'a')
    {
     answerStatus = 'Correct'; 
    }
    else 
      {
        answerStatus = 'Wrong'; 
      }
        answerSeries.push(answerStatus); 
    }
  
  else if (currentQuestion == 'a')
  {
    if(answer == 't')
    {
     answerStatus = 'Correct'; 
    }
    else 
      {
        answerStatus = 'Wrong'; 
      }
        answerSeries.push(answerStatus); 
    }
  
  else if (currentQuestion == 'c')
  {
    if(answer == 'g')
    {
     answerStatus = 'Correct'; 
    }
    else 
      {
        answerStatus = 'Wrong'; 
      }
        answerSeries.push(answerStatus); 
    }
  
  else if (currentQuestion == 'g')
  {
    if(answer == 'c')
    {
     answerStatus = 'Correct'; 
    }
    else 
      {
        answerStatus = 'Wrong'; 
      }
        answerSeries.push(answerStatus); 
    }
  
}

function drawBases()
{
  for(let j=0; j<=height; j+=100)
    {
      if(j%200 == 0)
        {
          line(0,(j+20),100,j+20);
          line(0,(j+40),100,j+40);
          line(0,(j+60),100,j+60);
          line(0,(j+80),100,j+80);
        }
    }
}

function endMessage()
{
  
  for(let l=0; l<answerSeries.length; l++)
    {
      if(answerSeries[l]!='Correct')
      return false;
      
    }
  return true;
  
}