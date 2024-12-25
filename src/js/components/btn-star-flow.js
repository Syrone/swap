document.querySelectorAll('.btn-star-flow')?.forEach(button => {
	const gifImage = button.querySelector('.image')

	button.addEventListener('click', () => {
		button.classList.add('is-active')

		const gifSrc = gifImage.getAttribute('src')
		gifImage.setAttribute('src', '')
		gifImage.setAttribute('src', gifSrc)

		setTimeout(() => {
			button.classList.remove('is-active')
		}, 3000)
	})
})