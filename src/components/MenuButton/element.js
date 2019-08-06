import template from "./template.js";

class MenuButton extends HTMLElement {
	constructor(){
		super();

		const shadow = this.attachShadow({ "mode": "open" });
		const clone = document.importNode(template.content, true);
		const button = clone.querySelector("button");

		// this.menuButtonPressed = this.menuButtonPressed.bind(button);

		button.addEventListener("click", this.menuButtonPressed);

		shadow.appendChild(clone);
	}
	menuButtonPressed(event){
		console.log("yay");

		event.target.classList.toggle("change");
	}
}

export default MenuButton;