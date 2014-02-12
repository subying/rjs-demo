({
    appDir: './src'
    ,baseUrl: './js'
    ,dir: './dist'
	,modules: [
        {
            name: 'main'
        }
		,{
            name: 'sub'
        }
    ]
    ,fileExclusionRegExp: /^(r|build)\.js$/
    ,optimizeCss: 'standard'
    ,removeCombined: true
    ,paths: {
		a:'a'
		,b:'b'
		,c:'c'
    }
	,shim:{
		c:{
			exports: 'yjs'
		}
	}
})