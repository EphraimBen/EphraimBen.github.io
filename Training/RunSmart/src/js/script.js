$(document).ready(function(){
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
        $(this)
          .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog__item-content').eq(i).toggleClass('catalog__item-content--active');
                $('.catalog__item-info').eq(i).toggleClass('catalog__item-info--active');
            });
        });
    };

    toggleSlide('.catalog__item-content');
    toggleSlide('.catalog__item-info')
});