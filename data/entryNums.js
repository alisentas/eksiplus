// number regex
var numex = /\b[0-9]{1,}?\b/g

// include page numbers
if ($(".showall").length == 1){
	if($(".showall").index() == 2)
		entryNumbers(1 + parseInt(numex.exec($(".showall").html())[0]));
	else
		entryNumbers(1);
}else if($(".showall").length == 2){
	entryNumbers(1 + parseInt(numex.exec($(".showall").first().html())[0]));
}else{
	if($(".pager").length > 0)
		entryNumbers(1 + (parseInt($(".pager").attr("data-currentpage")) - 1) * self.options.entryNum);
	else
		entryNumbers(1);
}

// adds order numbers above entries
function entryNumbers(start){
	// delete entry bottm border
	var i = start;

	// print numbers
	$("#entry-list > li > .content").each(function(){
		// create element
		var num = document.createElement("div");
		num.className = "entryNum";
		var numtext = document.createTextNode("" + i);
		num.appendChild(numtext);

		// prepend element before content text
		$(this).prepend(num);
		i++;
	});
}
