
require.config({
	paths: {
		a: 'a',
		b: 'b'
	}
});
require(['a','b'],function(a,b){
	a();
	b();
});