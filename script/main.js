$(function(){
    ad(); // 광고창
    modal(); // 모달창
    movieExplorer();
    setInterval(mouseScroll, 1500);
});
function mouseScroll(){
    $("#mouse").animate({
        bottom: "-50"
    },"swing",function(){
        $("#mouse").animate({
            bottom: "-40"
        });
    })
}
function movieExplorer(){
    $("input[type=image]").click(function(){        
        // 항상 false : null, undefined, "", 0, false
        // 나머지는 true
        var keyword = $("input[type=text]").val();
        if(!keyword) {
            alert("영화명을 입력하셔야 합니다");
        } else {
            console.log(keyword);
            // $("input[type=text]").val("");
            // 실제로는 location.href="" 특정 url 리다이렉트 해야함.
            location.href="https://www.megabox.co.kr/movie?searchText="+keyword;
        }
    });
}
function modal() {    

    $(".favorite").click(function(){
        $("#modal").show();
    });

    $("#close_x").click(function(){
        $("#modal").hide();
    });
    $("#close_ok").click(function(){
        $("#modal").hide();
    });
}
function ad(){
    $(".ad-close").click(function(){
        $(".ad").hide();
    });
}