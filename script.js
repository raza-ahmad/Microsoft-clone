gsap.to(".header",{
 
    duration:0.4,
    height:"140px",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"-10%",
        end:"top -70%",
        scrub:2
    }
})