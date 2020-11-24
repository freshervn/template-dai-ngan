$('.date').html(new Date().getDate());
$('.month').html(new Date().getMonth() + 1);
$('.year').html(new Date().getFullYear())
// hien hoa don cong ty
var onoff=0;
$('input[name="bill"]').click(
	function(){
	onoff++;
	onoff=onoff%2;
	if (onoff==1) {		
		$('#bill').show();
		$('#bill').css('display','flex');
	}
	else {
		 $('#bill').hide();
	}
	}
);
// function showContent() {
//   $('#bill').css('display','block');
// }