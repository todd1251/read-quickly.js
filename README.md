read-quickly.js
===============

A quick hack inspired by [ReadQuick](http://readquickapp.com/).


Bookmarklet
-----------

Create a bookmark containing this code as the URL:

    javascript:(function(e,t,n,r,i,s,o,u){if(!(i=e.jQuery)||n>i.fn.jquery||r(i)){s=t.createElement("script");s.type="text/javascript";s.src="http://ajax.googleapis.com/ajax/libs/jquery/"+n+"/jquery.min.js";s.onload=s.onreadystatechange=function(){if(!o&&(!(u=this.readyState)||u=="loaded"||u=="complete")){r((i=e.jQuery).noConflict(1),o=1);i(s).remove()}};t.documentElement.childNodes[0].appendChild(s)}})(window,document,"1.3.2",function(e,t){function n(t,r,i){if(t.length>0){i.text(t[0]);t=t.slice(1);setTimeout(function(){n(t,r,i)},r)}else{e("#word-popover").remove()}}e("*").click(function(t){var r=300;var i=40;var s=150;e(document.body).append('<div id="word-popover"><p/></div>');e("#word-popover").css({background:"#ddf",border:"1px solid #aaf",padding:"1em",position:"absolute",width:r+"px",height:i+"px",left:e(window).width()/2-r/2+e(window).scrollLeft()+"px",top:e(window).height()/2-i/2+e(window).scrollTop()+"px"});var o=e("#word-popover p").css({"text-align":"center","font-family":"sans-serif","font-size":"36px","font-weight":"bold",margin:0,padding:0});var u=e(t.target);var a=u.text().split(/[ \t]+/);n(a,s,o)},0)})


Click a paragraph and stare at the centre of the window.

TODO
----

Ideas for improvement...

* Improve paragraph selection:
	* Give a hint on what to do?
	* Highlight paragraph on hover?
* Improve word popover:
	* Draggable/resizable? (e.g. jQuery UI)
	* Speed up / slow down.
	* Next / previous word
	* Next / previous paragraph.
* Make it work well with Readability *Read Now* bookmarketlet.
	* Beats trying to figure out the document structure!
* Automate generation of bookmarklet.
* Make sure it works in Mobile WebKit-based browsers.
