import template from "./template.js";
import { locals as s } from "./styles.scss";

class MenuButton extends HTMLElement {
	constructor(){
		super();
		//create a shadow DOM and add new node, so that styles are isolated
		const shadow = this.attachShadow({ "mode": "open" });
		const clone = document.importNode(template.content, true);
		const button = clone.querySelector("button");

		button.addEventListener("click", this.menuButtonPressed);

		shadow.appendChild(clone);
	}
	menuButtonPressed(event){
		//set the "change" class
		event.target.classList.toggle(s.change);
	}
}

export default MenuButton;