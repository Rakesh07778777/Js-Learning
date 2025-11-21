const insert = document.querySelector('.container')

window.addEventListener('keydown' , (e) =>{
    console.log(e)
    insert.innerHTML = `
    <div class="table-items">
    <table>
  <tr>
    <th>Code</th>
    <th>Key</th>
    <th>KeyCode</th>
  </tr>
  <tr>
    <td>${e.code}</td>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
  </tr>
</table>
    </div>
    `
})