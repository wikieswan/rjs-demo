requirejs(['add','minus','pub/ten'],function(add,minus,ten){
	var a = 1, 
		b = 2;
	var rst0 = add(a,b);
	var rst1 = minus(a,b);
	var rst2 = ten(a);	

	console.log(rst0,rst1,rst2);
});