	// an nut thif tang gia tri cua input
	$(" button.plush ").click(
		function() {
			var $button = $(this);
			var oldValue = $button.parent().find("input").val();
			var newVal = parseFloat(oldValue) + 1;
			$button.parent().find("input").val(newVal);
		}
		);
	$("button.minus").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		}
		$button.parent().find("input").val(newVal);
	}
	);

// chuyen gia xx.xxx.xxx thanh xxxxxxxx

function stringtoint(stringpriece){
	let a=stringpriece
	for (var i = a.length - 1; i >= 0; i--) {
		if (isNaN(a[i])) {		
			a = a.replace(a[i], "");
		}
	}
	return a;
}
function updatepriece(){	

	var s=0;
	var lprice=document.getElementsByClassName('price');
	for (var i = lprice.length - 1; i >= 0; i--) {
		let amount=lprice[i].parentElement.parentElement.parentElement;
		$(amount).find('input').val();
		s=s+parseInt(stringtoint(lprice[i].textContent)) * $(amount).find('input').val();
	}
	var price='';
	s+='';
	for (var i = s.length - 1; i >= 0; i--) {
		price =s[i]+price;
		if (((s.length - i)%3==0)&&(i!=0)) { price='.'+price;}
	}
	$('#total span').html(price);	
	// tax
	s=s*100/100;
	for (var i = s.length - 1; i >= 0; i--) {
		price =s[i]+price;
		if (((s.length - i)%3==0)&&(i!=0)) { price='.'+price;}
	}
	$('#total-tax span').html(price);	
}

	// function deleteproduct(){
	// 	if (this.val()==NULL) {			
	// 	this.remove();
	// 	}
	// }
	$(document).ready(updatepriece);
	$(document).keydown(updatepriece);
	$(document).click(updatepriece);

// xoa neu xuong 0
$('.minus').click(
	function(){
		if ($(this).parent().find('input').val()==0) {
			$(this).parent().parent().parent().remove();
		};
	});

// function  findchildnote(pr){
// 	for (var i = pr.childNodes.length - 1; i >= 0; i--) {
// 		if (pr.childNodes[i].nodeName.=='H3') {			
// 			console.log(pr.childNodes[i].nodeName);
// 		}
// 	}
// }
// findchildnote(amount);
$('span.clear').click(
	function(){
		alert('Bạn có chắc xóa sản phẩm này');
		$(this).parent().parent().parent().remove();
	})