var blockProcess = !0;
prevent_class_removal = !0, $(".hero .container-mid").addClass("block-overflow"), jQuery(window).on("load", function () {
    "use strict";
    setTimeout(function () {
        $("#page-loader").addClass("hide-this"), $("#cycle").cycle("goto", "0"), setTimeout(function () {
            $(".hero .background-content.page-enter-animated").addClass("show"), setTimeout(function () {
                $(".hero .front-content.page-enter-animated").addClass("show"), setTimeout(function () {
                    blockProcess = !1, $(".grcs_bullet_nav").addClass("init"), setTimeout(function () {
                        1 == prevent_class_removal && $(".hero .container-mid").removeClass("block-overflow")
                    }, 1e3)
                }, 1e3)
            }, 600), $(".social-icons li a").tooltip({
                container: "body",
                delay: {
                    show: 150,
                    hide: 0
                }
            })
        }, 200)
    }, 600)
});
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
    },
    any: function () {
        return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()
    }
};
if (isMobile.any() && jQuery("body").addClass("is-mobile"), $(document).ready(function () {
        "use strict";
        ! function (e, o, a, s) {
            var t, n = $(e),
                r = $(e + ">" + o),
                i = 0,
                c = !1,
                l = $(".go-up"),
                d = $(".go-down"),
                u = $(a),
                m = $(s),
                v = r.length,
                f = 0;

            function b() {
                if (f == v || !0 === blockProcess) return !1;
                blockProcess = !0, n.addClass("movement-in-progress"), 0 === f && (prevent_class_removal = !1, $(".hero .container-mid").addClass("block-overflow"), m.children().css("transition", "all 1000ms 500ms"), u.addClass("overlay-active"), u.removeClass("show"), u.find("div.controls").removeClass("show"), $("#cycle").cycle("pause"), setTimeout(function () {
                    n.addClass("open")
                }, 200)), 0 == c ? f += 1 : (f = i, c = !1), r.removeClass("active"), t = r.eq(f - 1), $(".social-icons li a").tooltip("hide"), setTimeout(function () {
                    t.addClass("active"), g(), setTimeout(function () {
                        l.addClass("active"), setTimeout(function () {
                            blockProcess = !1, n.removeClass("movement-in-progress")
                        }, 800)
                    }, 400)
                }, 1e3)
            }

            function p() {
                if (0 === f || !0 === blockProcess) return !1;
                blockProcess = !0, n.addClass("movement-in-progress"), 0 == c ? f -= 1 : (f = i, c = !1), r.removeClass("active"), t = r.eq(f - 1), setTimeout(function () {
                    t.addClass("active"), g(), setTimeout(function () {
                        blockProcess = !1, n.removeClass("movement-in-progress")
                    }, 800)
                }, 800), 0 === f && (l.removeClass("active"), setTimeout(function () {
                    prevent_class_removal = !0, m.children().css("transition", "all 800ms 200ms"), u.removeClass("overlay-active"), u.addClass("show"), "youtube" === option_hero_background_mode && setTimeout(function () {
                        u.find("div.controls").addClass("show")
                    }, 200), setTimeout(function () {
                        1 == prevent_class_removal && $(".hero .container-mid").removeClass("block-overflow")
                    }, 1300), setTimeout(function () {
                        $("#cycle").cycle("resume")
                    }, 1400), n.removeClass("open")
                }, 800))
            }

            function g() {
                "on" !== option_overlay_bullet_navigation || $(".hero").hasClass("error-404") || ($(".grcs_bullet_nav .nav_dots").removeClass("active"), $(".grcs_bullet_nav .nav_dots").eq(f).addClass("active"))
            }
            switch (isMobile.any() && "on" == option_overlay_merge_sections_on_mobile && (jQuery("body").addClass("merge-true"), v = 1, $(".social_icons li .go-down").parent().remove()), "on" !== option_overlay_bullet_navigation || $(".hero").hasClass("error-404") || function () {
                $("body").append('<div class="grcs_bullet_nav"></div>');
                for (var e = 0; e < v + 1; e++) $(".grcs_bullet_nav").append('<div class="nav_dots"></div>');
                g(), $(".grcs_bullet_nav .nav_dots").click(function () {
                    (i = $(".grcs_bullet_nav .nav_dots").index(this)) != f && (i < f ? (c = !0, p()) : (c = !0, b()))
                })
            }(), d.click(function () {
                b()
            }), l.click(function () {
                p()
            }), $("html").on("DOMMouseScroll mousewheel", function (e) {
                (e.originalEvent.wheelDelta || -1 * e.originalEvent.detail) / 120 < 0 && b()
            }), $("html").on("DOMMouseScroll mousewheel", function (e) {
                (e.originalEvent.wheelDelta || -1 * e.originalEvent.detail) / 120 > 0 && p()
            }), $(document).keydown(function (e) {
                switch (e.which) {
                    case 37:
                        break;
                    case 38:
                        p();
                        break;
                    case 39:
                        break;
                    case 40:
                        b();
                        break;
                    default:
                        return
                }
                e.preventDefault()
            }), "white" == option_overlay_skin && $("body").addClass("white"), option_overlay_animation) {
                case "fade":
                    n.addClass("fade-In");
                    break;
                case "slide":
                    n.addClass("slide-from-bottom");
                    break;
                default:
                    n.addClass("fade-In")
            }
            switch (option_overlay_content_animation) {
                case "fade":
                    r.addClass("fade-In");
                    break;
                case "slide":
                default:
                    r.addClass("slide-from-bottom")
            }
        }("#overlay", "section.overlay", "#hero .front-content", "#hero .front-content .container-mid"), $(".subscribe-form").submit(function () {
            var e = $(".subscribe-form").serialize();
            return $.ajax({
                type: "POST",
                url: "assets/php/subscribe.php",
                data: e,
                dataType: "json",
                success: function (e) {
                    $(".subscribe-form").removeClass("error").removeClass("error-final"), 0 === e.valid ? ($(".subscribe-form").addClass("error"), $(".subscribe-form input").attr("placeholder", e.message), $(".subscribe-form input").val(""), setTimeout(function () {
                        $(".subscribe-form").addClass("error-final")
                    }, 1500)) : ($(".subscribe-form input,.subscribe-form button").val("").prop("disabled", !0), $(".subscribe-form input").attr("placeholder", e.message), $(".subscribe-form").addClass("success"))
                }
            }), !1
        }), $("#contact-form").submit(function (e) {
            e.preventDefault();
            var o = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "assets/php/contact.php",
                data: o,
                dataType: "json",
                success: function (e) {
                    $("#contact-form.error input, #contact-form.error textarea").removeClass("active"), setTimeout(function () {
                        "" !== e.nameMessage && ($("#contact-form-name").addClass("active").attr("placeholder", e.nameMessage), $("#contact-form").addClass("error")), "" !== e.emailMessage && ($("#contact-form-email").addClass("active").val("").attr("placeholder", e.emailMessage), $("#contact-form").addClass("error")), "" !== e.messageMessage && ($("#contact-form-message").addClass("active").attr("placeholder", e.messageMessage), $("#contact-form").addClass("error"))
                    }, 50), "" === e.nameMessage && "" === e.emailMessage && "" === e.messageMessage && ($("#contact-form").removeClass("error").addClass("success"), $("#contact-form textarea, #contact-form input").attr("placeholder", ""), $("#contact-form textarea").attr("placeholder", e.succesMessage), $("#contact-form input, #contact-form button, #contact-form textarea").val("").prop("disabled", !0))
                }
            })
        })
    }), "on" == option_analytics_tracking) {
    var _gaq = _gaq || [];

    function loadtracking() {
        window._gaq.push(["_setAccount", option_analytics_tracking_id]), window._gaq.push(["_trackPageview"]),
            function () {
                var e = document.createElement("script");
                e.type = "text/javascript", e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var o = document.getElementsByTagName("script")[0];
                o.parentNode.insertBefore(e, o)
            }()
    }
    loadtracking()
}

$(document).ready(function () {
    "use strict";

    function t() {
        $(".bg-image").vegas({
            slides: option_hero_background_image_path,
            delay: 6e3,
            transitionDuration: 800,
            timer: !1
        })
    }

    function e() {
        $(".hero .background-content .bg-overlay").css("z-index", "2");
        var t, e, o, i = $(".hero .level-1").width(),
            n = $(".hero .level-1").height(),
            a = 0,
            s = 0,
            r = window.innerWidth / 2,
            h = window.innerHeight / 2;

        function c() {
            var e = $(".hero .level-1").width(),
                i = $(".hero .level-1").height();
            r = e / 2, h = i / 2, t.aspect = e / i, t.updateProjectionMatrix(), o.setSize(e, i)
        }

        function l(t) {
            a = t.clientX - r, s = t.clientY - h
        }

        function u(t) {
            t.touches.length > 1 && (t.preventDefault(), a = t.touches[0].pageX - r, s = t.touches[0].pageY - h)
        }

        function d(t) {
            1 === t.touches.length && (t.preventDefault(), a = t.touches[0].pageX - r, s = t.touches[0].pageY - h)
        }! function () {
            var a, s;
            a = document.createElement("div"), document.getElementById("canvas").appendChild(a), (t = new THREE.PerspectiveCamera(75, i / n, 1, 1e4)).position.z = option_hero_background_sphere_distance, e = new THREE.Scene, (o = new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio), o.setSize(i, n), a.appendChild(o.domElement), o.setClearColor(option_hero_background_sphere_background_color);
            for (var r = 2 * Math.PI, h = new THREE.SpriteCanvasMaterial({
                    color: option_hero_background_sphere_dot_color,
                    program: function (t) {
                        t.beginPath(), t.arc(0, 0, .5, 0, r, !0), t.fill()
                    }
                }), g = 0; g < 1e3; g++)(s = new THREE.Sprite(h)).position.x = 2 * Math.random() - 1, s.position.y = 2 * Math.random() - 1, s.position.z = 2 * Math.random() - 1, s.position.normalize(), s.position.multiplyScalar(10 * Math.random() + 450), s.scale.multiplyScalar(2), e.add(s);
            for (var g = 0; g < 300; g++) {
                var p = new THREE.Geometry,
                    _ = new THREE.Vector3(2 * Math.random() - 1, 2 * Math.random() - 1, 2 * Math.random() - 1);
                _.normalize(), _.multiplyScalar(450), p.vertices.push(_);
                var m = _.clone();
                m.multiplyScalar(.3 * Math.random() + 1), p.vertices.push(m);
                var f = new THREE.Line(p, new THREE.LineBasicMaterial({
                    color: option_hero_background_sphere_line_color,
                    opacity: Math.random()
                }));
                e.add(f)
            }
            document.addEventListener("mousemove", l, !1), document.addEventListener("touchstart", u, !1), document.addEventListener("touchmove", d, !1), window.addEventListener("resize", c, !1)
        }(),
        function i() {
            requestAnimationFrame(i);
            g && (t.position.x += .05 * (a - t.position.x), t.position.y += .05 * (200 - s - t.position.y), t.lookAt(e.position), e.rotation.y += option_hero_background_sphere_rotation_speed / 100, o.render(e, t))
        }();
        var g = !0;
        $(document).scroll(function () {
            g = !($(this).scrollTop() > $(window).height())
        })
    }

    function o() {
        $(".hero .background-content .bg-overlay").css("z-index", "2");
        var t, e, o, i, n, a, s = option_hero_background_waves_dotSpacing,
            r = option_hero_background_waves_dotAmountX,
            h = option_hero_background_waves_dotAmountY,
            c = $(".hero .level-1").width(),
            l = $(".hero .level-1").height(),
            u = 0,
            d = 0,
            g = 0,
            p = c / 2,
            _ = l / 2;

        function m() {
            var t = $(".hero .level-1").width(),
                o = $(".hero .level-1").height();
            p = t / 2, _ = o / 2, e.aspect = t / o, e.updateProjectionMatrix(), i.setSize(t, o)
        }

        function f(t) {
            d = t.clientX - p, g = t.clientY - _
        }

        function v(t) {
            t.touches.length > 1 && (t.preventDefault(), d = t.touches[0].pageX - p, g = t.touches[0].pageY - _)
        }

        function b(t) {
            1 === t.touches.length && (t.preventDefault(), d = t.touches[0].pageX - p, g = t.touches[0].pageY - _)
        }! function () {
            t = document.createElement("div"), document.getElementById("canvas").appendChild(t), (e = new THREE.PerspectiveCamera(75, c / l, 1, 1e4)).position.z = option_hero_background_waves_distance, o = new THREE.Scene, n = new Array;
            for (var u = 2 * Math.PI, d = new THREE.SpriteCanvasMaterial({
                    color: option_hero_background_waves_dot_color,
                    program: function (t) {
                        t.beginPath(), t.arc(0, 0, .5, 0, u, !0), t.fill()
                    }
                }), g = 0, p = 0; p < r; p++)
                for (var _ = 0; _ < h; _++)(a = n[g++] = new THREE.Sprite(d)).position.x = p * s - r * s / 2, a.position.z = _ * s - h * s / 2, o.add(a);
            (i = new THREE.CanvasRenderer).setPixelRatio(window.devicePixelRatio), i.setSize(c, l), t.appendChild(i.domElement), i.setClearColor(option_hero_background_waves_background_color), document.addEventListener("mousemove", f, !1), document.addEventListener("touchstart", v, !1), document.addEventListener("touchmove", b, !1), window.addEventListener("resize", m, !1)
        }(),
        function t() {
            requestAnimationFrame(t);
            ! function () {
                if (y) {
                    e.position.x += .05 * (d - e.position.x), e.position.y += .05 * (-g - e.position.y), e.lookAt(o.position);
                    for (var t = 0, s = 0; s < r; s++)
                        for (var c = 0; c < h; c++)(a = n[t++]).position.y = 50 * Math.sin(.3 * (s + u)) + 50 * Math.sin(.5 * (c + u)), a.scale.x = a.scale.y = 4 * (Math.sin(.3 * (s + u)) + 1) + 4 * (Math.sin(.5 * (c + u)) + 1);
                    i.render(o, e), u += .1
                }
            }()
        }();
        var y = !0;
        $(document).scroll(function () {
            y = !($(this).scrollTop() > $(window).height())
        })
    }

    function i() {
        $(".hero .bg-pattern").remove(), $(".hero .bg-overlay").remove();
        var t, e, o, i, n, a, s, r = setInterval(function () {
                $(".hero .level-1 #canvas").offset().top <= 0 && ($(".hero .level-1 #canvas").css({
                    WebkitTransition: "all .4s",
                    transition: "all .4s"
                }), $(".hero .level-1 #canvas").css("background", option_hero_background_abstract_bg_color), clearInterval(r))
            }, 50),
            h = {
                width: option_hero_background_width / 100,
                height: 1.8,
                depth: 60,
                segments: 9,
                slices: 8,
                xRange: option_hero_background_width_expansion,
                yRange: .1,
                zRange: 1,
                ambient: "#666666",
                diffuse: "#fff",
                speed: option_hero_background_move_speed / 1e4
            },
            c = {
                count: 2,
                xyScalar: 1,
                zOffset: 100,
                ambient: "#fff",
                diffuse: "#b3b3b3",
                speed: 2e-4,
                gravity: 500,
                dampening: .95,
                minLimit: 10,
                maxLimit: null,
                minDistance: 20,
                maxDistance: 400,
                autopilot: !0,
                draw: !1,
                bounds: FSS.Vector3.create(),
                step: FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1))
            },
            l = {
                renderer: "canvas"
            },
            u = Date.now(),
            d = FSS.Vector3.create(),
            g = FSS.Vector3.create(),
            p = document.getElementById("canvas"),
            _ = document.getElementById("canvas");

        function m() {
            var t, s;
            for (o.remove(i), e.clear(), n = new FSS.Plane(h.width * e.width, h.height * e.height, h.segments, h.slices), a = new FSS.Material(h.ambient, h.diffuse), i = new FSS.Mesh(n, a), o.add(i), t = n.vertices.length - 1; t >= 0; t--)(s = n.vertices[t]).anchor = FSS.Vector3.clone(s.position), s.step = FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)), s.time = Math.randomInRange(0, Math.PIM2)
        }

        function f(t, o) {
            e.setSize(t, o), FSS.Vector3.set(d, e.halfWidth, e.halfHeight), m()
        }

        function v() {
            t = Date.now() - u,
                function () {
                    var e, i, a, s, r, l, u, p = h.depth / 2;
                    FSS.Vector3.copy(c.bounds, d), FSS.Vector3.multiplyScalar(c.bounds, c.xyScalar), FSS.Vector3.setZ(g, c.zOffset), c.autopilot && (e = Math.sin(c.step[0] * t * c.speed), i = Math.cos(c.step[1] * t * c.speed), FSS.Vector3.set(g, c.bounds[0] * e, c.bounds[1] * i, c.zOffset));
                    for (s = o.lights.length - 1; s >= 0; s--) {
                        r = o.lights[s], FSS.Vector3.setZ(r.position, c.zOffset);
                        var _ = Math.clamp(FSS.Vector3.distanceSquared(r.position, g), c.minDistance, c.maxDistance),
                            m = c.gravity * r.mass / _;
                        FSS.Vector3.subtractVectors(r.force, g, r.position), FSS.Vector3.normalise(r.force), FSS.Vector3.multiplyScalar(r.force, m), FSS.Vector3.set(r.acceleration), FSS.Vector3.add(r.acceleration, r.force), FSS.Vector3.add(r.velocity, r.acceleration), FSS.Vector3.multiplyScalar(r.velocity, c.dampening), FSS.Vector3.limit(r.velocity, c.minLimit, c.maxLimit), FSS.Vector3.add(r.position, r.velocity)
                    }
                    for (l = n.vertices.length - 1; l >= 0; l--) u = n.vertices[l], e = Math.sin(u.time + u.step[0] * t * h.speed), i = Math.cos(u.time + u.step[1] * t * h.speed), a = Math.sin(u.time + u.step[2] * t * h.speed), FSS.Vector3.set(u.position, h.xRange * n.segmentWidth * e, h.yRange * n.sliceHeight * i, h.zRange * p * a - p), FSS.Vector3.add(u.position, u.anchor);
                    n.dirty = !0
                }(), b(), requestAnimationFrame(v)
        }

        function b() {
            var t, i, n, a;
            if (e.render(o), c.draw)
                for (t = o.lights.length - 1; t >= 0; t--) i = (a = o.lights[t]).position[0], n = a.position[1], e.context.lineWidth = .5, e.context.beginPath(), e.context.arc(i, n, 10, 0, Math.PIM2), e.context.strokeStyle = a.ambientHex, e.context.stroke(), e.context.beginPath(), e.context.arc(i, n, 4, 0, Math.PIM2), e.context.fillStyle = a.diffuseHex, e.context.fill()
        }

        function y(t) {
            f(p.offsetWidth, p.offsetHeight), b()
        }
        if (s = new FSS.CanvasRenderer, l.renderer, e && _.removeChild(e.element), (e = s).setSize(p.offsetWidth, p.offsetHeight), _.appendChild(e.element), o = new FSS.Scene, m(), function () {
                var t, i;
                for (t = o.lights.length - 1; t >= 0; t--) i = o.lights[t], o.remove(i);
                for (e.clear(), t = 0; t < c.count; t++)(i = new FSS.Light(c.ambient, c.diffuse)).ambientHex = i.ambient.format(), i.diffuseHex = i.diffuse.format(), o.add(i), i.mass = Math.randomInRange(.5, 1), i.velocity = FSS.Vector3.create(), i.acceleration = FSS.Vector3.create(), i.force = FSS.Vector3.create(), i.ring = document.createElementNS(FSS.SVGNS, "circle"), i.ring.setAttributeNS(null, "stroke", i.ambientHex), i.ring.setAttributeNS(null, "stroke-width", "0.5"), i.ring.setAttributeNS(null, "fill", "none"), i.ring.setAttributeNS(null, "r", "10"), i.core = document.createElementNS(FSS.SVGNS, "circle"), i.core.setAttributeNS(null, "fill", i.diffuseHex), i.core.setAttributeNS(null, "r", "4")
            }(), window.addEventListener("resize", y), f(p.offsetWidth, p.offsetHeight), v(), canvas.getContext) {
            var x = canvas.getContext("2d"),
                w = !0;
            canvas.height = screen.height - 60, canvas.width = screen.width + 20, initialize(), initialize();
            setInterval(function () {
                for (var t = 1; t <= 1e3; t++) x.beginPath(), w ? (x.moveTo(0, randomize(canvas.height + 10)), w = !1) : (x.moveTo(randomize(canvas.width + 10), 0), w = !0), x.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50)), x.lineTo(randomize(canvas.width + 50), randomize(canvas.height + 50)), x.fillStyle = getRndColor(), x.fill()
            }, 5e3)
        }
    }

    function n() {
        "on" === option_hero_gravity_effect && function () {
            function t(t, e) {
                var o = $(".hero .level-1").width(),
                    i = $(".hero .level-1").height(),
                    n = Math.round(i * o / 14e3),
                    a = $(t),
                    s = t.getContext("2d"),
                    r = {
                        star: {
                            color: "rgba(255, 255, 255, .65)",
                            width: 1
                        },
                        line: {
                            color: "rgba(255, 255, 255, .65)",
                            width: .2
                        },
                        position: {
                            x: 0,
                            y: 0
                        },
                        width: o,
                        height: i,
                        velocity: .2,
                        length: n,
                        distance: 120,
                        radius: 200,
                        stars: []
                    },
                    h = $.extend(!0, {}, r, e);

                function c() {
                    this.x = Math.random() * t.width, this.y = Math.random() * t.height, this.vx = h.velocity - .5 * Math.random(), this.vy = h.velocity - .5 * Math.random(), this.radius = Math.random() * h.star.width
                }
                c.prototype = {
                    create: function () {
                        s.beginPath(), s.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, !1), s.fill()
                    },
                    animate: function () {
                        var e;
                        for (e = 0; e < h.length; e++) {
                            var o = h.stars[e];
                            o.y < 0 || o.y > t.height ? (o.vx = o.vx, o.vy = -o.vy) : (o.x < 0 || o.x > t.width) && (o.vx = -o.vx, o.vy = o.vy), o.x += o.vx, o.y += o.vy
                        }
                    },
                    line: function () {
                        var t, e, o, i, n = h.length;
                        for (o = 0; o < n; o++)
                            for (i = 0; i < n; i++) t = h.stars[o], e = h.stars[i], t.x - e.x < h.distance && t.y - e.y < h.distance && t.x - e.x > -h.distance && t.y - e.y > -h.distance && t.x - h.position.x < h.radius && t.y - h.position.y < h.radius && t.x - h.position.x > -h.radius && t.y - h.position.y > -h.radius && (s.beginPath(), s.moveTo(t.x, t.y), s.lineTo(e.x, e.y), s.stroke(), s.closePath())
                    }
                }, this.createStars = function () {
                    var e, o, i = h.length;
                    for (s.clearRect(0, 0, t.width, t.height), o = 0; o < i; o++) h.stars.push(new c), (e = h.stars[o]).create();
                    e.line(), e.animate(), h.stars.splice(i, i)
                }, this.setCanvas = function () {
                    t.width = h.width, t.height = h.height, s.fillStyle = h.star.color, s.strokeStyle = h.line.color, s.lineWidth = h.line.width, e && e.hasOwnProperty("position") || (h.position = {
                        x: .5 * t.width,
                        y: .5 * t.height
                    })
                }, this.loop = function (t) {
                    t(), window.requestAnimationFrame(function () {
                        this.loop(t)
                    }.bind(this))
                }, this.bind = function () {
                    $(window).on("mousemove", function (t) {
                        h.position.x = t.pageX - a.offset().left, h.position.y = t.pageY - a.offset().top
                    })
                }, this.init = function () {
                    this.setCanvas(), this.loop(this.createStars), this.bind()
                }
            }
            $.fn.constellation = function (e) {
                return this.each(function () {
                    var o = new t(this, e);
                    o.init()
                })
            }, $("#canvas canvas").constellation({});
            var e = (o = {}, function (t, e, i) {
                i || (i = "Don't call this twice without a uniqueId"), o[i] && clearTimeout(o[i]), o[i] = setTimeout(t, e)
            });
            var o;
            $(window).resize(function () {
                e(function () {
                    $("#canvas canvas").constellation({})
                }, 500, "some unique string")
            })
        }()
    }

    function a(t, e) {
        var o = document.getElementsByTagName("head")[0],
            i = document.createElement("script");
        i.type = "text/javascript", i.src = t, i.onreadystatechange = e, i.onload = e, o.appendChild(i)
    }
    switch (option_hero_background_mode) {
        case "image":
            t(), n();
            break;
        case "slider":
            $(".bg-image").vegas({
                slides: option_hero_background_slider_path,
                transition: option_hero_background_slider_transition,
                delay: option_hero_background_slider_delay,
                transitionDuration: option_hero_background_slider_transitionDuration,
                firstTransitionDuration: 1,
                timer: !1,
                walk: function (t, e) {
                    $("#cycle").cycle("next")
                }
            }), n();
            break;
        case "kenburns":
            $(".bg-image").vegas({
                slides: option_hero_background_kenburns_path,
                transition: option_hero_background_kenburns_transition,
                delay: option_hero_background_kenburns_delay,
                transitionDuration: option_hero_background_kenburns_transitionDuration,
                firstTransitionDuration: 1,
                timer: !1,
                animation: "kenburns",
                walk: function (t, e) {
                    $("#cycle").cycle("next")
                }
            }), n();
            break;
        case "youtube":
            jQuery.browser.mobile ? t() : function () {
                "on" === option_hero_background_youtube_controls && $(".hero .front-content").append('<div class="controls"><i class="volume-button fa fa-volume-up"></i><i class="pause-button ti-control-pause"></i></div>'), "on" === option_hero_background_youtube_mute && (option_hero_background_youtube_mute = !0, $(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off")), "off" === option_hero_background_youtube_mute && (option_hero_background_youtube_mute = !1), "off" === option_hero_background_youtube_loop ? option_hero_background_youtube_loop = !1 : option_hero_background_youtube_loop = !0, $(".hero .bg-video").append('<div id="bg-youtube" class="player showOn-video-bg"></div>'), $(".hero #bg-youtube").attr("data-property", '{videoURL:option_hero_background_youtube_url,containment:".bg-video",autoPlay:true,mute:option_hero_background_youtube_mute,startAt: option_hero_background_youtube_startPoint,stopAt: option_hero_background_youtube_endPoint,loop: option_hero_background_youtube_loop,opacity:1,stopMovieOnBlur:false,showControls:false}'), $(".player").mb_YTPlayer(), $(".hero .controls").addClass("show"), $(".volume-button").click(function () {
                    $("#bg-youtube").hasClass("isMuted") ? ($("#bg-youtube").YTPUnmute(), $(".volume-button").removeClass("fa-volume-off").addClass("fa-volume-up")) : ($("#bg-youtube").YTPMute(), $(".volume-button").removeClass("fa-volume-up").addClass("fa-volume-off"))
                });
                var t = !0;
                $("#bg-youtube").on("YTPPause", function () {
                    t = !1
                }), $("#bg-youtube").on("YTPPlay", function () {
                    t = !0
                }), $(".pause-button").click(function () {
                    1 == t ? ($("#bg-youtube").YTPPause(), $(".pause-button").removeClass("ti-control-pause").addClass("ti-control-play")) : ($("#bg-youtube").YTPPlay(), $(".pause-button").removeClass("ti-control-play").addClass("ti-control-pause"))
                })
            }(), n();
            break;
        case "color":
            $(".hero .level-2").css("background", option_hero_background_color_custom_color), $(".hero .level-2").children().remove(), $(".hero .bg-color").css("opacity", "1"), $(".hero .bg-pattern").remove(), $(".hero .bg-overlay").remove(), n();
            break;
        case "gradient":
            r = option_hero_background_gradient_colorArray, h = 0, c = $(".bg-color"), l = [0, 1, 2, 3], u = option_hero_background_gradient_stransitionSpeed / 1e4, setInterval(function () {
                var t = r[l[0]],
                    e = r[l[1]],
                    o = r[l[2]],
                    i = r[l[3]],
                    n = 1 - h,
                    a = "rgb(" + Math.round(n * t[0] + h * e[0]) + "," + Math.round(n * t[1] + h * e[1]) + "," + Math.round(n * t[2] + h * e[2]) + ")",
                    s = "rgb(" + Math.round(n * o[0] + h * i[0]) + "," + Math.round(n * o[1] + h * i[1]) + "," + Math.round(n * o[2] + h * i[2]) + ")";
                c.css({
                    background: "-webkit-gradient(linear, left top, right top, from(" + a + "), to(" + s + "))"
                }).css({
                    background: "-moz-linear-gradient(left, " + a + " 0%, " + s + " 100%)"
                }), (h += u) >= 1 && (h %= 1, l[0] = l[1], l[2] = l[3], l[1] = (l[1] + Math.floor(1 + Math.random() * (r.length - 1))) % r.length, l[3] = (l[3] + Math.floor(1 + Math.random() * (r.length - 1))) % r.length)
            }, 1), $(".hero .bg-color").css("opacity", "1"), $(".hero .bg-pattern").remove(), $(".hero .bg-overlay").remove(), n();
            break;
        case "sphere":
            a("assets/js/plugins/three.min.js", function () {
                e()
            });
            break;
        case "waves":
            a("assets/js/plugins/three.min.js", function () {
                o()
            });
            break;
        case "mesh":
            ! function () {
                var t, e, o, i, n, a, s, r, h, c, l, u, d, g, p;

                function _(t) {
                    this.x = t.x, this.y = t.y, this.xBase = this.x, this.yBase = this.y, this.offset = m(0, 1e3), this.duration = m(20, 60), this.range = m(5, 5), this.dir = m(0, 1) > .5 ? 1 : -1, this.rad = m(2, 4)
                }

                function m(t, e) {
                    return Math.random() * (e - t) + t
                }

                function f() {
                    o = $(".hero .level-1").width(), i = $(".hero .level-1").height(), t.width = o, t.height = i, c.x = o / 2, c.y = i / 2, l = !1, u = 0, d = 0, g.length = 0, p = 0,
                        function () {
                            for (var t = -n / 2; t < o + n; t += n) {
                                u++;
                                for (var e = -n / 2; e < i + n; e += n) t == -n / 2 && d++, g.push(new _({
                                    x: ~~(t + m(-a, a)),
                                    y: ~~(e + m(-a, a))
                                }))
                            }
                        }(), e.strokeStyle = option_hero_background_mesh_color, e.lineWidth = 2
                }

                function v() {
                    requestAnimationFrame(v), l || (c.x = o / 2 + 90 * Math.cos(p / 40), c.y = i / 2 + 90 * Math.sin(p / 40)), g.forEach(function (t) {
                            t.step()
                        }), p++,
                        function () {
                            e.clearRect(0, 0, o, i), e.beginPath();
                            for (var t = 0; t < u; t++)
                                for (var n = 0; n < d; n++) s = g[t * d + n], r = t === u - 1 ? null : g[(t + 1) * d + n], h = n === d - 1 ? null : g[t * d + n + 1], r && (e.moveTo(s.x, s.y), e.lineTo(r.x, r.y)), h && (e.moveTo(s.x, s.y), e.lineTo(h.x, h.y));
                            e.stroke(), e.fillStyle = "#000", g.forEach(function (t) {
                                e.save(), e.beginPath(), e.translate(t.x, t.y), e.rotate(Math.PI / 4), e.rect(0, 0, 0, 0), e.fill(), e.stroke(), e.restore()
                            });
                            var a = e.createRadialGradient(c.x, c.y, 0, c.x, c.y, option_hero_background_mesh_spotlight_size);
                            a.addColorStop(0, "hsla(0, 0%, 0%, 0)"), a.addColorStop(1, "hsla(0, 0%, 0%, 0.93)"), e.fillStyle = a, e.fillRect(0, 0, o, i)
                        }()
                }
                _.prototype.step = function () {
                    this.x = this.xBase + this.dir * Math.sin((p + this.offset) / this.duration) * this.range, this.y = this.yBase + this.dir * Math.cos((p + this.offset) / this.duration) * this.range;
                    var t, e, o, i, n = (e = c, o = (t = this).x - e.x, i = t.y - e.y, Math.atan2(i, o));
                    this.x = this.x + 100 * Math.cos(n), this.y = this.y + 100 * Math.sin(n)
                }, window.addEventListener("resize", f), window.addEventListener("mousemove", function (t) {
                    l = !0, c.x = t.pageX, c.y = t.pageY
                }), t = document.createElement("canvas"), e = t.getContext("2d"), c = {
                    x: 0,
                    y: 0
                }, g = [], a = .25 * (n = 180), document.getElementById("canvas").appendChild(t), f(), v(), $(".hero .background-content #canvas canvas").css("background-color", option_hero_background_mesh_background_color)
            }();
            break;
        case "space":
            ! function (t, e, o, i) {
                var n, a, s, r = function (e, o) {
                        this.el = e, this.$el = t(e), this.options = o, s = this
                    },
                    h = !1,
                    c = !1;
                ! function () {
                    for (var t = 0, o = ["ms", "moz", "webkit", "o"], i = 0; i < o.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[o[i] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[o[i] + "CancelAnimationFrame"] || e[o[i] + "CancelRequestAnimationFrame"];
                    e.requestAnimationFrame || (e.requestAnimationFrame = function (o, i) {
                        var n = (new Date).getTime(),
                            a = Math.max(0, 16 - (n - t)),
                            s = e.setTimeout(function () {
                                o(n + a)
                            }, a);
                        return t = n + a, s
                    }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function (t) {
                        clearTimeout(t)
                    })
                }(), r.prototype = {
                    defaults: {
                        starColor: option_hero_background_star_star_color,
                        bgColor: option_hero_background_star_background_color,
                        mouseMove: !0,
                        mouseColor: "rgba(0,0,0,0.2)",
                        mouseSpeed: 15,
                        speed: option_hero_background_space_star_speed,
                        quantity: option_hero_background_space_star_amount,
                        ratio: option_hero_background_space_star_amount / 2,
                        divclass: "starfield"
                    },
                    resizer: function () {
                        var t = this.star,
                            e = this.context.canvas.width,
                            o = this.context.canvas.height;
                        this.w = this.$el.width(), this.h = this.$el.height(), this.x = Math.round(this.w / 2), this.y = Math.round(this.h / 2);
                        var i = this.w / e,
                            n = this.h / o;
                        this.context.canvas.width = this.w, this.context.canvas.height = this.h;
                        for (var a = 0; a < this.n; a++) this.star[a][0] = t[a][0] * i, this.star[a][1] = t[a][1] * n, this.star[a][3] = this.x + this.star[a][0] / this.star[a][2] * this.star_ratio, this.star[a][4] = this.y + this.star[a][1] / this.star[a][2] * this.star_ratio;
                        s.context.fillStyle = s.settings.bgColor, this.context.strokeStyle = this.settings.starColor
                    },
                    init: function () {
                        this.settings = t.extend({}, this.defaults, this.options);
                        var i = o.location.href;
                        this.n = parseInt(-1 != i.indexOf("n=") ? i.substring(i.indexOf("n=") + 2, -1 != i.substring(i.indexOf("n=") + 2, i.length).indexOf("&") ? i.indexOf("n=") + 2 + i.substring(i.indexOf("n=") + 2, i.length).indexOf("&") : i.length) : this.settings.quantity), this.flag = !0, this.test = !0, this.w = 0, this.h = 0, this.x = 0, this.y = 0, this.z = 0, this.star_color_ratio = 0, this.star_x_save = 0, this.star_y_save = 0, this.star_ratio = this.settings.ratio, this.star_speed = this.settings.speed, this.star_speed_save = 0, this.star = new Array(this.n), this.color = this.settings.starColor, this.opacity = .1, this.cursor_x = 0, this.cursor_y = 0, this.mouse_x = 0, this.mouse_y = 0, this.canvas_x = 0, this.canvas_y = 0, this.canvas_w = 0, this.canvas_h = 0, this.fps = this.settings.fps, this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|IEMobile)/), this.orientationSupport = void 0 !== e.DeviceOrientationEvent, this.portrait = null, s.w = s.$el.width(), s.h = s.$el.height(), s.initW = s.w, s.initH = s.h, s.portrait = s.w < s.h, s.wrapper = t("<canvas />").addClass(s.settings.divclass), s.wrapper.appendTo(s.el), s.starz = t("canvas", s.el), s.starz[0].getContext && (s.context = s.starz[0].getContext("2d"), c = !0), s.context.canvas.width = s.w, s.context.canvas.height = s.h,
                            function () {
                                if (c) {
                                    s.x = Math.round(s.w / 2), s.y = Math.round(s.h / 2), s.z = (s.w + s.h) / 2, s.star_color_ratio = 1 / s.z, s.cursor_x = s.x, s.cursor_y = s.y;
                                    for (var t = 0; t < s.n; t++) s.star[t] = new Array(5), s.star[t][0] = Math.random() * s.w * 2 - 2 * s.x, s.star[t][1] = Math.random() * s.h * 2 - 2 * s.y, s.star[t][2] = Math.round(Math.random() * s.z), s.star[t][3] = 0, s.star[t][4] = 0;
                                    s.context.fillStyle = s.settings.bgColor, s.context.strokeStyle = s.settings.starColor
                                }
                            }(), h = !0
                    },
                    anim: function () {
                        this.mouse_x = this.cursor_x - this.x, this.mouse_y = this.cursor_y - this.y, this.context.fillRect(0, 0, this.w, this.h);
                        for (var t = 0; t < this.n; t++) this.test = !0, this.star_x_save = this.star[t][3], this.star_y_save = this.star[t][4], this.star[t][0] += this.mouse_x >> 4, this.star[t][0] > this.x << 1 && (this.star[t][0] -= this.w << 1, this.test = !1), this.star[t][0] < -this.x << 1 && (this.star[t][0] += this.w << 1, this.test = !1), this.star[t][1] += this.mouse_y >> 4, this.star[t][1] > this.y << 1 && (this.star[t][1] -= this.h << 1, this.test = !1), this.star[t][1] < -this.y << 1 && (this.star[t][1] += this.h << 1, this.test = !1), this.star[t][2] -= this.star_speed, this.star[t][2] > this.z && (this.star[t][2] -= this.z, this.test = !1), this.star[t][2] < 0 && (this.star[t][2] += this.z, this.test = !1), this.star[t][3] = this.x + this.star[t][0] / this.star[t][2] * this.star_ratio, this.star[t][4] = this.y + this.star[t][1] / this.star[t][2] * this.star_ratio, this.star_x_save > 0 && this.star_x_save < this.w && this.star_y_save > 0 && this.star_y_save < this.h && this.test && (this.context.lineWidth = 2 * (1 - this.star_color_ratio * this.star[t][2]), this.context.beginPath(), this.context.moveTo(this.star_x_save, this.star_y_save), this.context.lineTo(this.star[t][3], this.star[t][4]), this.context.stroke(), this.context.closePath())
                    },
                    loop: function () {
                        this.anim(), a = e.requestAnimationFrame(function () {
                            s.loop()
                        })
                    },
                    move: function () {
                        var t = o.documentElement;
                        this.orientationSupport && !this.desktop ? e.addEventListener("deviceorientation", function (t) {
                            if (null !== t.beta && null !== t.gamma) {
                                var e = t.gamma,
                                    o = t.beta;
                                s.portrait || (e = -1 * t.beta, o = t.gamma), s.cursor_x = s.w / 2 + 5 * e, s.cursor_y = s.h / 2 + 5 * o
                            }
                        }, !1) : e.addEventListener("mousemove", function (e) {
                            s.cursor_x = e.pageX || e.clientX + t.scrollLeft - t.clientLeft, s.cursor_y = e.pageY || e.clientY + t.scrollTop - t.clientTop
                        }, !1)
                    },
                    stop: function () {
                        e.cancelAnimationFrame(a), n = !1
                    },
                    start: function () {
                        return h || (h = !0, this.init()), n || (n = !0, this.loop()), e.addEventListener("resize", function () {
                            s.resizer()
                        }, !1), e.addEventListener("orientationchange", function () {
                            s.resizer()
                        }, !1), this.settings.mouseMove && this.move(), this
                    }
                }, r.defaults = r.prototype.defaults, t.fn.starfield = function (t) {
                    return this.each(function () {
                        new r(this, t).start()
                    })
                }, e.Starfield = r
            }(jQuery, window, document), $("#canvas").starfield();
            break;
        case "abstract":
            a("assets/js/plugins/fss.min.js", function () {
                i()
            });
            break;
        case "glitch":
            s = "background-image: url('" + option_hero_background_glitch_image + "')", $(".hero .level-2 .bg-image").append('<div class="glitch-img" style="' + s + '"></div>'), $(".glitch-img").mgGlitch({
                destroy: !1,
                glitch: !0,
                scale: !0,
                blend: !0,
                blendModeType: "hue",
                glitch1TimeMin: 600,
                glitch1TimeMax: 900,
                glitch2TimeMin: 10,
                glitch2TimeMax: 115,
                zIndexStart: 8
            }), n();
            break;
        case "custom":
            customBackground(), n();
            break;
        default:
            alert("Error! No background is set or something went wrong"), console.log("Error! No background is set or something went wrong")
    }
    var s, r, h, c, l, u;
    if ("on" == option_hero_parallax_hover_effect) {
        var d = $(".hero").parallax({
            scalarX: 24,
            scalarY: 15,
            frictionX: .1,
            frictionY: .1
        });
        $(".hero").hover(function () {
            d.parallax("enable")
        }, function () {
            d.parallax("disable")
        })
    }
    var g = 800,
        p = 6e3;
    "slider" === option_hero_background_mode && (g = option_hero_background_slider_transitionDuration, p = option_hero_background_slider_delay), "kenburns" === option_hero_background_mode && (g = option_hero_background_kenburns_transitionDuration, p = option_hero_background_kenburns_delay), $("#cycle").cycle({
        fx: "scrollVert",
        timeout: p,
        delay: 0,
        autoHeight: "container",
        speed: g,
        slides: ".slide",
        log: !1
    })
});