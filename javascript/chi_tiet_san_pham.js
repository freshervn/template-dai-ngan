  
$(document).ready(function(){
// khi ve dien thoai thi nhay o anhr xuong cuoi

// $(window).resize(function(){
// 	if ($(window).width()<992) {
// 		$('.product-details .container .row .img').insertAfter($('.product-details .container .row'));
// 	}
// });

// an vao anh thi hien thi ra giua
$('.product-details .container .img figure').click(
	function(){
		var image = $(this).clone();
		$('.product-details .container .main-img ').html(image);
	});


});

