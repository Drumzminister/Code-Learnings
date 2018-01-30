// Id Plugin
(function($) {
    $.fn.logAttr = function(opts) {
        var defaults = {
            attr: "id",
            backup: "N/A",
            useAlert: false
            };
            var options = $.extend({}, defaults, opts);
    return this.each(function() {
        var value = $(this).attr(options.attr) || backup;
    options.useAlert ? alert(value): console.log(value);
  
    });
    };
    })(jQuery);

//Accordion Plugin
    (function($){
        $.fn.accordion = function(opts){
            var defaults = {
                headings : "h2",
                content : "p"
            };
            var options = $.extends({},defaults,opts)
            return this.each(function(){
                var $this = $(this);
                var headings = $this.children(options.headings);
                var paragraphs = $this.children(options.content);

                var animateAccordion = function(elem, duration){
                   
                    paragraphs.stop(true,true).slideUp(duration)
                    $(elem).stop(true,true).slideDown(duration)
                };

                paragraphs.not(":first").hide();
                accordion.on("click", options.headings, function() {
                var t = $(this);
                var tPara = t.next();
                    if(!tPara.is(":visible")) {
                    tPara.trigger("showParagraph");
                };

                $this.on("showParagraph", "options.content", function() {
                    animateAccordion(this, 600);
                });
});
            });


        };
    })(jQuery);