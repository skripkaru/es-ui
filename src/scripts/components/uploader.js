export const initUploader = (selector = '.js-upload') => {
  const containers = document.querySelectorAll(selector)

  containers.forEach((container) => {
    const input = container.querySelector('input[type=file]')
    let list = container.querySelector('.uploader__list')

    const handleRemove = (e) => {
      e.preventDefault()
      const removeBtn = e.target.closest('.uploader__remove-btn')
      if (removeBtn) {
        const preview = removeBtn.parentElement
        if (preview) {
          input.value = null
          preview.remove()
        }

        // Проверяем, если список существует и пуст, то удаляем его
        if (list && list.children.length === 0) {
          list.remove()
          list = null // Сбрасываем ссылку на список, чтобы создать новый при последующей загрузке
        }
      }
    }

    const handleFiles = (files) => {
      // Если список не существует, создаем новый
      if (!list) {
        list = document.createElement('div')
        list.classList.add('uploader__list')
        container.appendChild(list)
      }

      // Для каждого файла создаем блок предпросмотра и кнопку удаления
      Array.from(files).forEach((file) => {
        const preview = document.createElement('div')
        preview.classList.add('uploader__preview')

        const imgContainer = document.createElement('div')
        imgContainer.classList.add('uploader__preview-img')
        const img = document.createElement('img')
        img.file = file
        imgContainer.appendChild(img)
        preview.appendChild(imgContainer)

        const reader = new FileReader()
        reader.onload = (e) => {
          img.src = e.target.result
        }
        reader.readAsDataURL(file)

        const removeBtn = document.createElement('button')
        removeBtn.classList.add('uploader__remove-btn')
        removeBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.92461 13.125C1.63466 13.4149 1.16456 13.4149 0.87461 13.125C0.58466 12.835 0.58466 12.3649 0.87461 12.075L5.94961 6.99998L0.874609 1.92498C0.58466 1.63503 0.58466 1.16493 0.874609 0.874976C1.16456 0.585026 1.63466 0.585026 1.92461 0.874976L6.99961 5.94998L12.0746 0.874976C12.3646 0.585026 12.8347 0.585026 13.1246 0.874976C13.4146 1.16493 13.4146 1.63503 13.1246 1.92498L8.04961 6.99998L13.1246 12.075C13.4146 12.3649 13.4146 12.835 13.1246 13.125C12.8347 13.4149 12.3646 13.4149 12.0746 13.125L6.99961 8.04998L1.92461 13.125Z" />
          </svg>`

        removeBtn.addEventListener('click', handleRemove)
        preview.appendChild(removeBtn)
        list.appendChild(preview)
      })
    }

    input.addEventListener(
      'change',
      (e) => {
        const files = e.target.files
        if (input.hasAttribute('multiple')) {
          handleFiles(files)
        } else {
          if (list) {
            list.innerHTML = '' // Очистить список, если multiple не установлен
          }
          handleFiles([files[files.length - 1]]) // Добавить последнее изображение
        }
      },
      false
    )

    // Делегирование события клика на контейнере предварительного просмотра
    list?.addEventListener('click', handleRemove)
  })
}
