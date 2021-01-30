module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English',
    },
    {
      code: 'cn',
      iso: 'zh-CN',
      file: 'zh-CN.js',
      name: '中文',
    },
    {
      code: 'jp',
      iso: 'ja-JP',
      file: 'ja-JP.js',
      name: '日本語',
    }
  ],
  defaultLocale: 'en',
  vueI18nLoader: true, // <i18n> Tag
  lazy: true,
  langDir: '/assets/i18n/lang/',
  detectBrowserLanguage: true,
  vueI18n: {
    fallbackLocale: 'en',
    // Not working when `lazy` is enabled
    // messages: {
    //   en: {
    //     welcome: 'Welcome'
    //   },
    //   cn: {
    //     welcome: '欢迎'
    //   },
    //   jp: {
    //     welcome: 'ようこそ'
    //   }
    // }
  }
}
