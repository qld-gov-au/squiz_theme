/*! SWE 2.12.1 turkey-sunset 20171010T0901 */
!function(a,b){"use strict";function c(a,b,c){for(a=String(a);a.length<b;)a=c+a;return a}function d(a){var b=a.getHours(),d=b%12;return(0===d?"12":d)+"."+c(a.getMinutes(),2,"0")+(12>b?"am":"pm")}b.template={},b.template.clean=function(b){return a("<div/>").text(b).html().replace(/"/g,"&quot;")},b.template.format=function(c,e,f){f=a.extend({},f);var g,h;if(null===c)return"";switch(e){case"%":return Math.round(parseFloat(c))+"%";case"$":if(g=parseFloat(c),g>=1e4){if(h=c.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),1e6>g)return"$"+h;switch(h=c.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),c=String(Math.round(c/1e5)/10)+" million",f.abbr){case!0:return'<abbr title="$'+h+'">$'+c+"</abbr>";case"both":return"$"+c+" ($"+h+")"}}return"$"+c;case"shortnum":if(g=parseFloat(c),g>=1e4){if(h=c.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),1e6>g)return h;switch(h=c.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"),c=String(Math.round(c/1e5)/10)+" million",f.abbr){case!0:return'<abbr title="'+h+'">'+c+"</abbr>";case"both":return c+" ("+h+")"}}return c;case"md":return markdown.toHTML(c);case"date":case"datetime":if("string"==typeof c){if(g=new Date(c),isNaN(g.getTime())){if(h=c.split(/[-:T ]/),g=new Date(h[0],parseInt(h[1],10)-1,h[2]),isNaN(g.getTime()))return c;h.length>3&&(g.setHours(h[3]),h.length>4&&(g.setMinutes(h[4]),h.length>5&&g.setSeconds(h[5])))}}else g=c;return c=g.getDate()+" "+"January,February,March,April,May,June,July,August,September,October,November,December".split(",")[g.getMonth()]+" "+g.getFullYear(),"datetime"===e&&(c+=", "+d(g)),c;case"time":if("string"==typeof c){if(!/^\d+[:.]\d+$/.test(c))return c;c=c.split(/[:.]/),g=new Date,g.setHours(c[0]),g.setMinutes(c[1])}else g=c;return d(g);case"abn":return String(c).replace(/\s+/g,"").replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1 ")}return b.template.clean(c)},b.template.closure=function(b){var c,d=b,e="",f="";a.each(d.split(";"),function(a,b){if(/[a-zA-Z]/.test(b))e+=b+";";else if(/[0-9\/]/.test(this)){var c,d=this.split(/[^0-9\/]/),f=d[0].split("/"),g=new Date,h=g.setDate(g.getDate()+35);g=new Date,f=new Date(f[1]+"/"+f[0]+"/"+f[2]),f>=g&&h>=f&&(e+=d[0],d.length>1&&(c=d[1].split("/"),c=new Date(c[1]+"/"+c[0]+"/"+c[2]),c>f&&(e+="-"+d[1])),e+=";")}}),e=e.split(";"),c=e.length-1;for(var g=0;c>g;g++)switch(g+1){case c-1:f+=e[g]+" & ";break;case c:f+=e[g];break;default:f+=e[g]+", "}return f},b.template.openingHours=function(a){var b,c,d,e;if(isNaN(Date.parse(a))){e=a.split("-");for(var f=0;f<e.length;f++)e[f]=String((parseInt(e[f].split(":")[0],10)+11)%12+1)+":"+(void 0!==e[f].split(":")[1]?e[f].split(":")[1]:"00")+(parseInt(e[f].split(":")[0],10)>=12?"pm":"am");return e.join("-")}return b=new Date(a),b.setTime(b.getTime()+60*b.getTimezoneOffset()*1e3),c=b.getHours(),d=b.getMinutes(),String((c+11)%12+1)+":"+(0===d?"00":String(d))+(c>=12?"pm":"am")},b.template.centreList=function(b,c,d,e){var f="";return b.length>1?a.each(b,function(a,b){if(b[c]!==e)switch(c){case"Centre name":f+=b[c]===d?'<li><a href="?title='+b[c]+'">'+b[c]+"</a> - (Primary)</li>":'<li><a href="?title='+b[c]+'">'+b[c]+"</a></li>";break;default:f+=b[c]}}):f="invalid",f},b.template.process=function(c,d){return c.replace(/\{\{(.*?)\}\}/g,function(c,e){var f=e.split(/[:|]/),g="",h=["Mon am","Mon pm","Tues am","Tues pm","Wed am","Wed pm","Thurs am","Thurs pm","Fri am","Fri pm","Sat am","Sat pm","Sun am","Sun pm"];if(f.length>1&&(e=f[1]),"googleApiKey"===e)return"www.qld.gov.au"===window.location.hostname?"AIzaSyAqkq7IK18bsh-TUMmNR-x9v9PsptT3LMY":"AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE";if("Closure"===e&&"undefined"!=typeof d[e])return void 0!==d[e]&&null!==d[e]&&""!==d[e].trim()?b.template.closure(d[e]):c;if(h.indexOf(e)>-1)return void 0!==d[e]&&null!==d[e]&&d[e].trim().length>0?b.template.openingHours(d[e]):"Closed";if("staticmap"===e){if(void 0!==d.Latitude&&null!==d.Latitude&&d.Latitude.trim().length>0&&void 0!==d.Longitude&&null!==d.Longitude&&d.Longitude.trim().length>0){var i=document.createElement("img");return i.src="https://maps.googleapis.com/maps/api/staticmap?size=373x189&maptype=roadmap&markers="+d.Latitude+"%2C"+d.Longitude+"&key="+b.template.process("{{googleApiKey}}")+"&sensor=false",i.outerHTML}return c}if("object"!=typeof d||"undefined"==typeof d[e])return c;if(1===f.length)return b.template.clean(d[e]);switch(f[0]){case"text":g=b.template.clean(a(markdown.toHTML(d[e])).text());break;case"list":g=function(c){return c.length>1?"<ul>"+a.map(c,function(a){return"<li>"+b.template.clean(a)+"</li>"}).join("")+"</ul>":c[0]}(d[e].split(/\s*;\s*/));break;case"compare":g=f.length<3||"undefined"==typeof d[f[2]]||null===d[f[2]]||0===d[f[2]].length?markdown.toHTML(d[e]):'<div class="section comparison advantage comparison-first"><div class="comparison-inner">'+markdown.toHTML(d[e])+'</div></div><div class="section comparison disadvantage comparison-last"><div class="comparison-inner">'+markdown.toHTML(d[f[2]])+"</div></div>";break;case"info":case"warn":!function(){var a=d[e],c={warn:"Warning",info:"Information"},h=c[f[0]];f.length>=3&&(/^(['"]).*\1$/.test(f[2])?h=b.template.clean(f[2].substring(1,f[2].length-1)):d[f[2]].length>0&&(h=b.template.clean(d[f[2]]))),g=a.length?'<div class="status '+b.template.clean(f[0])+'"><h2>'+h+"</h2>"+markdown.toHTML(a)+"</div>":""}();break;case"streetAddress":var j,k,l,m,n;if(6>f){g=b.template.format(d[e],f[0]);break}f.length<6?(j=!1,k=d[f[1]]):(j=d[f[1]],k=d[f[2]],0===k.length&&(k=j,j=!1)),l=d[f[f.length-3]],m=f[f.length-2],n=d[f[f.length-1]],m=/^(['"]).*\1$/.test(m)?b.template.clean(m.substring(1,m.length-1)):d[m],g='<div class="caption location adr">'+(j?'<span class="extended-address">'+b.template.clean(j)+"</span><br>":"")+'<span class="street-address">'+b.template.clean(k)+'</span><br><span class="locality">'+b.template.clean(l)+'</span> <span class="region">'+b.template.clean(m)+'</span> <span class="postal-code">'+b.template.clean(n)+"</span></div>";break;case"SectorIcons":g=function(c){return c.length>0?a.map(c,function(c){var d={Biotechnology:"flask","Life sciences":"bug",Engineering:"wrench","Food and agriculture":"cutlery","Health and medical":"medkit","ICT and multimedia":"laptop","Advanced manufacturing":"cogs","Mining/resources":"cog","Environment and nature":"leaf","Defence, aviation and space":"fighter-jet",Energy:"bolt",Transport:"bus","Social sciences":"group",Tropical:"sun-o"},e={Biotechnology:"/dsiti/about-us/business-areas/science-precincts-projects/biotechnology/","Life sciences":"/dsiti/about-us/business-areas/science-precincts-projects/life-sciences/",Engineering:"/dsiti/about-us/business-areas/science-precincts-projects/engineering/","Food and agriculture":"/dsiti/about-us/business-areas/science-precincts-projects/food-agriculture/","Health and medical":"/dsiti/about-us/business-areas/science-precincts-projects/health-medical/","ICT and multimedia":"/dsiti/about-us/business-areas/science-precincts-projects/ict-multimedia/","Advanced manufacturing":"/dsiti/about-us/business-areas/science-precincts-projects/advanced-manufacturing/","Mining/resources":"/dsiti/about-us/business-areas/science-precincts-projects/mining-resources/","Environment and nature":"/dsiti/about-us/business-areas/science-precincts-projects/environment-nature/","Defence, aviation and space":"/dsiti/about-us/business-areas/science-precincts-projects/defence-aviation-space/",Energy:"/dsiti/about-us/business-areas/science-precincts-projects/energy/",Transport:"/dsiti/about-us/business-areas/science-precincts-projects/transport/","Social sciences":"/dsiti/about-us/business-areas/science-precincts-projects/social-sciences/",Tropical:"/dsiti/about-us/business-areas/science-precincts-projects/tropical/"};return c=a.trim(c),d[c]?'<a href="'+e[c]+'"><i class="fa fa-'+d[c]+'" title="'+b.template.clean(c)+' sector summary"></i><span>'+b.template.clean(c)+"</span></a>":" "+b.template.clean(c)+" "}).join(""):c[0]}(d[e].split(/\s*;\s*/));break;case"link":for(var o={" ":"%20","&":"%26"},p=d[e],q=0;q<p.length;q++)void 0!==o[p.charAt(q)]&&(p=p.substr(0,q)+o[p.charAt(q)]+p.substr(q+1));g=p;break;case"markdown":g=markdown.toHTML(d[e]);break;case"getData":if(f[2]&&f[1]&&a("#data-url").data("url")){var r='SELECT "'+f[1]+'" from "'+a("#data-url").data("url").split("resource/")[1]+'" WHERE ( upper("'+f[2]+"\") LIKE upper('"+d[f[2]]+"' ) )",s=a("#data-url").data("url").indexOf("staging.data.qld.gov.au")>=0?"staging.data.qld.gov.au":"data.qld.gov.au";g='<ul class="other-centres"></ul>';var t=qg.data.get(s,r,{cache:!0,successCallback:function(c){c.result.records.length>0&&(t=b.template.centreList(c.result.records,f[1],d[f[2]],d[f[1]]),t.indexOf("invalid")<0&&a("#view-result-container").find(".other-centres").append(t))}})}else g="";break;default:g=b.template.format(d[e],f[0])}return 4===f.length&&!function(){var a=g.split(/\s+/),b=parseInt(f[3],10);a.length>b&&(g=a.slice(0,b).join(" ")+"…")}(),g})}}(jQuery,qg.swe),function(a,b){"use strict";function c(a,b){return void 0===a||null===a||""===a?b:a}function d(a){switch(a){case"h":return 36e5;case"s":return 1e3;default:return 6e4}}function e(a){return 10>a?"0"+a:a}function f(a,b,c,d,f){if(f)switch(a){case"h":return e(b)+"<em>h</em>";case"s":return e(b)+"<em>h</em>:"+e(c)+"<em>m</em>:"+e(d)+"<em>s</em>";default:return e(b)+"<em>h</em>:"+e(c)+"<em>m</em>"}else switch(a){case"h":return"("+b+" hour"+(1===b?"":"s")+" remaining)";case"s":return"("+b+" hour"+(1===b?"":"s")+", "+c+" minute"+(1===c?"":"s")+", "+d+" second"+(1===d?"":"s")+" remaining)";default:return"("+b+" hour"+(1===b?"":"s")+", "+c+" minute"+(1===c?"":"s")+" remaining)"}}function g(a){var b,c,d,e,f=new Date;return e=a,b=parseInt(e/3600,10),e%=3600,c=parseInt(e/60,10),d=parseInt(e%60,10),f.setHours(f.getHours()+b),f.setMinutes(f.getMinutes()+c),f.setSeconds(f.getSeconds()+d),f}function h(h,i,j,k,l,m,n){if(void 0===h||null===h||""===h)return"invalid insert element";if(void 0===i||null===i||""===i)return"invalid timer value";j=c(j,""),k=c(k,"m"),l=c(l,0),m=c(m,"Out of time"),n=c(n,"");var o=document.getElementById(h);if(void 0===o||null===o)return"invalid insert element";a(".countdownTimerTime,.countdownTimerClock,.countdownTimerCounter",o).remove();var p=document.createElement("time"),q=document.createElement("span");p.className="countdownTimerTime";var r,s,t,u,v=d(k),w=g(i),x=jQuery(o).hasClass("timerClock");if(x)q.className="countdownTimerClock";else{p.setAttribute("datetime",w.getUTCFullYear()+"-"+e(w.getUTCMonth()+1)+"-"+e(w.getUTCDate())+"T"+e(w.getUTCHours())+":"+e(w.getUTCMinutes())+":"+e(w.getUTCSeconds())+"Z");var y=document.createTextNode(b.swe.template.format(w,"datetime"));p.appendChild(y),q.className="countdownTimerCounter"}var z=o.getElementsByTagName("p");if(null!==z[0]&&void 0!==z[0]?(z[0].innerHTML="",z[0].appendChild(p)):(o.innerHTML="",o.appendChild(p)),""!==n){var A=document.createTextNode(n);o.appendChild(A)}o.appendChild(q);var B=function(){var a,b,c,e=(new Date).getTime(),h=(w-e)/1e3,i=!1;0!==l&&(a=g(l),b=(a-e)/1e3,b>h&&(i=!0,k="s",v=d(k)));var n;r=parseInt(h/3600,10),h%=3600,s=parseInt(h/60,10),t=parseInt(h%60,10);var o;0>=r&&0>=s&&0>=t?(o=document.createTextNode(" "+m),q.innerHTML="",c=document.createElement("span"),c.className="timeWarning",c.appendChild(o),q.appendChild(c),q.className="","function"==typeof j&&j()):(n=f(k,r,s,t,x),i?(c=document.createElement("span"),c.className="timeWarning",c.innerHTML=n,q.innerHTML="",q.appendChild(c)):(q.innerHTML="",q.innerHTML=n)),clearTimeout(u),u=setTimeout(B,v)};B()}b.swe.countdownTimer=function(a){h(a.insertWhere,a.countTime,a.endFunction,a.displayType,a.timeWarn,a.timeOutText,a.wrapperText)}}(jQuery,qg);