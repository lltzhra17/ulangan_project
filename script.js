const questions = [

{
question:"HTML digunakan untuk?",
answers:[
"Mengatur database",
"Membuat struktur website",
"Mengedit video",
"Mengatur tampilan website",
"Membuat website interaktif"
],
correct:1
},

{
question:"Tag untuk membuat link di HTML adalah?",
answers:[
"Tag p",
"Tag img",
"Tag h1",
"Tag b",
"Tag a"
],
correct:4
},

{
question:"CSS digunakan untuk?",
answers:[
"Membuat server",
"Mengolah data",
"Mengatur tampilan website",
"Membuat database",
"Membuat struktur website"
],
correct:2
},

{
question:"PHP dijalankan di?",
answers:[
"Chrome",
"Server",
"Browser",
"Database",
"Localhost"
],
correct:1
},

{
question:"Tag gambar di HTML adalah?",
answers:[
"<image>",
"<picture>",
"<src>",
"<img>",
"<photo>"
],
correct:3
},

{
question:"Apa kepanjangan HTML?",
answers:[
"Hyper Text Markup Language",
"Hyper Text Markdown Language",
"Hyperlink Text Markup Language",
"Hyper Transfer Markup Language",
"Hyper Tool Multi Language"
],
correct:0
},

{
question:"Properti CSS untuk warna teks?",
answers:[
"font-color",
"text-color",
"color",
"foreground-color",
"font-style"
],
correct:2
},

{
question:"Tag heading terbesar di HTML?",
answers:[
"<h6>",
"<header>",
"<h1>",
"<head>",
"<heading>"
],
correct:2
},

{
question:"Property CSS untuk membuat sudut melengkung?",
answers:[
"corner-radius",
"border-curve",
"radius",
"border-radius",
"curve-border"
],
correct:3
},

{
question:"Fungsi echo di PHP?",
answers:[
"Menyimpan teks",
"Menampilkan teks",
"Mengirim data ke database",
"Membuat variabel",
"Menghapus output"
],
correct:1
},

{
question:"Tag form HTML adalah?",
answers:[
"<table>",
"<input>",
"<form>",
"<button>",
"<textfield>"
],
correct:2
},

{
question:"PHP diawali dengan?",
answers:[
"<php>",
"<?php",
"<php?>",
"<php$>",
"?php"
],
correct:1
},

{
question:"Tag untuk membuat paragraf adalah?",
answers:[
"<text>",
"<p>",
"<paragraph>",
"<pg>",
"<paragraf>"
],
correct:1
},

{
question:"Tag untuk membuat baris baru adalah?",
answers:[
"<newline>",
"<lb>",
"<next>",
"<br>",
"<break>"
],
correct:3
},

{
question:"Tag untuk membuat teks tebal adalah?",
answers:[
"<strong>",
"<bold>",
"<fat>",
"<b>",
"<big>"
],
correct:3
},

{
question:"Tag untuk membuat teks miring adalah?",
answers:[
"<italic>",
"<em>",
"<i>",
"<slant>",
"<it>"
],
correct:2
},

{
question:"Atribut HTML untuk menentukan tujuan link adalah?",
answers:[
"src",
"href",
"link",
"url",
"path"
],
correct:1
},

{
question:"Tag untuk menampilkan video adalah?",
answers:[
"<movie>",
"<video>",
"<media>",
"<play>",
"<vid>"
],
correct:1
},

{
question:"Properti CSS untuk mengubah ukuran teks?",
answers:[
"text-size",
"size",
"font",
"font-size",
"text-font"
],
correct:3
},

{
question:"Properti CSS untuk mengubah jenis font?",
answers:[
"font-style",
"font-family",
"text-family",
"font-type",
"family"
],
correct:1
},

{
question:"Properti CSS untuk memberi garis tepi?",
answers:[
"outline",
"line",
"frame",
"stroke",
"border"
],
correct:4
},

{
question:"Properti CSS untuk memberi jarak luar?",
answers:[
"padding",
"spacing",
"outside",
"margin",
"gap"
],
correct:3
},

{
question:"Tag untuk membuat garis horizontal?",
answers:[
"<line>",
"<hr>",
"<br>",
"<border>",
"<horizontal>"
],
correct:1
},
  
{
question:"Tag untuk membuat checkbox?",
answers:[
'<input type="radio">',
"<checkbox>",
'<input type="checkbox">',
"<check>",
'<input type="tick">'
],
correct:2
},

{
question:"Variabel di PHP diawali dengan?",
answers:[
"#",
"&",
"$",
"@",
"%"
],
correct:2
},


let currentQuestion = 0;
let answersUser = [];
let totalTime = 1800;
let timerInterval;
let selectedQuestions = [];

function shuffle(array){
  return array.sort(() => Math.random() - 0.5);
}

function showPopup(){

  const name =
  document.getElementById("playerName").value;

  if(name.trim() === ""){
    alert("Isi Nama Lengkap");
    return;
  }

  document.getElementById("popup").style.display =
  "flex";
}

function closePopup(){
  document.getElementById("popup").style.display =
  "none";
}

function startCountdown(){

  document.getElementById("popup").style.display =
  "none";

  const countdown =
  document.getElementById("countdown");

  countdown.style.display = "flex";

  let count = 3;

  countdown.innerText = count;

  let cd = setInterval(()=>{

    count--;

    if(count > 0){

      countdown.innerText = count;

    }else{

      clearInterval(cd);

      countdown.innerText = "GO";

      setTimeout(()=>{

        countdown.style.display = "none";

        startGame();

      },1000);
    }

  },1000);
}

function startGame(){

  selectedQuestions =
shuffle([...questions]).slice(0,20);

  document.getElementById("startScreen")
  .style.display = "none";

  document.getElementById("quizBox")
  .style.display = "block";

  document.getElementById("showName").innerText =
  document.getElementById("playerName").value;

  startTimer();

  showQuestion();
}

function startTimer(){

  updateTimer();

  timerInterval = setInterval(()=>{

    totalTime--;

    updateTimer();

    if(totalTime <= 0){

      clearInterval(timerInterval);

      finishGame();
    }

  },1000);
}

function updateTimer(){

  let minutes =
  Math.floor(totalTime / 60);

  let seconds =
  totalTime % 60;

  seconds =
  seconds < 10 ? "0"+seconds : seconds;

  document.getElementById("timer").innerText =
  `${minutes}:${seconds}`;
}

function showQuestion(){

  let q = selectedQuestions[currentQuestion];

  document.getElementById("question").innerText =
  `${currentQuestion + 1}. ${q.question}`;

  const answersContainer =
  document.getElementById("answers");

  answersContainer.innerHTML = "";

  q.answers.forEach((answer,index)=>{

    const button =
    document.createElement("button");

    button.classList.add("answer-btn");

    if(answersUser[currentQuestion] === index){
      button.classList.add("selected");
    }

    const optionLetters = ["A","B","C","D","E"];
    button.innerText =
    `${optionLetters[index]}. ${answer}`;
    button.onclick = () => selectAnswer(index);

    answersContainer.appendChild(button);

  });

}

function selectAnswer(index){

  answersUser[currentQuestion] = index;

  showQuestion();

  setTimeout(()=>{

    if(currentQuestion <
    selectedQuestions.length - 1){

      currentQuestion++;

      showQuestion();

    }else{

      finishGame();
    }

  },300);

}

function nextQuestion(){

  if(currentQuestion <
  selectedQuestions.length - 1){

    currentQuestion++;

    showQuestion();
  }
}

function prevQuestion(){

  if(currentQuestion > 0){

    currentQuestion--;

    showQuestion();
  }
}

function finishGame(){

  clearInterval(timerInterval);

  let score = 0;
  let wrong = 0;

  selectedQuestions.forEach((q,index)=>{

    if(answersUser[index] === q.correct){
      score++;
    }else{
      wrong++;
    }

  });

  let nilai = (score / selectedQuestions.length) * 100;

  let status = nilai >= 80
    ? "LULUS"
    : "TIDAK LULUS";

  document.getElementById("quizBox")
  .style.display = "none";

  document.getElementById("resultBox")
  .style.display = "block";

  document.getElementById("correct").innerText =
  score;

  document.getElementById("wrong").innerText =
  wrong;

  document.getElementById("score").innerText =
  nilai.toFixed(0);

  document.getElementById("status").innerText =
  status;

}
