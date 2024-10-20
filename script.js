var crsr = document . querySelector ("#cursor");
var blur = document . querySelector ("#cursor-blur");

document . addEventListener("mousemove", function(dets){
   crsr.style.left = dets.x+"px";
   crsr.style.top = dets.y+"px";
   blur.style.left = dets.x-250+"px";
   blur .style.top = dets.y-250+"px";
} );
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #f10808";
    crsr.style.backgroundColor = "#f10808";
  });
});

gsap .to ("#nav", {
    backgroundColor : "black",
    height : "100px ",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#nav",
        scroller :"body",
        start : "top -10%",
        end : "top -11%",
        scrub : 1,
    },    
} );

gsap .to ("#main", {
    backgroundColor : "black",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#main",
        scroller :"body",
        start : "top -30%",
        end : "top -80%",
        scrub : 2,
    },    
} );
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 5,
    stagger: 0,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        Trigger: "colon1",
        scroller:"body",
         // markers:true,
      start: "top 50%",
      end: "top 47%",
      scrub: 4,
    }
  })
  gsap.from("#colon2",{
    y: 70,
    x: 70,
    scrollTrigger:{
        Trigger: "colon2",
        scroller:"body",
         // markers:true,
      start: "top 15%",
      end: "top 10%",
      scrub: 2,
    }
  })


