import { appState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTrivia() {
  let template = "";
  appState.trivias.forEach((t) => (template += t.TriviaTemplate));
  setHTML("trivia-cards", template);
}

export class TriviasController {
  constructor() {
    console.log("hello from triviasController");
    appState.on("trivias", _drawTrivia)
    this.getTriviaQuestions()
  }

  async getTriviaQuestions() {
    try {
      await triviasService.getTriviaQuestions();
    } catch (error) {
      console.error(error);
      Pop.error("error");
    }
  }
}
