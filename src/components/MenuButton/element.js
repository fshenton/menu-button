import template from "./template.js";

class MenuButton extends HTMLElement {
	constructor(){
		super();

		const shadow = this.attachShadow({ "mode": "open" });
		const clone = document.importNode(template.content, true);
		const button = clone.querySelector("button");

		button.addEventListener("click", () => console.log("heyyy"));

		shadow.appendChild(clone);
	}
}

export default MenuButton;