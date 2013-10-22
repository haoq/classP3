//
/**/


function updateClock() {
	var clockElem = document.getElementById('clock');
	clockElem.innerHTML = new Date().toLocaleTimeString(); //current date and time
}

window.setInterval(updateClock, 1000);

 var x = 'Hello World';
 var y = '!';
 var z = x + y;
 /*alert(z);

if(b || b2) {

}
var b = false;
var u = undefined; var u;
var n = null;
if(u) {
//undefied value is false
}else {

}

if('') // value to false*/

var obj = {a: 'foo', b: 'bar', m : updateClock};
console.log(obj.a);
obj.z = new Date();
console.log(obj.z);

var arr = [10,9,4,6,2,8]; 
// keys are 0, 1, 2...
//console.log(arr[0]);


arr = [
	{name: 'Dave'},
	{name: 'Staffan'},
	{name: 'Matt'},
	{name: 'Fred'}
];


arr.sort(function(a, b){
	return a.name.localeCompare(b.name);
});

for (var idx = 0; idx < arr.length; ++idx) {
	console.log(arr[idx]);
}