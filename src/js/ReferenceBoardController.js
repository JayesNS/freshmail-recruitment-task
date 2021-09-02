class ReferenceBoardController {
  constructor(config) {
    const {boardSize} = config;

    this.boardSize = boardSize;

    this.initialize();
  }

  initialize() {
    this.referenceBoard = document.querySelector('#reference-sequence');

    let elementFactory = (index) => {
      const element = document.createElement('div');
      const boardName = parent.id;
      element.id = `${boardName}-${index}`;
      element.addEventListener('animationend', ({target}) => {
        this.clearHighlight(target);
      })
      return element;
    };

    fillGrid(this.referenceBoard, elementFactory, this.boardSize);
  }

  setSequence(sequence) {
    this.sequence = sequence;
  }

  showSequence(length = this.sequence.currentLength) {
    let counter = 0;
    this.timer = setInterval(() => {
      if (counter >= length) {
        clearInterval(this.timer);
        return;
      }
      this.highlightBox(this.sequence.sequence[counter]);
      counter++;
    }, 700);


  }

  highlightBox(elementId) {
    const element = this.referenceBoard.children[elementId];
    element.style.animation = 'highlight ease-in-out 500ms';
  }

  clearHighlight(element) {
    element.style.animation = '';
  }
}