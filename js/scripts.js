// модальное окно с картой
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


// оживление блока услуги
document.querySelector('.delivery-button')
  .addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.services-delivery').classList.remove('dnone');
    document.querySelector('.services-warranty').classList.add('dnone');
    document.querySelector('.services-credit').classList.add('dnone');
  });

document.querySelector('.warranty-button')
  .addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.services-warranty').classList.remove('dnone');
    document.querySelector('.services-delivery').classList.add('dnone');
    document.querySelector('.services-credit').classList.add('dnone');
  });

document.querySelector('.credit-button')
  .addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector('.services-credit').classList.remove('dnone');
    document.querySelector('.services-delivery').classList.add('dnone');
    document.querySelector('.services-warranty').classList.add('dnone');
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