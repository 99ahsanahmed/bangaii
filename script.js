var tl = gsap.timeline()

tl.from("#nav img,#headings h4 ",{
    opacity:0,
    y:-100,
    duration:1,
    stagger:0.5

} )
tl.from("#left",{
    opacity:0,
    x:-150,
    duration:0.5
} )

tl.from("#text h1",{
    opacity:0,
    y:100,
    stagger:0.5
} )
tl.from("#bottom",{
    opacity:0,
    y:-70,
    x:150,
    rotate:45,
    duration:0.5
} )
tl.to("#text h1 ",{
    y:-300,
    duration:1,
    scrollTrigger:{
        trigger:"#text h1",
        scroller:"body",
        markers:true,
        start:"top 20%",
        scrub:4
    }
})
tl.from("#page2 h1",{
    opacity:0,
    x:500,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        // markers:true,
        scrub:4
    }
} )