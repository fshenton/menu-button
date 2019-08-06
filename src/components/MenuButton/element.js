import template from "./template.js";

class MenuButton extends HTMLElement {

	constructor(){
		super();
	}
	connectedCallback(){
		const clone = document.importNode(template.content, true);
		const button = clone.querySelector("button");

		button.addEventListener("click", () => console.log("heyyy"));

		this.appendChild(clone);
	}

}

export default MenuButton;