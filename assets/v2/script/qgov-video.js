/*! SWE 2.12.1 turkey-sunset 20171010T0901 */
function ControlVersion(){var a,b;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),a=b.GetVariable("$version")}catch(c){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),a="WIN 6,0,21,0",b.AllowScriptAccess="always",a=b.GetVariable("$version")}catch(c){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a=b.GetVariable("$version")}catch(c){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3"),a="WIN 3,0,18,0"}catch(c){}if(!a)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a="WIN 2,0,0,11"}catch(c){a=-1}return a}function GetSwfVer(){var a=-1;if(null!=navigator.plugins&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var b=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"",c=navigator.plugins["Shockwave Flash"+b].description,d=c.split(" "),e=d[2].split("."),f=e[0],g=e[1];""!=d[3]?tempArrayMinor=d[3].split("r"):tempArrayMinor=d[4].split("r");var h=tempArrayMinor[1]>0?tempArrayMinor[1]:0,a=f+"."+g+"."+h}}else-1!=navigator.userAgent.toLowerCase().indexOf("webtv/2.6")?a=4:-1!=navigator.userAgent.toLowerCase().indexOf("webtv/2.5")?a=3:-1!=navigator.userAgent.toLowerCase().indexOf("webtv")?a=2:isIE&&isWin&&!isOpera&&(a=ControlVersion());return a}function DetectFlashVer(a,b,c){if(versionStr=GetSwfVer(),-1==versionStr)return!1;if(0!=versionStr){isIE&&isWin&&!isOpera?(tempArray=versionStr.split(" "),tempString=tempArray[1],versionArray=tempString.split(",")):versionArray=versionStr.split(".");var d=versionArray[0],e=versionArray[1],f=versionArray[2];if(d>parseFloat(a))return!0;if(d==parseFloat(a)){if(e>parseFloat(b))return!0;if(e==parseFloat(b)&&f>=parseFloat(c))return!0}return!1}}var isIE=-1!=navigator.appVersion.indexOf("MSIE")?!0:!1,isWin=-1!=navigator.appVersion.toLowerCase().indexOf("win")?!0:!1,isOpera=-1!=navigator.userAgent.indexOf("Opera")?!0:!1;if(function(a){a.ui=a.ui||{},a.ui.version||(a.extend(a.ui,{version:"1.8.2",plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(d&&a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?16&a.compareDocumentPosition(b):a!==b&&a.contains(b)},hasScroll:function(b,c){if("hidden"==a(b).css("overflow"))return!1;var d=c&&"left"==c?"scrollLeft":"scrollTop",e=!1;return b[d]>0?!0:(b[d]=1,e=b[d]>0,b[d]=0,e)},isOverAxis:function(a,b,c){return a>b&&b+c>a},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({_focus:a.fn.focus,focus:function(b,c){return"number"==typeof b?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none")},scrollParent:function(){var b;return b=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0),/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"==c||"relative"==c||"fixed"==c)&&(d=parseInt(e.css("zIndex")),!isNaN(d)&&0!=d))return d;e=e.parent()}return 0}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){var c=b.nodeName.toLowerCase(),d=a.attr(b,"tabindex");return(/input|select|textarea|button|object/.test(c)?!b.disabled:"a"==c||"area"==c?b.href||!isNaN(d):!isNaN(d))&&!a(b)["area"==c?"parents":"closest"](":hidden").length},tabbable:function(b){var c=a.attr(b,"tabindex");return(isNaN(c)||c>=0)&&a(b).is(":focusable")}}))}(jQuery),function(a){var b=a.fn.remove;a.fn.remove=function(c,d){return this.each(function(){return d||(!c||a.filter(c,[this]).length)&&a("*",this).add(this).each(function(){a(this).triggerHandler("remove")}),b.call(a(this),c,d)})},a.widget=function(b,c,d){var e,f=b.split(".")[0];b=b.split(".")[1],e=f+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][e]=function(c){return!!a.data(c,b)},a[f]=a[f]||{},a[f][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend({},g.options),a[f][b].prototype=a.extend(!0,g,{namespace:f,widgetName:b,widgetEventPrefix:a[f][b].prototype.widgetEventPrefix||b,widgetBaseClass:e},d),a.widget.bridge(b,a[f][b])},a.widget.bridge=function(b,c){a.fn[b]=function(d){var e="string"==typeof d,f=Array.prototype.slice.call(arguments,1),g=this;return d=!e&&f.length?a.extend.apply(null,[!0,d].concat(f)):d,e&&"_"===d.substring(0,1)?g:(e?this.each(function(){var c=a.data(this,b),e=c&&a.isFunction(c[d])?c[d].apply(c,f):c;return e!==c&&void 0!==e?(g=e,!1):void 0}):this.each(function(){var e=a.data(this,b);e?(d&&e.option(d),e._init()):a.data(this,b,new c(d,this))}),g)}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){this.element=a(c).data(this.widgetName,this),this.options=a.extend(!0,{},this.options,a.metadata&&a.metadata.get(c)[this.widgetName],b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._init()},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(b,c){var d=b,e=this;if(0===arguments.length)return a.extend({},e.options);if("string"==typeof b){if(void 0===c)return this.options[b];d={},d[b]=c}return a.each(d,function(a,b){e._setOption(a,b)}),e},_setOption:function(a,b){return this.options[a]=b,"disabled"===a&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",b),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e=this.options[b];if(c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),d=d||{},c.originalEvent)for(var f,g=a.event.props.length;g;)f=a.event.props[--g],c[f]=c.originalEvent[f];return this.element.trigger(c,d),!(a.isFunction(e)&&e.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}}(jQuery),function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){return a._preventClickEvent?(a._preventClickEvent=!1,b.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(b.originalEvent=b.originalEvent||{},!b.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var c=this,d=1==b.which,e="string"==typeof this.options.cancel?a(b.target).parents().add(b.target).filter(this.options.cancel).length:!1;return d&&!e&&this._mouseCapture(b)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(this._mouseMoveDelegate=function(a){return c._mouseMove(a)},this._mouseUpDelegate=function(a){return c._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),a.browser.safari||b.preventDefault(),b.originalEvent.mouseHandled=!0,!0)):!0}},_mouseMove:function(b){return a.browser.msie&&!b.button?this._mouseUp(b):this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,this._preventClickEvent=b.target==this._mouseDownEvent.target,this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})}(jQuery),function(a){var b=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var c=this,d=this.options;if(this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),d.disabled&&this.element.addClass("ui-slider-disabled ui-disabled"),this.range=a([]),d.range&&(d.range===!0?(this.range=a("<div></div>"),d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&2!==d.values.length&&(d.values=[d.values[0],d.values[0]])):this.range=a("<div></div>"),this.range.appendTo(this.element).addClass("ui-slider-range"),("min"===d.range||"max"===d.range)&&this.range.addClass("ui-slider-range-"+d.range),this.range.addClass("ui-widget-header")),0===a(".ui-slider-handle",this.element).length&&a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle"),d.values&&d.values.length)for(;a(".ui-slider-handle",this.element).length<d.values.length;)a("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=a(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all"),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e,f,g,h,i=!0,j=a(this).data("index.ui-slider-handle");if(!c.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(i=!1,!c._keySliding&&(c._keySliding=!0,a(this).addClass("ui-state-active"),e=c._start(d,j),e===!1))return}switch(h=c.options.step,f=g=c.options.values&&c.options.values.length?c.values(j):c.value(),d.keyCode){case a.ui.keyCode.HOME:g=c._valueMin();break;case a.ui.keyCode.END:g=c._valueMax();break;case a.ui.keyCode.PAGE_UP:g=c._trimAlignValue(f+(c._valueMax()-c._valueMin())/b);break;case a.ui.keyCode.PAGE_DOWN:g=c._trimAlignValue(f-(c._valueMax()-c._valueMin())/b);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(f===c._valueMax())return;g=c._trimAlignValue(f+h);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(f===c._valueMin())return;g=c._trimAlignValue(f-h)}return c._slide(d,j,g),i}}).keyup(function(b){var d=a(this).data("index.ui-slider-handle");c._keySliding&&(c._keySliding=!1,c._stop(b,d),c._change(b,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k,l=this.options;return l.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,g=this,this.handles.each(function(b){var c=Math.abs(d-g.values(b));e>c&&(e=c,f=a(this),h=b)}),l.range===!0&&this.values(1)===l.min&&(h+=1,f=a(this.handles[h])),i=this._start(b,h),i===!1?!1:(this._mouseSliding=!0,g._handleIndex=h,f.addClass("ui-state-active").focus(),j=f.offset(),k=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=k?{left:0,top:0}:{left:b.pageX-j.left-f.width()/2,top:b.pageY-j.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)},d=this._normValueFromMouse(c),this._slide(b,h,d),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return"horizontal"===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),0>d&&(d=0),"vertical"===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c>d||1===b&&d>c)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){return arguments.length&&(this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0)),this._value()},values:function(b,c){var d,e,f;if(arguments.length>1&&(this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b)),!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch(a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments),b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.attr("disabled","disabled"),this.element.addClass("ui-disabled")):(this.handles.removeAttr("disabled"),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),d=0;e>d;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);for(c=this.options.values.slice(),d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<this._valueMin())return this._valueMin();if(a>this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=a%b,d=a-c;return 2*Math.abs(c)>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=this._animateOff?!1:h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d,e){b=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k["horizontal"===i.orientation?"left":"bottom"]=b+"%",a(this).stop(1,1)[j?"animate":"css"](k,h.animate),i.options.range===!0&&("horizontal"===i.orientation?(0===d&&i.range.stop(1,1)[j?"animate":"css"]({left:b+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({width:b-c+"%"},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?"animate":"css"]({bottom:b+"%"},h.animate),1===d&&i.range[j?"animate":"css"]({height:b-c+"%"},{queue:!1,duration:h.animate}))),c=b}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),b=f!==e?(d-e)/(f-e)*100:0,k["horizontal"===i.orientation?"left":"bottom"]=b+"%",this.handle.stop(1,1)[j?"animate":"css"](k,h.animate),"min"===g&&"horizontal"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({width:b+"%"},h.animate),"max"===g&&"horizontal"===this.orientation&&this.range[j?"animate":"css"]({width:100-b+"%"},{queue:!1,duration:h.animate}),"min"===g&&"vertical"===this.orientation&&this.range.stop(1,1)[j?"animate":"css"]({height:b+"%"},h.animate),"max"===g&&"vertical"===this.orientation&&this.range[j?"animate":"css"]({height:100-b+"%"},{queue:!1,duration:h.animate}))}}),a.extend(a.ui.slider,{version:"1.8.2"})}(jQuery),"undefined"==typeof jQuery)$.debug("Video player warning: Initialisation failed. jQuery is not available","error");else{"undefined"==typeof jQuery.qg&&(jQuery.qg={}),"undefined"==typeof jQuery.qg.ovt&&(jQuery.qg.ovt={}),"undefined"==typeof jQuery.qg.ovt.instances&&(jQuery.qg.ovt.instances=[]),jQuery.qg.ovt.defaultOptions={sourceflv:"",sourcemp4:"",adfile:"",ccfile:"",poster:"",videowidth:"640",videoheight:"360",playerswf:"/assets/v2/flash/player.swf",accessswf:"accessibility.swf",videourl:""},jQuery.qg.ovt.conf={containerClass:"qg-ovt",activeClass:"qg-ovt-active",containerSelector:".qg-ovt-active",pressedClass:"pressed",altsClass:"qg-ovt-alternatives",optionsClass:"qg-ovt-options",transcriptClass:"qg-ovt-transcript",playerClass:"qg-ovt-player",controlsClass:"qg-ovt-controls",posterClass:"qg-ovt-poster",innerClass:"qg-ovt-inner",embeddedClass:"qg-ovt-embedded",embedIdSuffix:"-embedded",playText:"|&gt;",playTitle:"Play",pauseText:"||",pauseTitle:"Pause",openCCText:"Captions",openCCTitle:"Open captions",closeCCText:"Captions",closeCCTitle:"Close captions",openADText:"Audio description",closeADText:"Audio description",openADTitle:"Play description",closeADTitle:"Mute description",openTranText:"Transcript",closeTranText:"Transcript",openTranTitle:"Show transcript",closeTranTitle:"Hide transcript",openFullscreenText:"FS",openFullscreenTitle:"Launch fullscreen",closeFullscreenText:"FS",closeFullscreenTitle:"Close fullscreen",progressTitlePrefix:"Current position: ",durationTitlePrefix:"Video duration: ",volumeText:"Vol",volumeTitle:"Volume",unpressedVolumeTitle:"Mute audio",pressedVolumeTitle:"Enable audio",transcriptLink:'<li class="transcript"><a href="#">Transcript</a></li>',flashEmbedTemplate:'<div class="qg-ovt-player-wrapper"><object data="{playerswf}" id="{videoid}" class="qg-ovt-embedded" type="application/x-shockwave-flash" width="640" height="360" tabindex="-1"><param name="movie" value="{playerswf}" /><param value="true" name="allowfullscreen"><param value="always" name="allowscriptaccess"><param name="wmode" value="transparent"><param value="id={videoid}&amp;file={videofile}&amp;image={poster}&amp;captions={ccfile}&amp;audio={adfile}&amp;plugins={accessswf}&amp;accessibility.fontsize=16&amp;accessibility.volume=75&amp;accessibility.hide=true&amp;accessibility.mute=true&amp;mute=false&amp;volume=85" name="flashvars"></object></div>',controlsTemplate:'<div class="qg-ovt-controls"><ul><li class="play"><a href="#" title="Play"><img src="'+qg.swe.paths.assets+'images/video/displacement.png" alt="" class="for-css-replacement" /><span>|></span></a></li><li class="progress-bar"></li><li class="progress" title="Current position"></li><li class="duration" title="Video duration"></li><li class="volume"><a href="#" title="Volume"><img src="'+qg.swe.paths.assets+'images/video/displacement.png" alt="" class="for-css-replacement" /><span>*)</span></a></li><li class="captions"><a href="#" title="Captions"><img src="'+qg.swe.paths.assets+'images/video/displacement.png" alt="" class="for-css-replacement" /><span>CC</span></a></li><li class="audio-description"><a href="#" title="Audio Description"><img src="'+qg.swe.paths.assets+'images/video/displacement.png" alt="" class="for-css-replacement" /><span>AD</span></a></li></ul></div>'};var playerReady=function(a){try{$("#"+a.id).activateQGVideo()}catch(b){$.debug(b)}};!function(a,b){a.fn.qgOvt=function(b){return DetectFlashVer(9,0,115)?(b="undefined"==typeof b?a.qg.ovt.defaultOptions:a.extend({},a.qg.ovt.defaultOptions,b),success=!0,a(this).each(function(){success=initQGVideoTemplate.apply(this,[b])!==!1?success:!1}),success):void a.debug("Online video template was not initialised. The template requires Flash 9.0.115 or later.","info")},initQGVideoTemplate=function(b){return a(this).is(".qg-ovt-active")?void 0:(containerId=a(this).attr("id")+"",""==containerId||-1!==a.inArray(containerId,a.qg.ovt.instances)?(a.debug("Video player warning: Initialisation failed. Each video template container must have a unique id","error"),!1):(a.qg.ovt.instances[a.qg.ovt.instances.length]=containerId,b.videoid=containerId+a.qg.ovt.conf.embedIdSuffix,(b=parseVideoHTML.apply(this,[b]))===!1?!1:(a(this).data("options",b),decorateQGVideoTemplate.apply(this,[b]))))},parseVideoHTML=function(b){return b.duration="undefined"!=typeof b.duration?b.sourceflv:"0",videofile=videoLink="","undefined"!=typeof b.sourceflv&&""!=b.sourceflv?videofile=b.sourceflv:"undefined"!=typeof b.sourcemp4&&""!=b.sourcemp4?videofile=b.sourcemp4:(flvLink=a(this).find("."+a.qg.ovt.conf.optionsClass+' a[type*="video/flv"]'),mp4Link=a(this).find("."+a.qg.ovt.conf.optionsClass+' a[type*="video/mp4"]'),flvLink.size()>0?(videofile=(sourceflv=flvLink.get(0).href)+""!="undefined"?sourceflv:"",videoLinkText=flvLink.text()):mp4Link.size()>0&&(videofile=(sourcemp4=mp4Link.get(0).href)+""!="undefined"?sourcemp4:"",videoLinkText=mp4Link.text()),""!=videoLinkText&&(hours=(hours=videoLinkText.match(/(\d*)\s+hours?/i))?parseInt(hours[1],10):0,minutes=(minutes=videoLinkText.match(/(\d*)\s+minutes?/i))?parseInt(minutes[1],10):0,seconds=(seconds=videoLinkText.match(/(\d*)\s+seconds?/i))?parseInt(seconds[1],10):0,b.duration=60*hours*60+60*minutes+seconds)),b.videofile=videofile,""==videofile?(a.debug("Video player warning: Initialisation failed. No acceptable video file could be found (flv, mp4)","warn"),!1):(b.ccfile="undefined"!=typeof b.ccfile&&""!=b.ccfile?b.ccfile:(ccfile=a(this).find("."+a.qg.ovt.conf.optionsClass+" .captions a").get(0).href)+""!="undefined"?ccfile:"",""==b.ccfile&&a.debug("Video player warning: No captions file could be found (timed text xml)","warn"),b.adfile="undefined"!=typeof b.adfile&&""!=b.adfile?b.adfile:(adfile=a(this).find("."+a.qg.ovt.conf.optionsClass+" .audio-description a").get(0).href)+""!="undefined"?adfile:"",""==b.adfile&&a.debug("Video player notice: No audio description file could be found (mp3)","notice"),b.poster="undefined"!=typeof b.poster&&""!=b.poster?b.poster:(poster=a(this).find("."+a.qg.ovt.conf.posterClass).get(0).src)+""!="undefined"?poster+"":"",""==b.poster&&a.debug("Video player notice: No poster image could be found (jpg, png)","notice"),b.videotitle=a(this).find(":header:first").text(),b.videourl=""!=b.videourl?b.videourl:window.location+"",b)},decorateQGVideoTemplate=function(c){return embedCode=a.qg.ovt.conf.flashEmbedTemplate.replace(/{videoid}/g,c.videoid).replace(/{playerswf}/g,c.playerswf).replace(/{accessswf}/g,c.accessswf).replace(/{videofile}/g,c.videofile).replace(/{poster}/g,c.poster).replace(/{ccfile}/g,c.ccfile).replace(/{adfile}/g,c.adfile),embedElement=a('<div class="'+a.qg.ovt.conf.playerClass+'"></div>').append(embedCode+a.qg.ovt.conf.controlsTemplate),transcript=a('<div class="'+a.qg.ovt.conf.innerClass+'"></div>').append(a(this).find("."+a.qg.ovt.conf.transcriptClass).contents()),downloadElement=a(this).find("."+a.qg.ovt.conf.optionsClass+" .download"),downloadList=downloadElement.find("ul"),downloadElement.find("ul").remove(),downloadLabel=downloadElement.text(),downloadElement.empty().append('<span class="label">'+downloadLabel+"</span>").append(downloadList),a(this).find("."+a.qg.ovt.conf.optionsClass+" .download a").each(function(){linkText=a(this).text(),a(this).attr("title",linkText).empty().append(linkText.replace(/\s+/gm," ").replace(/(.*\(.*, )([a-z0-9]*?)( .*\))/i,"<span>$1</span>$2<span>$3</span>"))}),a(this).find("."+a.qg.ovt.conf.posterClass).remove().end().find("."+a.qg.ovt.conf.optionsClass+" .captions").remove().end().find("."+a.qg.ovt.conf.optionsClass+" .audio-description").remove().end().find("."+a.qg.ovt.conf.altsClass).before(embedElement).find("ul."+a.qg.ovt.conf.optionsClass).append(a.qg.ovt.conf.transcriptLink).end().end().find("."+a.qg.ovt.conf.optionsClass+" .download ul li:last").addClass("last-child").end().find("."+a.qg.ovt.conf.transcriptClass).empty().append(transcript).hide().end().find("."+a.qg.ovt.conf.optionsClass+" a, ."+a.qg.ovt.conf.controlsClass+" a").focusClass().end().find(".qg-ovt-overlay").css({"z-index":4}).end().removeClass(a.qg.ovt.conf.containerClass).addClass(a.qg.ovt.conf.activeClass),updateDuration(this,c.duration),updateProgress(this,0,c.duration),resizePlayerToFitContainer.apply(this),b.oldIE&&b.oldIEversion<8&&(totalWidth=0,downloadElement.children().each(function(){totalWidth+=parseInt(a(this).outerWidth(!0))}),downloadElement.width(totalWidth+20)),!0},a.fn.activateQGVideo=function(){vidContainer=getVidContainer(this),vidContainer.data("playerID",this.attr("id")),a(this).addClass("cue-ovt-flash");var b=a(this).get(0);b.addControllerListener("VOLUME","volumeListener"),b.addControllerListener("MUTE","volumeListener"),b.addModelListener("LOADED","playPauseListener"),b.addViewListener("PLAY","playPauseListener"),b.addModelListener("TIME","progressListener"),initVidControls(getVidControls(vidContainer))},initVidControls=function(b){var c=getVidContainer(b),d=c.data("playerID"),e=document.getElementById(d);options=c.data("options"),updatePlayButton(b,!1),b.find(".play a").click(function(){c=getVidContainer(this);var a=c.data("playerID"),b=document.getElementById(a);return"playing"!=c.data("state")?(b.sendEvent("PLAY","true"),updatePlayButton(this,!0),!1):(b.sendEvent("PLAY","false"),updatePlayButton(this,!1),!1)}),updateCCButton(b,!1),b.find(".captions a").click(function(){var b=a(this).data("qgov-video-cc")||!1,c=getVidContainer(this),d=c.data("playerID"),e=document.getElementById(d);return e.hideCaptions(b),updateCCButton(c,!b),a(this).data("qgov-video-cc",!b),!1}),updateADButton(b,!1),b.find(".audio-description a").click(function(){var b=a(this).data("qgov-video-ad")||!1,c=getVidContainer(this),d=c.data("playerID"),e=document.getElementById(d);return e.muteAudio(b),updateADButton(c,!b),a(this).data("qgov-video-ad",!b),!1}),updateTranscriptButton(b,!1),c.find(".transcript a").click(function(){var b=a(this).data("qgov-video-transcript")||!1,c=getVidContainer(this);c.data("playerID");return b?c.find(".qg-ovt-transcript").slideUp(function(){updateTranscriptButton(c,!1),a(this).trigger("x-height-change")}):(updateTranscriptButton(c,!0),c.find(".qg-ovt-transcript").slideDown(function(){a(this).trigger("x-height-change")})),a(this).data("qgov-video-transcript",!b),!1}),a.ui&&"undefined"!=typeof a.ui.slider?b.find(".volume").append('<div class="volume-overlay"><div class="volume-slider"></div></div>').find(".volume-overlay").hide().find(".volume-slider").slider({range:"min",orientation:"vertical",stop:function(){newPercent=a(this).slider("value"),e.sendEvent("VOLUME",newPercent)}}):a.debug("Video player warning: Volume slider could not be initialised. jQuery UI Slider was not found","warn"),b.find(".volume > a").click(function(){var a=getVidContainer(this),b=a.data("playerID"),c=document.getElementById(b);return volumeSlider=a.find(".volume-slider"),1==c.getConfig().mute?(c.sendEvent("MUTE",!1),volume=c.getConfig().volume):0==c.getConfig().volume?(c.sendEvent("VOLUME",100),volume=100):(c.sendEvent("MUTE",!0),volume=0),updateVolumeButton(a,volume),!1}).parent().bind("mouseover focusin",function(){var a=getVidContainer(this);a.find(".volume-overlay").show()}).bind("mouseout",function(){var a=getVidContainer(this);a.find(".volume-overlay").hide()}).find(".ui-slider-handle").bind("focusout",function(){var a=getVidContainer(this);a.find(".volume-overlay").hide()}),updateVolumeButton(b),a.ui&&"undefined"!=typeof a.ui.slider?b.find(".progress-bar").data("uimode","read").slider({range:"min",start:function(){a(this).data("uimode","write")},stop:function(){newPercent=a(this).slider("value"),newValue=newPercent/100*a(this).data("duration"),container=getVidContainer(this),e=getVidPlayer(container),e.sendEvent("SEEK",newValue),"playing"!=container.data("state")&&e.sendEvent("PLAY","false"),a(this).data("uimode","read")}}).slider("disable"):a.debug("Video player warning: Progress bar could not be initialised. jQuery UI Slider was not found","warn"),b.find(".progress-bar .ui-slider-range").after('<div class="load-progress"></div>')},progressListener=function(b){var c=getVidControls(a("#"+b.id)),d=c.find(".progress-bar").eq(0);if(d.data("progress")==b.duration&&0==b.position){var e=getVidContainer(c),f=document.getElementById(b.id);f.sendEvent("PLAY","false"),e.data("state","paused"),e.removeClass("playing"),updatePlayButton(e,!1)}updateDuration(c,Math.floor(b.duration)),updateProgress(c,Math.floor(b.position),Math.floor(b.duration)),d.data("progress",b.position),"write"!=d.data("uimode")&&a.ui&&"undefined"!=typeof a.ui.slider&&(d.slider("enable"),
d.data("duration",b.duration),progressPercent=b.position/b.duration*100,d.slider("value",progressPercent))},playPauseListener=function(b){var c=getVidContainer(a("#"+b.id));return"undefined"!=typeof b.loaded?(loadedPercent=Math.floor(b.loaded/b.total*100),c.find(".progress-bar .load-progress").width(loadedPercent+"%"),a("#loaded span").text(loadedPercent),void(100==loadedPercent&&c.addClass("loaded"))):("undefined"==typeof b.state&&"undefined"==typeof b.loaded&&("playing"!=c.data("state")?b.state=!0:b.state=!1),0!=b.state?(c.data("state","playing"),c.addClass("playing")):(c.data("state","paused"),c.removeClass("playing")),void updatePlayButton(c,b.state))},volumeListener=function(b){var c=getVidContainer(a("#"+b.id)),d=c.data("playerID"),e=document.getElementById(d);volume=e.getConfig().mute?0:e.getConfig().volume,updateVolumeButton(c,volume)},updatePlayButton=function(b,c){c="undefined"!=typeof c?c:!1,container=getVidContainer(b),buttonEl=container.find(".play a"),c||"playing"==container.data("state")?a(buttonEl).attr("title",a.qg.ovt.conf.pauseTitle).addClass("pressed").find(".span").text(a.qg.ovt.conf.pauseText):a(buttonEl).attr("title",a.qg.ovt.conf.playTitle).removeClass("pressed").find(".span").text(a.qg.ovt.conf.playText)},updateCCButton=function(b,c){c="undefined"!=typeof c?c:!1,container=getVidContainer(b),buttonEl=container.find(".captions a"),c?a(buttonEl).find(".span").text(a.qg.ovt.conf.closeCCText).end().attr("title",a.qg.ovt.conf.closeCCTitle).addClass("pressed"):a(buttonEl).find(".span").text(a.qg.ovt.conf.openCCText).end().attr("title",a.qg.ovt.conf.openCCTitle).removeClass("pressed")},updateADButton=function(b,c){c="undefined"!=typeof c?c:!1,container=getVidContainer(b),buttonEl=container.find(".audio-description a"),c?a(buttonEl).find(".span").text(a.qg.ovt.conf.closeADText).end().attr("title",a.qg.ovt.conf.closeADTitle).addClass("pressed"):a(buttonEl).find(".span").text(a.qg.ovt.conf.openADText).end().attr("title",a.qg.ovt.conf.openADTitle).removeClass("pressed")},updateTranscriptButton=function(b,c){c="undefined"!=typeof c?c:!1,container=getVidContainer(b),buttonEl=container.find(".transcript a"),c?a(buttonEl).text(a.qg.ovt.conf.closeTranText).attr("title",a.qg.ovt.conf.closeTranTitle).addClass("pressed"):a(buttonEl).text(a.qg.ovt.conf.openTranText).attr("title",a.qg.ovt.conf.openTranTitle).removeClass("pressed")},updateFSButton=function(b,c){container=getVidContainer(b),buttonEl=container.find(".fullscreen a"),a(buttonEl).find(".span").text(a.qg.ovt.conf.openFullscreenText)},updateVolumeButton=function(b,c){container=getVidContainer(b),vidControls=getVidControls(container);var d=container.data("playerID"),e=document.getElementById(d);"undefined"==typeof c&&(c=e.getConfig().volume),buttonEl=container.find(".volume a"),a(buttonEl).attr("title",a.qg.ovt.conf.unpressedVolumeTitle).find(".span").text(a.qg.ovt.conf.volumeText).data("volume",c),buttonEl.removeClass("pressed vol-muted vol-low vol-medium vol-high"),0==c?buttonEl.addClass("pressed").addClass("vol-muted").attr("title",a.qg.ovt.conf.pressedVolumeTitle):40>c?buttonEl.addClass("vol-low"):75>c?buttonEl.addClass("vol-medium"):buttonEl.addClass("vol-high"),vidControls.find(".volume-slider").slider("value",c)},updateProgress=function(b,c,d){formatted=secondsFormatted(c,d),container=getVidContainer(b),uiEl=container.find(".progress"),"undefined"!=typeof d&&a(uiEl).text()!=formatted[0]+" /"&&(a(uiEl).text(formatted[0]+" /"),a(uiEl).attr("title",a.qg.ovt.conf.progressTitlePrefix+formatted[1]))},updateDuration=function(b,c){formatted=secondsFormatted(c,c),container=getVidContainer(b),uiEl=container.find(".duration"),a(uiEl).text()!=formatted[0]&&(a(uiEl).text(formatted[0]),a(uiEl).attr("title",a.qg.ovt.conf.durationTitlePrefix+formatted[1]))},updateDimensions=function(c,d){a(c).css({width:d.width}).find(".qg-ovt-player-wrapper").css({width:d.width,height:d.height}).find("object").attr("width",d.width).attr("height",d.height),progressBar=a(c).find(".progress-bar"),parentWidth=progressBar.parent().width(),siblingsWidth=0,progressBar.siblings().each(function(){siblingsWidth+=a(this).outerWidth(!0)}),errorMargin=b.oldIE&&b.oldIEversion<8?18:5,availWidth=parentWidth-siblingsWidth-errorMargin,availWidth<110&&(availWidth=parentWidth-progressBar.prev().outerWidth(!0)-10),progressBar.css("width",availWidth)},resizeThrottleTimeoutID=null,a(window).resize(function(){b.oldIE&&b.oldIEversion<7||(null!=resizeThrottleTimeoutID&&(window.clearTimeout(resizeThrottleTimeoutID),resizeThrottleTimeoutID=null),resizeThrottleTimeoutID=window.setTimeout(function(){a(".qg-ovt-active").each(resizePlayerToFitContainer)},200))}),resizePlayerToFitContainer=function(){options=a(this).data("options"),b.oldIE&&b.oldIEversion<7&&a(this).css("position","absolute"),parentContainer=a(this).parent(),availableDimensions=calculateDimensions(options.videowidth,options.videoheight,parentContainer.width()),b.oldIE&&b.oldIEversion<7&&a(this).css("position","static"),updateDimensions(this,availableDimensions)},calculateDimensions=function(a,b,c,d,e){return a=parseInt(a,10),b=parseInt(b,10),c=parseInt(c,10),d="undefined"!=typeof d?parseInt(d,10):null,e=e||!1,c>a?e?width=c:width=a:width=c,scaleFactor=a/width,height=b/scaleFactor,null!=d&&d<height&&(scaleFactor=d/height,height=d,width/=scaleFactor),width=parseInt(width,10),height=parseInt(height,10),{width:width,height:height}},getVidPlayer=function(b){return a(b).is(a.qg.ovt.conf.containerSelector)||(b=getVidContainer(b)),findVidPlayer(b)},findVidPlayer=function(b){return a(b).find("."+a.qg.ovt.conf.embeddedClass).get(0)},getVidControls=function(b){return a(b).is(a.qg.ovt.conf.containerSelector)||(b=getVidContainer(b)),a(b).find("."+a.qg.ovt.conf.controlsClass)},getVidContainer=function(b){return a(b).is(a.qg.ovt.conf.containerSelector)?a(b):a(b).parents(a.qg.ovt.conf.containerSelector)},findVidContainer=function(b){return a(b).is(a.qg.ovt.conf.containerSelector)?a(b):a(b).find(a.qg.ovt.conf.containerSelector)},padString=function(a,b,c){for(;(a+"").length<b;)a=c+a;return a},secondsFormatted=function(a,b){return 0==parseInt(b,10)?["",""]:(totalSeconds=parseInt(a,10),seconds=Math.floor(a%60),secondsPadded=padString(seconds,2,"0"),rawMinutes=Math.floor(a/60),minutes=Math.floor(rawMinutes%60),hours=Math.floor(rawMinutes/60),b>=3600?formattedShort=hours+":"+padString(minutes,2,"0")+":"+secondsPadded:formattedShort=minutes+":"+secondsPadded,formattedLong="",hours>0&&(formattedLong+=hours+" hour"+(1!=hours?"s":"")+", "),(hours>0||minutes>0)&&(formattedLong+=minutes+" minute"+(1!=minutes?"s":"")+" and "),formattedLong+=seconds+" second"+(1!=seconds?"s":""),[formattedShort,formattedLong])},a.fn.focusClass=function(){return a(this).focus(function(){a(this).addClass("focus")}).blur(function(){a(this).removeClass("focus")}),this},a(document).ready(function(){b.oldIE&&b.oldIEversion<7&&document.execCommand("BackgroundImageCache",!1,!0),"undefined"!=typeof PATH_TO_OVT_PLAYER?a(".qg-ovt").qgOvt(options={playerswf:PATH_TO_OVT_PLAYER}):a(".qg-ovt").qgOvt()})}(jQuery,qg)}