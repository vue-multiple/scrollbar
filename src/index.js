import Scrollbar from './components/main.js'
import './styles/less/index.less'

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Vue.component('VmScrollbar', Scrollbar)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('VmScrollbar', Scrollbar)
}

Scrollbar.install = install

export default Scrollbar