/*! SWE 2.12.1 turkey-sunset 20171010T0901 */
!function(a,b,c,d){a.fn.doubleTapToGo=function(d){return"ontouchstart"in b||navigator.msMaxTouchPoints||navigator.userAgent.toLowerCase().match(/windows phone os 7/i)?(this.each(function(){var b=!1;a(this).on("click",function(c){var d=a(this);d[0]!=b[0]&&(c.preventDefault(),b=d)}),a(c).on("click touchstart MSPointerDown",function(c){for(var d=!0,e=a(c.target).parents(),f=0;f<e.length;f++)e[f]==b[0]&&(d=!1);d&&(b=!1)})}),this):!1}}(jQuery,window,document),function(a,b){"use strict";var c=[],d=0,e=a("img","#qg-coa").eq(0),f=a("#tools > li").not("#header-search"),g=a(".qg-avatar-container"),h=a('<ul id="ui-controls"><li class="tools-button"><a href="#header-search" id="show-search">Show search</a></li><li class="tools-button"><a href="#nav-site" id="show-menu">Show menu</a></li></ul>'),i=a('<ul id="cart-controls"></ul>'),j=a('<li class="tools-button"><a href="#widget-user" id="show-login">Show login</a></li>'),k=a('<li class="tools-button"><a href="#widget-cart" id="show-cart">Show cart</a></li>'),l=a('<div id="cart-widgets"></div>'),m=a('<div id="widget-user" class="slideUp"></div>'),n=a('<div id="widget-cart" class="slideUp"></div>'),o=a("#asides"),p=o.find(".minicart"),q=o.find(".user-login");if(c[p.index()]=p,c[q.index()]=q,c.reverse(),qg.oldIE)return qg.swe.isMobile=!1,void(qg.swe.isTablet=!1);a("ul","#footer").last().prepend(a(".nav-contact","#tools").clone()),0===a("#header-search").length&&h.find("li").eq(0).remove(),a("#header, #banner").delegate(".tools-button a","click",function(b){b.preventDefault();var c=a(this),d=a(c.attr("href")),e=d.hasClass("slideUp");c.toggleClass("active"),qg.swe.isMobile&&"nav-site"===d.attr("id")&&(d=d.add("#breadcrumbs")),e?(a("a",d).removeAttr("tabindex"),a("input",d).removeAttr("disabled"),d.removeClass("slideUp")):(d.find("#search-query").is(":focus")&&c.focus(),d.addClass("slideUp"),a("input",d).attr("disabled",!0),a("a",d).attr("tabindex",-1))});var r=function(){var b,r;if(b=a("#qg-coa,#qg-logo").height()<42?1:a("#header").offset().left===a(".max-width","#header").eq(0).offset().left?2:3,b!==d)if(d=b,1===b?(qg.swe.isMobile=!0,/qg-coa\.svg$/.test(e.attr("src"))&&e.attr("src",e.attr("src").replace("qg-coa.svg","qg-coa-stacked.svg")),a("#breadcrumbs").addClass("slideUp").css("display","block").find("input").attr("disabled",!0).end().find("a").attr("tabindex",-1),a("ul, p","#ia .d1").hide(0),a(".d1","#ia").filter(function(){var b=a("a",this);return b.filter(":visible").length<1}).find("h2").wrapInner("<button/>").children().unwrap().parent().filter(function(){return 1!==a("a",this).length}).bind("click",function(){a("ul, p",this).slideToggle(300)}).find("button").addClass("submenu")):(qg.swe.isMobile=!1,/qg-coa-stacked\.svg$/.test(e.attr("src"))&&e.attr("src",e.attr("src").replace("qg-coa-stacked.svg","qg-coa.svg")),a.each(c,function(b,c){o.prepend(a(c))}),a("#cart-controls").remove(),a("#cart-widgets").remove(),a("#breadcrumbs").find("a,input").removeAttr("tabindex").removeAttr("disabled").end().removeClass("slideUp"),a("ul, p","#ia").show(0),a("#ia > button").add("#ia .highlight").remove(),a("button","#ia").wrapInner("<h2/>").children().unwrap()),3>b){qg.swe.isTablet=!qg.swe.isMobile,(p.length||q.length)&&(a("#tools").after(i),a("#breadcrumbs").before(l),p.length&&(a(i).append(k),a(l).append(n),a(n).append(p)),q.length&&(a(i).append(j),a(l).append(m),a(m).append(q))),f.appendTo(a("#nav-site ul").eq(0)),a("#tools").length>0?h.insertBefore("#tools"):a("#banner").length>0?h.appendTo("#banner"):a("#qg-coa,#qg-logo").eq(0).after(h),a("#ui-controls #show-menu").parent().before(g),a("#header-search, #nav-site").addClass("slideUp").find("input").attr("disabled",!0).end().find("a").attr("tabindex",-1),a("#tools, #nav-site").show();var s;a(".has-submenu").length>0&&(a("#nav-process").remove(),s=a('<div id="nav-process"><div class="box-sizing"><div class="nav-wrapper"><div class="nav"><ul class="cf"><li></li></ul></div></div></div></div>'),a("#nav-section ol").eq(0).clone().appendTo(s.find("li")),a('<a class="dropdown" href="#"></a>').text("Step "+s.find(".current .page-number").text()+" of "+s.find(".page-number").eq(-1).text()).prependTo(s.find("ul > li")),s.hide(0),a("h1").eq(0).after(s),a("#nav-process li:has(ol)").doubleTapToGo()),r=a(".form, form, .article","#content").width(),a("input, select, textarea","#content").each(function(){var b=a(this);b.width()>r&&b.width(.8*r)})}else qg.swe.isTablet=!1,a("#header-search, #nav-site").find("a,input").removeAttr("tabindex").removeAttr("disabled").end().removeClass("slideUp"),h.remove(),f.prependTo(a("#tools").eq(0)),a(".menu","#header").remove(),a("#nav-process").remove()};b.bind("x-initial-sizes x-window-width-resize",r)}(jQuery,ResizeEvents),function(a,b){"use strict";a.flowt={},a.flowt.defaultOptions={containerClass:"figure",captionSelector:".figcaption",activeClass:"figure-active"},a.flowt.conf={};var c=function(){var b=a(this),c=b.data("flowt"),d=b.parent().width(),e=b.data("original-width");b.width("100%"),d>=e?(b.width(e),b.find(c.captionSelector).eq(0).setInnerWidth(e)):b.find(c.captionSelector).eq(0).setInnerWidth(b.width())},d=function(b){a(b).each(c)},e=function(b){b="undefined"==typeof b?a.flowt.defaultOptions:a.extend({},a.flowt.defaultOptions,b);var d,e=a(this),f=document.createElement("img");f.src=e.find("img").attr("src"),d=f.width,e.data("flowt",b),e.width(d).data("original-width",d).addClass(b.activeClass),e.find("img").eq(0).width("100%"),c.call(this)},f=function(){var b=a(document.body).data("flowt");void 0!==b&&a.each(b,function(a,b){d(b)})};a(document.body).data("flowt",[]),a.fn.flowt=function(b){b=b||{};var c=a(document.body).data("flowt");return this.each(function(){a(this).is("."+a.flowt.conf.activeClass)||(c[c.length]=this.selector,e.call(this,b))}),a(document.body).data("flowt",c),this},a.fn.setInnerWidth=function(a){var b=this.innerWidth()-this.width();return this.width(a-b),this},"undefined"!=typeof b&&b.bind("x-window-width-resize x-text-resize",f)}(jQuery,ResizeEvents),jQuery.expContent={},jQuery.expContent.defaultOptions={linkText:""},jQuery.expContent.conf={expandableClass:"expandable",toggleClass:"expandable-toggle",activeClass:"expandable-active",openClass:"open",hideText:"Hide"},function(a){a(document).ready(function(){a("."+a.expContent.conf.expandableClass).expandableContent()}),a.fn.expandableContent=function(b){return b=b||{},a(this).each(function(){a(this).is("."+a.expContent.conf.activeClass)||initExpandContent.apply(this,[b])}),a(this)},initExpandContent=function(b){return b="undefined"==typeof b?a.expContent.defaultOptions:a.extend({},a.expContent.defaultOptions,b),a(this).data("options",b),linkText=""!=b.linkText?b.linkText:a(this).firstHeading().text(),""==linkText?(a.debug&&a.debug("Could not initialise expandable content for #"+a(this).generateId().attr("id")+" - options.linkText was empty and no heading could be found. One of these is required to populat the expandable link text."),!1):(a(this).hide().addClass(a.expContent.conf.activeClass).before(toggle=a('<a href="#'+a(this).generateId().attr("id")+'" class="'+a.expContent.conf.toggleClass+'">'+linkText+"</a>")),void toggle.click(toggleExpContent))},showExpContent=function(){return a(this).attr("title",a.expContent.conf.hideText+' "'+a(this).text()+'"').nextAll(".expandable-active:first").stop().height("auto").slideDown(function(){a(this).addClass(a.expContent.conf.openClass).trigger("x-height-change")}),!1},hideExpContent=function(){return a(this).attr("title",a(this).text()).nextAll(".expandable-active:first").stop().height("auto").slideUp(function(){a(this).removeClass(a.expContent.conf.openClass).trigger("x-height-change")}),!1},toggleExpContent=function(){var b=a(this),c=b.data("expandable-content.toggle")||!1,d=c===!0?hideExpContent:showExpContent;d.call(this),b.data("expandable-content.toggle",!c)},a.fn.firstHeading=function(b){return b=b||!1,headingSelector="h1:first, h2:first, h3:first, h4:first, h5:first, h6:first",a(this).is("fieldset")&&(headingSelector="legend:first, "+headingSelector),heading=b?a(this).find(headingSelector).eq(0):a(this).children(headingSelector).eq(0),""!=heading.text()?heading:a("<h2 />")}}(jQuery),$(function(a){"use strict";var b,c=window.location.pathname.substr(window.location.pathname.lastIndexOf("/")+1);0===a(".current-page","#nav-section").length&&(a("#guide-title").length>0?b=a("#guide-title").text():a('meta[name="DCTERMS.alternative"]').length>0&&""!==a('meta[name="DCTERMS.alternative"]').eq(0).attr("content")?b=a('meta[name="DCTERMS.alternative"]').eq(0).attr("content"):!function(){var c=a("h1","#content").eq(0).clone();c.find(".page-number").remove(),b=c.text()}(),a("li","#nav-section").filter(function(){return a.trim(a(this).text())===b}).eq(0).addClass("current-page")),null!==document.getElementById("toc")&&(a('a[href="'+c+'"]',"#toc").parent().addClass("current"),a(".link-text","#toc").filter(function(){return a.trim(a(this).text())===a("h2","#content").eq(0).text()}).closest("li").addClass("current"),a(".current-page","#nav-section").addClass("has-submenu").append(a("#toc ol").clone())),a("#guide-progress").length>0&&a('a[href="'+c+'"]',"#guide-progress").parent().addClass("current")}(jQuery)),jQuery.cFormLabelsConf={inputSelector:":input",labelSelector:"label",compactLabelClass:"compact-label",hiddenLabelClass:"visuallyhidden"},function(a){"use strict";var b,c;a.fn.compactFormLabel=function(c){var d;return c=c||{},a(this).filter(a.cFormLabelsConf.inputSelector+", "+a.cFormLabelsConf.labelSelector).each(function(){if(a(this).is(a.cFormLabelsConf.inputSelector))b(this);else{if(d=a(this).attr("for"),"undefined"==typeof d)return void a.debug('DEBUG: Each "label" must have a "for" attribute that references the input it is labelling');b("#"+d)}}),a(this)},a.fn.findLabel=function(){var b,c=a(this).attr("id");return"undefined"==typeof c?(a.debug('DEBUG: Cannot find "label" for input element that doesn\'t have a unique "id" attribute'),null):(b=a(a.cFormLabelsConf.labelSelector+'[for="'+c+'"]'),0===b.length?(a.debug('DEBUG: No "label" element found for the input with id "'+c+'" '),null):b)},b=function(b){var d=a(b).findLabel();d.addClass(a.cFormLabelsConf.compactLabelClass),a(b).bind("focus blur",c),a(b).triggerHandler("blur")},c=function(b){var c=a(this).findLabel();"focus"===b.type||""!==a(this).val()?c.addClass(a.cFormLabelsConf.hiddenLabelClass):c.removeClass(a.cFormLabelsConf.hiddenLabelClass)}}(jQuery),function(a){"use strict";qg.oldIE&&qg.oldIEversion<7&&document.execCommand("BackgroundImageCache",!1,!0),a(".comparison").each(function(){var b=a(this);b.children(":first-child").is(".comparison-inner")||b.wrapInner('<div class="comparison-inner" />'),0===b.prev(".comparison").length?b.addClass("comparison-first"):0===b.next(".comparison").length&&b.addClass("comparison-last")}),a("#access").addClass("hidden").bind("focusin",function(){a("#access").addClass("visible")}).bind("focusout",function(){a("#access").removeClass("visible")}),a("#header").ariaRole("banner"),a("#access, #tools, #nav-site, #nav-section, #breadcrumbs, #fat-footer").ariaRole("navigation"),a("#search-form, .search-box-group").ariaRole("search"),a("#footer").ariaRole("contentinfo"),a("#content").ariaRole("main"),a(".article").ariaRole("article"),a(".application #content .article, #content.application .article").ariaRole("application"),a(".aside").ariaRole("complementary"),a("#access, #header, #nav-site, #nav-section, #breadcrumbs, #fat-footer, .aside, #page-feedback").labelledBy("h2"),a("#fat-footer .section").labelledBy("h3"),a("#content, .article").labelledBy(":header"),a("#footer").labelledBy("h2:not(#fat-footer h2)"),a("#search-query").not("[placeholder]").each(function(){a(this).compactFormLabel()}),(!qg.oldIE||qg.oldIEversion>=7)&&a('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"], a.map, a.definition').not(".download").butterfly({closeButton:!0,closeButtonCorner:"tr",galleryContainers:".image-gallery",closeButtonImage:qg.swe.paths.assets+"images/skin/button-close.png"}),a("body").attr("data-site-root")&&a("a.lightbox").butterfly({contentDefaultWidth:"50%",contentDefaultHeight:"50%",mediaMaxWidth:"50%",mediaMaxHeight:"50%",treatAsMedia:!1,lightBoxMargin:null}),a("table").addClass("striped").find("tr:odd").not("thead tr").addClass("even"),a("body.residents").length>0?a("#nav-site .nav-residents").addClass("current-area"):a("body.business").length>0?a("#nav-site .nav-business").addClass("current-area"):0===a("#breadcrumbs a").length&&"/"===window.location.pathname.substr(window.location.pathname.lastIndexOf("/"))&&a("#nav-site .nav-home").addClass("current-area"),a.linkedUpConf&&a("#global-alert").linkedUp()}(jQuery,qg),function(a,b){"use strict";var c=function(){var d,e,f,g,h;return d=a(".article").eq(0),window.ResizeEvents.throttle(c,150)?void(b.oldIE||d.css("height","auto")):(d.css("height","auto"),e=d.height(),void(b.swe.isMobile||b.swe.isTablet||(f=0===a("#asides").length||0===a("#asides .aside").length?0:a("#asides").height(),a("#nav-section").length&&(g=a("#nav-section").height(),h=a("#post-page-options,#footer").offset().top-d.offset().top,g>h&&(g=(e>f?e:f)+g-h),g>f&&(f=g)),f>e&&d.height(f))))};0===a("body.home").length&&(c(),a(window).resize(c),a(window.document).ready(c),a("#page-container").bind("x-height-change relevant-done irrelevant-done",c))}(jQuery,qg),$(function(){"use strict";var a="figure, .figure, .cut-in, .cut-in-alt";$("#page-container").delegate(".figure-credits-toggle","click",function(){$(this).closest(a).find(".figure-credits").slideDown(500,function(){$(this).trigger("x-height-change")}).focus().end().end().fadeOut(1337)}),$(".figure-credits",a).each(function(){$(this).before('<button class="figure-credits-toggle" title="View credits"><img src="'+qg.swe.paths.assets+'images/skin/icon-image-credit.png" alt"View credits" /></button>').hide().trigger("x-height-change")})}),function(a){"use strict";var b="PDF|DOC|DOCX|XLS|XLSX|RTF";a(document).ready(function(){a("a","#content, #asides").filter(function(){var c=new RegExp("\\.("+b+")$","i").test(this.href);return c?0===a(this).addClass("download").find(".meta").length:!1}).each(function(){var c,d,e=a(this),f=e.text();new RegExp("\\((?:"+b+"),?\\s+[0-9\\.]+\\s*[KM]B\\)$","i").test(f)?(d=a('<span class="meta">'+f.replace(new RegExp("^.*\\(("+b+"),?\\s+([0-9\\.]+)\\s*([KM]B)\\)$"),"($1, $2$3)")+"</span>"),c=e.contents().eq(-1),c[0].data=c[0].data.replace(new RegExp("\\s+\\((?:"+b+"),?\\s+[0-9\\.]+\\s*[KM]B\\)$"),""),e.wrapInner('<span class="title"/>'),e.append(" "),e.append(d)):(f=e.attr("href").replace(/^.*\.(.+)$/,"$1").toUpperCase(),e.wrapInner('<span class="title"/>').append(' <span class="meta">('+f+")</span>"))})})}(jQuery),function(a,b){"use strict";var c=function(){function b(){var b=window.location.pathname.replace(/\/$/,""),c=b.split("/").filter(function(a){return a}),e={franchise:c[0],"page-title":a(document).find("title").text(),"page-url":window.location.href,"page-referer":document.referrer,rspUsrAgent:navigator.userAgent};d(e)}function c(a){return a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\+/g,"&#43;").replace(/\\/g,"&#92;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/{/g,"&#123;").replace(/}/g,"&#124;"):!1}function d(b){a.each(b,function(b,d){var e=a('<input type="hidden"/>');e.attr("name",b),e.attr("value",c(d)),a("#feedback-hidden-inputs").append(e)})}return{init:b}},d=function(){a("#ia > ul").attr("id","flex-grid")},e=function(b){var c,d,e=0,f=0,g=[],h=0;a(b).each(function(){if(c=a(this),a(c).height("auto"),h=c.position().top,f!==h){for(d=0;d<g.length;d++)g[d].height(e);g.length=0,f=h,e=c.height(),g.push(c)}else g.push(c),e=e<c.height()?c.height():e;for(d=0;d<g.length;d++)g[d].height(e)})},f=function(){var b="";a('meta[name="DCTERMS.isReplacedBy"]').length?b=a("<a/>").attr("href",a('meta[name="DCTERMS.isReplacedBy"]').attr("content"))[0].href:/^https:/.test(window.location.href)&&(b=window.location.href),b.length&&a(".share a","#post-page-options").filter(function(){return!/[?&]url=/.test(this.href)}).each(function(){this.href=this.href+"&url="+encodeURIComponent(b)})},g=function(){var c=a("#page-feedback"),d=a("#page-feedback-useful");c.length>0&&d.length<=0&&((!b.oldIE||b.oldIEversion>=7)&&a("#page-feedback-privacy").expandableContent(),0===a(".status.info",c).length&&c.prepend('<div class="status info"><h2>Feedback on government services, departments and staff</h2><p>Please use our <a href="https://www.qld.gov.au/contact-us/complaints/">complaints and compliments form</a>.</p></div>'),c.prepend('<form><ol class="questions"><li><fieldset id="page-feedback-about"><legend><span class="label">Is your feedback about:</span></legend><ul class="choices"><li><input type="radio" name="page-feedback-about" value="this website" id="page-feedback-about-this-website" /><label for="page-feedback-about-this-website">this website</label></li><li><input type="radio" name="page-feedback-about" value="a government service" id="page-feedback-about-a-government-service" /><label for="page-feedback-about-a-government-service">a government service, department or staff member?</label></li></ul></fieldset></li></ol></form>'),a("#page-feedback-about").delegate(":radio","click",function(){var b="this website"===this.value;if(b){var d=a("#post-page-options").find("a.selected");switch(a(d).text()){case"Useful":a("#page-was-useful-yes").attr("checked",!0);break;case"Not useful":a("#page-was-useful-no").attr("checked",!0)}}a(".info",c).relevance("relevant",!b),a(".form",c).relevance("relevant",b)}),a(".info, .form",c).relevance("relevant",!1),a("#post-page-options > ul").prepend('<li class="feedback"><a href="#page-feedback" class="button selected" id="page-feedback-useful">Feedback</a></li>'),a("#page-was-useful").find('input[name="useful"]').click(function(){switch(a("#post-page-options").find("a").removeClass("selected"),a(this).val()){case"yes":a("#page-feedback-useful").addClass("selected");break;case"no":a("#page-feedback-not-useful").addClass("selected")}}),a("#post-page-options").delegate("a[href$=#page-feedback]","click",function(b){switch(a("#post-page-options").find("a").removeClass("selected"),a(this).addClass("selected"),c.relevance("relevant",!0),a(this).text()){case"Useful":a("#page-was-useful-yes").click();break;case"Not useful":a("#page-was-useful-no").click()}h(),b.preventDefault()}),a("#content,#asides").delegate("a[href$=#page-feedback]","click",function(b){c.relevance("relevant",!0),a("#page-feedback-about-this-website").click(),a(this).parents("#post-page-options").length||h(),b.preventDefault()}),c.relevance("relevant",!1),a(c).find('form[action$=".jsp"]').attr("action","https://www.smartservice.qld.gov.au/services/submissions/email/feedback/feedback")),c.length>0&&d.length>0&&(a(".form",c).relevance("relevant",!1),a("#post-page-options").delegate("a[href$=#page-feedback]","click",function(b){a(".form",c).relevance("relevant",!0),h(),b.preventDefault()}))},h=function(){var b=a("#page-feedback");b.is(":hidden")?setTimeout(function(){a("html, body").animate({scrollTop:b.offset().top},500)},1e3):a("html, body").animate({scrollTop:b.offset().top},500)};a(function(){0!==a("#pre-page-options, #post-page-options, #page-feedback").length&&(c().init(),d(),f(),g(),a(window).load(function(){e(".qg-grid .item")}),a(window).resize(function(){a(".qg-grid .item").length>0&&e(".qg-grid .item")}))})}(jQuery,qg),function(a,b){"use strict";var c={url:"//creativecommons.org/licenses/",imgSrc:b+"images/licences/",types:{by:{name:"Attribution",imgName:"by-80x15.png",versions:{"3.0":{title:"3.0 Australia (CC BY 3.0 AU)",urlPath:"by/3.0/au/"},"4.0":{title:"4.0 International (CC BY 4.0)",urlPath:"by/4.0/"}}},"by-sa":{name:"Attribution-ShareAlike",imgName:"by-sa-80x15.png",versions:{"3.0":{title:"3.0 Australia (CC BY-SA 3.0 AU)",urlPath:"by-sa/3.0/au"},"4.0":{title:"4.0 International (CC BY-SA 4.0)",urlPath:"by-sa/4.0/"}}},"by-nd":{name:"Attribution-NoDerivatives",imgName:"by-nd-80x15.png",versions:{"3.0":{title:"3.0 Australia (CC BY-ND 3.0 AU))",urlPath:"by-nd/3.0/au/"},"4.0":{title:"4.0 International (CC BY-ND 4.0)",urlPath:"by-nd/4.0/"}}},"by-nc":{name:"Attribution-NonCommercial",imgName:"by-nc-80x15.png",versions:{"3.0":{title:"3.0 Australia (CC BY-NC 3.0 AU)",urlPath:"by-nc/3.0/au/"},"4.0":{title:"4.0 International (CC BY-NC 4.0)",urlPath:"by-nc/4.0/"}}},"by-nc-sa":{name:"Attribution-NonCommercial-ShareAlike",imgName:"by-nc-sa-80x15.png",versions:{"3.0":{title:"3.0 Australia (CC BY-NC-SA 3.0 AU)",urlPath:"by-nc-sa/3.0/au/"},"4.0":{title:"4.0 International (CC BY-NC-SA 4.0)",urlPath:"by-nc-sa/4.0/"}}},"by-nc-nd":{name:"Attribution-NonCommercial-NoDerivatives",imgName:"by-nc-nd-80x15.png",versions:{"3.0":{title:"3.0 Australia (CC BY-NC-ND 3.0 AU)",urlPath:"by-nc-nd/3.0/au/"},"4.0":{title:"4.0 International (CC BY-NC-ND 4.0)",urlPath:"by-nc-nd/4.0/"}}}}},d=function(a){var b,d,e;return e=/\/licenses\/([a-zA-Z0-9-/.]+)/g.exec(a)[1].split("/").filter(function(a){return a}),b=e[0],d=e[1],"3.0"===d||"4.0"===d?{name:c.types[b].name,url:c.url,imgPath:c.imgSrc+c.types[b].imgName,version:c.types[b].versions[d]}:void 0};document.getElementById("document-licence")||a("meta").filter('[name="DCTERMS.license"]').filter(function(){return new RegExp("https?://creativecommons.org/licenses/[a-zA-Z0-9\\-\\/\\.]+").test(this.content)}).eq(0).each(function(){var b,c=this.content;b=d(c),b&&a("dl","#document-properties").prepend('<dt class="visuallyhidden">Licence</dt>\n<dd id="document-licence"><a rel="license" href="'+b.url+b.version.urlPath+'" title="Text available under Creative Commons '+b.name+" "+b.version.title+' licence"><img src="'+b.imgPath+'" alt="Creative Commons '+b.name+" "+b.version.title+'" /></a></dd>\n')})}(jQuery,qg.swe.paths.assets),function(a,b,c){"use strict";a.fn.printLinkURLs=function(){var b=200;a(this).filter("a[href]").each(function(){var c=this.href;c.length>b&&(c=this.protocol+"//"+this.hostname),c=a("<div/>").text(c).html(),a(this).after('<small class="print-link-url"> ( '+c+" )</small>")})};var d=function(){if(!b.swe.isMobile&&"/"!==location.pathname&&a('body:not([class*="index"], .qg-no-print-link)').length>0){var c=a("<a>");c.text(" Print").addClass("print-content-link").on("click",function(a){a.preventDefault(),window.print()}).prepend('<span class="fa fa-print"></span>'),a("h1","#content").before(c)}else a("h1","#content").prev(".print-content-link").remove()};a(document).ready(function(){a("#content-container a, #footer a").not("#breadcrumbs a, .page-options a, #fat-footer a, .url, .email, #pagination a, .nav a, .tabs a, .st_tabs a, .search-results a, .search-result a, table a, .key a, .expandable-toggle, #app-geocoding").printLinkURLs(),d(),c.bind("x-initial-sizes x-window-width-resize",d)})}(jQuery,qg,ResizeEvents),function(a,b,c){"use strict";var d={},e=function(){var b=a(this).prev().find("a[tabindex=0]");0===b.length&&(b=a(this).siblings(".section").last().find("a[tabindex=0]")),b.attr("tabindex",0).focus()},f=function(){var b=a(this).next().find("a[tabindex=0]");0===b.length&&(b=a(this).siblings(".section").first().find("a[tabindex=0]")),b.attr("tabindex",0).focus()};d[b]=e,d[c]=f,a("#fat-footer .section").managefocus("a",{role:"menu",ignoreKeys:[b,c],keyHandlers:d})}(jQuery,DOM_VK_LEFT,DOM_VK_RIGHT),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}}),function(a){"use strict";var b=a(".compact.tabbed");b.removeClass("compact tabbed"),b.find(".section").addClass("st_view"),b.find(".contents").addClass("st_view_inner").removeClass("contents");var c=a('<ul class="st_tabs_ul"/>');b.find(".st_view").each(function(){var b=a(this),d=b.find("h2, .section-header").eq(0);b.generateId("tab"),c.append('<li><a href="#'+b.attr("id")+'">'+d.text()+"</a></li>"),d.remove()}),b.prepend(c.wrap('<div class="st_tabs_wrap"/>').parent().wrap('<div class="st_tabs"/>').parent()),b.addClass("slidetabs swe-horizontal"),b.find(".st_view").wrapAll('<div class="st_views"></div>'),b.find(".st_view").each(function(){var b=a(this).attr("id");a(this).addClass(b).removeAttr("id")})}(jQuery),$(function(){"use strict";function a(){b.setContentHeight(),$("#tabs, .slidetabs").trigger("x-height-change")}var b=$("#tabs, .slidetabs");if(0!==b.length){b=b.slidetabs({externalLinking:!0,autoHeight:!0,autoHeightSpeed:100,touchSupport:!0,tabsShowHash:!0,responsive:!0,contentAnim:"slideH",tabsSaveState:!0,urlLinking:!0,contentEasing:"",tabsEasing:"",onContentVisible:function(a){$(a).trigger("tabactive")}}),window.location.hash&&$("a.st_tab",".st_tabs_wrap").each(function(a,c){return-1!==c.href.indexOf(window.location.hash)?void b.goTo(a+1):void 0}),$(".st_tab_active","#tabs, .slidetabs").trigger("tabactive"),$("iframe, img","#tabs, .slidetabs").on("load",a),$(window).on("scroll",a);var c=$(window).width(),d=$(window).height();$(window).resize(function(){var a=function(){$(window).trigger("resize")},b=$(window).width(),e=$(window).height(),f=window.setTimeout(a,10);(c!==b||d!==e)&&window.clearTimeout(f),c=b,d=e})}});