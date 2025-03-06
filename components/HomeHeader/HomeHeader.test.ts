import { mount } from '@vue/test-utils'
import HomeHeader from './HomeHeader.vue'

describe('HomeHeader', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(HomeHeader)
    expect(wrapper.exists()).toBe(true)
  })
})
