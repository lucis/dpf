import type { FC } from 'react'
import React from 'react'

import dpfLogo from '../../images/dpf.png'
import DesktopMenu from '../DesktopMenu'
import Menu from '../Menu'

const Header: FC = () => {
  return (
    <div className="w-full bg-vermelho grid grid-cols-3 justify-between">
      <div className=""></div>
      <div className="flex justify-center">
        <img src={dpfLogo} alt="Capítulo Deus, Pátria e Família nº 008" />
      </div>
      <div className="flex justify-end md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex">
        <DesktopMenu />
      </div>
    </div>
  )
}

export default Header
