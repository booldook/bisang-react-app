// rafce

import React, { useState } from 'react';
import styled from '@emotion/styled';


const SearchStyledCp = () => {
  console.log('SearchStyledCp');

  const [value, setValues] = useState('');
  const [user, setUser] = useState({
    isLogging: false,
    info: {
      name: '',
      id: ''
    }
  });
  const onChange = (e) => {
    /* const newArr = arr;
    newArr.push(e.target.value);
    setArr(newArr); */
    setUser({
      ...user,
      info: {
        ...user.info,
        name: 'booldook'
      }
    })
  }
  return (
    <div style={{marginTop: '20px', border: '1px solid red'}}>
      <input type="text" onChange={onChange} />
    </div>
  )
}

export default SearchStyledCp