var play=document.querySelector(".play")
var video = document.querySelector("video")
var flag=0 ;

function Music(){
    play.addEventListener("click",function(){
   
        if(flag==0){
         video.play();
         document.querySelector(".video-container img").style.display="none";
         document.querySelector(".play").innerHTML=`<i class="ri-pause-mini-line"></i>`
         flag=1;
      
        }
        else{
         video.pause();
         document.querySelector(".play").innerHTML=`<i class="ri-play-large-fill"></i>`
         document.querySelector(".video-container img").style.display="initial";
         flag=0;
        }
     })
}

function cursor(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration:.1,
    });
}

function magnet(){
    Shery.makeMagnet(".sites h4, .awards h2 , .awards h5,.nav-p2 h4", {});
}

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function load(){
    var tl=gsap.timeline();
tl.from(".lines h1",{
    y:200,
    duration:.5,
    stagger:.25
})

tl.from(" .lines h2",{
    y:200,
    onStart:function(){
        var time = document.querySelector("#time");
    var grow =0;
    setInterval(function(){
        if(grow<=100){
            time.textContent=grow;
            grow++;
        }
        else
        grow=100;
    },28)
    }
})
tl.from(".wait p",{
    opacity:0,
})
tl.to(".loading",{
    delay:2,
    opacity:0,
    stagger:.25,
    y:-1200,
    duration:1.5,
    display:"none",
})
tl.from("nav",{
    delay:-.5,
    opacity:0,
    duration:.1,
})
tl.from(".hero h1",{
    delay:-1,
    y:120,
    duration:.5,
    stagger:.2,

})
}

function animation(){
    Shery.imageEffect(".img-div", {
        style: 1 /*OR 5 for different variant */,
        config:{"a":{"value":0,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":1.98,"range":[0,10]},"metaball":{"value":0.55,"range":[0,2]},"discard_threshold":{"value":0.62,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":6.11,"range":[0,100]}},
        gooey:true,
      });
}

function flagAnimate(){
    var main=document.querySelector(".main")
    main.addEventListener("mousemove", function(delts){
        gsap.to("#flag",{
            x:delts.x,
            y:delts.y,
        })
    })
    document.querySelector("#hero-fx").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1,
        })
    })
    document.querySelector("#hero-fx").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0,
        })
    })

}

flagAnimate();
Music();
cursor();
magnet();
locomotive();
load();
animation();