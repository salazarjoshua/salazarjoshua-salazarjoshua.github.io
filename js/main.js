AOS.init({
    offset: 150,
    duration: 1000,
    delay: 100,
    once: true
});

$(document).ready(function(){
	//Scroll to Top every Refresh
	// $(this).scrollTop(0);

	// Responsive Navbar
	$('#burger').click(function(){
		//Toggles the burger menu
		if ( $(this).attr('aria-pressed') == 'false'){
			$(this).attr("aria-pressed", 'true');
			$(this).attr("aria-expanded", 'true');
			$('#nav-list').attr("aria-hidden", 'false');
		} else {
			$(this).attr("aria-pressed", 'false');
			$(this).attr("aria-expanded", 'false');
			$('#nav-list').attr("aria-hidden", 'true');
		}
		$('body').toggleClass("body__overflow");
		
		
		if ( $('#burger').attr('aria-pressed') == 'true') {
			$('#nav-list li').click(function(){
				$('#burger').attr("aria-pressed", 'false');
				$('#burger').attr("aria-expanded", 'false');
				$('#nav-list').attr("aria-hidden", 'true');
				$('body').removeClass("body__overflow");
			});
		}
	});	
	
});


