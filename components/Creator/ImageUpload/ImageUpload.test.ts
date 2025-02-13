import { mount } from '@vue/test-utils'
import ImageUpload from './ImageUpload.vue'

describe('ImageUpload', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(ImageUpload)
    expect(wrapper.exists()).toBe(true)
  })
})
