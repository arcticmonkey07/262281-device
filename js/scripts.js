var link = document.querySelector('.contacts-map');
var popup = document.querySelector('.modal-map');
var close = document.querySelector('.close');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});



// var btns = document.getElementsByClassName('contacts-map');
// var par = document.getElementsByClassName('modal-map');
// btns[0].onclick = function() {
//   par[0].classList.add("dblock");
// }

// var btns = document.getElementsByClassName('modal-close');
// var par = document.getElementsByClassName('modal-map');
// btns[1].onclick = function() {
//   par[0].classList.remove("dblock");
// }