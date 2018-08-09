/*Jquery做法*/

var data = {
	name : '凯文米特尼克'，
	birth: '1963年8月6日'，
	home: '美国洛杉矶'，
	job: '网络安全咨询师'
}

var str += '<div>'+data.name+'</div>';
str += '<div>'+data.birth+'</div>';
str += '<div>'+data.home+'</div>';
str += '<div>'+data.job+'</div>';

$('#card').html(str);