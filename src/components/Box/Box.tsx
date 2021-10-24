import React from 'react'
import { Colors } from '../../types/index'
import './Box.css'

interface Props {
  handleMouseDown: (i: number, j: number) => void
  handleMouseUp: (i: number, j: number, color: Colors) => void
  i: number
  j: number
  color: Colors
}

const Box = ({ color, i, j, ...props }: Props) => {
  const handleMouseDown = () => {
    props.handleMouseDown(i, j)
  }

  const handleMouseUp = () => {
    props.handleMouseUp(i, j, color)
  }

  return (
    <div
      draggable={false}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={`box ${color === Colors.RED ? 'red' : 'white'}`}
    ></div>
  )
}

export default Box
