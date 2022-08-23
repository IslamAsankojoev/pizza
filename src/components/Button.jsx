import React from 'react';
import classNames from 'classnames';

export default function Button(props, s) {
  console.log(props, s);
  return (
    <button className={classNames('button', { 'button--outline': props.outline })}>
      {props.children}
    </button>
  );
}
