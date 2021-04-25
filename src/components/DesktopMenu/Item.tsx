import type { FC } from 'react'
import React from 'react'
import { Link } from 'gatsby'

type Props = { text: string; url: string }

const MenuItem: FC<Props> = ({ text, url }) => {
  return (
    <div className="h-full p-5">
      <Link className="text-amarelo text-lg hover:underline" to={url}>
        {text}
      </Link>
    </div>
  )
}

export default MenuItem
