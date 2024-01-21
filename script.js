// GRAVITY TEXT EFFECT

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 3,
        pin:true
    }
})

tl.to("#top", {
    top : "-50%"
},'a')
tl.to("#bottom", {
    bottom : "-50%"
}, 'a')

tl.from(".c-box", {
    y: 300,
    opacity:0
}, 'a')
