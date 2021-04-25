import type { FC } from 'react'
import React from 'react'

type Props = {
  width?: string
  height?: string
  onClick?: () => void
}

const MenuIcon: FC<Props> = ({ width = '310', height = '260', onClick }) => {
  return (
    <button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 260"
        width="20"
        height="20"
      >
        <g
          className="text-amarelo fill-current stroke-current"
          stroke-width="49.33636"
          stroke-linecap="round"
        >
          <path d="M29.6838 229.66275h250.6461M29.6838 129.66275h250.6461M29.6838 29.66275h250.6461" />
        </g>
      </svg>
    </button>
  )
}

export default MenuIcon
