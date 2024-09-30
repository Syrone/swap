/**
 * Функция для выделения текста в элементах с атрибутом data-highlight.
 * @param {NodeList} elements - Элементы для обработки.
 */
export function highlightText(element) {
	const highlights = element.getAttribute('data-highlight').split('|')
	let content = element.innerHTML

	highlights.forEach((highlight) => {
		const regex = new RegExp(`(${highlight})`, 'gi')
		content = content.replace(regex, '<span class="text-title">$1</span>')
	})

	element.innerHTML = content
}