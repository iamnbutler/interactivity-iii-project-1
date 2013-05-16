// Load scripts after page loads
$(document).ready(function(){
	$('.more').click(function(){
		$('.toc-module').toggle();
		return false;
	});
});