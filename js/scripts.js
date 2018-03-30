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


// модальное окно напишите нам
var write = document.querySelector('.button-write-us');
var writePopup = document.querySelector('.modal-write-us');

write.addEventListener('click', function (evt) {
  evt.preventDefault();
  writePopup.classList.add('modal-write-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  writePopup.classList.remove('modal-write-show');
});