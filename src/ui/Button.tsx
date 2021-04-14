import * as React from 'react'
import type { FC } from 'react'

type Props = {
  type: 'primary' | 'secondary'
}

const  Button: FC<Props> = ({ type, children }) => {
  return <button className="bg-amarelo p-2 rounded">{children}</button>
}

export default Button
