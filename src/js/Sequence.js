class Sequence {
  constructor({length, boardSize: [width, height]}) {
    this.length = length;
    this.currentLength = 1;

    this.generate(width * height);
    console.log(this.sequence);
    this.showSequence(length);
  }

  generate(max) {
    this.sequence = new Array(this.length)
      .fill(null)
      .map(() => this.getRandomFromRange(0, max - 1));
  }

  getRandomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  showSequence(length = this.currentLength) {
    let counter = 0;
    this.timer = setInterval(() => {
      this.highlightBox(this.sequence[counter++]);
      console.log(counter, length);
      if (counter >= length) {
        clearInterval(this.timer);
        this.clearBoxes();
      }
    }, 600);
  }

  clearBoxes() {
    const boxes = Array.from(document.querySelectorAll('#reference-sequence > *'));
    boxes.forEach(box => box.className = '');
  }

  highlightBox(boxId) {
    const box = document.querySelector('#reference-sequence').children[boxId];
    this.clearBoxes();
    box.className = 'highlighted';
    console.log(box);
  }
}