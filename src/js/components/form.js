const formElements = document.querySelectorAll('form')
const fieldsetIcons = document.querySelectorAll('.fieldset--icon')
const numberFields = document.querySelectorAll('[data-required]')
const inputIdFields = document.querySelectorAll('[data-input-id]')

const updateFieldsetIcon = (input) => {
	const fieldset = input.closest('.fieldset--icon')
	if (fieldset) {
		const inputBlank = fieldset.querySelector('.field-blank')
		const svgIcon = inputBlank.querySelector('.icon')

		inputBlank.innerHTML = ''
		inputBlank.appendChild(svgIcon)

		inputBlank.append(` ${input.value}`)
	}
}

numberFields?.forEach((input) => {
	input.addEventListener('keydown', (event) => {
		const controlKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab', 'Delete']
		if (controlKeys.includes(event.key)) {
			return
		}

		if (!/^\d$/.test(event.key)) {
			event.preventDefault()
		}
	})
})

formElements?.forEach((form) => {
	const requiredFields = form.querySelectorAll('input[required]')
	const buttonSubmit = form.querySelector('[type="submit"]')

	const checkFields = () => {
		let allFilled = true
		requiredFields.forEach((input) => {
			if (!input.value.trim()) {
				allFilled = false
			}
		})
		buttonSubmit ? buttonSubmit.disabled = !allFilled : false
	}

	checkFields()

	requiredFields.forEach((input) => {
		input.addEventListener('input', checkFields)
	})
})

fieldsetIcons?.forEach((element) => {
	const input = element.querySelector('.field')

	input?.addEventListener('input', () => {
		updateFieldsetIcon(input)
	})
})

inputIdFields.forEach((inputIdField) => {
  const inputId = inputIdField.getAttribute('data-input-id')

  const inputTargetField = document.querySelector(`[data-input-target="${inputId}"]`)

  if (inputTargetField) {
    inputIdField.addEventListener('input', () => {
      const inputValue = parseFloat(inputIdField.value)

      const conversionRate = parseFloat(inputIdField.getAttribute('data-conversion-rate')) || 0.5

      if (isNaN(inputValue)) {
        inputTargetField.value = ''
      } else {
        const convertedValue = (inputValue * conversionRate).toFixed(1)
        inputTargetField.value = convertedValue
      }

      updateFieldsetIcon(inputIdField)
      updateFieldsetIcon(inputTargetField)
    })
  }
})