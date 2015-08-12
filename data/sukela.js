if ($(".sub-title-menu").length > 0){
	// page url
	var url = $("#title a").attr("href");

	// new anchor element within a div
	var sukuDiv = document.createElement("div");
	var sukuAnchor = document.createElement("a");

	// append the anchor to the sub-title-menu
	sukuAnchor.href = url += "?a=nice";
	sukuAnchor.innerHTML = "şükela modu";
	sukuDiv.appendChild(sukuAnchor);
	$(".sub-title-menu").append(sukuDiv);
}
