import { highlightText } from '../functions/highlight'

const dataHighlights = document.querySelectorAll('[data-highlight]')

dataHighlights?.forEach(element => {
  highlightText(element)
})