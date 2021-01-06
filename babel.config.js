module.exports = {

    presets: [
        'next/babel' // necessary for all .jsx files
    ],
    overrides: [{
        include: [
            './node_modules'
        ],
        plugins: [
            ['babel-plugin-transform-require-ignore', {
                extensions: ['.css']
            }]
        ]
    }]

}
