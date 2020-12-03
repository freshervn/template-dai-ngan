 
	$(' .img-2 .owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:3
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

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
		$('.product-details .container .main-img .window').html(image);
	});
});

