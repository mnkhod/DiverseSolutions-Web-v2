var blockProcess=!0;jQuery(document).ready(function(n){"use strict";n(".grcs_hero_container .container-mid").addClass("block-overflow");if(n("body").hasClass("compose-mode")||n(".grcs_hero_container .front-content .container-mid .enter-animation").addClass("ivis"),n(window).on("load",function(){setTimeout(function(){n("#page-loader").hasClass("freeze")||n("#page-loader").addClass("hide-this"),n(".grcs_text_slider").cycle("goto","0"),setTimeout(function(){var e=0,t=n(".grcs_hero_container .front-content .container-mid .enter-animation").length;0!=t?n(".grcs_hero_container .front-content .container-mid .enter-animation").each(function(){var a=n(this),o=parseInt(a.attr("data-delay"));setTimeout(function(){a.removeClass("ivis"),--t||setTimeout(function(){n(".grcs_hero_container .container-mid").removeClass("block-overflow");blockProcess=!1,n(".grcs_bullet_nav").addClass("init"),n(".grcs_main_menu_button").addClass("init"),n("#canvas").addClass("init"),n(".grcs_youtube_controls").addClass("show"),n(".grcs_audio_player_toggle").addClass("show")},400)},e+=o)}):(n(".grcs_bullet_nav").addClass("init"),n(".grcs_main_menu_button").addClass("init"),n("#canvas").addClass("init"),n(".grcs_youtube_controls").addClass("show"),n(".grcs_audio_player_toggle").addClass("show"))},200)},600)}),n(".grcs_overlay").length>1&&(console.log("%c>Error: More than 1 Overlay Container found!","background: red; color: white;"),alert("Error: More than 1 Overlay Container found!")),n(".grcs_hero_container").length>1&&(console.log("%c Error: More than 1 Hero Container found!","background: red; color: white;"),alert(">Error: More than 1 Hero Container found!")),function(){if(0==n(".grcs_main_menu").length)return!1;n(".grcs_main_menu_button").click(function(){n("body").hasClass("grcs_menu_open")?n("body").removeClass("grcs_menu_open"):n("body").addClass("grcs_menu_open")}),n(".grcs_page_wrapper").click(function(){n("body").hasClass("grcs_menu_open")&&n("body").removeClass("grcs_menu_open")}),n(".grcs_main_menu li.menu-item-has-children").append('<span class="sub-trigger fa fa-angle-down"></span);'),n(".grcs_main_menu .menu").slicknav({label:"",prependTo:".grcs_main_menu",allowParentLinks:!0}),n(".grcs_main_menu_button").click(function(){n(".grcs_main_menu .menu").slicknav("toggle")})}(),n("#grcs_audio_player").length){var e=document.getElementById("grcs_audio_player"),t=!1;n(".grcs_audio_player_toggle").click(function(){t?e.pause():e.play()}),e.onplaying=function(){t=!0,n(".grcs_audio_player_toggle").removeClass("ti-control-play").addClass("ti-control-pause")},e.onpause=function(){t=!1,n(".grcs_audio_player_toggle").removeClass("ti-control-pause").addClass("ti-control-play")}}
if(1==background_particle_effect_toggle&&"sphere"!=background_mode&&"waves"!=background_mode&&"space"!=background_mode&&"mesh"!=background_mode&&"abstract"!=background_mode&&"galaxy"!=background_mode&&"skyfall"!=background_mode&&"rain"!=background_mode&&1==background_parallax_effect_toggle)n(".grcs_background_content").parallax({scalarX:25,scalarY:15,frictionX:1.01-parseFloat(background_parallax_effect_friction_x),frictionY:1.01-parseFloat(background_parallax_effect_friction_y),invertX:parseFloat(background_parallax_effect_invert),invertY:parseFloat(background_parallax_effect_invert)});1==background_particle_effect_toggle&&"sphere"!=background_mode&&"waves"!=background_mode&&"space"!=background_mode&&"mesh"!=background_mode&&"abstract"!=background_mode&&"galaxy"!=background_mode&&"skyfall"!=background_mode&&"rain"!=background_mode&&function(){n.fn.constellation=function(e){return this.each(function(){new function(e,t){var a=n(".grcs_background_content .level-1").width(),o=n(".grcs_background_content .level-1").height(),i=Math.round(a*o/24e3*(background_particle_effect_particle_amount/100)),r=n(e),s=e.getContext("2d"),c={star:{color:background_particle_effect_particle_color,width:1},line:{color:background_particle_effect_line_color,width:.2},position:{x:0,y:0},width:a,height:o,velocity:background_particle_effect_particle_speed/50,length:i,distance:120,radius:background_particle_effect_activation_radius,stars:[]},l=n.extend(!0,{},c,t);function d(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.vx=l.velocity-.5*Math.random(),this.vy=l.velocity-.5*Math.random(),this.radius=Math.random()*l.star.width}
d.prototype={create:function(){s.beginPath(),s.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),s.fill()},animate:function(){var n;for(n=0;n<l.length;n++){var t=l.stars[n];t.y<0||t.y>e.height?(t.vx=t.vx,t.vy=-t.vy):(t.x<0||t.x>e.width)&&(t.vx=-t.vx,t.vy=t.vy),t.x+=t.vx,t.y+=t.vy}},line:function(){var n,e,t,a,o=l.length;for(t=0;t<o;t++)
for(a=0;a<o;a++)n=l.stars[t],e=l.stars[a],n.x-e.x<l.distance&&n.y-e.y<l.distance&&n.x-e.x>-l.distance&&n.y-e.y>-l.distance&&n.x-l.position.x<l.radius&&n.y-l.position.y<l.radius&&n.x-l.position.x>-l.radius&&n.y-l.position.y>-l.radius&&(s.beginPath(),s.moveTo(n.x,n.y),s.lineTo(e.x,e.y),s.stroke(),s.closePath())}},this.createStars=function(){var n,t,a=l.length;for(s.clearRect(0,0,e.width,e.height),t=0;t<a;t++)l.stars.push(new d),(n=l.stars[t]).create();n.line(),n.animate(),l.stars.splice(a,a)},this.setCanvas=function(){e.width=l.width,e.height=l.height,s.fillStyle=l.star.color,s.strokeStyle=l.line.color,s.lineWidth=l.line.width,t&&t.hasOwnProperty("position")||(l.position={x:.5*e.width,y:.5*e.height})},this.loop=function(n){n(),window.requestAnimationFrame(function(){this.loop(n)}.bind(this))},this.bind=function(){n(window).on("mousemove",function(n){l.position.x=n.pageX-r.offset().left,l.position.y=n.pageY-r.offset().top})},this.init=function(){this.setCanvas(),this.loop(this.createStars),this.bind()}}(this,e).init()})},n("#canvas canvas").constellation({});var e,t=(e={},function(n,t,a){a||(a="Don't call this twice without a uniqueId"),e[a]&&clearTimeout(e[a]),e[a]=setTimeout(n,t)});n(window).resize(function(){t(function(){n("#canvas canvas").constellation({})},500,"some unique string")})}()});var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};isMobile.any()&&jQuery("body").addClass("is-mobile")