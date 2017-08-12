

$(function(){
	$('.fullpage').fullpage({
		afterLoad:function(anchorLink,index){
					console.log('123');
			setTimeout(function(){
				$('.section').removeClass('animate');
				$('.section').eq(index-1).addClass('animate');
			},30)
		}
	});
})
