!function(t){if(!t.fn.licoMsgbox){var a=[],s=function(){return{version:"0.1.3",defaults:{content:"",title:"提示",icon:"default"},createOverlay:function(a){var s=Math.max(t(window).width(),t("body").width()),o=Math.max(t(window).height(),t("body").height());t("<div/>").css({width:s+"px",height:o+"px"}).addClass("au-msgbox au-msgbox-overlay au-msgbox-overlay-"+a.icon+" au-msgbox-"+a.timestamp).hide().appendTo("body")},showOverlay:function(a){t(".au-msgbox.au-msgbox-overlay.au-msgbox-"+a.timestamp).fadeIn()},deleteOverlay:function(a){t(".au-msgbox.au-msgbox-overlay.au-msgbox-"+a.timestamp).fadeOut(function(){t(this).remove()})},createBox:function(a){var s=a.icon,o=a.content,e=a.title,n=a.YES,i=a.NO,b=a.OK,l=a.CANCEL,u=a.buttons;switch(s){case"error":e="<i class='fa fa-bolt'></i>&nbsp;&nbsp;"+e;break;case"warning":e="<i class='fa fa-warning'></i>&nbsp;&nbsp;"+e;break;case"default":default:e="<i class='fa fa-star'></i>&nbsp;&nbsp;"+e}var c=t("<div/>").addClass("au-msgbox au-msgbox-box au-msgbox-box-"+s+" au-msgbox-"+a.timestamp).hide().appendTo("body");t('<h3 class="au-msgbox-box-title"/>').html(e).appendTo(c),t('<p class="au-msgbox-box-validate au-msgbox-box-validate-'+s+'"/>').appendTo(c),t('<p class="au-msgbox-box-content au-msgbox-box-content-'+s+'"/>').html(o).appendTo(c),a.html&&c.append("<p>"+a.html+"</p>"),u&&u.length>0&&t.each(u,function(a,s,o){t('<button role="msgbox" type="button" class="btn '+(s.cls||"button-info")+'" value='+s.value+"/>").html('<i class="fa fa-'+s.icon+'"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+s.text).appendTo(c)}),l&&t('<button role="msgbox" type="button" class="btn btn-default" value=0/>').html('<i class="fa fa-arrow-circle-left"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+l).appendTo(c),i&&t('<button role="msgbox" type="button" class="btn button-no" value=0/>').html('<i class="fa fa-times-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+i).appendTo(c),b&&t('<button role="msgbox" type="button" class="btn btn-warning" value=1/>').html('<i class="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+b).appendTo(c),n&&t('<button role="msgbox" type="button" class="btn button-yes" value=1/>').html('<i class="fa fa-check-circle"></i>&nbsp;&nbsp;&nbsp;&nbsp;'+n).appendTo(c)},showBox:function(a){t(".au-msgbox.au-msgbox-box.au-msgbox-"+a.timestamp).fadeIn(function(){t(this).children("button").eq(1).focus()})},deleteBox:function(a){t(".au-msgbox.au-msgbox-box.au-msgbox-"+a.timestamp).fadeOut(function(){t(this).remove()})},attachHandlers:function(a){var s=(a.icon,this);t(".au-msgbox.au-msgbox-"+a.timestamp+" button").on("click",function(){var o=t(this).attr("disabled");if("disabled"!==o&&"true"!==o&&1!=o&&!t(this).hasClass("disabled")){t(this).attr("disabled","disabled").addClass("disabled");var e=t(this).val(),n=t(".au-msgbox.au-msgbox-"+a.timestamp);if(a.validate){var i=a.validate.call(a,e,n);if(!i.success)return void n.find(".au-msgbox-box-validate").html(i.msg)}var b=null;a.handler&&(b=a.handler.call(a,e,n)),b!==!1?(s.deleteOverlay(a),s.deleteBox(a)):t(this).attributeName("disabled").removeClass("disabled")}})},show:function(t){return t.timestamp=((new Date).getTime()+Math.random()).toString(16).replace(/[.]/g,""),a.push(t),this.createOverlay(t),this.showOverlay(t),this.createBox(t),this.showBox(t),this.attachHandlers(t),this}}}();!function(){t(document).on("keydown.confirmon.close",function(o){if(a.length>0)if(27===o.which||13===o.which){var e=a.pop();s.deleteOverlay(e),s.deleteBox(e),e.handler&&e.handler.call(e,13===o.which?"1":"0")}else if(9===o.which||39===o.which||37===o.which){var e=a[a.length-1],n=t(".au-msgbox.au-msgbox-box.au-msgbox-"+e.timestamp+" button:focus"),i=37===o.which?n.prev("button"):t(this).next("button");i.length>0?i.focus():t(".au-msgbox.au-msgbox-box.au-msgbox-"+e.timestamp+" button").first().focus()}})}(),t.fn.licoMsgbox=function(a){var a=t.extend({},s.defaults,a||{});return function(){return s.show.apply(s,arguments)}(a)},t.fn.licoMsgbox.isMasking=function(){var a=!1;return t(".au-msgbox").each(function(){return t(this).is(":hidden")?void 0:(a=!0,!1)}),a},t.licoMsgbox=t.fn.licoMsgbox}}(jQuery);