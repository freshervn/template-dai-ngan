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
	function stringtoint(string){
		let a=0
		alert(parseInt(string[0]));
		for (var i = string.length - 1; i >= 0; i--) {
			if (parseInt(string[i]) != NaN) {}
			a=a+parseInt(string[i])*Math.pow(10,string.length-1-i);
		}
		return a;
	}
	alert(stringtoint('10.99'));
	// var s=0;
	// var l=document.getElementsByClassName('price');
	// for (var i = l.length - 1; i >= 0; i--) {
	// 	s=s+parseFloat(l[i].textContent);
	// }
	// alert(s);