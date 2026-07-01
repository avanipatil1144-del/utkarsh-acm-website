//====================================================
//
// UTKARSH ACM DYPIU
// Premium Edition
//
// script.js
// PART 1
//
//====================================================

//=========================
// GSAP
//=========================

gsap.registerPlugin(ScrollTrigger);

//=========================
// LENIS
//=========================



//=========================
// LOADER
//=========================

const loaderTimeline = gsap.timeline();

loaderTimeline

.from(".loader-logo",{

    scale:.6,

    opacity:0,

    duration:1

})

.to(".loader-ring",{

    rotate:360,

    duration:2,

    ease:"none"

},0)

.from(".loader-text span",{

    y:30,

    opacity:0,

    duration:.8

},"-=1.3")

.from(".loader-text p",{

    opacity:0,

    y:20,

    duration:.6

},"-=.5")

.to("#loader",{

    opacity:0,

    duration:.8,

    delay:.5

})

.set("#loader",{

    display:"none"

});

//=========================
// HEADER
//=========================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});

//=========================
// CURSOR LIGHT
//=========================

const glow=document.querySelector(".cursor-glow");

window.addEventListener("mousemove",(e)=>{

    gsap.to(glow,{

        x:e.clientX,

        y:e.clientY,

        duration:.35,

        ease:"power3.out"

    });

});

//=========================
// HERO INTRO
//=========================

const hero=gsap.timeline({

    delay:2

});

hero

.from(".hero-tag",{

    opacity:0,

    y:30,

    duration:.8

})

.from(".hero-left h1",{

    opacity:0,

    y:80,

    duration:1

},"-=.3")

.from(".hero-left p",{

    opacity:0,

    y:50,

    duration:.8

},"-=.6")

.from(".primary-btn",{

    opacity:0,

    y:40,

    duration:.8

},"-=.5")

.from(".hero-logo",{

    scale:.7,

    opacity:0,

    rotate:10,

    duration:1.3

},"-=1");

//=========================
// FLOATING LOGO
//=========================

gsap.to(".hero-logo",{

    y:-18,

    duration:3,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

//=========================
// LOGO GLOW
//=========================

gsap.to(".logo-glow",{

    scale:1.15,

    repeat:-1,

    yoyo:true,

    duration:4,

    ease:"sine.inOut"

});
//====================================================
//
// PREMIUM SCROLL ANIMATIONS
//
//====================================================

//=========================
// SECTION REVEALS
//=========================

gsap.utils.toArray("section").forEach((section)=>{

    gsap.to(section,{

        opacity:1,

        y:0,

        duration:1.2,

        ease:"power3.out",

        scrollTrigger:{

            trigger:section,

            start:"top 80%"

        }

    });

});

//=========================
// TITLES
//=========================

gsap.utils.toArray(".section-title").forEach((title)=>{

    gsap.from(title,{

        y:80,

        opacity:0,

        duration:1,

        ease:"power4.out",

        scrollTrigger:{

            trigger:title,

            start:"top 85%"

        }

    });

});

//=========================
// ABOUT IMAGE
//=========================

gsap.from(".about-image",{

    x:-120,

    opacity:0,

    duration:1.4,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".about",

        start:"top 70%"

    }

});

gsap.from(".about-content",{

    x:120,

    opacity:0,

    duration:1.4,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".about",

        start:"top 70%"

    }

});

//=========================
// HIGHLIGHTS
//=========================

gsap.from(".highlight",{

    opacity:0,

    y:80,

    stagger:.15,

    duration:.9,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".about-highlights",

        start:"top 85%"

    }

});

//=========================
// ACHIEVEMENT CARDS
//=========================
/*
gsap.from(".stat",{

    opacity:0,

    y:120,

    stagger:.15,

    duration:1,

    ease:"power4.out",

    scrollTrigger:{

        trigger:".stats",

        start:"top 85%"

    }

});
*/
//=========================
// COUNTER
//=========================

document.querySelectorAll(".stat h2").forEach(counter=>{

    let target=+counter.dataset.count;

    ScrollTrigger.create({

        trigger:counter,

        start:"top 85%",

        once:true,

        onEnter:()=>{

            gsap.fromTo(counter,

                {

                    innerHTML:0

                },

                {

                    innerHTML:target,

                    duration:2,

                    ease:"power2.out",

                    snap:{

                        innerHTML:1

                    },

                    onUpdate:function(){

                        counter.innerHTML=Math.ceil(counter.innerHTML)+"+";

                    }

                }

            );

        }

    });

});

//=========================
// UPCOMING EVENT
//=========================

gsap.from(".upcoming-event",{

    scale:.9,

    opacity:0,

    duration:1.3,

    ease:"power3.out",

    scrollTrigger:{

        trigger:".upcoming-event",

        start:"top 75%"

    }

});

//=========================
// PREVIOUS EVENTS
//=========================

gsap.from(".previous-events .event-card",{

    y:120,

    opacity:0,

    stagger:.15,

    duration:1,

    ease:"power4.out",

    scrollTrigger:{

        trigger:".previous-events",

        start:"top 80%"

    }

});
//====================================================
//
// PREMIUM INTERACTIONS
//
//====================================================

//=========================
// MAGNETIC BUTTONS
//=========================

document.querySelectorAll(".primary-btn,.nav-btn").forEach(button=>{

    button.addEventListener("mousemove",(e)=>{

        const rect=button.getBoundingClientRect();

        const x=e.clientX-rect.left-rect.width/2;
        const y=e.clientY-rect.top-rect.height/2;

        gsap.to(button,{

            x:x*.18,

            y:y*.18,

            duration:.35,

            ease:"power3.out"

        });

    });

    button.addEventListener("mouseleave",()=>{

        gsap.to(button,{

            x:0,

            y:0,

            duration:.6,

            ease:"elastic.out(1,.4)"

        });

    });

});

//=========================
// 3D CARD TILT
//=========================

document.querySelectorAll(

".highlight,.team-card,.stat,.event-card,.contact-card"

).forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-.5)*16;

        const rotateX=((y/rect.height)-.5)*-16;

        gsap.to(card,{

            rotationY:rotateY,

            rotationX:rotateX,

            transformPerspective:1000,

            duration:.35

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
// HERO PARALLAX
//=========================

window.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*60;

    const y=(e.clientY/window.innerHeight-.5)*60;

    gsap.to(".hero-1",{

        x,

        y,

        duration:3,

        ease:"power3.out"

    });

    gsap.to(".hero-2",{

        x:-x,

        y:-y,

        duration:4,

        ease:"power3.out"

    });

    gsap.to(".hero-logo",{

        x:x*.15,

        y:y*.15,

        duration:2

    });

});

//=========================
// NAV ACTIVE LINK
//=========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-180;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

//=========================
// SMOOTH SCROLL
//=========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=document.querySelector(

            anchor.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth",

                block:"start"

            });

        }

    });

});

//=========================
// HERO PARTICLES
//=========================

const particleContainer=document.getElementById("particles");

for(let i=0;i<80;i++){

    const particle=document.createElement("span");

    const size=Math.random()*4+2;

    particle.style.width=size+"px";

    particle.style.height=size+"px";

    particle.style.left=Math.random()*100+"%";

    particle.style.animationDuration=

    12+Math.random()*15+"s";

    particle.style.animationDelay=

    Math.random()*12+"s";

    particle.style.opacity=Math.random();

    particleContainer.appendChild(particle);

}

//=========================
// TEAM FLOAT
//=========================

gsap.to(".team-card",{

    y:-12,

    stagger:.2,

    duration:2.8,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

//=========================
// EVENT IMAGE PARALLAX
//=========================

document.querySelectorAll(".event-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const img=card.querySelector("img");

        const rect=card.getBoundingClientRect();

        const x=((e.clientX-rect.left)/rect.width-.5)*18;

        const y=((e.clientY-rect.top)/rect.height-.5)*18;

        gsap.to(img,{

            x,

            y,

            scale:1.12,

            duration:.6

        });

    });

    card.addEventListener("mouseleave",()=>{

        gsap.to(card.querySelector("img"),{

            x:0,

            y:0,

            scale:1,

            duration:.7

        });

    });

});
//====================================================
//
// PREMIUM BACKGROUND
// Three.js + Mouse + Final Effects
//
//====================================================

//=========================
// THREE.JS BACKGROUND
//=========================

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(

60,

window.innerWidth/window.innerHeight,

1,

2000

);

camera.position.z = 450;

const renderer = new THREE.WebGLRenderer({

    alpha:true,

    antialias:true

});

renderer.setSize(

window.innerWidth,

window.innerHeight

);

renderer.setPixelRatio(

Math.min(window.devicePixelRatio,2)

);

document
.getElementById("bg-canvas")
.appendChild(renderer.domElement);


//=========================
// PARTICLE FIELD
//=========================

const geometry = new THREE.BufferGeometry();

const count = 2500;

const positions = new Float32Array(count*3);

for(let i=0;i<count*3;i++){

    positions[i]=(Math.random()-.5)*1200;

}

geometry.setAttribute(

"position",

new THREE.BufferAttribute(

positions,

3

)

);

const material = new THREE.PointsMaterial({

    color:0x53B5FF,

    size:2,

    transparent:true,

    opacity:.65

});

const stars = new THREE.Points(

geometry,

material

);

scene.add(stars);

//=========================
// MOUSE PARALLAX
//=========================

let mouseX=0;

let mouseY=0;

window.addEventListener("mousemove",(e)=>{

    mouseX=(e.clientX/window.innerWidth-.5);

    mouseY=(e.clientY/window.innerHeight-.5);

});

//=========================
// RENDER LOOP
//=========================

function animate(){

    requestAnimationFrame(animate);

    stars.rotation.y+=0.00035;

    stars.rotation.x+=0.00018;

    camera.position.x+=

    (mouseX*50-camera.position.x)*.03;

    camera.position.y+=

    (-mouseY*50-camera.position.y)*.03;

    camera.lookAt(scene.position);

    renderer.render(scene,camera);

}

animate();

//=========================
// RESIZE
//=========================

window.addEventListener("resize",()=>{

    camera.aspect=

    window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});

//=========================
// HERO LOGO ROTATION
//=========================

gsap.to(".logo-circle img",{

    rotation:360,

    duration:35,

    repeat:-1,

    ease:"none"

});

//=========================
// AURORA FLOAT
//=========================

gsap.to(".hero-1",{

    scale:1.15,

    duration:10,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".hero-2",{

    scale:.9,

    duration:8,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

//=========================
// SCROLL INDICATOR
//=========================

gsap.to(".scroll-indicator",{

    y:12,

    duration:1.4,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

//=========================
// CONSOLE
//=========================

console.log(

"%cUTKARSH — ACM DYPIU",

"color:#53B5FF;font-size:18px;font-weight:bold;"

);

console.log(

"%cPremium Version Loaded Successfully 🚀",

"color:#2D8CFF;font-size:14px;"

);
gsap.to(".floating1",{

    y:-45,

    rotation:12,

    duration:8,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".floating2",{

    y:40,

    rotation:-15,

    duration:9,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});

gsap.to(".floating3",{

    y:-35,

    rotation:18,

    duration:7,

    repeat:-1,

    yoyo:true,

    ease:"sine.inOut"

});
// ================= ABOUT TITLE ANIMATION =================

gsap.registerPlugin(ScrollTrigger);

const split = new SplitType(".reveal-title", {
    types: "words"
});

gsap.set(".reveal-title .word", {
    opacity: 0,
    y: 30
});

gsap.to(".reveal-title .word", {
    opacity: 1,
    y: 0,
    duration: 0.4,
    ease: "power3.out",
    stagger: 0.06,
    scrollTrigger: {
        trigger: ".reveal-title",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.from(".about-terminal", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-terminal",
        start: "top 80%"
    }
});

//=========================
// END
//=========================
