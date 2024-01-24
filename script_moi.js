/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974", 
      "1962", 
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda", 
      "Ganon", 
      "Tom", 
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9", 
      "Apollo 13", 
      "Mercury 1", 
      "Gemini 2"],
    correctAnswerIndex: 1,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/
const fragment = document.createDocumentFragment();
var affiche = document.getElementById("question");
var reponse = document.getElementById("answers");
var resultat = document.getElementById("score");
var avancement = 0;
var score = 0;

// affiche.innerHTML = questions[avancement].question;
// questions[avancement].answers.forEach((answer) => {
//   const Li = document.createElement("li");
//   Li.textContent = answer;
//   Li.className = "answer";
//   fragment.appendChild(Li);
// });
// reponse.appendChild(fragment);
function start() {
  erase(reponse);
  let quest = questions[avancement].question;
  let answ = questions[avancement].answers;
  let correctAns = questions[avancement].correctAnswerIndex;
  affiche.textContent = quest;
  answ.forEach((answ, idAns) => {
    newLi = document.createElement("li");
    newLi.textContent = answ;
    newLi.className = "answer";
    reponse.appendChild(newLi);
    newLi.addEventListener("click", () => {
      verif(idAns, correctAns);
    })
  })
};
function verif(element1, element2) {
  console.log(element1, element2);
  if (element1 === element2) {
    score++;
    resultat.textContent = score;
  };
  avancement++;
  if (avancement < questions.length) {
    start();
  } else {
    affiche.textContent = 'Bravo';
    erase(reponse)
  }
};
function erase(eL) {
  eL.innerHTML = "";
};
/*************************/
/* Contenu du DOM chargé */
/*************************/
document.addEventListener("DOMContentLoaded", () => {
  
// démarrage du quizz
  start();
});
