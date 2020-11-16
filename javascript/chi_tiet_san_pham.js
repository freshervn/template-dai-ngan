  
$(document).ready(function(){
// an vao anh thi hien thi ra giua
$('.product-details .container .img figure').click(
	function(){
		var image =$(this).clone();
		$('.product-details .container .main-img ').html(image);
	});

});
