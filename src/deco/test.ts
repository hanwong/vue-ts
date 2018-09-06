import { createDecorator } from 'vue-class-component'
import { ComponentOptions, ComputedOptions } from 'vue';

export const NoCache = createDecorator((options: ComponentOptions<any>, key) => {
  (options.computed[key] as ComputedOptions<any>).cache = false;
})