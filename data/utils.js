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
