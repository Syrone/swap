document.querySelectorAll('.accordion')?.forEach((accordion) => {
	const onlyOne = accordion.getAttribute('data-only-one') === 'true'
	const items = accordion.querySelectorAll('.accordion-item')

	items.forEach((item) => {
		const button = item.querySelector('.accordion-button')

		button.addEventListener('click', () => {
			const isOpen = item.classList.contains('is-open')

			if (onlyOne) {
				items.forEach((otherItem) => {
					otherItem.classList.remove('is-open')
				})
			}

			if (!isOpen || !onlyOne) {
				item.classList.toggle('is-open')
			}
		})
	})
})