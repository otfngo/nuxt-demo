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
      }
    }
  },
  router: {
    middleware: ['i18n']
  }
}