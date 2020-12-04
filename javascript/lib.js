// product
$('.product .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:2
			},
			567:{
				items:2
			},
			768:{
				items:3
			},
			994:{
				items:4
			}
		}
	})
// product
$('.news .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:2
			},
			567:{
				items:2
			},
			768:{
				items:3
			},
			994:{
				items:4
			}
		}
	})
$('.catalog-pages.owl-carousel').owlCarousel({
		loop:false,
		margin:10,
		nav:true,
		dots:true,
		responsive:{
			0:{
				items:4
			},
			567:{
				items:6
			},
			768:{
				items:8
			},
			992:{
				items:12
			}
		}
	})

	$(" .catalog-pages.owl-carousel .owl-nav button.owl-prev span").html("<i class='fas fa-angle-left'></i>");	
	$(" .catalog-pages.owl-carousel .owl-nav button.owl-next span").html("<i class='fas fa-angle-right'></i>");
	$(" .catalog-pages.owl-carousel .owl-dots .owl-dot:first-child").html("<i class='fas fa-angle-left'></i><i class='fas fa-angle-left'></i>");	
	$(" .catalog-pages.owl-carousel .owl-dots .owl-dot:last-child").html("<i class='fas fa-angle-right'></i><i class='fas fa-angle-right'></i>");


