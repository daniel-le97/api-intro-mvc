import { appState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";
import { triviaServer } from "./AxiosService.js"

class TriviasService{
 async getTriviaQuestions() {
    const res = await triviaServer.get("/api.php?amount=20");
    console.log(res.data);

    appState.trivias = res.data.results.map(rawData => new Trivia(rawData))
    
  }


}
export const triviasService = new TriviasService()