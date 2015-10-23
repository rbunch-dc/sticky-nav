$(document).ready(function(){

	$('#nav-bar li a').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
	});

});