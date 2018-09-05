import { createDecorator } from 'vue-class-component'
import { ComponentOptions, ComputedOptions } from 'vue';

export const NoCache = createDecorator((options: ComponentOptions<any>, key) => {
  // component options should be passed to the callback
  // and update for the options object affect the component
  (options.computed[key] as ComputedOptions<any>).cache = false
})