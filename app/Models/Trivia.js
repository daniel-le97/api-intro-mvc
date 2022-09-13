export class Trivia {
  constructor(data) {
    this.difficulty = data.difficulty;
    this.question = data.question;
    this.type = data.type;
    this.category = data.category;
    this.answer = data.correct_answer;
    this.choices = data.correct_answer + "," + data.incorrect_answers;
  }

  get TriviaTemplate() {
    return /*html*/ `

              <div class="col-md-3 m-3 elevation-">
            <div class="card elevation-1">
            <div class='d-flex justify-content-between mx-4'>
              <h3 class="text-center">${this.difficulty}</h3>
              <h3 class="text-center">${this.type}</h3>
              </div>
              <div class="card-body">
                <h5 class="card-title text-center">${this.category}</h5>
                <h6 class="card-text">
                ${this.question}</h6>
                <p class="text-center">${this.choices}</p>
                <a dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" class="btn btn-primary d-flex justify-content-center elevation-5">are you right?</a>
                <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">${this.answer}</a></li>
                </ul>
              </div>
            </div>
          </div>
    `;
  }
}
