$(document).ready(function() {
    var a = 0;
    var e = setInterval(function() {
        b()
    }, 10000);
    function b() {
        a = ((a == 1) ? 0 : a + 1);
        nextScreen = ((a == 1) ? 0 : a + 1);
        $(".screen").delay(300).animate({
            left: "-=92.1%"
        }, 400, function() {
            $("#screen_" + nextScreen).animate({
                left: "100%"
            }, 0)
        });
//        if (a == 0) {
//            $("#bg_0").animate({
//                opacity: 1
//            }, 0);
//            $("#bg_2").animate({
//                opacity: 0
//            }, 1000)
//        } else {
//            $("#bg_" + a).animate({
//                opacity: 1
//            }, 1000, function() {
//                $("#bg_" + (a - 1)).animate({
//                    opacity: 0
//                }, 0)
//            })
//        }
    }
});  
