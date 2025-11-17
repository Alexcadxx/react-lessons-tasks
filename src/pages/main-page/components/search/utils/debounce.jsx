export const debounce = (fn, delay) => {
	let timerId;
	return (...args) => {
		clearTimeout(timerId);
		timerId = setTimeout(fn, delay, ...args);
		// setTimeout(() => fn(...args), delay) --> Это второй вариант вызова
		// функции setTimeout, получится то же самое.
	};
};
