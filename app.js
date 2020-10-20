gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({scrollTrigger: {
    trigger: ".main",
    start: "top 5.5%",
    end: 'top 5%',
    toggleActions: 'play none reverse none'
}});

t1.addLabel('helloAndIntro')
.to(".hello-container", {
    left: "50%",
    duration: 1,
    ease: 'power2',
},'helloAndIntro')
.to(".slide-in__intro", {
    left: "50%",
    duration: 1,
    ease: 'power1',
    
},'helloAndIntro')
.addLabel('heroTextBox')
.to(".animate-hero_text p", {
    translateY: "0%",
    duration: 0.4,
    stagger: 0.2,
    opacity: 1,
},'heroTextBox')
.to(".date-text", {
    translateX: "50%",
    duration: 0.5,
    opacity: 1
},'heroTextBox');

/* Services */

let t2 = gsap.timeline({scrollTrigger: {
    trigger: '.services',
    start: "top center"
}});

t2.to(".animate-services_title p", {
    translateY: 0,
    duration: 0.5
}).addLabel("all")
.to(".animate-services_desc-title p", {
    translateY: 0,
    duration: 0.5
},"all")
.to(".animate-left", {
    translateX: "-100%",
    duration: 0.5
},"all")
.to(".animate-services_desc-body",{
    translateX: "0%",
    duration: 0.5
},"all")

/* Creative */

let t3 = gsap.timeline({scrollTrigger: {
    trigger: '.portfolio',
    start: "top center"
}});

t3.to(".animate-portfolio_title p", {
    translateY: 0,
    duration: 0.5
}).addLabel("all")
.to(".animate-portfolio_desc-title p", {
    translateY: 0,
    duration: 0.5
},"all")
.to(".animate-right", {
    translateX: "100%",
    duration: 0.5
},"all")
.to(".animate-portfolio_desc-body",{
    translateX: "0%",
    duration: 0.5
},"all")

/* Ideas */

let t4 = gsap.timeline({scrollTrigger: {
    trigger: '.ideas',
    start: "top center"
}});

t4.addLabel("titleAndImage").to(".animate-ideas_title p", {
    translateY: 0,
    duration: 0.5
},"titleAndImage").to(".animate-down",{
    translateY: "100%",
    duration: 1
},"titleAndImage")


/* Side Navigation */

let menuIcon = document.querySelector('.menu-icon');
let closeMenuIcon = document.querySelector('.close-icon');

menuIcon.addEventListener('mouseover',() => {
    gsap.to(".side-nav",{
        translateX: "2%",
        duration: 0.5
    })
});

menuIcon.addEventListener('mouseout',() => {
    gsap.to(".side-nav",{
        translateX: "0%",
        duration: 0.5
    })
});

menuIcon.addEventListener('click',() => {
    gsap.to(".side-nav", {
        right: 0,
        duration: 1,
        ease: 'expo'
    });
    menuIcon.classList.add('hide_menu-icon');
});

closeMenuIcon.addEventListener('click',() => {
    gsap.to(".side-nav", {
        right: "97%",
        duration: 2,
        ease: 'expo'
    });
    menuIcon.classList.remove('hide_menu-icon');
});