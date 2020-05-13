$(function(){
    $('.header-nav-arrow').click(function() {
        $('.main-content').toggleClass('main-content-collapsed');
        $(this).toggleClass('arrow-active')
    });
    $('.fade-block').click(function() {
        $('.main-content').toggleClass('main-content-collapsed');
        $('.header-nav-arrow').toggleClass('arrow-active')
    })


    $(".nav__item").click(function() {
        $(".nav__item").removeClass("nav__item-active");
        $(this).addClass("nav__item-active");
        $(".nav__item-inner").removeClass("active");
    })
    $(".nav__item-inner").click(function() {
        $(".nav__item-inner").removeClass("active").eq($(this).index()).addClass("active");
        $(".nav__item").removeClass("nav__item-active");
    })
    
    // invoke modals in dropdown menus
    $('.delete-return').click(function() {
        $('#option-return-modal').modal();
    })
    $('.delete-delete').click(function() {
        $('#option-delete-modal').modal();
    })
    // end of invokation

    // table items selection
    $('.table-item').click(function() {
        $(this).toggleClass('selected');
    })
    // end of table items selection

    // resize function 
    let contentHeight = $('aside').height();
    let windowWidth1 = $(window).width()
    if( windowWidth1 > 950) {
        $('main').css({
            minHeight: `${contentHeight}`+'px'
        })
    } else {$('main').css({
        minHeight: 'auto'
    })}
    $(window).resize(function() {
        let windowWidth = $(window).width()
        if( windowWidth > 950) {
            $('main').css({
                minHeight: `${contentHeight}`+'px'
            })
        } else {$('main').css({
            minHeight: 'auto'
        })}
    })
    // end of resize function
});