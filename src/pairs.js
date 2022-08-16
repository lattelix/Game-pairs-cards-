// game logic:
// 1 создать поле 4х4 (создать объект с 16 свойствами), с отдельными индентификаторами и парными идентификаторами для каждых 2х карточек
// 2 перемешать свойства
// 3 создаю элементы по этим свойствам и добавляю им события по клику
//   В событии вызываю функцию: Если открытых карточек нет, то данной карточке даёт класс "открыто"
//   Если есть класс, даёт второй карточке класс, находит эти карточки в объекте и сравнивает их свойства
//   даёт новый класс "завершено" при одинаковых значениях и ждёт следующего нажатия при разных
//   повторное нажатие снимает классы "открыто"
// 4 проверяю количество открытых карточек, и если их кол-во = кол-ву в объекте - заканчиваю игру выводя winner


// 5 устанавливаю таймер на 1 минуту или даже сделаю дополнительное поле для его настройки


(() => {
  // const TIME_GAME_MS = 1000 * 60;
  // const userRow = document.getElementById("userRow");
  // const userColumn = document.getElementById("userColumn");
  // // const userInputs = document.querySelectorAll(".user-input");
  // const userForm = document.getElementById("user-form");
  // const gameArea = document.getElementById("game-area");

  // let timeout;

  // document.addEventListener("DOMContentLoaded", () => {
  // old (OVERLOAD) code…
  // })

  function createField(row, column) {
    const field = {};
    const cards = [];
    const cardsCount = row * column;
    const cardsCountHalf = cardsCount / 2;

    for (let i = 0; i < cardsCountHalf; i++) {
      cards.push(i);
      cards.push(i);
    }

    for (let i = 0; i < cardsCount; i++) {
      const randomIndex = Math.floor(Math.random() * cards.length);
      const randomCard = cards[randomIndex];
      cards.splice(randomIndex, 1);
      field[randomCard] = i;
    }

    return field;
  }

  const area = [
    { id: "0", pair: "a", opened: "false" },
    { id: "1", pair: "a", opened: "false" },
    { id: "2", pair: "b", opened: "false" },
    { id: "3", pair: "b", opened: "false" },
    { id: "4", pair: "c", opened: "false" },
    { id: "5", pair: "c", opened: "false" },
    { id: "6", pair: "d", opened: "false" },
    { id: "7", pair: "d", opened: "false" },
    { id: "8", pair: "e", opened: "false" },
    { id: "9", pair: "e", opened: "false" },
    { id: "10", pair: "f", opened: "false" },
    { id: "11", pair: "f", opened: "false" },
    { id: "12", pair: "g", opened: "false" },
    { id: "13", pair: "g", opened: "false" },
    { id: "14", pair: "h", opened: "false" },
    { id: "15", pair: "h", opened: "false" },
  ];
  area.sort(() => Math.random() - 0.5);
  console.log(area);

  for (let i = 0; i < area.length; i++) {
    const block = document.createElement("div");
    const pairLabel = document.createElement("div");
    block.classList.add("block");
    block.setAttribute("data-id", area[i].id);
    block.setAttribute("data-pair", area[i].pair);
    block.setAttribute("data-opened", area[i].opened);
    pairLabel.classList.add("pair-label");
    pairLabel.textContent = area[i].pair;
    block.append(pairLabel);
    document.getElementById("game-area").append(block);
  }

  document,querySelectorAll(".block").forEach((block) => {
    block.addEventListener("click", () => {
      block.classList.add("opened");
      const opened = document.querySelectorAll(".opened");
      if (opened.length === 2) {
        if (opened[0].dataset.pair === opened[1].dataset.pair) {
          opened[0].classList.add("finished");
          opened[1].classList.add("finished");
        } else {
          setTimeout(() => {
            opened[0].classList.remove("opened");
            opened[1].classList.remove("opened");
          }, 1000);
        }
      }
    });
  });
})();
