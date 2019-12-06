$(function () {
    _navEvent()
})

$(window).resize(function () {
    _navEvent()
})

$("#totop").click(function () {
    $('html , body').animate({scrollTop: 0}, 500);
})

function _navEvent() {
    if ($('#nav').length == 0) {
        return;
    }
    var len = $('#nav a.active').text().length;
    var $item = $('#nav a.active').parent();
    var offset = $item.offset();
    var uo = $('#nav .nav-wrap').offset();
    var $bg = $('#nav span.abg');
    var left = offset.left - uo.left;
    $bg.css({
        'width': len + 'em',
        'left': left
    });

    $('#nav a').hover(function () {
        var len2 = $(this).text().length;
        var $item2 = $(this).parent();
        var offset2 = $item2.offset();
        var left2 = offset2.left - uo.left;

        $bg.css({
            'width': len2 + 'em',
            'left': left2
        })

    }, function () {
        $bg.css({
            'width': len + 'em',
            'left': left
        });
    })
}

$("img").on("mousedown", function (e) {
    e.preventDefault()
})

$(".recommend-home .list-tabs li").on("click", function () {
    var _index = $(this).index()

    $(this).addClass("active").siblings().removeClass("active")

    $(".recommend-home .list-box .list-item").eq(_index).fadeIn().siblings().hide()
})

$(".news .left .toptab li").on("click", function () {
    var _index = $(this).index()

    $(this).addClass("active").siblings().removeClass("active")

    $(".news .left .con-wrap .item").eq(_index).fadeIn().siblings().hide()
})

$(document).ready(function () {

    if ($(".news .right").length > 0) {
        $(".news .right .list").slide({
            mainCell: "ul",
            effect: "topMarquee",
            vis: 4,
            interTime: 50,
            autoPlay: true,
            easing:"swing"
        });
    }
    if ($(".hot-product").length > 0) {
        $(".hot-product .list").slide({
            mainCell: "ul",
            effect: "leftMarquee",
            vis: 4,
            interTime: 30,
            autoPlay: true,
            easing:"swing"
        });
    }
    var newsLi = $(".news-list li")
    newsLi.on("mouseenter", function () {
        var _activeIndex = $(this).index()
        var _prevIndex = $(this).prev().index()
        newsLi.eq(_activeIndex).addClass("active").siblings().removeClass("active")
        if (_prevIndex < 0) {
            return
        }
        newsLi.eq(_prevIndex).addClass("border-none")
    })
    newsLi.on("mouseleave", function () {
        newsLi.removeClass()
    })
})