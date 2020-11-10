import { createDecorator } from 'vue-class-component'
export const Log = createDecorator((options, key) => {
  const originalMethod = options.methods[key]
  options.methods[key] = function wrapperMethod(...args) {
    // logging
    console.log(`Log: ${key}(`, ...args, ')')
    originalMethod.apply(this, args)
  }
})
