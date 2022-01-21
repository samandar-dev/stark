let elopenmodal = document.getElementById('openModal');
let elColsemodal = document.getElementById('close-btn');
let elModal = document.getElementById('Modal');


elopenmodal.addEventListener('click', function () {
  elModal.classList.add('show');
});

elColsemodal.addEventListener('click', function () {
  elModal.classList.remove('show');
});


let elopennmodal = document.getElementById('opennModal');
let elColseemodal = document.getElementById('closee-btn');
let elbagModal = document.getElementById('bagModal');


elopennmodal.addEventListener('click', function () {
  elbagModal.classList.add('bagModal');
});

elColseemodal.addEventListener('click', function () {
  elbagModal.classList.remove('bagModal');
});


let elopenShopnmodal = document.querySelector('.shop__img-icon');
let elColseEemodal = document.getElementById('closeEe-btn');
let elbagShopModal = document.getElementById('mod-show-bag-shop');


elopenShopnmodal.addEventListener('click', function () {
  elbagShopModal.classList.add('mod-show-bag-shop');
});


elColseEemodal.addEventListener('click', function () {
  elbagShopModal.classList.remove('mod-show-bag-shop');
});



let elopenHeartnmodal = document.getElementById('open-heart_show');
let elheartColseEemodal = document.getElementById('heart-close-btn');
let elbagHeartModal = document.getElementById('heart_show');


elopenHeartnmodal.addEventListener('click', function () {
  elbagHeartModal.classList.add('heart_show');
});


elheartColseEemodal.addEventListener('click', function () {
  elbagHeartModal.classList.remove('heart_show');
});



let elopenMessenbtn = document.getElementById('openMessenBtn');
let elmessenCloseBtn = document.getElementById('messen_closeBtn');
let elopenMesseng = document.getElementById('open__messeng');


elopenMessenbtn.addEventListener('click', function () {
  elopenMesseng.classList.add('open__messeng');
});


elmessenCloseBtn.addEventListener('click', function () {
  elopenMesseng.classList.remove('open__messeng');
});