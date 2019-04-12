import Admincraft from 'admincraft'
import admincraftShowcase from 'admincraft-showcase'
import UI from '../src/'
Admincraft.add(UI)
Admincraft.add(admincraftShowcase)
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