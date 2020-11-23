// lấy số lượng class  phải sắp xếp 
var price = document.getElementsByClassName('new-price');
var length=price.length;

// nút để kích hoặt xắp xếp
$('.sort-product input[value="gia-thap-cap"]').click(sortpricelowtoheight);
// trương trình xắp xếp
function sortpricelowtoheight() {
	// chạy 2 vòng lặp để sắp xếp , ko cần sửa chỗ này
	for (var i = price.length - 1; i >= 0; i--) {
		for (var j = 0; j <= price.length-2 ; j++) {

			// chọn giá tri so sanh de sap xep
			let before =document.getElementsByClassName('new-price')[j].textContent;

			// chỗ này để lấy class bọc giá trị sắp xếp
			// mỗi .parentElement tương đương 1 lớp bọc ngoài
			// thêm .parentElement đến khi ra đến bọc ngoài cùng chứa toàn nội dung.
			let beforenode = document.getElementsByClassName('new-price')[j].parentElement.parentElement.parentElement.parentElement;

			// giống bên trên nhưng thay [j]= [j+1]
			let after = document.getElementsByClassName('new-price')[j+1].textContent;
			let afternode = document.getElementsByClassName('new-price')[j+1].parentElement.parentElement.parentElement.parentElement;

			// chiều sắp xếp, > là từ nhỏ đến lớn, < là từ lớn đến nhỏ;
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

