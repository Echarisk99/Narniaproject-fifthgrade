// alert("MAPs")
$(".but").fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
// on click button we want to run handler function
$(".btn").on("click", function(){
	console.log("c-")
	$(".but").css("visibility", "hidden");
	// click, then have the background change from the narnia map1 to 2-9 with time delays
	$("*").addClass("map1");
	$(".txt").css("visibility", "visible");
	$(".txt").text("Lucy meets Tumnus");
	setTimeout(function(){
		$("*").removeClass("map1");
	}, 1000);
		setTimeout(function(){
		$(".txt").text("Pevensies enter Narnia");
	}, 2100);
	setTimeout(function(){
		$("*").addClass("map2");
	}, 2000);	
	setTimeout(function(){
		$("*").removeClass("map2");
	}, 3000);
		setTimeout(function(){
		$(".txt").text("Edmund goes to the Witches Castle");
	}, 4100);
	setTimeout(function(){
		$("*").addClass("map3");
	}, 4000);
	setTimeout(function(){
		$("*").removeClass("map3");
	}, 5000);
		setTimeout(function(){
		$(".txt").text("Pevensies meet Aslan");
	}, 6100);
	setTimeout(function(){
		$("*").addClass("map4");
	}, 6000);
	setTimeout(function(){
		$("*").removeClass("map4");
	}, 7000);
		setTimeout(function(){
		$(".txt").text("Witch meets with Aslan and Edmund is returned");
	}, 8100);
	setTimeout(function(){
		$("*").addClass("map5");
	}, 8000);
	setTimeout(function(){
		$("*").removeClass("map5");
	}, 9000);
		setTimeout(function(){
		$(".txt").text("Aslan (and Susan and Lucy) goes to the Stone Table");
	}, 10100);
	setTimeout(function(){
		$("*").addClass("map6");
	}, 10000);
	setTimeout(function(){
		$("*").removeClass("map6");
	}, 11000);
		setTimeout(function(){
		$(".txt").text("Aslan rescues the prisoners and they join the battle");
	}, 12100);
	setTimeout(function(){
		$("*").addClass("map7");
	}, 12000);
	setTimeout(function(){
		$("*").removeClass("map7");
	}, 13000);
		setTimeout(function(){
		$(".txt").text("Victorious - they celebrate at Cair Paravel.");
	}, 14100);
	setTimeout(function(){
		$("*").addClass("map8");
	}, 14000);
})

// as it moves through have a textbox appear with summary that changes with each map

