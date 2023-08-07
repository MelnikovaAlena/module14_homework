const inputNum = document.getElementById('inputNum')
const Button = document.getElementById('Button')
const Image = document.getElementById('Image')

Button.addEventListener('click', function () {
  const value = parseInt(inputNum.value)

  if (isNaN(value) || value < 1 || value > 10) {
    Image.innerHTML = 'Число вне диапазона от 1 до 10'
  } else {
    const url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          const images = data.map(item => `<img src="${item.url}" alt="Picsum Photo">`)
          Image.innerHTML = images.join('')
        } else {
          console.error('Ошибка:', xhr.status)
          Image.innerHTML = 'Ошибка'
        }
      }
    }
    xhr.send()
  }
})