class Game {
  constructor(config = {}) {
    const {boardSize = [4, 4]} = config
    this.menu = new MenuController({
      ...config,
      onStart: this.start.bind(this),
      onReset: this.reset.bind(this)
    });

    this.boardSize = boardSize;

    this.referenceSequence = document.querySelector('#reference-sequence');
    this.userSequence = document.querySelector('#user-sequence');

    this.initialize();
  }

  initialize() {
    this.initializeGameBoard(this.referenceSequence);
    this.initializeGameBoard(this.userSequence, 'button');
  }

  start() {
    this.sequence = new Sequence({length: this.menu.getDifficulty(), maxValue: this.boardSize[0] * this.boardSize[1]});
  }

  reset() {
    console.log('reset');
  }

  initializeGameBoard(element, childType = 'div') {
    if (!element) {
      throw new Error('\'element\' cannot be null');
    }

    const [width, height] = this.boardSize;

    element.style.display = 'grid';
    element.style.gap = '8px';
    element.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    element.style.gridTemplateRows = `repeat(${height}, 1fr)`;
    const boardName = element.id;

    new Array(width * height).fill(null).forEach((_, index) => {
      const square = document.createElement(childType);
      // TODO: If must go
      if (childType == 'button') {
        square.value = index;
      } else {
        square.id = `${boardName}-${index}`;
      }
      element.appendChild(square);
    })
  }
}