const withTM = require('next-transpile-modules')([
    '@fullcalendar'
])


module.exports = withTM({
    i18n: {
        locales: ['hu', 'en'],
        defaultLocale: 'hu',
    },
})
