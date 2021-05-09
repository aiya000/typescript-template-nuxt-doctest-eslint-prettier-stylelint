/**
 * Registers all bootstrap-vue components.
 *
 * - [reference](https://bootstrap-vue.org/docs)
 */

import Vue from 'vue'
import {
  LayoutPlugin,
  ModalPlugin,
  CardPlugin,
  VBScrollspyPlugin,
  DropdownPlugin,
  TablePlugin,
} from 'bootstrap-vue'

Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
