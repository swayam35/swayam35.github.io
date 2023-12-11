function upDate(previewPic)
{
document.getElementbyId('image').innerHTML=previewPic.alt;
document.queryselector('#image').style.backgroundImage = "url('"+previewPic.spc +"')";
}

function unDo()
{
	document.queryselector('#image').style.background = "url(;;)";
	document.queryselector('#image').innerHTML = "hover over an image below to display here.";
}