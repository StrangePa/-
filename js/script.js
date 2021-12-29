window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('active')
})
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('.search__magnifier').classList.add('open')
  })
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('.search').classList.add('open')
  })
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('.search__input').classList.add('open')
  })
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('.search__button--close').classList.add('open')
  })
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('.search__button--open').classList.toggle('open')
  })
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.search').classList.remove('open')
  })
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.search__button--close').classList.remove('open')
  })
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.search__input').classList.remove('open')
  })
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.search__magnifier').classList.toggle('open')
  })
  document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.search__button--open').classList.remove('open')
  })
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active') 
    });

    document.querySelector(`[data-target=${path}]`).classList.add('tabs-item--active');
  });
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 0,
}
);
