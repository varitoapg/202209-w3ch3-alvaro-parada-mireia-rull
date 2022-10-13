import Component from "../Component.js";
import ShowStructure from "./types.js";

class Show extends Component implements ShowStructure {
  constructor(
    parentElement: HTMLElement,
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number
  ) {
    super(parentElement);
  }

  rate() {
    this.watched = true;
  }
}

export default Show;
