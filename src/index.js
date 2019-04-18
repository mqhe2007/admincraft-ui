import components from './components/'
import global from './global/'
import layout from './layout/'
import store from './store/'
import routes from './routes'
import './style/index.styl'
export default ({Vue}) => {
  for (const key in components) {
    Vue.component(key, components[key])
  }
  for (const key in global) {
    Vue.use(global[key])
  }
  Vue.prototype.$addLayout(layout)
  Vue.prototype.$addStore('ui', store)
  Vue.prototype.$addRoutes(routes)
  console.log(
    `%cadmincraft-ui 加载完成`,
    'background: #00d1b2; padding: 5px; color: #fff; border-radius: 5px'
  )
}
