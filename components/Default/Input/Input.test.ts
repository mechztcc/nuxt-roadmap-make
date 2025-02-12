import { mount } from '@vue/test-utils'
import Input from './Input.vue'

describe('Input', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(Input)
    expect(wrapper.exists()).toBe(true)
  })
})
