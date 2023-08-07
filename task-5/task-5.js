const pageInput = document.getElementById('pageNumber')
const limitInput = document.getElementById('limit')
const jsBtn = document.getElementById('jsBtn')
const imageTask = document.getElementById('imageTask')
const lastURL = localStorage.getItem('lastURL')

if (lastURL) {
  fetchImages(lastURL)
}

jsBtn.addEventListener('click', function () {
  const pageNumber = parseInt(pageInput.value)
  const limit = parseInt(limitInput.value)

  if ((isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
    imageTask.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10'
  } else if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
    imageTask.innerHTML = 'Номер страницы вне диапазона от 1 до 10'
  } else if (isNaN(limit) || limit < 1 || limit > 10) {
    imageTask.innerHTML = 'Лимит вне диапазона от 1 до 10'
  } else {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${limit}`
    fetchImages(url)
    localStorage.setItem('lastURL', url)
  }
})

function fetchImages (url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        imageTask.innerHTML = 'Нет доступных изображений.'
      } else {
        const images = data.map(item => `<img src="${item.url}" alt="image error">`)
        imageTask.innerHTML = images.join('')
      }
    })
    .catch((error) => {
      imageTask.innerHTML = 'Ошибка'
    })
}