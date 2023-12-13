export const Navigation = () => {
  const navigation = document.createElement('div')
  navigation.innerHTML = `
    <button class="navigation__prev">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.82539 11.125C6.53544 11.4149 6.06534 11.4149 5.77539 11.125L0.650391 5.99998L5.77539 0.874975C6.06534 0.585026 6.53544 0.585026 6.82539 0.874976C7.11534 1.16493 7.11534 1.63503 6.82539 1.92498L2.75039 5.99998L6.82539 10.075C7.11534 10.3649 7.11534 10.835 6.82539 11.125Z" />
      </svg>
    </button>
    <button class="navigation__next">
      <svg width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.17559 0.875024C1.46554 0.585075 1.93564 0.585075 2.22559 0.875024L7.35059 6.00002L2.22559 11.125C1.93564 11.415 1.46554 11.415 1.17559 11.125C0.885637 10.8351 0.885637 10.365 1.17559 10.075L5.25059 6.00002L1.17559 1.92502C0.885638 1.63507 0.885638 1.16497 1.17559 0.875024Z" />
      </svg>
    </button>
  `
  navigation.className = ['navigation'].join(' ')

  return navigation
}
