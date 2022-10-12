import Advisor from "../characters/Advisor/Advisor.js";
import Character from "../characters/Character/Character.js";
import Fighter from "../characters/Fighter/Fighter.js";
import King from "../characters/King/King.js";
import Squire from "../characters/Squire/Squire.js";
import Component from "./Component.js";

class CharacterCard extends Component {
  constructor(parentElement: HTMLElement, private character: Character) {
    super(parentElement, "character col", "li");
  }

  render() {
    super.render();
    this.domElement.innerHTML = `<div class="card character__card">
            <img
              src="img/${this.character.name}.jpg"
              alt="${this.character.name} ${this.character.family}"
              class="character__picture card-img-top"
            />
            <div class="card-body">
              <h2 class="character__name card-title h4">${
                this.character.name
              } ${this.character.family}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.character.age} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                ${
                  this.character instanceof King
                    ? `<li>Años de reinado: ${this.character.yearsOfReign} </li>`
                    : ""
                }
                ${
                  this.character instanceof Fighter
                    ? `<li>Arma: ${this.character.weapon} </li>`
                    : ""
                }
                ${
                  this.character instanceof Fighter
                    ? `<li>Destreza: ${this.character.skillValue} </li>`
                    : ""
                }
                ${
                  this.character instanceof Squire
                    ? `<li>Peloteo: ${this.character.lickAssValue}</li>`
                    : ""
                }
                ${
                  this.character instanceof Advisor
                    ? `<li>Asesora a: ${this.character.serves.name} </li>`
                    : ""
                }
                
                ${
                  this.character instanceof Squire
                    ? `<li>Sirve a: ${this.character.itServes.name}</li>`
                    : ""
                }
                  
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji">
            ${
              this.character instanceof King
                ? "👑"
                : this.character instanceof Fighter
                ? "⚔️"
                : this.character instanceof Advisor
                ? "🎓"
                : this.character instanceof Squire
                ? "🛡️"
                : ""
            }</i>
          </div>`;
  }
}

export default CharacterCard;
