import { mount } from '@vue/test-utils'
import AudioUploader from './AudioUploader.vue'

describe('AudioUploader', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(AudioUploader)
    expect(wrapper.exists()).toBe(true)
  })
})
