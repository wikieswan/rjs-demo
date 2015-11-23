({
    appDir: './www',
    baseUrl: 'js/mod',
    dir: './build',
    paths: {
        'pub' : '../pub',
        'app' : '../app'
    },
    modules: [
        {
            name: 'app/index'
        }
    ],
    //fileExclusionRegExp: //,
    removeCombined: true,
    optimizeCss: 'standard'
})