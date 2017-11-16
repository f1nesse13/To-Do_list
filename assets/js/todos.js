//Check off by striking through/turning grey
$("ul").on("click", "li", function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}
// 	else{
// 	$(this).css({
// 		color: "gray",
// 		textDecoration: "line-through"
// 	});
// }
	$(this).toggleClass("completed");
});
//Click on X to delete To Do
// Second argument lets the listener pick
//up on new items that are appended to the list
//after the page is loaded
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
	 $(this).parent().remove;// Removes span and 
	});						 //associated li
	event.stopPropagation(); 
	// STOPS BUBBLING Only span will fire
});

//Adding To Dos 
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){ 
		var todoText = $(this).val();
		$(this).val("");
		// getting new todotext
		// create a new li and append
		$("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span>  ' + 
			todoText + '</li>')
	}
});

$(".fa-plus-square").on("click", function(){
	$("input[type='text']").fadeToggle();
});
