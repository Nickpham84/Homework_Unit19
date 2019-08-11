    function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);
    console.log("hello");
    
    setTimeout( function() {
    $(".section-1").fadeIn();
    }, 3500);
     
    setTimeout( function() {
    $(".section-2").fadeIn();
    }, 4000);
    
    setTimeout( function() {
    $(".section-3").fadeIn();
    }, 4500);

    setTimeout( function() {
    $(".section-4").fadeIn();
    }, 5000);
    
    setTimeout( function() {
    $(".section-5").fadeIn();
    }, 5500);

    setTimeout( function() {
      $(".section-6").fadeIn();
      }, 6000);

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }   
