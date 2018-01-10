import React from 'react';

const chooseList = (props) => {
  return (
    <div>
      <button onClick={ props.click }>{ props.name }</button>
    </div>
  )
}

export default chooseList;
