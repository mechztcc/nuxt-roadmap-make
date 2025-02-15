import { mount } from '@vue/test-utils'
import TextEditor from './TextEditor.vue'

describe('TextEditor', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(TextEditor)
    expect(wrapper.exists()).toBe(true)
  })
})
