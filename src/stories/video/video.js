export const initVideo = () => {
  const tag = document.createElement('script')
  tag.src = 'https://www.youtube.com/iframe_api'
  const firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  let videos = document.querySelectorAll('.js-video')

  if (!videos.length) return

  videos.forEach((video) => {
    let button = video.querySelector('.js-video-btn')
    let preview = video.querySelector('.js-video-preview')

    button.addEventListener('click', () => {
      new window.YT.Player(preview, {
        videoId: preview.dataset.id,
        events: {
          onReady: onPlayerReady
        }
      })

      function onPlayerReady(event) {
        event.target.playVideo()
        button.remove()
      }
    })
  })
}

export const createComponent = (args) => {
  const component = document.createElement('div')
  component.innerHTML = `
  <div data-id="${args.videoId}" class="video__preview js-video-preview">
    <img src="${args.image}" alt="" />
    <button class="video__play js-video-btn" aria-label="Запустить видео">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
      </svg>
    </button>
  </div>
  `
  component.className = ['video', 'js-video'].join(' ')

  return component
}
