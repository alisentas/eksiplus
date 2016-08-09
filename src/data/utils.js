// ability to search authors other entries in the title
$("#entry-list .info").each(function(){
    var url = $("#title a").attr("href");
    var searchAuthor = document.createElement("a");
    var searchAuthorLi = document.createElement("li");
    var author = $(this).children(".entry-author").text().replace(" ", "+");

    searchAuthor.textContent = "diğer yazılarına bak";
    searchAuthor.href = url + "?a=search&author=" + author;
    searchAuthorLi.appendChild(searchAuthor);

    $(this).find(".other ul").append(searchAuthorLi);
})


// search text counter
var counter = document.createElement("span");
counter.textContent = 0;
counter.className = "eksiplus-search-counter";
$("#search-form").prepend(counter);

$("#search-textbox").keyup(function(){
    $(".eksiplus-search-counter").text($(this).val().length);
})
