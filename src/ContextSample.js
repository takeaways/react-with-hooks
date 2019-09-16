import React, {createContext, useContext} from 'react';

const MyContext = createContext('defaultValue');

function Child(){
  const text = useContext(MyContext);
  return <div>{text}</text>
}

function Child1(){
  return <Child />
}
function Child2(){
  return <Child1 />
}
function Child3(){
  return <Child2 />
}
function ContextSample(){
  return (
    <MyContext.Provider value="Good">
      <Child3 text="ffff"/>
    </MyContext.Provider>
  )
}

export default ContextSample
