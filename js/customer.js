function statusClock() {
	var myDate = new Date;
	var year = myDate.getFullYear(); //获取当前年
	var mon = formatNum(myDate.getMonth() + 1); //获取当前月
	var date = formatNum(myDate.getDate()); //获取当前日
	var h = formatNum(myDate.getHours()); //获取当前小时数(0-23)
	var m = formatNum(myDate.getMinutes()); //获取当前分钟数(0-59)
	var s = formatNum(myDate.getSeconds()); //获取当前秒
	$(".to-status-clock").html("当前时间:" + year + "-" + mon + "-" + date + " " + h + ":" + m + ":" + s);
}

function formatNum(num){
	if(num < 10){
		num = "0" + num; 
	}
	return num;
}

$(function() {
	setInterval("statusClock()", 998);
});
