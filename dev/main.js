import Admincraft from 'admincraft'
import UI from '../src/'
Admincraft.use(Vue => {
  Vue.config.devtools = true
})
let el = document.createElement('div')
document.body.appendChild(el)
new Admincraft({
  ui: UI,
  logo: {
    text: 'Admincraft-UI'
  },
  title: '行业应用'
}).$mount(el)