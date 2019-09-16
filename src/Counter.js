import React, {useReducer, useCallback} from 'react';

function reducer(state, action){
  switch(action.type){
    case 'INC':{
      return state+1;
    }
    case "DEC":{
      return state-1;
    }
    default:{
      throw Error('Error~~');
    }
  }
}



function Counter(){
  const [number, dispatch] = useReducer(reducer, 0);
  const plus = useCallback(() => {
    dispatch({
      type:'INC'
    })
  },[]);
  const minus = useCallback(() => {
    dispatch({
      type:'DEC'
    })
  },[]);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}

export default Counter;
