const modal = document.getElementById('modalshiryu');
const btn = document.getElementById('btn-abrir-modalshiryu');
const span = document.getElementsByClassName('closeshiryu')[0];

btn.onclick = function() {
  modalshiryu.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == shiryu) {
    modal.style.display = 'none';
  }
}