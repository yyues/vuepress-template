import { defineUserConfig, } from 'vuepress'

const { defaultTheme } = require('vuepress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'FE Knowledge',
  description: '这是我的第一个 VuePress 站点',
  public: 'public',
  head: [ [ 'link', { rel: 'icon', href: '/logo.png' } ] ],
  plugins: [
    docsearchPlugin({
      // 配置项
    }),
    registerComponentsPlugin({
      components: {
        Title: path.resolve(__dirname, '../../components/Title.vue'),
      },
    }),
  ],
  port: 5472,
  theme: defaultTheme({
    navbar: [ { text: '首页', link: '/' }, { text: 'React', link: '/React/index.html' } ],
    sidebar: [ { text: 'React', link: '/React/index.html' } ]
  })
})
