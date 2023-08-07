const inputWidth = document.getElementById('inputWidth')
const inputHeight = document.getElementById('inputHeight')
const Button = document.getElementById('Button')
const Image = document.getElementById('Image')

Button.addEventListener('click', function () {
  const width = parseInt(inputWidth.value)
  const height = parseInt(inputHeight.value)

  if (isNaN(width) || isNaN(height) || width < 100 || width > 300 || height < 100 || height > 300) {
    Image.innerHTML = 'Oдно из чисел вне диапазона от 100 до 300'
  } else {
    const url = `https://dummyimage.com/${width}/${height}`
    fetch(url)
      .then((response) => {
        const imageElement = document.createElement('img')
        imageElement.src = url
        imageElement.alt = 'Image Error'
        Image.innerHTML = ''
        Image.appendChild(imageElement)
      })
      .catch((error) => {
        Image.innerText = 'Ошибка'
      })
  }
})