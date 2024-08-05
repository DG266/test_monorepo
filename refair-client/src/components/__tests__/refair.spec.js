import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import refair from '../refair.vue'

describe('refair.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(refair)
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('h1').text()).toBe('ReFair App')
  })
})