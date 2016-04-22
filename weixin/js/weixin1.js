function resetPage(){
	var deviceWidth=document.documentElement.clientWidth;// 设备实际显示宽度
	var scale=deviceWidth/640;
	document.body.style.zoom=scale;
}
resetPage();
window.onresize=function (){//拖动窗口自适应
	resetPage();
}

$('.con2 .con21').eq(0).click(function  () {//场内
	setCookie('xuan0','has',30);
	$('.con2 .con22').css('display','block');
	$('.con2 .con2221').eq(1).click(function  () {
		$('.con2 .con22').css('display','none');
	})
})
$('.wx2 .wx23').click(function  () {
	window.open('weixin1.html','_self');
})
$('.wx33').click(function  () {
	window.open('weixin4.html','_self');
})

// $('.wx_33').click(function  () {
// 	// window.open('weixin8.html','_self');
// 	window.open('weixin4.html','_self');
// })

$('.con3').click(function  () {
	window.open('weixin2.html','_self');
})

// $('.wx413 img').click(function  () {
// 	// window.open('weixin6.html','_self');
// 	var x=Math.floor(Math.random()*2+1);//1 2
// 	alert(x);
// 	window.open('wxzj'+x+'.html','_self');
// })
//抽奖 设cookie
 $('.wx413 img').click(function  () {
 	if ((getCookie('che')=='true')||(getCookie('sjhf')=='true')) {
 		alert('对不起，您已抽过奖');
 	};
 	if(getCookie('xuan0')=='has'){//场内抽奖
 		setCookie('che','true',30);
 		var x=Math.floor(Math.random()*2+1);//1 2
// 	alert(x);
		window.open('wxzj'+x+'.html','_self');
 	}else if (getCookie('xuan1')=='no') {
 		// alert('111');
 		setCookie('sjhf','true',30);
 		window.open('weixin8.html','_self');
 	};

 })



$('.con21').eq(1).click(function  () {//场外
	setCookie('xuan1','no',30);
	window.open('weixin3.html','_self');
})
var arr=['images/y10.png','images/y20.png','images/y30.png'];
var arr1=[10,20,30];
var i=Math.floor(Math.random()*3);
// alert(i);
$('.wx83').attr('src',arr[i]);
$('.var1').text(arr1[i]);


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
	window.open('weixin6.html','_self');
	$('.wx514 input').val('');
	$('.wx513 input').val('');
	$('.wx514 span').css('display','block');
	$('.wx513 span').css('display','block');
})

$('.wx6 .wx63').click(function  () {
	window.open('weixin7.html','_self');
})

$('.wxzj5').click(function  () {
	window.open('weixin5.html','_self');
})
$('.wx85').click(function  () {
	window.open('weixin1.html','_self');
})

$('.wxzjs0').click(function  () {
	window.open('wxzj_1.html','_self');
})