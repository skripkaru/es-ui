export const initUploader = () => {
  const containers = document.querySelectorAll('.js-upload')

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
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
        </svg>
        `

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

export const createUploader = (args) => {
  const imageUploader = document.createElement('div')
  imageUploader.innerHTML = `
    <div class="uploader__field">
      <input
        id="image"
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        aria-hidden="true"
        hidden
        ${args.multiple ? 'multiple' : ''}
      />
      <label for="image" class="uploader__label">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13.75C6.58579 13.75 6.25 13.4142 6.25 13V7.75H1C0.585786 7.75 0.25 7.41421 0.25 7C0.25 6.58579 0.585786 6.25 1 6.25H6.25V1C6.25 0.585786 6.58579 0.25 7 0.25C7.41421 0.25 7.75 0.585786 7.75 1V6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H7.75V13C7.75 13.4142 7.41421 13.75 7 13.75Z"/>
        </svg>
      </label>
    </div>`

  const multiple = args.multiple ? `uploader--multiple` : ''
  imageUploader.className = ['uploader', 'js-upload', multiple].join(' ')

  return imageUploader
}
