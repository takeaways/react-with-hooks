import React from 'react';
import classNames from 'classnames'
import './button.scss';

function Button({onClick ,children, size, color, outline, fullWidth}){
  return <button onClick={onClick} className={classNames('Button', size, color, {
    outline,
    fullWidth
  })}>{children}</button>
}
Button.defaultProps ={
  size:'medium',
  color:'blue'
}
export default Button
