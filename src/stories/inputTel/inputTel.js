import Inputmask from 'inputmask'

export const initInputTel = () => {
  const inputs = document.querySelectorAll("input[type='tel']")

  if (!inputs.length) return

  const phoneMask = new Inputmask('+7 (999) 999-99-99')

  phoneMask.mask(inputs)
}
