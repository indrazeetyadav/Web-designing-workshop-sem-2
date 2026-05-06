import React from 'react'

function UseState() {
    const[counter, setcounter] = UseState(0);
    const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  const reset = () => {
    setCounter(0);
  }

  return (
    <div>UseState</div>
  )
}

export default UseState