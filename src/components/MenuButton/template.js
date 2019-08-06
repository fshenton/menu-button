import styles, { locals as s } from "./styles.scss";

// console.log(styles.toString());

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()}
	</style>
	<button class="${s.wrapper}">
		<span class="${s.label}">
			<div class="${s.icon}">
				<div class="${s.bar1}"></div>
				<div class="${s.bar2}"></div>
				<div class="${s.bar3}"></div>
			</div>
			<slot name="label">
				Default
			</slot>
		</span>
	</button>
`;

export default template;