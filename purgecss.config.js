module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.md',
        './src/**/*.scss',
    ],
    whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'klaro'
    ],
    whitelistPatterns: [/slick/],
    extractors: [
        {
            extractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug', 'scss'],
        },
    ],
}