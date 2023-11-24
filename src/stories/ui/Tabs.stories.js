export default {
  title: 'UI/Tabs'
}

export const Default = () => {
  return `
    <div class="tabs">
      <div class="tabs__controls">
        <button class="tabs__controls-item">Settings</button>
        <button class="tabs__controls-item">Security</button>
        <button class="tabs__controls-item">Subscribe</button>
      </div>
      <div class="tabs__content">Settings</div>
      <div class="tabs__content">Security</div>
      <div class="tabs__content">Subscribe</div>
    </div>
  `
}
