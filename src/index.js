import components from './components'
import store from './store'
import routes from './routes'
import acDefault from './layout/Default'
import acBlank from './layout/Blank'
import './style/index.styl'
export default Vue => {
  for (const key in components) {
    Vue.component(key, components[key])
  }
  Vue.prototype.$addLayout({
    acDefault,
    acBlank
  })
  Vue.prototype.$addStore('ui', store)
  Vue.prototype.$addRoutes(routes)
  console.log('ui加载完成')
}
