import { Link } from 'gatsby'
import type { FC } from 'react'
import React from 'react'

import MenuItem from './Item'

const MENU = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Quem Somos',
    url: '/quem-somos',
  },
  {
    text: 'Contato',
    url: '/contato',
  },
]

const DesktopMenu: FC = () => {
  return (
    <div className="">
      <nav className="flex">
        {MENU.map(({ text, url }, i) => (
          <MenuItem key={i} text={text} url={url} />
        ))}
        <Link
          className="h-full p-5 bg-amarelo uppercase"
          to="/quero-ser-demolay"
        >
          <span className="text-vermelho text-lg">Seja um DeMolay</span>
        </Link>
      </nav>
    </div>
  )
}

export default DesktopMenu
