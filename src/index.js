import components from './components'
import store from './store/'
import routes from './routes'
import Default from './layout/Default'
import Blank from './layout/Blank'
import './style/index.styl'
export default (app, Vue) => {
  for (const key in components) {
    Vue.component(key, components[key])
  }
  app.$addLayout({
    layoutDefault: Default,
    layoutBlank: Blank
  })
  app.$addStore('ui', store)
  app.$addRoutes(routes)
  console.log(
    `%cadmincraft-ui 加载完成`,
    'background: #00d1b2; padding: 5px; color: #fff; border-radius: 5px'
  )
}
