class Game {
  constructor(config = {}) {
    const {boardSize = [4, 4]} = config
    this.menu = new MenuController(config);

    this.boardSize = boardSize;

    this.referenceSequence = document.querySelector('#reference-sequence');
    this.userSequence = document.querySelector('#user-sequence');

    this.initialize();

    console.log('test');
  }

  initialize() {
    this.initializeGameBoard(this.referenceSequence);
    this.initializeGameBoard(this.userSequence);
  }

  initializeGameBoard(element) {
    const [width, height] = this.boardSize;

    element.style.display = 'grid';
    element.style.gap = '8px';
    element.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
    element.style.gridTemplateRows = `repeat(${height}, 1fr)`;

    new Array(width * height).fill(null).forEach((_, index) => {
      const button = document.createElement('button');
      button.innerHTML = index;
      element.appendChild(button);
    })
  }
}