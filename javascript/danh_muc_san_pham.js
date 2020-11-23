var price = document.getElementsByClassName('new-price');
var length=price.length;
$('.sort-product input[value="gia-thap-cap"]').click(sortpricelowtoheight);
function sortpricelowtoheight() {
	for (var i = price.length - 1; i >= 0; i--) {
		for (var j = 0; j <= price.length-2 ; j++) {
			let before =document.getElementsByClassName('new-price')[j].textContent;
			let beforenode = document.getElementsByClassName('new-price')[j].parentElement.parentElement.parentElement.parentElement;
			let after = document.getElementsByClassName('new-price')[j+1].textContent;
			let afternode = document.getElementsByClassName('new-price')[j+1].parentElement.parentElement.parentElement.parentElement;
			if (before > after) {
				beforenode.parentElement.insertBefore(afternode,beforenode);
			}
		}
	}	
}
$('.sort-product input[value="gia-cao-thap"]').click(sortpriceheighttolow);
function sortpriceheighttolow() {
	for (var i = price.length - 1; i >= 0; i--) {
		for (var j = 0; j <= price.length-2 ; j++) {
			let before =document.getElementsByClassName('new-price')[j].textContent;
			let beforenode = document.getElementsByClassName('new-price')[j].parentElement.parentElement.parentElement.parentElement;
			let after = document.getElementsByClassName('new-price')[j+1].textContent;
			let afternode = document.getElementsByClassName('new-price')[j+1].parentElement.parentElement.parentElement.parentElement;
			if (before < after) {
				beforenode.parentElement.insertBefore(afternode,beforenode);
			}
		}
	}	
}

