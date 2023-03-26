
import { useState } from 'react'
import Button from './components/Buttons'
import DecreaseButton from './components/Decrease'
import ResetButton from './components/Reset'
import StoreButton from './components/Store'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState(0)
  
  const increment = (step) => {
    setCount(count + step)
  }

  const decrease = (step) => {
    setCount(count - step)
  }

  const reset = ({count}) => {
    setCount(count = 0)
  }


  const post = () => {
    setNumber(count)
  }

  

  return (
    <div className='App text-center'>
      <h1 className="text-3xl font-bold underline text-blue-600 mt-20 mb-20">Counter: {count}</h1>
      
        <Button step={1} increment={increment} />
        <Button step={10} increment={increment} />
        <Button step={100} increment={increment} />
        <DecreaseButton step={1} decrease={decrease} />
        <DecreaseButton step={10} decrease={decrease} />
        <DecreaseButton step={100} decrease={decrease} />
        <ResetButton count={count} reset={reset}/>
        <StoreButton post={post} count={count} />
        <h2 className="mt-5">Previous Count: {number}</h2>
      
    </div>
  )
}

export default App