import { mount } from '@vue/test-utils'
import AdvantagesCards from './AdvantagesCards.vue'

describe('AdvantagesCards', () => {
  it('renderiza corretamente', () => {
    const wrapper = mount(AdvantagesCards)
    expect(wrapper.exists()).toBe(true)
  })
})
