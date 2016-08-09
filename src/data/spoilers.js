// regexp to find spoilers
var spregex = /(--- <a class="b" href="\/\?q=spoiler">spoiler<\/a> ---)(.{1,})(--- <a class="b" href="\/\?q=spoiler">spoiler<\/a> ---)/g;

$(".content").each(function(){
	var spoilers = spregex.exec($(this).html());
	var i;
	spregex.lastIndex = 0;
	if(spoilers != null) // if spoilers found
		for(i = 0; i < spoilers.length; i++){
			if(spoilers[i][0] = "-" && spoilers[i][spoilers[i].length - 1] == "-" && spoilers[i].length > 100){
				// current spoiler content
				var content = spoilers[i].replace(/(<br>)*--- <a class="b" href="\/\?q=spoiler">spoiler<\/a> ---(<br>)*/g, "");
				// new spoiler element
				var newhtml = "<div class=\"eksiplus-spoiler\">--- <span class=\"eksiplus-spoiler-toggle\">spoiler</span> ---<div class=\"eksiplus-spoiler-content\">???eksiplus-spoiler-content???</div><br class=\"eksiplus-subspoiler\">--- <span class=\"eksiplus-spoiler-toggle\">spoiler</span> ---</div>";
				newhtml = newhtml.replace("???eksiplus-spoiler-content???", content);
				// replace current spoiler with new element
				$(this).html($(this).html().replace(spoilers[i], newhtml))
			}
		}
})

// handle spoiler toggle
$(".eksiplus-spoiler-toggle").click(function(){
    $(this).parent().children(".eksiplus-spoiler-content, .eksiplus-subspoiler").toggle();
});
