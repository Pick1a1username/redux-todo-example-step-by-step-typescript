import React from 'react'

interface OwnProps {
    text: string
}

type Props = OwnProps

const Todo: React.FC<Props> = ({ text }) => (
  <li style={{textDecoration: 'none'}}>
    {text}
  </li>
)

export default Todo