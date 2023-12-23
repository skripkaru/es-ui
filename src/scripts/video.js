export const initVideo = () => {
  const findVideos = () => {
    let videos = document.querySelectorAll('.js-video')
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i])
    }
  }

  const setupVideo = (video) => {
    let button = video.querySelector('.card-video__media-btn') || video.querySelector('.js-video-btn')
    let previewImg = video.querySelector('.js-video-preview')

    video.addEventListener('click', (e) => {
      let srcData = e.currentTarget.dataset.src
      let newSrc = srcData + '?autoplay=1'
      let iframe = createIframe(newSrc)
      video.appendChild(iframe)
      video.classList.add('isOn')
      button.remove()
      previewImg.remove()
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
