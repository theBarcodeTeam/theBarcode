var ovf, slider;
$(document).ready(function(){

  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

  ovf = $(".overflow")
  slider = $(".scroll-hider")
  winResize();
  $(window).bind({resize: winResize, scroll: winScroll});

  $(window).scroll(function() {

        // taemin workspace


        // taemin workspace



        // jh workspace
		var value = $(this).scrollTop();

		var hoge1 = value * 0.001 + 0.00003;
		if (hoge1 > 0.01) {
			$('#contact').css('transform', 'scale(' + hoge1 + ')');
		}


    });



})

function winResize(){
    ovf.style.top = slider.offsetHeight + "px";
}

function winScroll(){
    var op = 1 - (window.pageYOffset / slider.offsetHeight);
    slider.style.opacity = op;
}
