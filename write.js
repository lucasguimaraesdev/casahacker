window.onload = function() {
	const text = document.getElementById('span_construcao');
	typeWriter(text);
};
  
function typeWriter(element) {
	const textArray = element.innerHTML.split('');
	element.innerHTML = '';
	textArray.forEach((letter, i) => {
	  setTimeout(() => element.innerHTML += letter, 80 * i);
	});
}