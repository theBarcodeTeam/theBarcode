var ovf, slider;
$(document).ready(function(){
  //#####################################################//
  //################### bootstrap basic #################//
  //####################################################//
  $('[data-toggle="tooltip"]').tooltip();   // Initialize Tooltip

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    event.preventDefault();   // Prevent default anchor click behavior
    var hash = this.hash;     // Store hash
    $('html, body').animate({ // animate scroll
      scrollTop: $(hash).offset().top
    }, 900, function(){
      window.location.hash = hash;
    });
  });


  //#####################################################//
  //###################### parallex #####################//
  //####################################################//
  var scene_vocal = $('#scene_vocal')[0];
  var parallaxInstance_vocal = new Parallax(scene_vocal, {
    hoverOnly : true
  });
  parallaxInstance_vocal.friction(0.2, 0.2);

  var scene_keyboard = $('#scene_keyboard')[0];
  var parallaxInstance_keyboard = new Parallax(scene_keyboard, {
    hoverOnly : true
  });
  parallaxInstance_keyboard.friction(0.2, 0.2);

  var scene_guitar = $('#scene_guitar')[0];
  var parallaxInstance_guitar = new Parallax(scene_guitar, {
    hoverOnly : true
  });
  parallaxInstance_guitar.friction(0.2, 0.2);

  var scene_drum = $('#scene_drum')[0];
  var parallaxInstance_drum = new Parallax(scene_drum, {
    hoverOnly : true
  });
  parallaxInstance_drum.friction(0.2, 0.2);

  var scene_bass = $('#scene_bass')[0];
  var parallaxInstance_bass = new Parallax(scene_bass, {
    hoverOnly : true
  });
  parallaxInstance_bass.friction(0.2, 0.2);

  var parallax_container = document.getElementById('parallax_container');
  var parallaxInstance = new Parallax(parallax_container, {
    calibrateX : true,
    calibrateY : false
  });
  parallaxInstance.friction(0.2, 0.2);


  ovf = $(".overflow")[0]
  slider = $(".scroll_hider")[0]
  winResize();
  $(window).bind({resize: winResize, scroll: winScroll});



  // $(window).scroll(function() {

        // taemin workspace


        // taemin workspace



        // jh workspace
		// var value = $(this).scrollTop();

		// var hoge1 = value * 0.001 + 0.00003;
		// if (hoge1 > 0.01) {
		//	$('#contact').css('transform', 'scale(' + hoge1 + ')');
		//}


  //  });



})

function winResize(){
    ovf.style.top = slider.offsetHeight + "px";
}

function winScroll(){
    var op = 1 - (window.pageYOffset / slider.offsetHeight);
    slider.style.opacity = op;
}
