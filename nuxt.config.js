const LRU = require('lru-cache')

module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  css: [
    '~/assets/main.css',
    'bulma/css/bulma.css'
  ],
  loading: {
    color: 'blue',
    height: '5px'
  },
  plugins: ['~/plugins/i18n.js'],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      },
      cache: new LRU({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    }
  },
  router: {
    middleware: ['i18n']
  },
  generate: {
    routes: ['/localeEn', '/localeFr', '/fr/localeEn', '/fr/localeFr']
  }
}