// console.log(durOff);
$("a[href^='#']").click(function(e){
    let aHref=e.target.getAttribute("href")
    let Offset=$(aHref).offset().top;
    $("html ,body").animate({scrollTop:Offset},1000)
})

 


let sideBarWidth=$(".sideBar1").innerWidth()
$(".sideBar").css("left",- sideBarWidth)

  $(".headText span").click(function(){
        $(".sideBar ").animate({left:"0px"},1000)
        
        $("span ").animate({left:sideBarWidth},1000)
        
    })
  $(".sideBar .p").click(function(){
          $(".sideBar").animate({left:-sideBarWidth},1000)
          $("span ").animate({left:"0px"},1000)

    })

    $(".sideInner").slideUp(0);
    $(".sideInner1").slideUp(0);
    $(".sideInner2").slideUp(0);
    $(".sideInner3").slideUp(0);

    $(".side").click(function() {
        $(".sideInner1").slideUp(1000);
        $(".sideInner2").slideUp(1000);
        $(".sideInner3").slideUp(1000);
        $(".sideInner").slideToggle(1000);
      });
      
      $(".side1").click(function() {
        $(".sideInner").slideUp(1000);
        $(".sideInner2").slideUp(1000);
        $(".sideInner3").slideUp(1000);
        $(".sideInner1").slideToggle(1000);
      });
      
      $(".side2").click(function() {
        $(".sideInner").slideUp(1000);
        $(".sideInner1").slideUp(1000);
        $(".sideInner3").slideUp(1000);
        $(".sideInner2").slideToggle(1000);
      });
      $(".side3").click(function() {
        $(".sideInner").slideUp(1000);
        $(".sideInner1").slideUp(1000);
        $(".sideInner2").slideUp(1000);
        $(".sideInner3").slideToggle(1000);
      });

    
    window.onload = function() {
   
        countDownToTime("5 october 2024 9:56:00");
      }
    
      function countDownToTime(countDown) {
      
            let futureDate = new Date(countDown);
        futureDate = (futureDate.getTime()/1000);
    
        let now = new Date();
        now = (now.getTime()/1000);
    
        timeDifference = (futureDate- now);
            
       let days = Math.floor( timeDifference / (24*60*60));
       let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
       let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
       let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
    
    
        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} h`);
        $(".minutes").html(`${ mins } m`);
        $('.seconds').html(`${ secs} s`)
    
      
        setInterval(function() {  countDownToTime(countDown); }, 1000);
      }
    

      let maxLen=$("textarea").attr("maxlength")

    $(".message").html(`<span class="text-danger fs-6">${maxLen}</span>Character Remaining`)
    $("textarea").keyup(function(){

        let currLen=$(this).val().length
        let rem =maxLen-currLen
        $(".message").html(`<span class="text-danger fs-6">${rem}</span>Character Remaining`)

    })