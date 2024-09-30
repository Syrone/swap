const dataHighlights = document.querySelectorAll('[data-highlight]')

dataHighlights?.forEach((element) => {
  const highlights = element.getAttribute('data-highlight').split('|')
  let content = element.innerHTML

  highlights.forEach((highlight) => {
    const regex = new RegExp(`(${highlight})`, 'gi')
    content = content.replace(regex, '<span class="text-title">$1</span>')
  })

  element.innerHTML = content
})