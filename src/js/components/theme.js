import Cookies from 'js-cookie'

document.addEventListener('DOMContentLoaded', function() {
  const switches = document.querySelectorAll('[data-switch-theme]')

  function setTheme(isDark) {
    const theme = isDark ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
    Cookies.set('theme', theme, { expires: 365 })

    switches.forEach(switchElement => {
      const checkbox = switchElement.querySelector('.switch-input')
      checkbox.checked = isDark
    })
  }

  const savedTheme = Cookies.get('theme')
  const isDark = savedTheme === 'dark'
  setTheme(isDark)

  switches.forEach(switchElement => {
    const checkbox = switchElement.querySelector('.switch-input')

    checkbox.addEventListener('change', function() {
      setTheme(checkbox.checked)
    })
  })
})