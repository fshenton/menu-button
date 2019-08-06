import styles, { locals as s } from "./styles.scss";

console.log(styles.toString());

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}
	</style>

	<button class="${s.wrapper}">
		<span class="${s.label}">
			<slot name="label">
				Default
			</slot>
		</span>
	</button>
`;

export default template;