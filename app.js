$(".spread_more_button").click(function() {
    if($('.more_ballon').is(":visible")){       
        $('.more_ballon').slideUp('slow');
    } else { 
        $('.more_ballon').slideDown('slow');
    }
});

const position = document.querySelector(".category_top").offsetTop;

$(window).scroll(function() {
    let sticky = $(".case_category_list");

    if($(window).scrollTop() >= position) {
        sticky.removeClass().addClass('case_category_fixedlist');
        $(".right_navi").stop().animate({"right":"10px"},500);
    } 
    if ($(window).scrollTop() < position) {
        $('.case_category_fixedlist').removeClass().addClass("case_category_list");
        $(".right_navi").stop().animate({"right":"-200px"},500);
    }
})

const case01 = document.getElementById("case_01").offsetTop;
const case02 = document.getElementById("case_02").offsetTop;

$(".top_item01").click(function() {
    window.scrollTo({top:case01-162, behavior:'smooth'});
});

$(".top_item02").click(function() {
    window.scrollTo({top:case02-162, behavior:'smooth'});
});

function sendSns(s) {
//    let url = encodeURIComponent(location.href),
    let url = "http://news.khan.co.kr/kh_storytelling/2020/aboutforce/index.html?art_id=202009281827001&code=940100 ",
        txt = encodeURIComponent($("title").html());
    switch (s) {
      case 'facebook':
        window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
        break;
      case 'twitter':
        window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
        break;
    }
}

function getScrollPosition() {
    return Math.floor(($(window).scrollTop() / ($(document).height() - $(window).height())) * 100);
}

$(window).scroll(function() {
    $(".navi_progress").stop().animate({"height": `${getScrollPosition()}%`},2);
})