import React, {useState} from 'react'

const useInput = (type) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }

  return {
    type,
    value,
    onChange
  }
}

export default useInput