/*! SWE 2.12.1 turkey-sunset 20171010T0901 */
!function(a){"use strict";var b;jQuery.eventful="undefined"!=typeof jQuery.eventful?jQuery.eventful:{},jQuery.eventful.debugMode="undefined"!=typeof jQuery.eventful.debugMode?jQuery.eventful.debugMode:!1,jQuery.eventful.internalSites=[window.location.protocol+"//"+window.location.hostname],jQuery.eventful.tempNode=null,jQuery.eventful.gaTrackerNamespace="",_gaq="undefined"!=typeof _gaq?_gaq:[],a.eventful.glueSites=function(b){_gaq.push([a.eventful.gaTrackerNamespace+"_setDomainName","none"],[a.eventful.gaTrackerNamespace+"_setAllowLinker",!0]),b="undefined"!=typeof b?b:a.eventful.internalSites,a(b).each(function(){var b=a.url(this).attr("host");a.url(window.location.href).attr("host")!==b&&a(document).delegate('a[href~="'+b+'"]',"click",function(){return a.eventful.debugMode?void a.eventfulDebug(a.eventful.gaTrackerNamespace+"_link; "+a(this).attr("href")):(_gaq.push([a.eventful.gaTrackerNamespace+"_link",a(this).attr("href")]),!1)})})},a.eventful.setTracker=function(b){a.eventful.gaTrackerNamespace=b+"."},a.eventful.setInternalSites=function(b){a.eventful.internalSites=b},a.extend(a.expr[":"],{internal:function(b){var c,d=a(b);return d.is("[href], [action], [src]")?/^(?:javascript:|#|\.)/i.test(d.attr("href"))?!1:(c=String(d.url()),a.each(a.eventful.internalSites,function(a,b){return c.substring(0,b.length)===b?!0:void 0}),!1):!1},external:function(b){var c,d=a(b);return d.is("[href], [action], [src]")?/^(?:javascript:|#|\.)/i.test(d.attr("href"))?!1:(c=String(d.url()),a.each(a.eventful.internalSites,function(a,b){return c.substring(0,b.length)===b?!1:void 0}),!0):!1}}),b=function(b){var c,d,e,f,g,h,i,j,k,l,m=a(this);if(null!==a.eventful.tempNode)return a.eventful.tempNode=null,!0;if(c="",null!==b.data.action)d=b.data.action;else{switch(e="",b.target.nodeName.toUpperCase()){case"A":i=this.href,j=m.url(),c=j,"#"===i?c=m.accessibleText():""!==this.id?c="(#"+this.id+") "+j:(k=a('a[href="'+i+'"], a[href="'+j+'"]'),k.length>1&&(c="("+(k.index(b.target)+1)+"/"+k.length+") "+j));break;case"FORM":i=m.attr("action"),j=m.url(),c=j,""!==this.id?c="(#"+this.id+") "+j:(l=a('form[action="'+i+'"], form[action="'+j+'"]'),l.length>1&&(c="("+(l.index(b.target)+1)+"/"+l.length+") "+j));break;default:c=m.accessibleText()}d=b.type+": "+c}f=b.data.category,g=null!==b.data.label?g:"On page: "+window.location.href,h=b.data.value,a.eventful.debugMode?a.eventfulDebug(b.data.tracker+"_trackEvent; category: "+f+"; action: "+d+"; label: "+g+"; value: "+h+";"):(_gaq.push([b.data.tracker+"_trackEvent",f,d,g,h,!0]),b.href&&(b.preventDefault(),b.stopPropagation(),setTimeout(function(){window.location.href=b.href},200)))},a.fn.trackEvent=function(c,d,e,f,g,h){a(this).each(function(){var e,f,g,h,i,j=a(this);e=j.data("eventful"),"undefined"==typeof e&&(e={}),"object"==typeof e&&"undefined"==typeof e[c]&&(e[c]=""),f="undefined"!=typeof f?f:!1,(f||""===e[c])&&(g="undefined"==typeof g||null===g?null:g,h="undefined"==typeof h||null===h?null:h,i="undefined"==typeof i||null===i?null:i,j.bind(c,{category:d,action:g,label:h,value:i,tracker:a.eventful.gaTrackerNamespace},b),a.eventful.debugMode&&j.addClass("tracking-"+d),e[c]="tracked",j.data("eventful",e[c]))})},a(function(){a.eventful.debugMode&&a(document).delegate("a","click",function(){return!1}).delegate("form","submit",function(){return!1})}),a.eventfulDebug=function(b){a.debug(b)}}(jQuery),String.prototype.contains||(String.prototype.contains=function(a){"use strict";return!!~this.indexOf(a)}),function(a){"use strict";a.debug("VHOST: "+qg.swe.vhost+"; X-Served-By: "+qg.swe.servedBy);var b=/^https?/.test(window.location.protocol)?window.location.protocol:"http:";_gaq="undefined"!=typeof _gaq?_gaq:[],_gaq.push([qg.swe.GATracker+"._require","inpage_linkid",b+"//www.google-analytics.com/plugins/ga/inpage_linkid.js"],[qg.swe.GATracker+"._setAccount",qg.swe.GAAccount],[qg.swe.GATracker+"._trackPageview"]),0===a('script[src*=".google-analytics.com/ga.js"]').length&&!function(){var a=document.createElement("script"),b=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js",b.parentNode.insertBefore(a,b)}(),a.eventful.debugMode=!1,a.eventful.setTracker(qg.swe.GATracker),a.eventful.setInternalSites(qg.swe.internalSites),a.eventful.glueSites(),a("#qg-logo").children("a").trackEvent("click","global-qg-bar","QG logo"),a("#qg-coa").children("a").trackEvent("click","global-qg-bar","QG Coat of Arms"),a("a","#header").trackEvent("click","global-qg-bar"),a("a","#breadcrumbs .nav-home").trackEvent("click","global-breadcrumbs","click: QG Home"),a("a","#breadcrumbs").trackEvent("click","global-breadcrumbs"),a("a","#access").trackEvent("click","global-access"),a("a","#fat-footer").trackEvent("click","global-fat-footer"),a("a","#footer").trackEvent("click","global-sub-footer"),a("a","#asides .global-aside").trackEvent("click","global-aside"),a("a","#global-alert").trackEvent("click","global-alert"),a("#page-feedback-useful, #useful-yes").trackEvent("click","global-feedback","click: Page was useful"),a("#page-feedback-not-useful, #useful-no").trackEvent("click","global-feedback","click: Page was not useful"),a('a[href="#page-feedback-privacy"]',"#page-feedback").trackEvent("click","global-feedback","click: Privacy toggle"),a('a[href="https://www.qld.gov.au/contact-us/"]',"#page-feedback").trackEvent("click","global-feedback","click: Contact us"),a("a:external").trackEvent("click","external-link"),a("a","body.home").trackEvent("click","homepage"),a(" a",".franchise-index, .franchise-index-with-asides").trackEvent("click","franchise-landing-"+qg.swe.franchiseTitle),a(function(){a(".qg-ovt-controls a").each(function(){a(this).trackEvent("click","video-control","click: "+this.title)}),a(".qg-ovt-alternatives a").each(function(){a(this).trackEvent("click","video-alternative","click: "+this.title)})})}(jQuery);