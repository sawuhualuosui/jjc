function resetPage(){
	var deviceWidth=document.documentElement.clientWidth;// 设备实际显示宽度
	var scale=deviceWidth/640;
	document.body.style.zoom=scale;
}
resetPage();
window.onresize=function (){
	resetPage();
}

$('.wx513 span').click(function  () {
	$('.wx513 span').css('display','none');
	$('.wx513 input').focus();
})
$('.wx513 input').blur(function  () {
	if ($('.wx513 input').val()=='') {
		$('.wx513 span').css('display','block');
	}else{
		$('.wx513 span').css('display','none');
	};
	
})
$('.wx514 span').click(function  () {
	$('.wx514 span').css('display','none');
	$('.wx514 input').focus();
})
$('.wx514 input').blur(function  () {
	if ($('.wx514 input').val()=='') {
		$('.wx514 span').css('display','block');
	}else{
		$('.wx514 span').css('display','none');
	};
})

function setCookie(Key,Value,Days){//设置Cookie
	var dates=new Date();
	dates.setDate(dates.getDate()+Days);
	document.cookie=Key+"="+escape(Value)+"; expires="+dates;
}
function getCookie(Key){//获取cookie
	var arr=document.cookie.split('; ');
	// ['user1=laowang','user2=laozhang']
	for (var i = 0; i < arr.length; i++) {
		var arr2=arr[i].split('=');
		//['user1','laowang']
		if (arr2[0]==Key) {
			return unescape(arr2[1]);
		};
	};
	return false;
}
function removeCookie(Key){//删除cookie
	setCookie(Key,'0',-1);
}


$('.wx515').click(function  () {
	if (getCookie($('#haoma'))) {
		window.open('weixin7.html','_self');
	}else{
		setCookie($('#user'),$('#user').val(),30);
		setCookie($('#haoma'),$('#haoma').val(),30);
		window.open('weixin6.html','_self');
		$('.wx514 input').val('');
		$('.wx513 input').val('');
		$('.wx514 span').css('display','block');
		$('.wx513 span').css('display','block');
	};
})

$('.wx6 .wx63').click(function  () {
	window.open('weixin1.html','_self');
})