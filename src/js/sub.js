
require.config({
	paths: {
		a: 'a'
		,b: 'b'
		,c:'c'
	}
	,shim:{
		c:{
			exports: 'yjs'
		}
	}
});
require(['a','b','c'],function(a,b,c){
	a();
	b();
	c();
});