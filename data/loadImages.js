// regexp to find image links
// found in http://stackoverflow.com/questions/169625/regex-to-check-if-valid-url-that-ends-in-jpg-png-or-gif#answer-169631
// previous one wasn't working correct
var imageRegex = /(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*\.(?:jpg|gif|png))(?:\?([^#]*))?(?:#(.*))?/g;

/**
    1. Check all links in entries
    2. If they are image, append a new eksiplus-image element after them
    3. hide the anchor, eksiplus-image-toggle span acts like the anchor but instead,
        it loads the image in the same page
*/
$(".content .url").each(function(){
    imageRegex.lastIndex = 0;
    if(imageRegex.test($(this).attr("href"))){
        $(this).addClass("eksiplus-image-toggle");
        $("<div class=\"eksiplus-image-content\"><span class=\"eksiplus-image-toggle\" data-rel=\"" + $(this).attr("href") + "\">" + $(this).html() + "</span></div>").insertAfter($(this));
        $(this).hide();
    }
});

/* bind the image loading process to the toggle */
$(".eksiplus-image-toggle").click(function(e){
    // show the image in a block
    $(this).parent().css("display", "block");

    // create image element
    var eksiplus_image = document.createElement("img");
    eksiplus_image.className = "eksiplus-image";
    eksiplus_image.src = $(this).data("rel");

    // append the image
    $(this).parent().append(eksiplus_image);

    // this is for mobile devices, if image width is longer than device width, shorten it
    if($(eksiplus_image).width() > $("#entry-list").width() - 10)
        $(eksiplus_image).width($("#entry-list").width() - 10)
});
