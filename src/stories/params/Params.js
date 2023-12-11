export const Params = () => {
  const params = document.createElement('ul')
  params.innerHTML = `
    <li class="params__item">
      <span class="params__prop">Date</span>
      <span class="params__value">01.01.2023</span>
    </li>
    <li class="params__item">
      <span class="params__prop">Address</span>
      <span class="params__value">Moscow</span>
    </li>
    <li class="params__item">
      <span class="params__prop">Phone</span>
      <span class="params__value">John Doe</span>
    </li>
    <li class="params__item">
      <span class="params__prop">Comment</span>
      <span class="params__value">No comments</span>
    </li>
  `
  params.className = ['params'].join(' ')

  return params
}
