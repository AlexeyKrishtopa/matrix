import React, { useState } from 'react'
import './Matrix.css'
import Box from '../Box/Box'
import { Colors } from '../../types/index'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

let initilMatrix = new Array(10).fill(
  new Array(10).fill(Colors.WHITE)
) as Colors[][]

initilMatrix = initilMatrix.map((row) =>
  row.map(() => (getRandomInt(2) ? Colors.RED : Colors.WHITE))
)

interface Point {
  i: number
  j: number
}

const Matrix = () => {
  const [matrix, setMatrix] = useState<typeof initilMatrix>(initilMatrix)
  const [startPoint, setStartPoint] = useState<Point>({ i: 0, j: 0 })

  const handleMouseDown = (i: number, j: number) => {
    setStartPoint({ i, j })
  }

  const handleMouseUp = (i: number, j: number, newColor: Colors) => {
    const startI = Math.min(startPoint.i, i)
    const startJ = Math.min(startPoint.j, j)

    const endI = Math.max(startPoint.i, i)
    const endJ = Math.max(startPoint.j, j)

    setMatrix(
      matrix.map((raw, i) =>
        raw.map((color, j) => {
          if (i >= startI && i <= endI && j >= startJ && j <= endJ) {
            return newColor
          }
          return color
        })
      )
    )
  }

  return (
    <div className='matrix'>
      {matrix.map((row, i) => (
        <div key={i}>
          {row.map((color, j) => (
            <Box
              handleMouseDown={handleMouseDown}
              handleMouseUp={handleMouseUp}
              i={i}
              j={j}
              key={i + j}
              color={color}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Matrix
