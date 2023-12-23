export const Video = (args) => {
  const video = document.createElement('div')
  video.dataset.src = args.url
  video.innerHTML = `
    <div class="video__preview js-video-preview">
      <img src=${args.image} alt="" />
    </div>
    <button class="video__play js-video-btn" aria-label="Запустить видео">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
      </svg>
    </button>
  `
  video.className = ['video', 'js-video'].join(' ')

  return video
}
