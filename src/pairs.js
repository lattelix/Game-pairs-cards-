function createApp(gameArea) {
  const field = document.querySelector('.game-area');
  const win = document.querySelector('.win');
  const resetBtn = document.getElementById('resetBtn');

  const gridField = [
    { id: '0', pair: '1' },
    { id: '1', pair: '1' },
    { id: '2', pair: '2' },
    { id: '3', pair: '2' },
    { id: '4', pair: '3' },
    { id: '5', pair: '3' },
    { id: '6', pair: '4' },
    { id: '7', pair: '4' },
    { id: '9', pair: '5' },
    { id: '8', pair: '5' },
    { id: '10', pair: '6' },
    { id: '11', pair: '6' },
    { id: '12', pair: '7' },
    { id: '13', pair: '7' },
    { id: '14', pair: '8' },
    { id: '15', pair: '8' },
  ];

  gridField.sort(() => Math.random() - 0.5);

  createGame();

  function createGame() {
    gridField.forEach((item, i) => {
      const block = document.createElement('div');
      const pairLabel = document.createElement('div');
      pairLabel.textContent = `${item.pair}`;
      block.setAttribute('data-id', gridField[i].id);
      block.setAttribute('data-pair', gridField[i].pair);
      block.classList.add('block');
      pairLabel.classList.add('pair-label');
      block.append(pairLabel);

      block.addEventListener('click', () => {
        block.classList.add('opened');
        const openedBlocks = document.querySelectorAll('.opened');
        if (openedBlocks.length === 2) {
          if (
            openedBlocks[0].dataset.pair === openedBlocks[1].dataset.pair
          ) {
            openedBlocks.forEach((element) => {
              element.classList.add('matched');
              element.classList.remove('opened');
            });
          } else {
            setTimeout(() => {
              openedBlocks.forEach((element) => {
                element.classList.remove('opened');
              });
            }, 1000);
          }
        } else if (openedBlocks.length > 2) {
          openedBlocks.forEach((element) => {
            element.classList.remove('opened');
          });
          block.classList.add('opened');
        }

        const matchedBlocks = document.querySelectorAll('.matched');
        if (matchedBlocks.length === gridField.length) {
          win.classList.add('is-active');
          resetBtn.textContent = 'Сыграть ещё раз';
        }
      });

      field.append(block);
    });
  }

  resetBtn.addEventListener('click', () => {
    gridField.sort(() => Math.random() - 0.5);
    const blocks = document.querySelectorAll('.block');
    blocks.forEach((item) => {
      item.classList.remove('matched');
      item.classList.remove('opened');
    });
    win.classList.remove('is-active');
    resetBtn.textContent = 'Начать заново';
  });
}
