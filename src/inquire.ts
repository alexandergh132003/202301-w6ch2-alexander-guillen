import inquirer from "inquirer";

let score = 0;

const manageScore = (answer: string, correctAnswer: string) => {
  if (answer === correctAnswer) {
    score++;
  } else if (score > 0) {
    score--;
  }
};

const questions = [
  {
    type: "list",
    name: "answer1",
    message: "¿Cuál es el país más grande del mundo?",
    choices: ["Rusia", "China", "Estados Unidos", "India"],
  },
  {
    type: "list",
    name: "answer2",
    message: "¿Cuál es el océano más grande del mundo?",
    choices: ["Atlántico", "Índico", "Pacífico", "Antártico"],
  },
  {
    type: "list",
    name: "answer3",
    message: "¿Cuál es la capital de Australia?",
    choices: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
  },
  {
    type: "list",
    name: "answer4",
    message: "¿Cuál es el animal terrestre más grande del mundo?",
    choices: [
      "Elefante africano",
      "Rinoceronte blanco",
      "Hipopótamo",
      "Elefante asiático",
    ],
  },
  {
    type: "list",
    name: "answer5",
    message: "¿Cuál es el río más largo del mundo?",
    choices: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
  },
  {
    type: "list",
    name: "answer6",
    message: "¿Cuál es el idioma más hablado del mundo?",
    choices: ["Inglés", "Español", "Chino mandarín", "Hindi"],
  },
];

inquirer.prompt(questions).then((answers) => {
  manageScore(answers.answer1, "Rusia");
  manageScore(answers.answer2, "Pacífico");
  manageScore(answers.answer3, "Canberra");
  manageScore(answers.answer4, "Elefante africano");
  manageScore(answers.answer5, "Nilo");
  manageScore(answers.answer6, "Chino mandarín");

  console.log(
    `Tu puntuación final ha sido de ${(score / questions.length) * 10}`
  );
});
