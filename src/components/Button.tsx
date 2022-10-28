import React from 'react';
import classNames from 'classnames';

const Button = (props: any) => {
  return (
    <button className={classNames('button', { 'button--outline': props.outline })}>
      {props.children}
    </button>
  );
}

export default Button;