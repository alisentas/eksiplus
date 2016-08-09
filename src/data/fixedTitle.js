/* This file is currently out of use */

var titleOffset = $("#title").offset().top;
var $header = $("#title").clone();
var fixedheader = document.createElement("div");
fixedheader.id = "title-fixed";
$("#topic").append(fixedheader);
var $fixedHeader = $("#title-fixed").append($header);

$(window).bind("scroll", function() {
    var offset = $(this).scrollTop();

    if (offset >= 160 && $fixedHeader.is(":hidden")) {
        $fixedHeader.show();
    }else if (offset < 160) {
        $fixedHeader.hide();
    }
});

$( window ).resize(function() {
  $("#title-fixed").css("left", $("#index-section").offset().left + 226 + "px");
});
