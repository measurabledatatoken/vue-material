import material from './material'
import * as MdComponents from './components'

let VueMaterial = Vue => {
  material(Vue)

  const values = Object.keys(MdComponents).map(function(key) {
    return MdComponents[key];
  });
  values.forEach((MdComponent) => {
    Vue.use(MdComponent)
  })


}

VueMaterial.version = '__VERSION__'

export default VueMaterial
