import { mount } from '@vue/test-utils'
import DropImage from './DropImage.vue'

describe('DropImage', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(DropImage)
    expect(wrapper.exists()).toBe(true)
  })
})
