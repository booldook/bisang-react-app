import React, { useState, useCallback } from 'react'

import '../assets/scss/components/search-cp.scss'

function SearchCp() {
  const [value, setValue] = useState('')
  const onChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  return (
    <div className="search-wrap">
      <input type="text" value={value} onChange={onChange}/>
    </div>
  )
}

export default SearchCp;
