// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// jQuery for page scrolling feature 
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var commentSlider = {
    config: {
      container: $("#quote")
    },
  
    init: function(config){
      if(config && typeof config == "object"){
        $.extend(commentSlider.config, config);
      }
  
      //caching dom elements
      //wrapper
      commentSlider.$container = commentSlider.config.container;
  
      //first p tag within module wrapper
      commentSlider.$firstParagraph = commentSlider.$container.find(
        "p:first-child"
      );
  
      //setting first paragraph tag with .active class
      commentSlider.$firstParagraph.addClass("activeText");
    }
  };
  
  //initializes the entire thing by calling the init function
  $(document).ready(commentSlider.init);
  
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      autoPlay: 4000,
      slideSpeed: 1000,
      navigation: false,
      pagination: true,
      singleItem: true,
      dots: false
    });
  });

  function pauseMusic(){

    var audioPlayer = document.getElementById('audio-player');
    var audioContainer = $('#music-container');
  
    audioPlayer.pause();
    audioContainer.addClass("music-player--disabled");
  
    console.log("pause music");
  }
  
  function playMusic(){
  
    var audioPlayer = document.getElementById('audio-player');
    var audioContainer = $('#music-container');
  
    audioPlayer.play();
    audioContainer.removeClass("music-player--disabled");
  
    console.log("play music");
  }