module.exports = options => {
    if (options.mode == 'production'){
        
        return {
            entry: 'src/index.js',
            extractCSS: false,
            filename: {
                js: 'index.js'
            },
            format: 'umd',
            html: false,
            presets: [
                //require('poi-preset-react')(),
                //require('poi-preset-storybook')()
            ],
            sourceMap: false
        }
        
    } else if (options.mode == 'development') {

        return {
            entry: 'src/index.js',
            extractCSS: false,
            filename: {
                js: 'index.js'
            },
            format: 'umd',
            html: {
                template: './src/index.ejs'
            },
            //hotReload: true,
            presets: [
                require('poi-preset-react')(),
                //require('poi-preset-storybook')()
            ],
            sourceMap: true
        }
        
    } else if (options.mode == 'test'){
        console.log('HEY TESTMODE')
        return {
            entry: 'src/index.test.js',
            extractCSS: false,
            filename: {
                js: 'index.test.transformed.js'
            },
            format: 'umd',
            html: false,
            presets: [
                require('poi-preset-transform-test-files')()
            ],
            sourceMap: false
        }
    }
    
}