import React, {useState ,useRef} from 'react';
import './App.scss';
import Button from './components/Button'

function App() {


  return (
    <div className="App">
      <div className="buttons">
        <Button size="large">BUTTON</Button>
        <Button fullWidth size={"large"} color={"pink"}>BUTTON</Button>
        <Button outline fullWidth size={"small"} color={"gray"} onClick={()=>console.log('click')}>BUTTON</Button>
      </div>
    </div>
  )

}

export default App;
