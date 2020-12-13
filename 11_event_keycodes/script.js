const insert = document.getElementById('insert');


window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key display" id="key">
    ${event.key == ' ' ? 'space' : event.key} 
    <small>event.key</small>
  </div>
  <div class="key display" id="keyCode">
    ${event.keyCode}
    <small>event.keycode</small>
  </div>
  <div class="key display" id="code">
    ${event.code}
    <small>event.code</small>
  </div>
  `;
})