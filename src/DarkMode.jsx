import React, { useState } from 'react';



const DarkMode = () => {
  const [useDarkMode, setUseDarkMode] = useState(false);

  return (
    <div className={ useDarkMode ? "dark-mode dark" : "dark-mode light"}>
      <h1>Dark Mode</h1>
      <label><input
        type="checkbox"
        onChange={(evt) => {
          setUseDarkMode(!useDarkMode);
        }}
        style={{ marginLeft: '8px' }}
        /> Use dark mode?</label>
    </div>
  )
}

export default DarkMode;