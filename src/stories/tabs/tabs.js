export const initTabs = (parentSelector = '.tabs') => {
  const tabsParents = document.querySelectorAll(parentSelector)

  tabsParents.forEach((parent) => {
    const tabs = parent.querySelectorAll('.tabs__controls-item')
    const tabsContent = parent.querySelectorAll('.tabs__content')

    parent.addEventListener('click', (e) => {
      const tabsBtn = e.target

      if (tabsBtn && tabsBtn.closest('.tabs__controls-item')) {
        tabs.length &&
          tabs.forEach((tab, i) => {
            if (tabsBtn === tab || tabsBtn.parentNode === tab) {
              tab.classList.add('is-active')
              hideTabsContent()
              showTabsContent(i)
            }
          })
      }
    })

    const hideTabsContent = () => {
      tabsContent.length &&
        tabsContent.forEach((content) => {
          content.classList.remove('is-active')
        })

      tabs.length &&
        tabs.forEach((tab) => {
          tab.classList.remove('is-active')
        })
    }

    const showTabsContent = (i = 0) => {
      tabsContent.length && tabsContent[i] && tabsContent[i].classList.add('is-active')
      tabs.length && tabs[i] && tabs[i].classList.add('is-active')
    }

    hideTabsContent()
    showTabsContent()
  })
}

export const createComponent = () => {
  const component = document.createElement('div')
  component.innerHTML = `
    <div class="tabs__controls">
      <button class="tabs__controls-item">Settings</button>
      <button class="tabs__controls-item">Security</button>
      <button class="tabs__controls-item">Subscribe</button>
    </div>
    <div class="tabs__content">
      <p>Settings</p>
    </div>
    <div class="tabs__content">
      <p>Security</p>
    </div>
    <div class="tabs__content">
      <p>Subscribe</p>
    </div>
  `
  component.className = ['tabs'].join(' ')

  return component
}
