$(".eksiplus-toggle").on("click", function(e){
    if($(this).html() == " [-]"){
        $(this).html(" [+]");
        $(this).parent().parent().children(".eksiplus-content").toggle();
    }else{
        $(this).html(" [-]");
        $(this).parent().parent().children(".eksiplus-content").toggle();
    }
})
