import React from 'react'
import './Board.css';
import Tile from  '../Tile'

const Board = (props) => {

  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }
  const tile = props.tiles.map((tile) => (<Tile {...tile}/>))

  return (
    <div className='Board' style={gridConfig}>
    {tile}
    </div>
  )
}

export default Board
