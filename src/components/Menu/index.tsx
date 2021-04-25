import type { FC } from 'react'
import React, { useState } from 'react'

import MenuIcon from './MenuIcon'

const Menu: FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="flex justify-end">
      <div className="flex items-center p-2 pr-3">
        <MenuIcon onClick={() => setOpen(!isOpen)} width="25" height="25" />
      </div>
      <aside
        className={`${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl transform top-0 right-0 w-64 bg-amarelo fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`}
      >
        aside
      </aside>
    </div>
  )
}

export default Menu
