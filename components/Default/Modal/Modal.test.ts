import { mount } from '@vue/test-utils'
import Modal from './Modal.vue'

describe('Modal', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(Modal)
    expect(wrapper.exists()).toBe(true)
  })
})
