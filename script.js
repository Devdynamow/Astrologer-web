function scroll() {
    
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
scroll();
function cursor() {
    var main = document.querySelector("#main")
    main.addEventListener("mousemove", function (details) {
        gsap.to("#cursor", {
            x: details.x - "800",
            y: details.y - "25"
        })
    })
}
cursor()




var tl = gsap.timeline();

// Loader Animation
setTimeout(function() {
    tl.to("#loader", {
        top: "-100%",
        onComplete: page1 // Call the page1 function after the loader animation completes
    });
}, 4600);

function page1() {
    var h1 = document.querySelector("#page1 h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");

    var clutter = "";
    splittedText.forEach(function(elem) {
        clutter += `<span>${elem}</span>`;
    });
    h1.innerHTML = clutter;

    tl.from("#page1 h1 span", {
        y: 100,
        stagger: 0.2,
        opacity: 0,
    });

    // Add animations for "second" and "third" after page1 animation
    tl.from("#second", {
        y: 30,
        duration: 0.5,
        opacity: 0,
    })
    .from("#third", {
        y: 80,
        duration: 0.5,
        opacity: 0,
    });
}

// Call the page1 function immediately to start the sequence
page1();



    gsap.from("#imagespage img", {
        // rotate:"360",
        x: 500,
        duration: 2,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#imagespage ",
            scroller: "#main",
            start: "top 15%",
            end: "top -2%",
            scrub: 4,
        }
    })
    gsap.from("#imagespage h1", {
        // rotate:"360",
        y: 300,
        duration: 2,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#imagespage ",
            scroller: "#main",
            start: "top 30%",
            end: "top -2%",
            scrub: 4,
        }
    })
   








var pageimages = document.querySelectorAll("#page2 .page2images ");
pageimages.forEach(function (datan) {


    gsap.from(datan, {
        // rotate:"360",
        y: 300,
        duration: 2,
        opacity: 0,
        scale: 0,
        stagger:0.2,
        scrollTrigger: {
            trigger: "#page2 ",
            scroller: "#main",
            start: "top 80%",
            end: "top -2%",
            scrub: 4,
        }
    })
    datan.style.display = "inline-block"


})


gsap.from("    #badeguruji #imagecon", {
    // rotate:"360",
    x: 500,
    duration: 2,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: "#badeguruji ",
        scroller: "#main",
        start: "top 10%",
        end: "top 0",
    }
})




function aboutpage() {
    var abouth2 = document.querySelector("#about-page h2")
    var aboutText = abouth2.textContent;
    var sptText = aboutText.split("")
    var clut = "";
    sptText.forEach(function (element) {
        clut += `<span>${element}</span>`

    })
    abouth2.innerHTML = clut;
    gsap.to("#about-page h2 span", {
        color: "black",
        stagger: 0.1,
        opacity: 1,
        scrollTrigger: {
            trigger: "#about-page",
            scroller: "#main",
            scrub: 4,
            pin: true,
            start: "top 0",
            end: "top -100%",
        }
    })
}
aboutpage()
function swiperjs() {
    var about = new Swiper("#our-service .mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });
}
swiperjs()

var childh1 = document.querySelector("#experience .childs h1");
var grow = 0;
var int = setInterval(function () {
    gsap.to(childh1, {
        scrollTrigger: {
            trigger: "#experience",
            scroller: "#main",
            start: "top 0%",
            end: "top -100%",
            // markers: true,
            once: true,
            onEnter: function () {
                // Code to execute when the trigger enters the viewport
                updateContent();
            }
        }
    });

    function updateContent() {
        if (grow <= 29) {
            grow++;
            childh1.innerHTML = grow + "+";
        }
    }



}, 400)






var twok = document.querySelector("#experience .childs #twok");
var plus = 0;
var int = setInterval(function () {
    gsap.to(twok, {
        scrollTrigger: {
            trigger: "#experience",
            scroller: "#main",
            start: "top 0%",
            end: "top -100%",
            // markers: true,
            once: true,
            onEnter: function () {
                // Code to execute when the trigger enters the viewport
                update();
            }
        }
    });

    function update() {
        if (plus <= 4) {
            plus++;
            twok.innerHTML = plus + "M+";
        }
    }



}, 1000)




var ten = document.querySelector("#experience .childs #ten");
var extra = 0;
var int = setInterval(function () {
    gsap.to(ten, {
        scrollTrigger: {
            trigger: "#experience",
            scroller: "#main",
            start: "top 0%",
            end: "top -100%",
            // markers: true,
            once: true,
            onEnter: function () {
                // Code to execute when the trigger enters the viewport
                updateC();
            }
        }
    });

    function updateC() {
        
        if (extra <= 9) {
            extra++;
            ten.innerHTML = extra + "+";
        }
    }



}, 800)


var swip = new Swiper("#videos .mySwiper", {
    effect: "cards",
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

var swiper = new Swiper("#reviews .mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    rewind:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
delay:1500,
disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

var menu = document.querySelector("#nav-part1 i")
flag = 0
menu.addEventListener("click", function () {
    var menupage = document.querySelector("#menupage")
    if (flag = 1) {
        menupage.style.transform = "translateY(0)"
        flag = 0
    }






})
var close = document.querySelector("#menupage i")
close.addEventListener("click", function () {

    menupage.style.transform = "translateY(-100%)"



})









