var minute,second,call; // just variable

var setMinute = document.getElementById('minute');
var setSecond = document.getElementById('second');

second = 60; 

function start(){

	minute = document.getElementById('input_box').value;

	minute--;

	second--; 

	setMinute.innerHTML = minute; // show output
	setSecond.innerHTML = second; // show output

	call = setInterval(updateValue,1000);  // call the function in every secound
}


function updateValue(){
	
	second--;

	if(second==0 && minute==0){
		setMinute.innerHTML = '00';
		setSecond.innerHTML = '00';
		alert('Time is over');
		clearInterval(call);
	}

	if(second==0 && minute != 0){
		second = 59;
		minute--;
	}

	setMinute.innerHTML = minute;  // show output
	setSecond.innerHTML = second;  // show output
}

