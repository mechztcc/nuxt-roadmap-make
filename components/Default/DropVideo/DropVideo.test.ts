import { mount } from '@vue/test-utils'
import DropVideo from './DropVideo.vue'

describe('DropVideo', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(DropVideo)
    expect(wrapper.exists()).toBe(true)
  })
})
