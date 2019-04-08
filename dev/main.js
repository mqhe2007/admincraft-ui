import Admincraft from 'admincraft'
import UI from '../src/'
Admincraft.add(UI)
Admincraft.use(Vue => {
  Vue.config.devtools = true
})
let el = document.createElement('div')
document.body.appendChild(el)
new Admincraft({
  logo: {
    text: 'Admincraft-UI'
  },
  title: '行业应用'
}).$mount(el)