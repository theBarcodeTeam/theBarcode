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
