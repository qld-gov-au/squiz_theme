/*! SWE 2.12.1 turkey-sunset 20171010T0901 */
var initAutocompleteAddress;!function(a){"use strict";var b,c="location-autocomplete",d="address-autocomplete",e=a(".app-geocoding"),f=document.getElementsByClassName(c);initAutocompleteAddress=function(){if(f.length>0){var g=new google.maps.LatLngBounds(new google.maps.LatLng(-29,138.0578426),new google.maps.LatLng(-9.9339,153.63831));a.each(f,function(){b=a(this).data("strictbounds")===!0?!0:a(this).data("strictbounds")===!1?!1:!0;var c={bounds:g,strictBounds:b,types:["geocode"]},e=new google.maps.places.Autocomplete(this,c);if(a(this).siblings("."+d).length>0){var f=a(this).siblings("."+d),h=function(){var b={street_number:{dataType:"street",name:"short_name"},route:{dataType:"street",name:"long_name"},locality:{dataType:"city",name:"long_name"},administrative_area_level_1:{dataType:"state",name:"short_name"},country:{dataType:"country",name:"long_name"},postal_code:{dataType:"zip",name:"short_name"}},c=e.getPlace();a.each(b,function(a,b){f.find('input[data-type="'+b.dataType+'"]').val("")});for(var d=0;d<c.address_components.length;d++){var g=c.address_components[d].types[0];if(void 0!==b[g]&&void 0!==b[g].dataType){var h=f.find('input[data-type="'+b[g].dataType+'"]');if(h.length>0){var i=h.val()+" "+c.address_components[d][b[g].name];h.val(i)}}}};e.addListener("place_changed",h)}}),e.length>0&&a.each(e,function(){a(this).on("click",function(b){if(navigator.geolocation){var d=function(b){var d=b.coords.latitude,e=b.coords.longitude,f={lat:parseFloat(d),lng:parseFloat(e)},g=new google.maps.Geocoder;g.geocode({location:f},function(b,d){"OK"===d?b[1]?a(this).siblings("."+c).length>0&&a(this).siblings("."+c).val(b[1].formatted_address):window.alert("No results found"):window.alert("Geocoder failed due to: "+d)})},e=function(a){1===a.code?alert("Error: Access is denied!"):2===a.code&&alert("Error: Position is unavailable!")},f={timeout:6e4};navigator.geolocation.getCurrentPosition(d,e,f)}else window.alert("Your browser doesnot support Geolocation");b.preventDefault()})})}}}(jQuery),initAutocompleteAddress();