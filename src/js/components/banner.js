const banners = document.querySelectorAll('.banner')

banners?.forEach((element) => {
	const buttonClose = element.querySelector('.banner-close')

	buttonClose?.addEventListener('click', () => {
		element.remove()
	})
})