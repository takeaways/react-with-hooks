import React,{useState, useRef} from 'react';

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
    nameInput.current.focus()
  }
  const nameInput = useRef();
  return(
    <>
      <input ref={nameInput} name="name" placeholder="이름" value={name} onChange={onChange}/>
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
