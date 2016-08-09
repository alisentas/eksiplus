self.on("context", function(){
    var text = window.getSelection().toString().replace(/[.,!?']/g, "");
    if (text.length > 20)
        text = text.substr(0, 20) + "...";
    return "Ekşi'de \"" + text + "\" ifadesini ara";
});

self.on("click", function () {
    var text = window.getSelection().toString();
    text = text.replace(" ", "+").replace(/[.,!?']/g, "").toLowerCase();
    window.location = "http://eksisozluk.com/?q=" + text;
});
