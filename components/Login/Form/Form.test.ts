import { mount } from '@vue/test-utils'
import Form from './Form.vue'

describe('Form', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(Form)
    expect(wrapper.exists()).toBe(true)
  })
})
