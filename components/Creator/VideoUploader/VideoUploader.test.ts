import { mount } from '@vue/test-utils'
import VideoUploader from './VideoUploader.vue'

describe('VideoUploader', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(VideoUploader)
    expect(wrapper.exists()).toBe(true)
  })
})
