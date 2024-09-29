const banners = document.querySelectorAll('.banner')

banners?.forEach((element) => {
	const buttonClose = element.querySelector('.banner-close')

	buttonClose?.addEventListener('click', () => {
    const currentHeight = element.scrollHeight + 'px'

    element.style.height = currentHeight

    setTimeout(() => {
      element.style.transition = 'opacity 200ms ease, height 600ms ease, padding 600ms ease, margin 600ms ease'
      element.style.opacity = '0'
      element.style.height = '0px'
      element.style.padding = '0px'
      element.style.marginTop = '-1rem'
    }, 10)

    setTimeout(() => {
			element.style.position = 'absolute'
      element.remove()
    }, 600)
  })
})