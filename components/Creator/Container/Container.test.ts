import { mount } from '@vue/test-utils'
import Container from './Container.vue'

describe('Container', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(Container)
    expect(wrapper.exists()).toBe(true)
  })
})
