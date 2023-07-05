import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../TasksList.vue'

describe('Tests sur le composant TasksList', () => {
  it('Afficher le composant', () => {
    const wrapper = mount(HelloWorld, { props: { test: 'something todo here ?' } })
    expect(wrapper.text()).toContain('Ma todos list')
  })
})
