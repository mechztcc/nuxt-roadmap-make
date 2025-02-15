import { mount } from '@vue/test-utils'
import PositionSelector from './PositionSelector.vue'

describe('PositionSelector', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(PositionSelector)
    expect(wrapper.exists()).toBe(true)
  })
})
