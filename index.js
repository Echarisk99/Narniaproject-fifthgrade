$(".wardrobe").on("click", function(){
	$("h1").text("Welcome to Narnia");
	$(".lead").text("A land of talking animals where adventures never seem to cease")
	var styles ={
		visibility: "hidden"
	}
	$(".wardrobe").css(styles);
	var style1 ={
		visibility: "visible"
	}
	setTimeout(function(){
		$(".hide").css(style1);
	}, 300);
	$("*").addClass("newback");

})