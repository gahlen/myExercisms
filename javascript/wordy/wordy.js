export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer () {
    let number = 0;
    let qArry = this.question.split(/[" ", ?]/);
    if (!/plus|minus|divided|multiplied/.test(this.question)) throw new ArgumentError();

    qArry.forEach((item, i) => {
      switch (item) {
        case "What":
          number = +qArry[i + 2];
          break;
        case "plus":
          number += +qArry[i + 1];
          break;
        case "minus":
          number -= +qArry[i + 1];
          break;
        case "multiplied":
          number *= +qArry[i + 2];
          break;
        case "divided":
          number /= +qArry[i + 2];
          break;
      }
    });
    return number;
  };
}

export class ArgumentError extends Error {}