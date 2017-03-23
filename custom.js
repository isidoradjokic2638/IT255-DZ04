function onMouseOn(mainImage) {
	firstImage = mainImage.src;
	mainImage.src = "https://media.wmagazine.com/photos/58beca7764f1eb1a4e15f01a/1:1/w_533/Opener.gif";
}
function onMouseOutside(mainImage) {
    mainImage.src = firstImage;
}

$(window).on('load', function() { 
		$(".loader").fadeOut("slow");;
 });
