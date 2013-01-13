javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="http://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){
/* begin */

    $("*").click(function(event) {

        var width = 300;
        var height = 40;
        var delay = 150;

        $(document.body).append('<div id="word-popover"><p/></div>');
        $("#word-popover").css({
            background: "#ddf",
            border: "1px solid #aaf",
            padding: "1em", 
            position: "absolute",
            width: width + "px",
            height: height + "px",
            left: (($(window).width() / 2) - (width / 2) + $(window).scrollLeft()) + "px",
            top: (($(window).height() / 2) - (height / 2) + $(window).scrollTop()) + "px",
        });
    
        var element = $("#word-popover p").css({ 
            "text-align": "center", 
            "font-family": "sans-serif",
            "font-size": "36px",
            "font-weight": "bold",
            margin: 0,
            padding: 0,
        });

        var paragraph = $(event.target);
        var words = paragraph.text().split(/[ \t]+/);
        readQuickly(words, delay, element);

    }, 0);

    function readQuickly(words, delay, element)
    {
        if (words.length > 0)
        {
            element.text(words[0]);
            words = words.slice(1);
            setTimeout(function() {
                readQuickly(words, delay, element);
            }, delay);
        }
        else
        {
            $("#word-popover").remove();
        }
    }

/* end */
});
