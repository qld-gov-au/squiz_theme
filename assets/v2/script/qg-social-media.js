/*! SWE 2.12.1 turkey-sunset 20171010T0901 */
!function(a){"use strict";var b={ele:a(".twitter-updates")||"",init:function(){if(b.ele.length>0){var a=b.ele.data("account")||"",c=b.ele.data("list")||"",d=b.ele.data("widgetid")||"",e=b.ele.data("num")||5;a.length>0&&d.length>0?b.generateIframe(a,c,d,e):console.log("data-account/data-widgetid attribute is empty")}},generateIframe:function(a,c,d,e){var f='<div style="padding: 1em 1em 0"><a class="twitter-timeline" href="https://twitter.com/'+a+(c.length>0?"/"+c:"")+'" data-widget-id="'+d+'" data-tweet-limit="'+e+'" data-chrome="transparent noheader noborders nofooter" data-link-color="#546A9A">Tweets from @'+a+(c.length>0?"/"+c:"")+"</a></div>";b.ele.append(f),b.runScript()},runScript:function(){return!function(a,b,c){var d,e=a.getElementsByTagName(b)[0],f=/^http:/.test(a.location)?"http":"https";a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src=f+"://platform.twitter.com/widgets.js",e.parentNode.insertBefore(d,e))}(document,"script","twitter-wjs")}},c={ele:a(".facebook-updates"),init:function(){if(this.ele.length>0){var a=this.ele.attr("data-href");this.ele.append("<div class='fb-page' data-href="+a+" data-tabs='timeline' data-small-header='true' data-width='10000'  data-adapt-container-width='true' data-show-facepile='false'></div>"),this.facebookSdkScript(),this.adjustWidth()}},facebookSdkScript:function(){var a,b=document.getElementsByTagName("script")[0];a=document.createElement("script"),a.id="facebook-jssdk",a.src="//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8",b.parentNode.insertBefore(a,b)},adjustWidth:function(){var b;a(window).on("resize",function(){clearTimeout(b),b=setTimeout(c,200)});var c=function(){a(".fb-page").removeClass("fb_iframe_widget fb_iframe_widget_fluid"),window.FB.XFBML.parse()}}},d={ele:a(".instagram-updates"),init:function(){if(this.ele.length>0){var b=this.ele.attr("data-token"),c=this.ele.attr("data-num")||4,d=this;a.ajax({url:"https://api.instagram.com/v1/users/self/media/recent/?access_token="+b+"&count="+c,dataType:"jsonp",success:function(b){d.ele.attr("data-token","");var c=function(a){var b;return b=a.caption&&a.caption.text?a.caption.text:""};d.ele.append('<ul class="group"></ul>'),b.data.forEach(function(a){d.ele.find("ul").append('<li class="instagram-feed" > <a class="lightbox" href="'+a.images.standard_resolution.url+'" title="'+c(a)+'"><img src="'+a.images.thumbnail.url+'"></a></li>')}),a("a.lightbox").butterfly({contentDefaultWidth:"100%",contentDefaultHeight:"100%",mediaMaxWidth:"100%",mediaMaxHeight:"100%"})}})}}};b.init(),c.init(),d.init()}(jQuery);