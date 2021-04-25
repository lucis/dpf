import React from 'react'

import Header from '../components/Header'

export default {
  title: 'Site/Header',
  component: Header,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Primary = () => <Header />
