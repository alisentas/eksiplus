// page modification module
var pageMod = require("sdk/page-mod");

// addon preferences
var preferences = require("sdk/simple-prefs").prefs;

// context menu
var contextMenu = require("sdk/context-menu");

// script and style files to be included
var styleFiles = [];
var scriptFiles = ["./jquery.js"];

// show entry nums if selected
if (preferences.entryNums){
	styleFiles.push("./entryNums.css");
	scriptFiles.push("./entryNums.js");
}

// show old buttons
if (preferences.oldButtons)
	styleFiles.push("./oldbuttons.css");

// fixed title (currently unsupported)
/*if (preferences.fixedTitle){
  styleFiles.push("./fixedTitle.css");
  scriptFiles.push("./fixedTitle.js");
}*/

// hide spoilders, show if user clicks
if (preferences.hideSpoilers){
  styleFiles.push("./spoilers.css");
  scriptFiles.push("./spoilers.js");
}

// put sukela buttons below title
if (preferences.sukela){
  scriptFiles.push("./sukela.js");
}

// hide stuff
	// hide social icons
if (preferences.hideSocialIcons)
	styleFiles.push("./hideSocialIcons.css");
	// hide videos
if (preferences.hideVideos)
	styleFiles.push("./hideVideos.css");
	// hide ads
if (preferences.hideAds)
	styleFiles.push("./hideAds.css");

// import load images module
if (preferences.loadImages){
	styleFiles.push("./loadImages.css");
	scriptFiles.push("./loadImages.js");
}

if (preferences.utilities){
	styleFiles.push("./utils.css");
	scriptFiles.push("./utils.js");
}

// page modification module call with included scripts, styles and preferences
pageMod.PageMod({
  include: "*.eksisozluk.com",
  contentScriptFile: scriptFiles,
  contentStyleFile: styleFiles,
  contentScriptOptions: {
    entryNum: preferences.entryNum,
  }
});

/* add "ekside ara" to context menu
 it redirects to the search page, or an article if found */
var ekside_ara = contextMenu.Item({
 	label: "Ekşi'de Ara",
 	context: contextMenu.SelectionContext(),
 	contentScriptFile: "./selection-search.js",
});
