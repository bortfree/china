$(function() {

	$(".arrow_down_head").click(function() {
		$("html, body").animate({ scrollTop: $(".my_head").height()+20 }, "slow");
		return false;
	});
	

	$(".bottom_head_wrap a").mPageScroll2id();
	$(".calc_scr").mPageScroll2id();

	$('.license_wrap a, .license_prosm').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$(".popup").magnificPopup({
		removalDelay: 500,
  	mainClass: 'mfp-fade'
	});

	$(".slider").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
	  navText: ''
	});
	$(".slider_foto").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
	  navText: ''
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("#appl_weight form, #search_sap form, #calc form, #consult form, .s_question form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$.magnificPopup.open({
        items: {
          src: '.done'
        },
        type: 'inline'
      });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
