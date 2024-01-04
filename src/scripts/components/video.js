export const initVideo = () => {
  const findVideos = () => {
    let videos = document.querySelectorAll('.js-video')

    videos.forEach((video) => {
      setupVideo(video)
    })
  }

  const setupVideo = (video) => {
    let button = video.querySelector('.js-video-btn')
    let preview = video.querySelector('.js-video-preview')

    video.addEventListener('click', (e) => {
      let srcData = e.currentTarget.dataset.src
      let newSrc = srcData + '?autoplay=1'
      let iframe = createIframe(newSrc)
      video.appendChild(iframe)
      button.remove()
      preview.remove()
    })
  }

  const createIframe = (url) => {
    let iframe = document.createElement('iframe')
    iframe.setAttribute('title', 'YouTube video player')
    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    )
    iframe.setAttribute('src', url)

    return iframe
  }

  findVideos()
}
