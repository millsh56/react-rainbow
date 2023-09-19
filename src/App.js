import './App.css';
import React, { useState } from 'react'
// ColorBlock component:
import ColorBlock from './ColorBlock'
// ColorForm component:
import ColorForm from './ColorForm'

function App(){
  let [colors, setColors] = useState([
        'red', 'orange',
        'yellow', 'greenyellow',
        'green', 'blue',
        'indigo', 'darkviolet'
    ])
    
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} />
        )
    })

    const addColor = (newColor) => {
      setColors([...colors, newColor])
  }

    return (
      <div className="App">
          {colorMap}
          <ColorForm addColor={addColor} />
      </div>
  )



  
}


export default App;






