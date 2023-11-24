export default {
  title: 'UI/ImageUploader',
  argTypes: {
    multiple: { control: 'boolean' }
  }
}

export const Default = {
  render: (args) => {
    const imageUploader = document.createElement('div')
    imageUploader.innerHTML = `
      <input
        id="image"
        type="file"
        name="image"
        accept=".jpg, .jpeg, .png"
        aria-hidden="true"
        hidden
      />
      <label for="image" class="image-uploader__label">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M7 13.75C6.58579 13.75 6.25 13.4142 6.25 13V7.75H1C0.585786 7.75 0.25 7.41421 0.25 7C0.25 6.58579 0.585786 6.25 1 6.25H6.25V1C6.25 0.585786 6.58579 0.25 7 0.25C7.41421 0.25 7.75 0.585786 7.75 1V6.25H13C13.4142 6.25 13.75 6.58579 13.75 7C13.75 7.41421 13.4142 7.75 13 7.75H7.75V13C7.75 13.4142 7.41421 13.75 7 13.75Z"/>
</svg>
</label>
      <div class="image-uploader__list">
        <div class="image-uploader__preview">
          <button class="image-uploader__remove-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M1.92461 13.125C1.63466 13.4149 1.16456 13.4149 0.87461 13.125C0.58466 12.835 0.58466 12.3649 0.87461 12.075L5.94961 6.99998L0.874609 1.92498C0.58466 1.63503 0.58466 1.16493 0.874609 0.874976C1.16456 0.585026 1.63466 0.585026 1.92461 0.874976L6.99961 5.94998L12.0746 0.874976C12.3646 0.585026 12.8347 0.585026 13.1246 0.874976C13.4146 1.16493 13.4146 1.63503 13.1246 1.92498L8.04961 6.99998L13.1246 12.075C13.4146 12.3649 13.4146 12.835 13.1246 13.125C12.8347 13.4149 12.3646 13.4149 12.0746 13.125L6.99961 8.04998L1.92461 13.125Z" />
</svg>
</button>
          <div class="image-uploader__preview-img">
            <img src="https://images.unsplash.com/photo-1700497233171-3b1c5e50a81a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </div>
    `

    const multiple = args.multiple ? `image-uploader--multiple` : ''
    imageUploader.className = ['image-uploader', 'js-upload-img', multiple].join(' ')

    return imageUploader
  },
  args: {
    multiple: false
  }
}
