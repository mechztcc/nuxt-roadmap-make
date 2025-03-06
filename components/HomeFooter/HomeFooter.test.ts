import { mount } from '@vue/test-utils'
import HomeFooter from './HomeFooter.vue'

describe('HomeFooter', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(HomeFooter)
    expect(wrapper.exists()).toBe(true)
  })
})
