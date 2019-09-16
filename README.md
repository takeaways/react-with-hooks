"# react-with-hooks"

### JSX의 기본 규칙 알아보기
<pre>
<code>
  babel(XML) -> javascript 로 변환
  1) 여는 태그가 있다면 꼭!! 닫는 태그가 있어야합니다.
  2) 다수의 태그는 감싸는 태그가 꼭 존재해야 합니다. (<></>)
  3) {value} 변수를 보여줄 때는 중괄호
  4) className 을 사용, style={} 객체형태로 넣어 줘야 합니다.
</code>
</pre>

### props를 토해 컴포넌트에게 값 전달하기
<pre>
<code>
  <Hello name="react 입니다" color="red"/>
 ++++++++++++++++++++++++++++++++++++++++++++++
  function Hello({color, name}){
    return (<div style={{color}}>{name}</div>)
  }

  Hello.defaultProps = {
    name:'이름없음'
  }

  +++++++++++++++++++++++++++++++++++++++++++++
  <Wrapper>
    children 으로 프롭스 전달
  </Wrapper>
</code>
</pre>

### 조건부 렌더링
<pre>
<code>
  <Hello name="react 입니다" color="red" isSpecial={true}/>
    props 이름만 적어주면 true로 인식한다
  { true && 보여주거나 / 안보여 주고자 할 때}
  { true ? 1보여준다 : 2를 보여준디}
</code>
</pre>

### useState를 통해 컴포넌트에서 바뀌는 값 관리하기
<pre>
<code>
import React, {useState, useCallback} from 'react';

function Counter(){
  const [value, setValue] = useState(0);
  const plus = useCallback(() => setValue(pre=>++pre),[]);
  const minus = useCallback(() => setValue(pre=>--pre),[]);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </div>
  )
}
export default Counter;
</code>
</pre>

### input 값 관리하기
<pre>
<code>
import React,{useState} from 'react';

function InputSample(){
  const [text, setText] = useState('');
  const onChange = (e) => setText(e.target.value);
  const onReset = () => setText('');
  return(
    <>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>reset</button>
      <div>
        <b>값 : </b>
        {text}
      </div>
    </>
  )
}

export default InputSample

</code>
</pre>

### input 여러개 값 관리하기 - 객체상태의 스테이트를 업데이트 할 때는 불변성을 지켜줘야 합니다
<pre>
<code>
import React,{useState} from 'react';

function InputSample(){
  const [inputs, setInputs] = useState({
    name:'',
    nickname:''
  });
  const {name, nickname} = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }
  const onReset = () => {
    setInputs({
      name:'',
      nickname:''
    });
  }
  return(
    <>
      <input name="name" placeholder="이름" value={name} onChange={onChange}/>
      <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChange}/>
      <button onClick={onReset}>reset</button>
      <div>
        <b>값 : </b>
        이름 : {name} 닉네임 :{nickname}
      </div>
    </>
  )
}

export default InputSample

</code>
</pre>


### useRef 로 특정 DOM 선택하기
<pre>
<code>
  const inputRef = useRef();
  <xxx ref = {inputRef} />
  inputRef.current <=== DOM select와 동일
</code>
</pre>


### 배열렌더링 - key의 역할()
<pre>
<code>
import React from 'react';

function User({user}){
  return <div>{user.id} {user.username} {user.email}</div>
}
function UserList(){
  const users = [
    {
      id:1,
      username:'geonil',
      email:'www.geonil.com'
    },
    {
      id:2,
      username:'suzy',
      email:'www.suzy.com'
    },
    {
      id:3,
      username:'ruzin',
      email:'www.ruzin.com'
    },
  ]


  return(
    <div>
      {users.map( user => <User key={user.id} user={user}/>)}
    </div>
  )
}

export default UserList

</code>
</pre>

### useRef 로 컴포넌트 안의 변수 만들기 - 리렌더링 될 떼 값이 초기회 , 변화 없는 값을 만들고 싶을 때 (state는 페이지 리렌더링이 발생하기 때문에)
<pre>
<code>

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
    console.log(nextId.current);
  }

</code>
</pre>

### useEffect - 마운트 : 화면에 나타남
<pre>
<code>

 useEffect(()=>{
   console.log('화면에 나타남 : 해당 컴포넌트에 사용하는 컴포넌트가 나타날 때')
   return () => {
     !!값이 바뀌기 직전에 실행!!!
     clearInterval, clearTimout
     console.log('화면에서 사라짐')
   }
 },[ 사용값 ])
</code>
</pre>

### useMemo 를 사용하여 연산한 값 재사용하기 (함수재사용)
<pre>
<code>
  useMemo(()=>{} ,[ 변화값 ]);
    변화값이 바뀔 때만 실행된다.
</code>
</pre>

### useCallback를 사용하여 함수 재사용하기 (함수재사용)
<pre>
<code>
  useCallback를(()=>{} ,[ 변화값 ]);
    변화값이 바뀔 때만 실행된다.
</code>
</pre>

### Reac.memo를 사용한 컴포넌트 리렌더링 방지
<pre>
<code>
  프롭스가 변경될 때만 리렌더링된다
  export default React.memo(컴포넌트)
</code>
</pre>

### useReducer - 상태를 업데이트 하는 함수
<pre>
<code>
  function reducer(state, action){
    switch(action.type){
      case "INCREMENT":
        return state + 1
    }
  }
  const [number, dispatch] = useReducer(reducer, 초기값);
  dispatch({type:'increace'});
+++++++++++++++++++++++++++++++++++++++++++++++++++++
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

</code>
</pre>

### 커스텀 Hook 만들기
<pre>
<code>
  import {useState, useCallback} from 'react';
  export default function useInput(init){
    const [form, setForm] = useState(init);
    const onChange = useCallback(e => setForm(form => ...form, [e.target.name] : e.target.value),[]);
    const reset = useCallback(()=>setForm(init),[init])''
    return [form, onChange, reset];

  }
</code>
</pre>

### Context API를 사용한 전역 값 관리
<pre>
<code>
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

</code>
</pre>

### Immer를 사용한 더 쉬운 불변성 지키지
<pre>
<code>
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

</code>
</pre>
