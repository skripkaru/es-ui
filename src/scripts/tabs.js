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
              tab.classList.add('active')
              hideTabsContent()
              showTabsContent(i)
            }
          })
      }
    })

    const hideTabsContent = () => {
      tabsContent.length &&
        tabsContent.forEach((content) => {
          content.classList.remove('active')
        })

      tabs.length &&
        tabs.forEach((tab) => {
          tab.classList.remove('active')
        })
    }

    const showTabsContent = (i = 0) => {
      tabsContent.length && tabsContent[i] && tabsContent[i].classList.add('active')
      tabs.length && tabs[i] && tabs[i].classList.add('active')
    }

    hideTabsContent()
    showTabsContent()
  })
}
