const sections = document.querySelector(".rps-extended")
const buttons = document.querySelectorAll(".rps-extended__button");
const resultBtn = document.querySelector(".rps-ComputerC"); // Кнопка внизу
const userScoreElem = document.querySelector(".rps-extended__user");
const pcScoreElem = document.querySelector(".rps-extended__pc");
const drawScoreElem = document.querySelector(".rps-extended__draw");
const resultText = document.querySelector(".rps-extended__text");


let userChoice = 0;
let userScore = 0;
let pcScore = 0;
let drawScore = 0;

const choices = ["Камень", "Ножницы", "Бумага", "Огонь", "Вода", "Воздух"];

// Функція для обробки вибору гравця
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    userChoice = index + 1; // 1: Камінь, 2: Ножиці, 3: Папір, 4: Вогонь, 5: Вода, 6: Повітря
    resultText.textContent = `Ваш выбор: ${choices[index]}`;
  });
});

// Обробка вибору комп'ютера і результат гри
resultBtn.addEventListener("click", () => {
  if (userChoice === 0) {
    resultText.textContent = "выбери что-то";
    return;
  }

  const pcChoice = Math.floor(Math.random() * 6) + 1; // Випадковий вибір комп'ютера (1-6)

  // Логіка визначення переможця
  const winningCombinations = {
    1: [2, 4, 6], // Камінь б’є ножиці, вогонь, повітря
    2: [3, 6], // Ножиці б’ють папір, повітря
    3: [1, 5], // Папір б’є камінь, воду
    4: [2, 5], // Вогонь б’є ножиці, воду
    5: [1, 6], // Вода б’є камінь, повітря
    6: [3, 4], // Повітря б’є папір, вогонь
  };

  // Если выбор пользователя выиграл
  if (winningCombinations[userChoice].includes(pcChoice)) {
    userScore++;
    resultText.textContent = ` ${
      choices[pcChoice - 1]
    }. Вы выграли!`;
  } else if (userChoice === pcChoice) {
    // Ничья
    drawScore++;
    resultText.textContent = ` ${
      choices[pcChoice - 1]
    }. Нечия!`;
  } else {
    // Проигрыш
    pcScore++;
    resultText.textContent = ` ${
      choices[pcChoice - 1]
    }. Вы проиграли!`;
  }

  // Обновление счета
  userScoreElem.textContent = userScore;
  pcScoreElem.textContent = pcScore;
  drawScoreElem.textContent = drawScore;
});


