import { mount } from '@vue/test-utils'
import ChartMake from './ChartMake.vue'

describe('ChartMake', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(ChartMake)
    expect(wrapper.exists()).toBe(true)
  })
})
