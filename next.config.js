// for transpiling all ESM @fullcalendar/* packages
// also, for piping fullcalendar thru babel (to learn why, see babel.config.js)
const withTM = require('next-transpile-modules')([
    '@fullcalendar'
])

module.exports = withTM({
    i18n: {
        locales: ['hu', 'en'],
        defaultLocale: 'hu',
    },
})