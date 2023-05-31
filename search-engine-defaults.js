function defaultGoogle() {
	document.getElementById('search-engine').action = 'https://www.google.com/search';
	document.getElementById('google-set').style = 'display: inline;';
	document.getElementById('bing-set').style = 'display: none;';
	document.getElementById('duckduckgo-set').style = 'display: none;';
	document.getElementById('webcrawler-set').style = 'display: none;';
}
function defaultBing() {
	document.getElementById('search-engine').action = 'https://www.bing.com/search';
	document.getElementById('google-set').style = 'display: none;';
	document.getElementById('bing-set').style = 'display: inline;';
	document.getElementById('duckduckgo-set').style = 'display: none';
	document.getElementById('webcrawler-set').style = 'display: none;';
}
function defaultDuckDuckGo() {
	document.getElementById('search-engine').action = 'https://www.duckduckgo.com';
	document.getElementById('google-set').style = 'display: none;';
	document.getElementById('bing-set').style = 'display: none;';
	document.getElementById('duckduckgo-set').style = 'display: inline;';
	document.getElementById('webcrawler-set').style = 'display: none;';
}
function defaultWebCrawler() {
	document.getElementById('search-engine').action = 'https://www.webcrawler.com/search';
	document.getElementById('google-set').style = 'display: none;';
	document.getElementById('bing-set').style = 'display: none;';
	document.getElementById('duckduckgo-set').style = 'display: none;';
	document.getElementById('webcrawler-set').style = 'display: inline;';
}

//Settings

function newtabTrue() {
	document.getElementById('search-engine').target = '_blank';
}
function newtabFalse() {
	document.getElementById('search-engine').target = '_self';
}