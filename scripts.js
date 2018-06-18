var subreddit = prompt("sub");
var pictureAmount = 0;



$.getJSON("http://www.reddit.com/r/"+subreddit+"/new.json?jsonp=?", function(data){
	$.each(data.data.children, function(i,item){
		$("<img/>").attr({"src":item.data.url,"width":"100px"}).appendTo("#images");
		if(pictureAmount == 1){
			return false;
		}
		pictureAmount = pictureAmount + 1;
	});
});
