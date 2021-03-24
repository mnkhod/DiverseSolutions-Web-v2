/******************************************************************
	
	
	@ Item          Gravity // Coming Soon WordPress
	@ Author		Avanzare
	@ Website		http://themeforest.net/user/avanzare 
	

 ******************************************************************/
 
 
 /******************************************************************


	------------------------
	-- TABLE OF CONTENTS --
	------------------------
	
	--  1. Backgrounds
 
 
 ******************************************************************/




/** 1. BACKGROUNDS
*******************************************************************/



jQuery(document).ready(function($) {

	

	function imageBackground(){$(".bg-image").vegas({slides:[{src:background_image_image}],delay:10,transitionDuration:10,timer:!1})}
	
	
	function sliderBackground(){$(".grcs_background_content .bg-image").vegas({slides:background_slider_slides,transition:background_slider_transition,delay:background_slider_timeout,transitionDuration:background_slider_transition_duration,firstTransitionDuration:1,timer:!1,walk:function(i,n){$(".grcs_text_slider").cycle("next")}})}
	
	
	function kenburnsBackground(){$(".grcs_background_content .bg-image").vegas({slides:background_kenburns_slides,transition:background_kenburns_transition,delay:background_kenburns_timeout,transitionDuration:background_kenburns_transition_duration,firstTransitionDuration:1,timer:!1,animation:background_kenburns_effect,walk:function(n,r){$(".grcs_text_slider").cycle("next")}})}
	
	
	function youtubeBackground(){if(jQuery.browser.mobile)$(".grcs_background_content .bg-image").vegas({slides:[{src:background_youtube_fallback_image}],delay:100,transitionDuration:100,timer:!1});else{1==background_youtube_controls&&$("body").append('<div class="grcs_youtube_controls"><i class="volume-button fa fa-volume-up"></i> <i class="pause-button ti-control-pause"></i></div>'),1==background_youtube_sound?background_youtube_sound=0:(background_youtube_sound=1,$(".grcs_youtube_controls .volume-button").removeClass("fa-volume-up").addClass("fa-volume-off")),$(".grcs_background_content .bg-video").append('<div id="bg-youtube" class="player showOn-video-bg"></div>'),$("#bg-youtube").attr("data-property",'{videoURL:background_youtube_url,containment:".bg-video",autoPlay:true,mute:background_youtube_sound,startAt: background_youtube_start_point,stopAt: background_youtube_end_point,opacity:1,stopMovieOnBlur:false,showControls:false,loop:true}'),$(".player").mb_YTPlayer(),$(".grcs_youtube_controls .volume-button").click(function(){$("#bg-youtube").hasClass("isMuted")?($("#bg-youtube").YTPUnmute(),$(".grcs_youtube_controls .volume-button").removeClass("fa-volume-off").addClass("fa-volume-up")):($("#bg-youtube").YTPMute(),$(".grcs_youtube_controls .volume-button").removeClass("fa-volume-up").addClass("fa-volume-off"))});var o=!0;$("#bg-youtube").on("YTPPause",function(){o=!1}),$("#bg-youtube").on("YTPPlay",function(){o=!0}),$(".grcs_youtube_controls .pause-button").click(function(){1==o?($("#bg-youtube").YTPPause(),$(".grcs_youtube_controls .pause-button").removeClass("ti-control-pause").addClass("ti-control-play")):($("#bg-youtube").YTPPlay(),$(".grcs_youtube_controls .pause-button").removeClass("ti-control-play").addClass("ti-control-pause"))}),$("#bg-youtube").on("YTPReady",function(o){setTimeout(function(){$("#bg-youtube").YTPPlay()},500)})}}
	
	
	function colorBackground(){$(".grcs_background_content .bg-color").css("background",background_color_color),$(".grcs_background_content .bg-color").css("opacity","1"),$(".grcs_background_content .bg-pattern").remove(),$(".grcs_background_content .bg-overlay").remove()}
	
	
	function gradientBackground(){function r(r){r=r.replace("#","");var o=parseInt(r,16);return[o>>16&255,o>>8&255,255&o]}var o=new Array(r(background_gradient_color_1),r(background_gradient_color_2),r(background_gradient_color_3),r(background_gradient_color_4),r(background_gradient_color_5),r(background_gradient_color_6)),n=0,a=$(".grcs_background_content .bg-color"),t=[0,1,2,3],e=parseFloat(background_gradient_speed)/4e4;setInterval(function(){var r=o[t[0]],g=o[t[1]],c=o[t[2]],d=o[t[3]],_=1-n,u="rgb("+Math.round(_*r[0]+n*g[0])+","+Math.round(_*r[1]+n*g[1])+","+Math.round(_*r[2]+n*g[2])+")",l="rgb("+Math.round(_*c[0]+n*d[0])+","+Math.round(_*c[1]+n*d[1])+","+Math.round(_*c[2]+n*d[2])+")";a.css({background:"-webkit-gradient(linear, left top, right top, from("+u+"), to("+l+"))"}).css({background:"-moz-linear-gradient(left, "+u+" 0%, "+l+" 100%)"}),(n+=e)>=1&&(n%=1,t[0]=t[1],t[2]=t[3],t[1]=(t[1]+Math.floor(1+Math.random()*(o.length-1)))%o.length,t[3]=(t[3]+Math.floor(1+Math.random()*(o.length-1)))%o.length)},1),$(".grcs_background_content .bg-color").css("opacity","1"),$(".grcs_background_content .bg-pattern").remove(),$(".grcs_background_content .bg-overlay").remove()}
	
	
	function canvasSphereBackground(){$(".grcs_background_content .bg-overlay").remove(),$(".grcs_background_content .bg-pattern").remove();var e,n,o,t=$(".grcs_background_content .level-1").width(),a=$(".grcs_background_content .level-1").height(),r=0,i=0,c=t/2,d=a/2;function l(){var n=$(".grcs_background_content .level-1").width(),t=$(".grcs_background_content .level-1").height();d=t/2,e.aspect=n/t,e.updateProjectionMatrix(),o.setSize(n,t)}function s(e){r=e.clientX-c,i=e.clientY-d}!function(){var r,i;r=document.createElement("div"),document.getElementById("canvas").appendChild(r),(e=new THREE.PerspectiveCamera(75,t/a,1,1e4)).position.z=10*background_sphere_distance,n=new THREE.Scene,(o=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),o.setSize(t,a),r.appendChild(o.domElement),o.setClearColor(background_sphere_background_color);for(var c=2*Math.PI,d=new THREE.SpriteCanvasMaterial({color:background_sphere_dot_color,program:function(e){e.beginPath(),e.arc(0,0,.5,0,c,!0),e.fill()}}),p=0;p<1e3;p++)(i=new THREE.Sprite(d)).position.x=2*Math.random()-1,i.position.y=2*Math.random()-1,i.position.z=2*Math.random()-1,i.position.normalize(),i.position.multiplyScalar(10*Math.random()+450),i.scale.multiplyScalar(2),n.add(i);for(var p=0;p<300;p++){var m=new THREE.Geometry,u=new THREE.Vector3(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1);u.normalize(),u.multiplyScalar(450),m.vertices.push(u);var h=u.clone();h.multiplyScalar(.3*Math.random()+1),m.vertices.push(h);var v=new THREE.Line(m,new THREE.LineBasicMaterial({color:background_sphere_line_color,opacity:Math.random()}));n.add(v)}document.addEventListener("mousemove",s,!1),window.addEventListener("resize",l,!1)}(),function t(){requestAnimationFrame(t);e.position.x+=.05*(r-e.position.x),e.position.y+=.05*(200-i-e.position.y),e.lookAt(n.position),n.rotation.y+=background_sphere_rotation_speed/1e4,o.render(n,e)}()}
	
	
	function canvasWavesBackground(){$(".grcs_background_content .bg-overlay").remove(),$(".grcs_background_content .bg-pattern").remove();var e,n,o,t,a,i,r=background_waves_dot_spacing,c=background_waves_dot_amount_x,s=background_waves_dot_amount_y,d=$(".grcs_background_content .level-1").width(),_=$(".grcs_background_content .level-1").height(),v=0,u=0,g=0,l=d/2,p=_/2;function w(){var e=$(".grcs_background_content .level-1").width(),o=$(".grcs_background_content .level-1").height();l=e/2,p=o/2,n.aspect=e/o,n.updateProjectionMatrix(),t.setSize(e,o)}function b(e){u=e.clientX-l,g=e.clientY-p}!function(){e=document.createElement("div"),document.getElementById("canvas").appendChild(e),(n=new THREE.PerspectiveCamera(75,d/_,1,1e4)).position.z=100*background_waves_distance,o=new THREE.Scene,a=new Array;for(var v=2*Math.PI,u=new THREE.SpriteCanvasMaterial({color:background_waves_dot_color,program:function(e){e.beginPath(),e.arc(0,0,.5,0,v,!0),e.fill()}}),g=0,l=0;l<c;l++)for(var p=0;p<s;p++)(i=a[g++]=new THREE.Sprite(u)).position.x=l*r-c*r/2,i.position.z=p*r-s*r/2,o.add(i);(t=new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio),t.setSize(d,_),e.appendChild(t.domElement),t.setClearColor(background_waves_background_color),document.addEventListener("mousemove",b,!1),window.addEventListener("resize",w,!1)}(),function e(){requestAnimationFrame(e);!function(){n.position.x+=.05*(u-n.position.x),n.position.y+=.05*(-g-n.position.y),n.lookAt(o.position);for(var e=0,r=0;r<c;r++)for(var d=0;d<s;d++)(i=a[e++]).position.y=Math.sin(.3*(r+v))*background_waves_dot_intensity*5+Math.sin(.5*(d+v))*background_waves_dot_intensity*5,i.scale.x=i.scale.y=(Math.sin(.3*(r+v))+1)*(background_waves_dot_expansion/1.25)+(Math.sin(.5*(d+v))+1)*(background_waves_dot_expansion/1.25);t.render(o,n),v+=.1}()}()}
	
	
	function meshBackground(){var t,e,n,i,o,s,a,r,h,c,l,d,u,y,f;function g(t){this.x=t.x,this.y=t.y,this.xBase=this.x,this.yBase=this.y,this.offset=x(0,1e3),this.duration=x(20,60),this.range=x(5,5),this.dir=x(0,1)>.5?1:-1,this.rad=x(2,4)}function x(t,e){return Math.random()*(e-t)+t}function v(){n=$(".grcs_background_content .level-1").width(),i=$(".grcs_background_content .level-1").height(),t.width=n,t.height=i,c.x=n/2,c.y=i/2,l=!1,d=0,u=0,y.length=0,f=0,function(){for(var t=-o/2;t<n+o;t+=o){d++;for(var e=-o/2;e<i+o;e+=o)t==-o/2&&u++,y.push(new g({x:~~(t+x(-s,s)),y:~~(e+x(-s,s))}))}}(),e.strokeStyle=background_mesh_line_color,e.lineWidth=2}function m(){requestAnimationFrame(m),l||(c.x=n/2+90*Math.cos(f/40),c.y=i/2+90*Math.sin(f/40)),y.forEach(function(t){t.step()}),f++,function(){e.clearRect(0,0,n,i),e.beginPath();for(var t=0;t<d;t++)for(var o=0;o<u;o++)a=y[t*u+o],r=t===d-1?null:y[(t+1)*u+o],h=o===u-1?null:y[t*u+o+1],r&&(e.moveTo(a.x,a.y),e.lineTo(r.x,r.y)),h&&(e.moveTo(a.x,a.y),e.lineTo(h.x,h.y));e.stroke(),e.fillStyle="red",y.forEach(function(t){e.save(),e.beginPath(),e.translate(t.x,t.y),e.rotate(Math.PI/4),e.rect(0,0,0,0),e.fill(),e.stroke(),e.restore()});var s=e.createRadialGradient(c.x,c.y,0,c.x,c.y,background_mesh_spotlight_size);s.addColorStop(0,"hsla(0, 0%, 0%, 0.1)"),s.addColorStop(1,"hsla(0, 0%, 0%, 0.96)"),e.fillStyle=s,e.fillRect(0,0,n,i)}()}g.prototype.step=function(){this.x=this.xBase+this.dir*Math.sin((f+this.offset)/this.duration)*this.range,this.y=this.yBase+this.dir*Math.cos((f+this.offset)/this.duration)*this.range;var t,e,n,i,o=(e=c,n=(t=this).x-e.x,i=t.y-e.y,Math.atan2(i,n));this.x=this.x+100*Math.cos(o),this.y=this.y+100*Math.sin(o)},window.addEventListener("resize",v),window.addEventListener("mousemove",function(t){l=!0,c.x=t.pageX,c.y=t.pageY}),t=document.createElement("canvas"),e=t.getContext("2d"),c={x:0,y:0},y=[],o=parseFloat(background_mesh_line_mesh_size),s=.22*o,document.getElementById("canvas").appendChild(t),v(),m(),$(".grcs_background_content .bg-overlay").remove(),$(".grcs_background_content .bg-pattern").remove()}
	
	
	function spaceBackground(){var t,s,i,a,e,r,h,n,o;$(".grcs_background_content .bg-pattern").remove(),t=jQuery,s=window,i=document,h=function(s,i){this.el=s,this.$el=t(s),this.options=i,r=this},n=!1,o=!1,function(){for(var t=0,i=["ms","moz","webkit","o"],a=0;a<i.length&&!s.requestAnimationFrame;++a)s.requestAnimationFrame=s[i[a]+"RequestAnimationFrame"],s.cancelAnimationFrame=s[i[a]+"CancelAnimationFrame"]||s[i[a]+"CancelRequestAnimationFrame"];s.requestAnimationFrame||(s.requestAnimationFrame=function(i,a){var e=(new Date).getTime(),r=Math.max(0,16-(e-t)),h=s.setTimeout(function(){i(e+r)},r);return t=e+r,h}),s.cancelAnimationFrame||(s.cancelAnimationFrame=function(t){clearTimeout(t)})}(),h.prototype={defaults:{starColor:background_space_star_color,bgColor:background_space_background_color,mouseMove:parseFloat(background_space_mouse_interaction),speed:background_space_star_speed/20,quantity:background_space_star_amount,ratio:background_space_star_amount/2,divclass:"starfield"},resizer:function(){var t=this.star,s=this.context.canvas.width,i=this.context.canvas.height;this.w=this.$el.width(),this.h=this.$el.height(),this.x=Math.round(this.w/2),this.y=Math.round(this.h/2);var a=this.w/s,e=this.h/i;this.context.canvas.width=this.w,this.context.canvas.height=this.h;for(var h=0;h<this.n;h++)this.star[h][0]=t[h][0]*a,this.star[h][1]=t[h][1]*e,this.star[h][3]=this.x+this.star[h][0]/this.star[h][2]*this.star_ratio,this.star[h][4]=this.y+this.star[h][1]/this.star[h][2]*this.star_ratio;r.context.fillStyle=r.settings.bgColor,this.context.strokeStyle=this.settings.starColor},init:function(){this.settings=t.extend({},this.defaults,this.options),i.location.href,this.n=parseInt(this.settings.quantity),this.flag=!0,this.test=!0,this.w=0,this.h=0,this.x=0,this.y=0,this.z=0,this.star_color_ratio=0,this.star_x_save=0,this.star_y_save=0,this.star_ratio=this.settings.ratio,this.star_speed=this.settings.speed,this.star_speed_save=0,this.star=new Array(this.n),this.color=this.settings.starColor,this.opacity=.1,this.cursor_x=0,this.cursor_y=0,this.mouse_x=0,this.mouse_y=0,this.canvas_x=0,this.canvas_y=0,this.canvas_w=0,this.canvas_h=0,this.fps=this.settings.fps,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/),this.orientationSupport=void 0!==s.DeviceOrientationEvent,this.portrait=null,r.w=r.$el.width(),r.h=r.$el.height(),r.initW=r.w,r.initH=r.h,r.portrait=r.w<r.h,r.wrapper=t("<canvas />").addClass(r.settings.divclass),r.wrapper.appendTo(r.el),r.starz=t("canvas",r.el),r.starz[0].getContext&&(r.context=r.starz[0].getContext("2d"),o=!0),r.context.canvas.width=r.w,r.context.canvas.height=r.h,function(){if(o){r.x=Math.round(r.w/2),r.y=Math.round(r.h/2),r.z=(r.w+r.h)/2,r.star_color_ratio=1/r.z,r.cursor_x=r.x,r.cursor_y=r.y;for(var t=0;t<r.n;t++)r.star[t]=new Array(5),r.star[t][0]=Math.random()*r.w*2-2*r.x,r.star[t][1]=Math.random()*r.h*2-2*r.y,r.star[t][2]=Math.round(Math.random()*r.z),r.star[t][3]=0,r.star[t][4]=0;r.context.fillStyle=r.settings.bgColor,r.context.strokeStyle=r.settings.starColor}}(),n=!0},anim:function(){this.mouse_x=this.cursor_x-this.x,this.mouse_y=this.cursor_y-this.y,this.context.fillRect(0,0,this.w,this.h);for(var t=0;t<this.n;t++)this.test=!0,this.star_x_save=this.star[t][3],this.star_y_save=this.star[t][4],this.star[t][0]+=this.mouse_x>>4,this.star[t][0]>this.x<<1&&(this.star[t][0]-=this.w<<1,this.test=!1),this.star[t][0]<-this.x<<1&&(this.star[t][0]+=this.w<<1,this.test=!1),this.star[t][1]+=this.mouse_y>>4,this.star[t][1]>this.y<<1&&(this.star[t][1]-=this.h<<1,this.test=!1),this.star[t][1]<-this.y<<1&&(this.star[t][1]+=this.h<<1,this.test=!1),this.star[t][2]-=this.star_speed,this.star[t][2]>this.z&&(this.star[t][2]-=this.z,this.test=!1),this.star[t][2]<0&&(this.star[t][2]+=this.z,this.test=!1),this.star[t][3]=this.x+this.star[t][0]/this.star[t][2]*this.star_ratio,this.star[t][4]=this.y+this.star[t][1]/this.star[t][2]*this.star_ratio,this.star_x_save>0&&this.star_x_save<this.w&&this.star_y_save>0&&this.star_y_save<this.h&&this.test&&(this.context.lineWidth=2*(1-this.star_color_ratio*this.star[t][2]),this.context.beginPath(),this.context.moveTo(this.star_x_save,this.star_y_save),this.context.lineTo(this.star[t][3],this.star[t][4]),this.context.stroke(),this.context.closePath())},loop:function(){this.anim(),e=s.requestAnimationFrame(function(){r.loop()})},move:function(){var t=i.documentElement;this.orientationSupport&&!this.desktop?s.addEventListener("deviceorientation",function(t){if(null!==t.beta&&null!==t.gamma){var s=t.gamma,i=t.beta;r.portrait||(s=-1*t.beta,i=t.gamma),r.cursor_x=r.w/2+5*s,r.cursor_y=r.h/2+5*i}},!1):s.addEventListener("mousemove",function(s){r.cursor_x=s.pageX||s.clientX+t.scrollLeft-t.clientLeft,r.cursor_y=s.pageY||s.clientY+t.scrollTop-t.clientTop},!1)},stop:function(){s.cancelAnimationFrame(e),a=!1},start:function(){return n||(n=!0,this.init()),a||(a=!0,this.loop()),s.addEventListener("resize",function(){r.resizer()},!1),s.addEventListener("orientati onchange",function(){r.resizer()},!1),this.settings.mouseMove&&this.move(),this}},h.defaults=h.prototype.defaults,t.fn.starfield=function(t){return this.each(function(){new h(this,t).start()})},s.Starfield=h,$("#canvas").starfield()}
    
    
    
    function abstractBackground(){$(".grcs_background_content .bg-pattern").remove(),$(".grcs_background_content .bg-overlay").remove();var e,t,n,a,i,o,r,c=setInterval(function(){$(".grcs_background_content .level-1 #canvas").offset().top<=50&&($(".grcs_background_content .level-1 #canvas").css({WebkitTransition:"all .4s",transition:"all .4s"}),$(".grcs_background_content .level-1 #canvas").css("background",background_abstract_background_color),clearInterval(c))},50),s={width:background_abstract_shader_width/100,height:1.8,depth:60,segments:9,slices:8,xRange:background_abstract_width_expansion,yRange:.1,zRange:1,ambient:"#666666",diffuse:"#fff",speed:background_abstract_move_speed/1e4},l={count:2,xyScalar:1,zOffset:100,ambient:"#fff",diffuse:"#b3b3b3",speed:2e-4,gravity:500,dampening:.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:!0,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1))},d={renderer:"canvas"},S=Date.now(),h=FSS.Vector3.create(),f=FSS.Vector3.create(),g=document.getElementById("canvas"),m=document.getElementById("canvas");function u(){var e,r;for(n.remove(a),t.clear(),i=new FSS.Plane(s.width*t.width,s.height*t.height,s.segments,s.slices),o=new FSS.Material(s.ambient,s.diffuse),a=new FSS.Mesh(i,o),n.add(a),e=i.vertices.length-1;e>=0;e--)(r=i.vertices[e]).anchor=FSS.Vector3.clone(r.position),r.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),r.time=Math.randomInRange(0,Math.PIM2)}function v(e,n){t.setSize(e,n),FSS.Vector3.set(h,t.halfWidth,t.halfHeight),u()}function b(){e=Date.now()-S,function(){var t,a,o,r,c,d,S,g=s.depth/2;FSS.Vector3.copy(l.bounds,h),FSS.Vector3.multiplyScalar(l.bounds,l.xyScalar),FSS.Vector3.setZ(f,l.zOffset),l.autopilot&&(t=Math.sin(l.step[0]*e*l.speed),a=Math.cos(l.step[1]*e*l.speed),FSS.Vector3.set(f,l.bounds[0]*t,l.bounds[1]*a,l.zOffset));for(r=n.lights.length-1;r>=0;r--){c=n.lights[r],FSS.Vector3.setZ(c.position,l.zOffset);var m=Math.clamp(FSS.Vector3.distanceSquared(c.position,f),l.minDistance,l.maxDistance),u=l.gravity*c.mass/m;FSS.Vector3.subtractVectors(c.force,f,c.position),FSS.Vector3.normalise(c.force),FSS.Vector3.multiplyScalar(c.force,u),FSS.Vector3.set(c.acceleration),FSS.Vector3.add(c.acceleration,c.force),FSS.Vector3.add(c.velocity,c.acceleration),FSS.Vector3.multiplyScalar(c.velocity,l.dampening),FSS.Vector3.limit(c.velocity,l.minLimit,l.maxLimit),FSS.Vector3.add(c.position,c.velocity)}for(d=i.vertices.length-1;d>=0;d--)S=i.vertices[d],t=Math.sin(S.time+S.step[0]*e*s.speed),a=Math.cos(S.time+S.step[1]*e*s.speed),o=Math.sin(S.time+S.step[2]*e*s.speed),FSS.Vector3.set(S.position,s.xRange*i.segmentWidth*t,s.yRange*i.sliceHeight*a,s.zRange*g*o-g),FSS.Vector3.add(S.position,S.anchor);i.dirty=!0}(),p(),requestAnimationFrame(b)}function p(){var e,a,i,o;if(t.render(n),l.draw)for(e=n.lights.length-1;e>=0;e--)a=(o=n.lights[e]).position[0],i=o.position[1],t.context.lineWidth=.5,t.context.beginPath(),t.context.arc(a,i,10,0,Math.PIM2),t.context.strokeStyle=o.ambientHex,t.context.stroke(),t.context.beginPath(),t.context.arc(a,i,4,0,Math.PIM2),t.context.fillStyle=o.diffuseHex,t.context.fill()}function F(e){v(g.offsetWidth,g.offsetHeight),p()}if(r=new FSS.CanvasRenderer,d.renderer,t&&m.removeChild(t.element),(t=r).setSize(g.offsetWidth,g.offsetHeight),m.appendChild(t.element),n=new FSS.Scene,u(),function(){var e,a;for(e=n.lights.length-1;e>=0;e--)a=n.lights[e],n.remove(a);for(t.clear(),e=0;e<l.count;e++)(a=new FSS.Light(l.ambient,l.diffuse)).ambientHex=a.ambient.format(),a.diffuseHex=a.diffuse.format(),n.add(a),a.mass=Math.randomInRange(.5,1),a.velocity=FSS.Vector3.create(),a.acceleration=FSS.Vector3.create(),a.force=FSS.Vector3.create(),a.ring=document.createElementNS(FSS.SVGNS,"circle"),a.ring.setAttributeNS(null,"stroke",a.ambientHex),a.ring.setAttributeNS(null,"stroke-width","0.5"),a.ring.setAttributeNS(null,"fill","none"),a.ring.setAttributeNS(null,"r","10"),a.core=document.createElementNS(FSS.SVGNS,"circle"),a.core.setAttributeNS(null,"fill",a.diffuseHex),a.core.setAttributeNS(null,"r","4")}(),window.addEventListener("resize",F),v(g.offsetWidth,g.offsetHeight),b(),canvas.getContext){var V=canvas.getContext("2d"),x=!0;canvas.height=screen.height-60,canvas.width=screen.width+20,initialize(),initialize();setInterval(function(){for(var e=1;e<=1e3;e++)V.beginPath(),x?(V.moveTo(0,randomize(canvas.height+10)),x=!1):(V.moveTo(randomize(canvas.width+10),0),x=!0),V.lineTo(randomize(canvas.width+50),randomize(canvas.height+50)),V.lineTo(randomize(canvas.width+50),randomize(canvas.height+50)),V.fillStyle=getRndColor(),V.fill()},5e3)}}
	
	
	
	function glitchBackground(){var g="background-image: url('"+background_glitch_image+"')";$(".grcs_background_content .level-2 .bg-image").append('<div class="glitch-img" style="'+g+'"></div>'),$(".grcs_background_content .glitch-img").mgGlitch({destroy:!1,glitch:!0,scale:Boolean(background_glitch_scale_toggle),blend:!0,blendModeType:"hue",glitch1TimeMin:600,glitch1TimeMax:900,glitch2TimeMin:10,glitch2TimeMax:115,zIndexStart:8})}
    
    
    
    function rainBackground(){var n=$("#canvas canvas")[0];if($("#canvas canvas").css("background",background_rain_background_color),n.width=window.innerWidth,n.height=window.innerHeight,n.getContext){var a=n.getContext("2d"),r=n.width,o=n.height;a.strokeStyle=background_rain_color,a.lineWidth=background_rain_thickness,a.lineCap="round";for(var t=[],i=background_rain_amount,e=0;e<i;e++)t.push({x:Math.random()*r,y:Math.random()*o,l:1*Math.random(),xs:4*Math.random()-4+2,ys:10*Math.random()+10});for(var d=[],c=0;c<i;c++)d[c]=t[c];setInterval(function(){a.clearRect(0,0,r,o);for(var n=0;n<d.length;n++){var t=d[n];a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(t.x+t.l*t.xs,t.y+t.l*t.ys),a.stroke()}!function(){for(var n=0;n<d.length;n++){var a=d[n];a.x+=a.xs,a.y+=a.ys,(a.x>r||a.y>o)&&(a.x=Math.random()*r,a.y=-20)}}()},26)}}
    
    
    
    // SKYFALL BACKGROUND FUNCTION
	function skyfallBackground() {
    
            $('#canvas canvas').attr("id","skyfallCanvas");
        
            function hexToRgb(hex) {
            
                hex = hex.replace("#", "");

                var bigint = parseInt(hex, 16);
                var r = (bigint >> 16) & 255;
                var g = (bigint >> 8) & 255;
                var b = bigint & 255;

                return r + "," +  g + "," + b;
            }
    
            var c = document.getElementById("skyfallCanvas");
            var ctx = c.getContext("2d");
            var w = c.width = window.innerWidth;
            var h = c.height = window.innerHeight;
            var clearColor = 'rgba(0, 0, 0, .1)';
            var max = background_skyfall_amount;
            var color_set = hexToRgb(background_skyfall_color);
            var drops = [];

            function random(min, max) {
                return Math.random() * (max - min) + min;
            }

            function O() {}

            O.prototype = {
                init: function() {
                    this.x = random(0, w);
                    this.y = 0;
                    this.color = 'rgb('+ color_set +')';
                    this.w = 2;
                    this.h = 1;
                    this.vy = random(4, 5);
                    this.vw = 3;
                    this.vh = 1;
                    this.size = 2;
                    this.hit = random(h * .8, h * .9);
                    this.a = 1;
                    this.va = .96;
                },
                draw: function() {
                    if (this.y > this.hit) {
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y - this.h / 2);

                        ctx.bezierCurveTo(
                            this.x + this.w / 2, this.y - this.h / 2,
                            this.x + this.w / 2, this.y + this.h / 2,
                            this.x, this.y + this.h / 2);

                        ctx.bezierCurveTo(
                            this.x - this.w / 2, this.y + this.h / 2,
                            this.x - this.w / 2, this.y - this.h / 2,
                            this.x, this.y - this.h / 2);

                        ctx.strokeStyle = 'rgba('+ color_set + ',' +this.a+')';
                        ctx.stroke();
                        ctx.closePath();

                    } else {
                        ctx.fillStyle = this.color;
                        ctx.fillRect(this.x, this.y, this.size, this.size * 5);
                    }
                    this.update();
                },
                update: function() {
                    if(this.y < this.hit){
                        this.y += this.vy;
                    } else {
                        if(this.a > .03){
                            this.w += this.vw;
                            this.h += this.vh;
                            if(this.w > 100){
                                this.a *= this.va;
                                this.vw *= .98;
                                this.vh *= .98;
                            }
                        } else {
                            this.init();
                        }
                    }

                }
            }

            function resize(){
                w = c.width = window.innerWidth;
                h = c.height = window.innerHeight;
            }

            function setup(){
                for(var i = 0; i < max; i++){
                    (function(j){
                        setTimeout(function(){
                            var o = new O();
                            o.init();
                            drops.push(o);
                        }, j * 200)
                    }(i));
                }
            }


            function anim() {
                ctx.fillStyle = clearColor;
                ctx.fillRect(0,0,w,h);
                for(var i in drops){
                    drops[i].draw();
                }
                requestAnimationFrame(anim);
            }


            window.addEventListener("resize", resize);

            setup();
            anim();
	
	}
    
    
    
    // GALAXY BACKGROUND FUNCTION
	function galaxyBackground() {
        
            function hexToRgb(hex) {
            
                hex = hex.replace("#", "");

                var bigint = parseInt(hex, 16);
                var r = (bigint >> 16) & 255;
                var g = (bigint >> 8) & 255;
                var b = bigint & 255;

                return r + "," +  g + "," + b;
            }
    
            $('#canvas canvas').attr("id","canvasGalaxy");
        
            var c = document.getElementById("canvasGalaxy");
	        $ = c.getContext("2d");
        
			var h = c.height = window.innerHeight,
			    w = c.width = window.innerWidth,
                bg_color = hexToRgb(background_galaxy_background_color),
                random = (n)=>Math.random()*n,
                stars = new Array(background_galaxy_star_amount).fill().map(()=>{
                    return {r: random(w),	s: random(0.01), a: random(Math.PI*2)};
                });
        
            function loop(){
                
                $.fillStyle="rgba(" + bg_color + ",.1)";
                $.fillRect(0,0,w,h);
                
                stars.forEach(e=>{
                    
                    e.a+=e.s;
                    $.save();
                    $.beginPath();
                    $.translate(w/2, h/2);
                    $.rotate(e.a);
                    $.arc(e.r,e.r,background_galaxy_star_thickness,0,Math.PI*2);
                    $.closePath();
                    $.fillStyle = background_galaxy_star_color;
                    $.fill();
                    $.restore()
                    
                })
                
                requestAnimationFrame(loop)
                
            } loop();
        
            window.addEventListener("resize", (e)=>{
                w=c.width=window.innerWidth;
                h=c.height=window.innerHeight;
            });


	
	}
    
  
    
	// BACKGROUND CONTROLLER
    if($(".grcs_background_content").length != 0) {
        
        switch(background_mode) {

            case "image":
                imageBackground();
            break;
            case "slider":
                sliderBackground();
            break;
            case "kenburns":
                kenburnsBackground();
            break;
            case "youtube":
                youtubeBackground();
            break;
            case "color":
                colorBackground();
            break;
            case "gradient":
                gradientBackground();
            break;
            case "sphere":	
                canvasSphereBackground();
            break;
            case "waves":
                canvasWavesBackground();
            break;
            case "mesh":
                meshBackground();
            break;
            case "space":	
                spaceBackground();
            break;
            case "abstract":
                abstractBackground();
            break;
            case "glitch":
                glitchBackground();
            break;
            case "rain":
                rainBackground();
            break;
            case "skyfall":
                skyfallBackground();
            break;
            case "galaxy":
                galaxyBackground();
            break;
            case "custom":
                
            break;
            default:
                alert( "Error! No background is set or something went wrong" );
                console.log("Error! No background is set or something went wrong");
            break;	

        }
        
    }

	
});