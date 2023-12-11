export const Table = () => {
  const table = document.createElement('div')
  table.innerHTML = `
     <div class="table__inner">
        <div class="table__header">
          <div class="table__col">ID</div>
          <div class="table__col">Date</div>
          <div class="table__col">Number</div>
          <div class="table__col">Price</div>
        </div>
        <div class="table__body">
          <div class="table__row">
            <div class="table__col">1000121</div>
            <div class="table__col">01.01.2023</div>
            <div class="table__col">11</div>
            <div class="table__col">8000</div>
          </div>
          <div class="table__row">
            <div class="table__col">1000122</div>
            <div class="table__col">01.01.2023</div>
            <div class="table__col">3</div>
            <div class="table__col">8000</div>
          </div>
          <div class="table__row">
            <div class="table__col">1000123</div>
            <div class="table__col">01.01.2023</div>
            <div class="table__col">1</div>
            <div class="table__col">8000</div>
          </div>
        </div>
      </div>
  `
  table.className = ['table'].join(' ')

  return table
}
