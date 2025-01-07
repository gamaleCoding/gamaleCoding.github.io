export function typewriterEffect(element, textArray) {
  let textIndex = 0
  let charIndex = 0

  function typeText() {
    const currentText = textArray[textIndex]
    element.textContent = currentText.slice(0, charIndex + 1)
    charIndex++

    if (charIndex < currentText.length) {
      setTimeout(typeText, 50)
    } else {
      setTimeout(deleteText, 1000)
    }
  }

  function deleteText() {
    const currentText = textArray[textIndex]
    element.textContent = currentText.slice(0, charIndex - 1)
    charIndex--

    if (charIndex > 0) {
      setTimeout(deleteText, 0)
    } else {
      textIndex = (textIndex + 1) % textArray.length
      setTimeout(typeText, 500)
    }
  }

  typeText()
}
