class MenuController {
  constructor(config = {}) {
    this.config = config;

    this.difficultySelect = document.querySelector('#difficulty-select');
    this.startButton = document.querySelector('#start-button');
    this.resetButton = document.querySelector('#reset-button');

    this.initialize(this.config);
  }

  initialize(config) {
    const {maxDifficulty = 5} = config;

    this.initializeDifficultyOptions(maxDifficulty);
  }

  initializeDifficultyOptions(maxDifficulty) {
    new Array(maxDifficulty).fill(null).forEach((_, index) => {
      const difficulty = index + 1;

      const option = document.createElement('option');
      option.innerHTML = difficulty;
      option.value = difficulty;

      this.difficultySelect.appendChild(option)
    });
  }
}