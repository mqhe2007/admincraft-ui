import components from "./components";
import global from "./global";
import layout from "./layout";
import stores from "./store";
import routes from "./routes";
import addMenus from "./methods/add-menus";
import setHomepage from "./methods/set-homepage";
import customDirective from "./directive";
import "./style/index.styl";
export default ({ Vue, store }) => {
  for (const key in components) {
    Vue.component(key, components[key]);
  }
  for (const key in global) {
    Vue.use(global[key]);
  }
  Vue.use(customDirective, { store });
  Vue.prototype.$addMenus = addMenus(store);
  Vue.prototype.$setHomepage = setHomepage(store);
  Vue.prototype.$addLayout(layout);
  Vue.prototype.$addStore("ui", stores);
  Vue.prototype.$addRoutes(routes);
  console.log(
    `%cadmincraft-ui 加载完成`,
    "background: #00d1b2; padding: 5px; color: #fff; border-radius: 5px"
  );
};
