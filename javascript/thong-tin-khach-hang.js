$('.date').html(new Date().getDate());
$('.month').html(new Date().getMonth() + 1);
$('.year').html(new Date().getFullYear())
// hien hoa don cong ty
$('input[name="bill"]').click(
	function(){
		showContent();
	});
function showContent() {
  $('#bill').css('display','block');
}