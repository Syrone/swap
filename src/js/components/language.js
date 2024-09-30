import i18next from 'i18next'
import i18nextHttpBackend from 'i18next-http-backend'
import Cookies from 'js-cookie'

const savedLanguage = Cookies.get('i18nextLng') || 'ru'

i18next
	.use(i18nextHttpBackend)
	.init({
		lng: savedLanguage,
		backend: {
			loadPath: './locales/{{lng}}.json'
		}
	}, function (err, t) {
		updateContent()
		updateLanguageSwitch()
	})

function updateContent() {
	document.querySelectorAll('[data-i18next]')?.forEach(function (element) {
		const key = element.getAttribute('data-i18next')
		if (element.tagName.toLowerCase() === 'input') {
			element.placeholder = i18next.t(key)
		} else {
			element.innerHTML = i18next.t(key)
		}
	})

	document.querySelectorAll('[data-i18next-date]')?.forEach(function (element) {
		const dateString = element.getAttribute('data-i18next-date')

		if (dateString) {
			const date = new Date(dateString)

			const formattedDate = new Intl.DateTimeFormat(i18next.language, {
				year: undefined,
				month: 'long',
				day: 'numeric',
				hour: '2-digit',
				minute: '2-digit'
			}).format(date)

			element.innerHTML = formattedDate
		}
	})
}

function updateLanguageSwitch() {
	const currentLanguage = i18next.language

	document.querySelectorAll('[data-i18next-language]')?.forEach(function (radio) {
		radio.checked = (radio.getAttribute('data-i18next-language') === currentLanguage)
	})
}

const switchElements = document.querySelectorAll('[data-i18next-switch]')
switchElements?.forEach((switchElement) => {
	switchElement.addEventListener('click', function () {
		const switchType = switchElement.getAttribute('data-i18next-switch')

		if (switchType === 'toggle') {
			const newLang = i18next.language === 'ru' ? 'en' : 'ru'
			i18next.changeLanguage(newLang, function () {
				Cookies.set('i18nextLng', newLang, { expires: 365 })
				updateContent()
				updateLanguageSwitch()
			})
		} else if (switchType === 'checkbox-radio') {
			const radios = switchElement.querySelectorAll('[data-i18next-language]')
			radios.forEach(function (radio) {
				radio.addEventListener('change', function () {
					const selectedLanguage = this.getAttribute('data-i18next-language')
					i18next.changeLanguage(selectedLanguage, function () {
						Cookies.set('i18nextLng', selectedLanguage, { expires: 365 })
						updateContent()
						updateLanguageSwitch()
					})
				})
			})
		}
	})
})

document.addEventListener('DOMContentLoaded', () => {
	updateLanguageSwitch()
})