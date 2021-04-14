import { action } from '@storybook/addon-actions'

import '@fontsource/lato/latin-400.css'
import '@fontsource/lato/latin-400.css'
import '../src/styles/global.css'

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

global.__BASE_PATH__ = '/'

window.___navigate = (pathname) => {
  action('NavigateTo:')(pathname)
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
