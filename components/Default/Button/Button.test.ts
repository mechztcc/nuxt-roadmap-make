import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(Button)
    expect(wrapper.exists()).toBe(true)
  })
})
