AOS.init({
    offset: 150,
    duration: 1000,
    delay: 100,
    once: true
});

//Change Active Nav
$("#nav-list").onePageNav({
	currentClass: 'active',
	changeHash: true,
	scrollSpeed: 0,
	scrollThreshold: 0,
	filter: '',
	easing: 'swing'
});

//Scroll to Top every Refresh
$(document).ready(function(){
    $(this).scrollTop(0);
});



// Responsive Navbar
$(document).ready(function(){

	$('#burger').click(function(){
		$(this).toggleClass('open');
		$('#nav-list').toggleClass("nav-active");
		$('body').toggleClass("body__overflow");
		
		
		if($('#burger').hasClass('open')) {
			$('#nav-list li').click(function(){
				$('#burger').removeClass('open');
				$('#nav-list').removeClass("nav-active");
				$('body').removeClass("body__overflow");
			});
		}
	});	
	

});

