//====================================================
//
// EVENTS PAGE
// events.js
//
//====================================================

//=========================
// GSAP
//=========================

gsap.registerPlugin(ScrollTrigger);

//=========================
// HERO ANIMATION
//=========================

const heroTimeline = gsap.timeline();

heroTimeline

.from(".hero-tag",{

    y:30,

    opacity:0,

    duration:.8

})

.from(".events-hero h1",{

    y:80,

    opacity:0,

    duration:1

},"-=.3")

.from(".events-hero p",{

    y:40,

    opacity:0,

    duration:.8

},"-=.5");

//=========================
// EVENT CARDS
//=========================

gsap.utils.toArray(".event-card-large").forEach(card=>{

    gsap.from(card,{

        y:120,

        opacity:0,

        duration:1.2,

        ease:"power3.out",

        scrollTrigger:{

            trigger:card,

            start:"top 80%"

        }

    });

});

//=========================
// HOVER TILT
//=========================

document.querySelectorAll(".event-card-large").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-.5)*10;

        const rotateX=((y/rect.height)-.5)*-10;

        gsap.to(card,{

            rotationY:rotateY,

            rotationX:rotateX,

            transformPerspective:1000,

            duration:.4,

            ease:"power2.out"

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card,{

            rotationX:0,

            rotationY:0,

            duration:.6,

            ease:"power3.out"

        });

    });

});

//=========================
// IMAGE PARALLAX
//=========================

document.querySelectorAll(".event-image").forEach(image=>{

    image.addEventListener("mousemove",(e)=>{

        const img=image.querySelector("img");

        const rect=image.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width-.5)*20;

        const y=((e.clientY-rect.top)/rect.height-.5)*20;

        gsap.to(img,{

            x,

            y,

            scale:1.08,

            duration:.5

        });

    });

    image.addEventListener("mouseleave",()=>{

        gsap.to(image.querySelector("img"),{

            x:0,

            y:0,

            scale:1,

            duration:.6

        });

    });

});

//=========================
// CTA REVEAL
//=========================

gsap.from(".cta-card",{

    y:100,

    opacity:0,

    duration:1,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".events-cta",

        start:"top 80%"

    }

});

//=========================
// FLOATING HERO

//=========================

gsap.to(".events-hero::before",{

    duration:8,

    repeat:-1,

    yoyo:true

});

//=========================
// END
//=========================