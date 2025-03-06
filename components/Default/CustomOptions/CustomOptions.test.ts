import { mount } from '@vue/test-utils'
import CustomOptions from './CustomOptions.vue'

describe('CustomOptions', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(CustomOptions)
    expect(wrapper.exists()).toBe(true)
  })
})
