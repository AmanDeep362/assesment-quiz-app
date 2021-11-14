let questions = [
  {
    QueNo: 1,
    question:
      "The Binary Coded Decimal (BCD) uses",
    options: ["6 bits", "8 bits", "16 bits", "32 bits"],
    correctOption: "option-1",
    checkedoption:[],
  },
  {
    QueNo: 2,
    question:
      "A program attempts to generate as many permutations as possible of the string, 'abcd' by pushing the characters a, b, c, d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program?",
    options: ["abcd", "dcba", "cbad", "cabd"],
    correctOption: "option-3",
    checkedoption:[]
  },
  {
    QueNo: 3,
    question: "RAM is also called as",
    options: ["virtual memory", "volatile memory", "Non volatile memory", "cache memory"],
    correctOption: "option-1",
    checkedoption:[]
  },
  {
    QueNo: 4,
    question:
      "The Binary Coded Decimal (BCD) uses",
    options: ["6 bits", "8 bits", "16 bits", "32 bits"],
    correctOption: "option-1",
    checkedoption:[]
  },
  {
    QueNo: 5,
    question:
      "A program attempts to generate as many permutations as possible of the string, 'abcd' by pushing the characters a, b, c, d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program?",
    options: ["abcd", "dcba", "cbad", "cabd"],
    correctOption: "option-3",
    checkedoption:[]
  },
  {
    QueNo: 6,
    question: "RAM is also called as",
    options: ["virtual memory", "volatile memory", "Non volatile memory", "cache memory"],
    correctOption: "option-1",
    checkedoption:[]
  },
  {
    QueNo: 7,
    question:
      "A program attempts to generate as many permutations as possible of the string, 'abcd' by pushing the characters a, b, c, d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program?",
    options: ["abcd", "dcba", "cbad", "cabd"],
    correctOption: "option-3",
    checkedoption:[]
  },
  {
    QueNo: 8,
    question: "RAM is also called as",
    options: ["virtual memory", "volatile memory", "Non volatile memory", "cache memory"],
    correctOption: "option-1",
    checkedoption:[]
  },
  {
    QueNo: 7,
    question:
      "A program attempts to generate as many permutations as possible of the string, 'abcd' by pushing the characters a, b, c, d in the same order onto a stack, but it may pop off the top character at any time. Which one of the following strings CANNOT be generated using this program?",
    options: ["abcd", "dcba", "cbad", "cabd"],
    correctOption: "option-3",
    checkedoption:[]
  },
];

let i = 0;

let noofquest = questions.length;
let correctans =0;

console.log(noofquest);
function questionview() {
  document.getElementById("question-No").innerText = questions[i].QueNo;
  document.getElementById("questionno").innerText = questions[i].QueNo;
  document.getElementById("totalQues").innerText = noofquest;
  document.getElementById("question").innerText = questions[i].question;
  document.getElementById("options").innerHTML = `
    <label for="option-1">
    <input class="checkbox" type="checkbox" name="option" id="option-1" />
    <span class="option-text" id="option-1-text">${questions[i].options[0]}</span>
  </label>
  <br>
  <label for="option-2">
    <input class="checkbox" type="checkbox" name="option" id="option-2" />
    <span class="option-text" id="option-2-text">${questions[i].options[1]}</span>
  </label>
  <br>
  <label for="option-3">
    <input class="checkbox" type="checkbox" name="option" id="option-3" />
    <span class="option-text" id="option-3-text">${questions[i].options[2]}</span>
  </label>
  <br>
  <label for="option-4">
    <input class="checkbox"  type="checkbox" name="option" id="option-4" />
    <span class="option-text" id="option-4-text">${questions[i].options[3]}</span>
  </label>
  `


  document.getElementById("question-container")
  // if (i == 0) {
  //   document.getElementById("btn-prev").disabled = true;
  // } else {
  //   document.getElementById("btn-prev").disabled = false;
  // }
  if (i == noofquest ) {
    document.getElementById("btn-next").disabled = true;
  } else {
    document.getElementById("btn-next").disabled = false;
  }
  
// if(i<noofquest){
//   document.getElementById("submit-btn").disabled = true;
// }
// else if(i==noofquest-1){
//   document.getElementById("submit-btn").disabled = false;
// }
  
}
questionview();

let incorrectans = 0;
var rightans;
function scoreCount (){
 if(questions[i].correctOption == questions[i].checkedoption[0]){
   correctans++;
 }
 console.log(questions[i].correctOption)
 console.log(questions[i].checkedoption)
 document.getElementById("correct-Ques").innerText = rightans;
 document.getElementById("score-card-3-text-2").innerText = noofquest-rightans;
 var totalscore =(rightans/noofquest)*100;
 document.getElementById("correctBar").style.width = totalscore +"%"
 document.getElementById("incorrectBar").style.width =(100-totalscore) +"%"
 document.getElementById("correct-bar-text").innerText = rightans +"/"+noofquest
 document.getElementById("incorrect-bar-text").innerText =Math.floor(totalscore) +"%"
 
}

// document.getElementById("btn-prev").onclick = () => {
//   i = i - 1;
//   questionview();
// };
document.getElementById("btn-next").onclick = () => {
  var radios = document.getElementsByName("option");
  for (var k = 0; k < radios.length; k++) {
    if (radios[k].checked) {
       questions[i].checkedoption.push(radios[k].id)
       break;
     }
     
  }
  console.log(questions)
  scoreCount();
  i = i + 1;
  questionview();
   rightans = correctans;
  console.log(rightans)
};
document.getElementById("viewScore").style.display ="none";

var submitbtn = document.getElementById("submit-btn");

document.getElementById("score-card-1-text-2").innerText = noofquest;



submitbtn.addEventListener("click",()=>{
  alert("do you want to submit the test")
  document.getElementById("ques-container").style.display ="none";
  document.getElementById("viewScore").style.display ="block";
})