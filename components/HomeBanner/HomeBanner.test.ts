import { mount } from '@vue/test-utils'
import HomeBanner from './HomeBanner.vue'

describe('HomeBanner', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(HomeBanner)
    expect(wrapper.exists()).toBe(true)
  })
})
